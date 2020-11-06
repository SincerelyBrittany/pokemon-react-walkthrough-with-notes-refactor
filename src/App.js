import React, {useState} from "react";
import "./styles.css";
import PokeTeamContainer from './PokeTeamContainer';
import AllPokemonContainer from './AllPokemonContainer'

export default function App() {

  const [choosenPokemon, setChoosenPokemon] = useState([])

  const handleRemovePokemon = pokeObj =>{
    const newPokemon = choosenPokemon.filter(p => p.id !== pokeObj.id)
    setChoosenPokemon(newPokemon)
  }

const handleChoosePokemon= (pokeobj) => {
  console.log(pokeobj)
  if(choosenPokemon.length > 5){ return }
  if(!!choosenPokemon.find(p => p.id === pokeobj.id)){
    return
  }
    const newPokemon = [...choosenPokemon, pokeobj]
    setChoosenPokemon(newPokemon)
}
  return (
    <div className="App">
      <PokeTeamContainer 
      pokemon={choosenPokemon}
      handleRemovePokemon={handleRemovePokemon}/>
      <AllPokemonContainer handleChoosePokemon={handleChoosePokemon}/>
    </div>
  );
}
