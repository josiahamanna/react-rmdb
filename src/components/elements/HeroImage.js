import React from "react";

import { StyledHeroImage } from "../styles/StyledHeroImage.js";

const HeroImage = ({ image, title, text }) => {
  return (
    <StyledHeroImage image={image}>
      <div id="headerAndHeroImage">
        <div className="heroimage-content">
          <div className="heroimage-text">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </StyledHeroImage>
  );
};

export default HeroImage;
