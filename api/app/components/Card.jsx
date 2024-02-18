import React from "react";
const Card = ({ teaser, addtionalClass }) => {
  return (
    <div className={`atr-sm-12 atr-flex atr-xl-4 ${addtionalClass}`}>
      <div
        data-group="section-2-div"
        className="panel atr-flex atr-sm-12 panel--accent panel--shadow atr-sm-padding-24 space-between"
      >
        <div className="atr-sm-12 atr-sm-align-items-flex-start">
          <img
            alt={teaser.TeaserImage.AltText}
            src={teaser.TeaserImage.ImageURL}
            width="100%"
          />
          <h3 className="atr-sm-margin-top-16 atr-sm-padding-horizontal-8">
            {teaser.TeaserTitle}
          </h3>
          <div
            data-group="section-2-p"
            className="atr-sm-margin-top-16 atr-sm-padding-8"
          >
            {teaser.APIBody}
          </div>
        </div>
        {teaser.TeaserButton.LinkUrl && teaser.TeaserButton.LinkText && (
          <div className="atr-sm-12 atr-sm-padding-8">
            <a
              href={teaser.TeaserButton.LinkUrl}
              className="button button--outlined-red button--fullwidth atr-sm-margin-top-16"
            >
              {teaser.TeaserButton.LinkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
