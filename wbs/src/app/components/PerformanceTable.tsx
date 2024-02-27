"use client";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";

const pageSize = 10; // Number of items per page

const PerformanceTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/measurement/all");
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        console.log("jsonData : " + jsonData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Calculate the indexes for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);

  // Slice the data to display only items for the current page
  const currentPageData = data.slice(startIndex, endIndex);
  console.log("currentPageData : " + currentPageData);
  // Handle pagination click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Team</th>
            <th>Measurement Date</th>
            <th>Metric Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item, index) => (
            <tr key={index}>
              <td>{item.team_name}</td>
              <td>{item.measurement_date}</td>
              <td>{item.metric_name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        totalPages={Math.ceil(data.length / pageSize)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default PerformanceTable;
