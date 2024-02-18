import React from "react";
import { Teaser } from "./Interfaces";
import RichTextComponent from "./RenderRichTextContent";

const APITeasers = ({ teaser }) => {
  return (
    <div className="atr-sm-12 atr-flex atr-sm-margin-top-48 atr-xl-padding-right-32">
      <div
        data-group="section-2-div"
        className="panel atr-flex atr-sm-12 panel--accent-left panel--shadow atr-sm-padding-32 space-between"
      >
        {teaser.TeaserImage && teaser.TeaserImage.ImageURL && (
          <div className="atr-flex atr-sm-12 atr-xl-3">
            <img
              alt={teaser.TeaserImage.AltText}
              src={teaser.TeaserImage.ImageURL}
              width="100%"
            />
          </div>
        )}
        <div
          className={`${
            teaser.TeaserImage.ImageURL ? "atr-xl-9 " : "atr-xl-12 "
          } atr-sm-12 atr-xl-padding-left-32 atr-sm-justify-content-space-between atr-sm-align-items-center`}
        >
          <h3 className="atr-sm-12 atr-sm-margin-top-8">
            {teaser.TeaserTitle} &nbsp;
            <span className="text--lighten text--small">{teaser.Version}</span>
          </h3>
          <p className="atr-sm-12 atr-sm-margin-top-4 atr-sm-12 atr-sm-margin-bottom-4">
            {teaser.APIBody}
          </p>
          <a
            href={teaser.TeaserButton.LinkUrl}
            className="button button--wide button--outlined-red atr-sm-margin-top-16 atr-md-margin-right-12"
          >
            {teaser.TeaserButton.LinkText}
          </a>
        </div>
      </div>
    </div>
  );
};
export default APITeasers;
