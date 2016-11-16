import React from 'react';

const Header = ({ query, queryString, handleChange }) => (
  <div className="header">
    <form className="searchBar" onSubmit={query}>
      <input
        className="inputField" type="text"
        placeholder="Search"
        value={queryString}
        onChange={handleChange}
      />
    </form>
    <a href="/logout">Logout</a>
  </div>
);

export default Header;
