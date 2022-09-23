import React from 'react';
import './style.css';

export default function Loading() {
  return (
    <div className="container-loading">
      <div class="loader"></div>
      <p>Carregando...</p>
    </div>
  );
}
