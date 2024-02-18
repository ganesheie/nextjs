import React from "react";
import { Teaser } from "./Interfaces";
import { paddingMap } from "../Mapping";
import RenderRichTextContent from "./RenderRichTextContent";

const BusinessSection3 = ({
  teaser,
  ImageOffsetTop,
  ImageOffsetBottom,
}: {
  teaser: Teaser;
  ImageOffsetTop: string;
  ImageOffsetBottom: string;
}) => {
  let paddingTop = "";
  let paddingBottom = "";
  let offSetClass = "";
  const getOffsetClasses = (ImageOffsetTop, ImageOffsetBottom) => {
    if (ImageOffsetTop && eval(ImageOffsetTop) > 0) {
      offSetClass += "atr-sm-offset-top-" + ImageOffsetTop;
      paddingTop = paddingMap[ImageOffsetTop];
    }
    if (ImageOffsetBottom && eval(ImageOffsetBottom) > 0) {
      offSetClass += " atr-sm-offset-bottom-" + ImageOffsetBottom;
      paddingBottom = paddingMap[ImageOffsetBottom];
    }
  };
  getOffsetClasses(ImageOffsetTop, ImageOffsetBottom);

  return (
    <section className="atr-sm-padding-vertical-96 atr-xl-margin-bottom-32">
      <div className="panel--dark atr-sm-padding-horizontal-32">
        <div className="wrapper atr-flex atr-sm-align-items-center atr-sm-flex-direction-column-reverse atr-xl-flex-direction-row">
          {teaser.TeaserImage.ImageURL && teaser.TextPosition === "Yes" && (
            <div className="atr-sm-12 atr-xl-6 text--center">
              <img
                alt={teaser.TeaserImage.AltText}
                src={teaser.TeaserImage.ImageURL}
                className={offSetClass}
              />
            </div>
          )}
          <div
            className={`atr-flex atr-sm-12 atr-xl-5 atr-xl-padding-left-16 atr-sm-padding-vertical-${paddingMap[ImageOffsetTop]} atr-xl-padding-vertical-0`}
          >
            <div id="section3-right-content">
              {teaser.Version && (
                <span className="text--grey text--large atr-sm-12 atr-sm-margin-bottom-4">
                  {teaser.Version}
                </span>
              )}
              <h2 className="atr-sm-margin-bottom-16">{teaser.TeaserTitle}</h2>
              <div className="atr-sm-12 atr-xl-12 atr-sm-margin-bottom-24 whisper-text">
                <RenderRichTextContent content={teaser.APIBody} />
              </div>
              <a
                href={teaser.TeaserButton.LinkUrl}
                className="button button--red button--wide atr-md-margin-right-12"
              >
                ${teaser.TeaserButton.LinkText}
              </a>
            </div>
          </div>
          {teaser.TeaserImage.ImageURL && !teaser.TextPosition && (
            <div className="atr-sm-12 atr-xl-6 text--center">
              <img
                alt={teaser.TeaserImage.AltText}
                src={teaser.TeaserImage.ImageURL}
                className={offSetClass}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection3;
