import React from "react";

const HomeSection2 = ({ teaser, teaserclass }) => {
  return (
    <div
      className={`atr-sm-12 atr-xl-${teaserclass} atr-sm-margin-bottom-8 atr-sm-margin-top-8 atr-xl-padding-right-16 ${
        teaser.TeaserButton.LinkUrl ? " clickable" : ""
      }`}
    >
      <a href={teaser.TeaserButton.LinkUrl}></a>
      <div className="image">
        <div className="image__overlay atr-flex atr-sm-align-items-center atr-sm-justify-content-center atr-sm-padding-32">
          <div className="atr-flex atr-sm-justify-content-center">
            <h2 className="atr-sm-12">{teaser.TeaserTitle}</h2>
            <p className="atr-sm-margin-top-4">{teaser.APIBody}</p>
          </div>
        </div>
        {teaser.TeaserImage.ImageURL && (
          <img
            alt={teaser.TeaserImage.AltText}
            src={teaser.TeaserImage.ImageURL}
            width="100%"
          />
        )}
      </div>
    </div>
  );
};

export default HomeSection2;
