import React from "react";

const TeaserComponent = ({ teaser }) => {
  const {
    TeaserTitle,
    APIBody,
    TeaserImage,
    Version,
    TextPosition,
    TeaserButton,
  } = teaser;

  return (
    <div>
      <h2>{TeaserTitle}</h2>
      <p>{APIBody}</p>
      <img src={TeaserImage.ImageURL} alt={TeaserImage.AltText} />
      <p>Version: {Version}</p>
      <p>Text Position: {TextPosition}</p>
      <a href={TeaserButton.LinkUrl} target={TeaserButton.LinkTarget}>
        {TeaserButton.LinkText}
      </a>
    </div>
  );
};

const TeaserList = ({ teasers }) => {
  return (
    <div>
      {teasers.map((teaser, index) => (
        <TeaserComponent key={index} teaser={teaser} />
      ))}
    </div>
  );
};

const TeaserData = ({ teaserData }) => {
  return (
    <div>
      <h1>Teaser List</h1>
      <TeaserList teasers={teaserData} />
    </div>
  );
};

export default TeaserData;
