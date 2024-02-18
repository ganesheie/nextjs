import React from "react";
import Link from "next/link";
interface Button {
  URL: String;
  LinkText: String;
}
interface Teaser {
  TeaserTitle: string;
  APIBody: string;
  TeaserButton: Button;
}
const GetStarted = ({ teaser }: { teaser: Teaser }) => {
  return (
    <section className="atr-sm-padding-vertical-64">
      <div className="wrapper atr-flex atr-sm-align-items-center atr-sm-flex-direction-column atr-sm-padding-horizontal-48">
        <h2 className="atr-sm-12 text--center">{teaser.TeaserTitle}</h2>
        <p
          className="atr-sm-12atr-sm-margin-top-12 atr-sm-margin-bottom-32 text--center"
          style={{ fontSize: "18px" }}
        >
          {teaser.APIBody}
        </p>
        <Link
          href={teaser.TeaserButton.LinkUrl}
          className={`button button--red button--wide`}
        >
          {teaser.TeaserButton.LinkText}
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
