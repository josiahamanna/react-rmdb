import React from "react";
import { Link } from "@reach/router";

import { StyledHeroImage } from "../styles/StyledHeroImage.js";
import { StyledRMDBLogo } from "../styles/StyledHeader";

import RMDBLogo from "../images/movie_logo4.png";

const HeroImage = ({ image, title, text }) => {
  return (
    <StyledHeroImage image={image}>
      <div id="headerAndHeroImage">
        <Link to="/">
          <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" className="logo" />
        </Link>
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
