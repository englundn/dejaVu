import React from 'react';

const Filters = ({ filters, filterSetting, setFilter, sorts, sortSetting, setSort }) => (
  <div className="filtersWrapper">
    <div className="filters">
      <div>
        <span className="filtersTitle">Filter by:</span>
        {filters.map((option, index) => (
          <span
            key={index}
            className={(filterSetting === option ? 'chosenSetting' : '')}
            onClick={() => setFilter(option)}
          >{option}</span>
        ))}
      </div>
      <div>
        <span className="filtersTitle">Sort by:</span>
        {sorts.map((option, index) => (
          <span
            key={index}
            className={(sortSetting === option ? 'chosenSetting' : '')}
            onClick={() => setSort(option)}
          >{option}</span>
        ))}
      </div>
    </div>
  </div>
);

export default Filters;