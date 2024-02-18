import React, { useEffect, useState } from "react";
const PageContentFetcher = ({ page} : {page : string}) => {
  const [pageData, setPageData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const staticData = await fetch(`http://localhost:8080/getpagecontent/${page}`, {
          cache: "force-cache",
        });
        const responseData = await staticData.json();
        setPageData(responseData);
      } catch (error) {
        console.error("Error fetching page content:", error);
      }
    };

    fetchData();
  }, [page]);
  return <>{pageData && <PageDataRenderer data={pageData} />}</>;
};

const PageDataRenderer = ({data} : {data : {} } ) => {
  const teaserData = data.Section2Teasers;
  const Section3Teasers = {page === 'home' ? data.HomeTeasers : data.Section3Teasers}; 
  const accordionTitle = data.AccordionSubTitle;
  const accordionSubTitle = data.AccordionTitle;
  const accordionList = data.AccordionPanels;
  const GetStartContent = data.Section4Teasers;

  // Process or render data as needed

  return null; // Or render any UI components here if needed
};

export default PageContentFetcher;
