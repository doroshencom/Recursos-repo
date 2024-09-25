import React from 'react';

const FilterBar = ({ filters, toggleFilter, clearFilters }) => {
  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <span
          key={filter}
          className={`filter ${filter.isActive ? 'active' : ''}`}
          onClick={() => toggleFilter(filter)}
        >
          {filter.name}
        </span>
      ))}
      <button className="clear-filters" onClick={clearFilters}>Limpiar Filtros</button>
    </div>
  );
};

export default FilterBar;
