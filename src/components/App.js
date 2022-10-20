import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(type) {
    setFilters({ type: type.target.value })
  }
  
  function onFindPetsClick() {
    fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(response => response.json())
      .then(json => setPets(json))
  }

  function onAdoptPet(id) {
    let array = [...pets]
    for(let i = 0; i < array.length; i++){
      if(array[i].id === id) {
        array[i].isAdopted = true
      }
    }

    setFilters(array)
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType = {onChangeType} onFindPetsClick = {onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets = {pets} onAdoptPet = {onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
