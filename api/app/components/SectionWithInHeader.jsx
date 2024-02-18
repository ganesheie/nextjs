import React from "react";
import Link from "next/link";
const SectionWithInHeader = ({ content }) => {
  const backlink = content.BackLink;
  return (
    <>
      <hr className="grey-line" />
      <div className="wrapper atr-flex atr-sm-align-items-center atr-xl-padding-left-48">
        <div className="atr-sm-12 atr-xl-5 atr-sm-padding-top-64 atr-sm-padding-bottom-96">
          <h1>{content.Section1Teasers.TeaserTitle}</h1>
          <div className="atr-sm-margin-top-8">
            {content.Section1Teasers.APIBody}
          </div>
          <Link
            href="/register-now"
            className="button button--white button--wide atr-sm-margin-top-16 atr-md-margin-right-12"
          >
            Get started
          </Link>
          {backlink && backlink.LinkText && (
            <p className="atr-sm-margin-top-16">
              <span className="arrow left"></span>
              <Link className="grey-underline" href="/api-store">
                {backlink.LinkText}
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionWithInHeader;
