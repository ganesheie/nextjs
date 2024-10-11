"use client";
import { Button, Table } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function fetchIssues() {
      try {
        const response = await fetch("/api/issues");
        if (!response.ok) {
          throw new Error("Failed to fetch issues");
        }
        const issues = await response.json();
        setIssues(issues);
      } catch (error) {
        console.error("Failed to fetch issues:", error);
      }
    }
    fetchIssues();
  }, []);

  return (
    <div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>{issue.id}</Table.Cell>
              <Table.Cell>{issue.title}</Table.Cell>
              <Table.Cell>{issue.description}</Table.Cell>
              <Table.Cell>{issue.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default Page;
