import React, { useState } from "react";

const Searchbar = ({ saveResult }) => {
  const [search, saveSearch] = useState("");

  const searchBlog = (e) => {
    e.preventDefault();
    saveResult(search);
  };

  return (
    <div className="main">
      <form className="search" onSubmit={searchBlog}>
        <i class="fa fa-search"></i>
        <input 
          type="text"
          className="form-control"
          placeholder="Search job type (developer, producer, manager...) "
          onChange={(e) => saveSearch(e.target.value)}
        />
        <div className="form-group">
        <input type="submit" className="btn btn-primary" value="search" />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;