import React from "react";
import Card from "../components/Card";
import BusinessSection3 from "../components/BusinessSection3";
import { Metadata } from "next";
import { TeaserData } from "../components/Interfaces";
import AccordionList from "../components/AccordionList";
import GetStarted from "../components/GetStarted";
export default async function Business() {
  const PageData = await fetch(
    `http://localhost:8080/getpagecontent/non-payments`,
    { cache: "force-cache" }
  );
  const responseData = await PageData.json();

  metadata.title = responseData.SEOTitle
    ? responseData.SEOTitle
    : responseData.PageTitle;
  metadata.description = responseData["Meta-Description"];
  metadata.robots = "index,follow";

  const section2Data = responseData.Section2Teasers;
  const section3Data = responseData.Section3Teasers;

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
      <section className="atr-sm-padding-top-64 atr-xl-padding-bottom-32">
        <div className="wrapper atr-sm-padding-horizontal-48">
          <span className="text--accent atr-sm-12 atr-sm-margin-bottom-4">
            {responseData.Heading}
          </span>
          <h2 className="atr-sm-12">{responseData.Section2Heading}</h2>
          <p className="text--large atr-sm-12 atr-lg-6 atr-sm-margin-top-16">
            {responseData.Section2Caption}
          </p>
          <div className="atr-flex atr-sm-12 atr-sm-margin-top-16">
            {section2Data.map((teaser: TeaserData, index: number) => (
              <Card
                key={"business-card-" + index}
                teaser={teaser}
                addtionalClass={
                  index == 0
                    ? "  atr-sm-margin-top-24  atr-xl-padding-right-32"
                    : index == 1
                    ? "  atr-sm-margin-top-24 atr-xl-padding-horizontal-16"
                    : "  atr-sm-margin-top-24 atr-xl-padding-left-32"
                }
              />
            ))}
          </div>
        </div>
      </section>
      <BusinessSection3
        teaser={section3Data}
        ImageOffsetTop={responseData.ImageOffsetTop}
        ImageOffsetBottom={responseData.ImageOffsetBottom}
      />
      <AccordionList
        accordionList={accordionList}
        accordionsubtitle={accordionSubTitle}
        accordiontitle={accordionTitle}
        sectionClass="atr-sm-padding-top-4 atr-sm-padding-bottom-64"
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
