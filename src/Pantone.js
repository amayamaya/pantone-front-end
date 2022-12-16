import React from 'react';

export default function Pantone({ year, name, value, hex }) {
  return (
    <div className="pantone">
      <h2>{year}</h2>
      <h2>{name}</h2>
      <p>{value}</p>
      <p>{hex}</p>
    </div>
  );
}
