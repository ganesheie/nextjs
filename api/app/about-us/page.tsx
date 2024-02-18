import { Metadata } from "next";
import React from "react";
import RenderRichTextContent from "../components/RenderRichTextContent";
import AccordionList from "../components/AccordionList";
import GetStarted from "../components/GetStarted";

export default async function About() {
  const PageData = await fetch(
    `http://localhost:8080/getpagecontent/about-us`,
    { cache: "force-cache" }
  );
  const responseData = await PageData.json();
  metadata.title = responseData.SEOTitle
    ? responseData.SEOTitle
    : responseData.PageTitle;
  metadata.description = responseData["Meta-Description"];
  metadata.robots = "index,follow";

  const pageContent = responseData.Body;
  const accordionTitle = responseData.AccordionTitle;
  const accordionSubTitle = responseData.AccordionSubTitle;
  const accordionList = JSON.parse(
    JSON.stringify(responseData.AccordionPanels)
  );
  const GetStartContent = JSON.parse(
    JSON.stringify(responseData.Section4Teasers)
  );

  return (
    <>
      <section className="atr-sm-padding-vertical-64 atr-sm-padding-horizontal-32 atr-md-padding-horizontal-48 atr-xl-padding-horizontal-16">
        <div className="wrapper atr-flex atr-xl-padding-left-48">
          <article className="atr-sm-12 atr-xl-8">
            <span className="text--grey"> {responseData.Introduction}</span>
            <h2 className="atr-sm-margin-bottom-16">{responseData.Heading}</h2>
            <div className="atr-sm-margin-top-32">
              <RenderRichTextContent content={pageContent} />
            </div>
          </article>
        </div>
      </section>
      {accordionList && accordionList.length > 0 && (
        <AccordionList
          accordionList={accordionList}
          accordionsubtitle={accordionSubTitle}
          accordiontitle={accordionTitle}
          sectionClass="atr-sm-margin-top-32 atr-sm-margin-bottom-128"
        />
      )}
      <hr className="wrapper" />
      {GetStartContent && <GetStarted teaser={GetStartContent} />}
    </>
  );
}

export const metadata: Metadata = {
  title: "",
  description: "",
  robots: "",
};
