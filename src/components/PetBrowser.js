import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  let list = pets.map(pet => {
    return (
      <Pet key = {pet.id} pet = {pet} onAdoptPet = {onAdoptPet}/>
    )
  })
  
  return <div className="ui cards">{list}</div>;
}

export default PetBrowser;
