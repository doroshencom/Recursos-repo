import React, { useState } from 'react';

const ResourceCard = ({ resource }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="resource-card" onClick={toggleInfo}>
      <img src={resource.thumbnail || 'default-thumbnail.jpg'} alt="Miniatura del recurso" />
      <div className="info">
        <h3>{resource.nombre}</h3>
        <span className="pildora">{resource.categoria}</span>
      </div>
      {isOpen && (
        <div className="extra-info">
          <p>{resource.descripcionLarga}</p>
          <a href={resource.enlace} target="_blank" rel="noopener noreferrer">Ir al Recurso</a>
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
