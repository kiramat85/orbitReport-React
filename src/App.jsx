import { useState } from 'react';
import Buttons from './components/Buttons';
import Table from './components/Table';
import Banner from './components/Banner';
import satData from './components/satData';

function App() {
  //  state with  satellites
  const [sat, setSat] = useState(satData);

  // binding/ extracting  unique orbit types
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  // Filter satellites based on orbit type
  const filterByType = (currentType) => {
    const filteredSats = satData.filter((satellite) => satellite.orbitType === currentType);
    setSat(filteredSats);
  };

  // Reset to show all satellites
  const handleShowAllOrbits = () => {
    setSat(satData);
  };

  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={handleShowAllOrbits} // Corrected function
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </>
  );
}

export default App;
