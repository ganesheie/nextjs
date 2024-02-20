import { Metadata } from "next";
import HomeCardList from "../app/components/HomeCardList";
import HomeSection2List from "../app/components/HomeSection2List";
import AccordionList from "../app/components/AccordionList";
import GetStarted from "../app/components/GetStarted"; 

export default async function Home() {
  const staticData = await fetch(`http://localhost:8080/getpagecontent/home`, {
    cache: "no-cache",
  });
  const responseData = await staticData.json(); // Assuming the response is JSON

  metadata.title = responseData.SEOTitle
    ? responseData.SEOTitle
    : responseData.PageTitle;
  metadata.description = responseData["Meta-Description"];
  metadata.robots = "index,follow";

  const teaserData = responseData.Section2Teasers;
  const jsonArray = JSON.parse(JSON.stringify(teaserData));
  const Section3Teasers = JSON.parse(JSON.stringify(responseData.HomeTeasers));
  const accordionTitle = responseData.AccordionSubTitle;
  const accordionSubTitle = responseData.AccordionTitle;
  const accordionList = JSON.parse(
    JSON.stringify(responseData.AccordionPanels)
  );
  const GetStartContent = JSON.parse(
    JSON.stringify(responseData.Section4Teasers)
  );

  return (
    <>
      <HomeCardList teaserData={jsonArray} />
      <HomeSection2List Section3Teasers={Section3Teasers} />
      <AccordionList
        accordionList={accordionList}
        accordionsubtitle={accordionSubTitle}
        accordiontitle={accordionTitle}
        sectionClass="atr-sm-padding-vertical-64"
      />
      <hr className="wrapper" />
      <GetStarted teaser={GetStartContent} />
    </>
  );
}
export const metadata: Metadata = {
  title: "",
  description: "",
  robots: "",
};
