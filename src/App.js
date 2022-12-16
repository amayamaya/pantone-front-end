import { useState, useEffect } from 'react';
import { getPantones } from './services/fetch-utils';
import PantoneList from './PantoneList';

import './App.css';

function App() {
  const [pantones, setPantones] = useState([]);

  useEffect(() => {
    async function fetchPantonesData() {
      const pantoneData = await getPantones();
      setPantones(pantoneData);
    }

    fetchPantonesData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pantone of the Year</h1>
        <PantoneList pantones={pantones} />
      </header>
    </div>
  );
}

export default App;
