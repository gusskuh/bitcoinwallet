import React from "react";

const FilterContacts = props => {
  return (
    <div className="wrap">
      <div className="search">
        <form onInput={props.search}>
            <input type="text" className="searchTerm" placeholder="Who are you looking for?" />
            
        </form>
      </div>
</div>
  );
};

export default FilterContacts;
