import React from "react";
import { Metadata } from "next";
import APITeasers from "../components/APITeasers";
import { Teaser } from "../components/Interfaces";
import RenderRichTextContent from "../components/RenderRichTextContent";
import AccordionList from "../components/AccordionList";
import GetStarted from "../components/GetStarted";

export default async function ApiStore() {
  const PageData = await fetch(
    `http://localhost:8080/getpagecontent/api-store`,
    {
      cache: "no-cache",
    }
  );

  const responseData = await PageData.json();

  metadata.title = responseData.SEOTitle
    ? responseData.SEOTitle
    : responseData.PageTitle;
  metadata.description = responseData["Meta-Description"];
  metadata.robots = "index,follow";

  const section2Data = responseData.Section2Teasers;
  const section3Data = responseData.Section3Teasers;

  const accordionTitle = responseData.AccordionTitle;
  const accordionSubTitle = responseData.AccordionSubTitle;
  const accordionList = JSON.parse(
    JSON.stringify(responseData.AccordionPanels)
  );
  const GetStartContent = JSON.parse(
    JSON.stringify(responseData.Section4Teasers)
  );
  const paddingsize =
    responseData.Section2Heading || responseData.Section2Caption ? "64" : "24";

  return (
    <>
      <section className={`atr-sm-padding-top-${paddingsize}`}>
        <div className="wrapper atr-sm-padding-horizontal-48">
          {paddingsize === "64" && (
            <span className="text--accent atr-sm-12 atr-sm-margin-bottom-4">
              {responseData.Heading}
            </span>
          )}
          {responseData.Section2Heading && (
            <h2 className="atr-sm-12">{responseData.Section2Heading}</h2>
          )}
          {responseData.Section2Caption && (
            <div className="text--large atr-sm-12 atr-lg-7 atr-sm-margin-top-16">
              <p>{responseData.Section2Caption}</p>
            </div>
          )}
          <div
            className={`atr-flex atr-sm-12${
              paddingsize == "24" ? " atr-sm-margin-top-16" : ""
            }`}
          >
            {section2Data.map((teaser: Teaser, index: number) => (
              <APITeasers key={index} teaser={teaser} />
            ))}
          </div>
        </div>
      </section>
      <section className="atr-sm-padding-vertical-64">
        <div className="wrapper">
          <div className="image atr-sm-12">
            <div className="image__overlay-nohover atr-flex atr-sm-align-items-center atr-sm-padding-32">
              <div className="atr-flex atr-sm-12 atr-sm-align-items-center atr-sm-flex-direction-column">
                <h2>{section3Data.TeaserTitle}</h2>
                <div className="atr-sm-12 atr-xl-6 atr-sm-margin-top-16 text--center">
                  <RenderRichTextContent content={section3Data.APIBody} />
                </div>
              </div>
            </div>
            <img
              alt={section3Data.TeaserImage.AltText}
              src={section3Data.TeaserImage.ImageURL}
            />
          </div>
        </div>
      </section>
      {accordionList && accordionList.length > 0 && (
        <AccordionList
          accordionList={accordionList}
          accordionsubtitle={accordionSubTitle}
          accordiontitle={accordionTitle}
          sectionClass="atr-sm-padding-top-4 atr-sm-padding-bottom-64"
        />
      )}
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
