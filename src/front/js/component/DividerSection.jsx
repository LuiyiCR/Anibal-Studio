import React from 'react';
import '../../styles/DividerSection.css';

export const DividerSection = () => {
  return (
    <div className="divider-section my-5">
      <div>
        <i className="fas fa-cut"></i>
        <p>Cortes</p>
      </div>
      <div>
        <i className="fas fa-oil-can"></i>
        <p>Keratinas</p>
      </div>
      <div>
        <i className="fas fa-spa"></i>
        <p>Tratamientos</p>
      </div>
      <div>
        <div>
          <i className="fas fa-ellipsis-h"></i>
          <p>Y mucho más...</p>
        </div>
      </div>
    </div>
  );
};
