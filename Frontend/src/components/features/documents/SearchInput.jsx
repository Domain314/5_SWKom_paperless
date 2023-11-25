import React from "react";

import SearchIcon from "../../../assets/img/icons/search.svg";

import './SearchInput.css';

const SearchInput = ({ searchText, handleSearchChange }) => {
    return (
        <div className="input-icon-wrapper py-2">
            <input
                type="text"
                placeholder="Suche"
                value={searchText}
                onChange={handleSearchChange}
                className="py-2"
            />
            <img className="placeholder-icon w-[30px] h-[30px]" src={SearchIcon} alt="Search Icon" />
        </div>
    )
}

export default SearchInput;