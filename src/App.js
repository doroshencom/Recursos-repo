import React, { useState, useEffect } from 'react';
import Category from './components/Category';
import FilterBar from './components/FilterBar';
import './assets/styles.css';

function App() {
  const [recursos, setRecursos] = useState([]);
  const [filteredRecursos, setFilteredRecursos] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    // Cargar los recursos desde el archivo JSON
    fetch('/data/recursos.json')
      .then((response) => response.json())
      .then((data) => setRecursos(data));
  }, []);

  const toggleFilter = (filter) => {
    const isActive = activeFilters.includes(filter);
    setActiveFilters(isActive ? activeFilters.filter((f) => f !== filter) : [...activeFilters, filter]);
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  useEffect(() => {
    if (activeFilters.length > 0) {
      setFilteredRecursos(
        recursos.filter((category) =>
          category.some((resource) => activeFilters.includes(resource.categoria))
        )
      );
    } else {
      setFilteredRecursos(recursos);
    }
  }, [activeFilters, recursos]);

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1>Explora Recursos</h1>
          <p>Descubre los mejores recursos en categorías como CSS, JavaScript, Figma, y más.</p>
        </div>
      </header>
      <FilterBar filters={activeFilters} toggleFilter={toggleFilter} clearFilters={clearFilters} />
      <div className="container grid-3-columns">
        {Object.keys(filteredRecursos).map((category) => (
          <Category key={category} title={category} resources={filteredRecursos[category]} />
        ))}
      </div>
    </div>
  );
}

export default App;
