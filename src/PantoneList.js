import React from 'react';
import Pantone from './Pantone';

export default function PantoneList() {
  return (
    <div className="pantone-list">
      {PantoneList.map((pantone, i) => {
        return <Pantone {...pantone} key={pantone.name + i + pantone.id} />;
      })}
    </div>
  );
}
