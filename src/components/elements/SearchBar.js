import React, { useState, useRef } from "react";
import fontAwesome from "react-fontawesome";
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../styles/StyledSearchBar.js";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");
  const timeout = useRef(null);

  const doSearch = (event) => {
    const { value } = event.target;

    clearTimeout(timeout.current);
    setState(value);

    timeout.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <fontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search movie"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar; //
