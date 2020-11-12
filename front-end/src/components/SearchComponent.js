import React from 'react';

const SearchComponent = () => {
    const value = {};
    return (
        <form className="searchForm">
            <label htmlFor="Search by">
                <input id="search" value={value} placeholder="e.g Trainers ..."></input>
            </label>
            <label htmlFor="Search by">
                <input id="search" value={value} placeholder="e.g Trainers ..."></input>
            </label>
            <button type="submit"> Search </button>

        </form>
    );
};

export default SearchComponent;