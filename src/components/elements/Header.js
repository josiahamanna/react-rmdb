import React from 'react';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMBDLogo from '../images/tmdb_logo.svg';

import {
    StyledHeader,
    StyledRMDBLogo,
    StyledTMDBLogo
} from '../styles/StyledHeader.js';

const Header = () => (
    <StyledHeader>
      <div className="header-content">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>;
        <StyledTMDBLogo src={TMBDLogo} alt="tmbd-logo" />;
      </div>
    </StyledHeader>
);

export default Header;
