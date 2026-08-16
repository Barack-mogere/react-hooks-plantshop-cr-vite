import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addPlant, setSearchTerm }) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
