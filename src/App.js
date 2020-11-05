import React, {useState} from "react";
import "./styles.css";
import PokeTeamContainer from './PokeTeamContainer';
import AllPokemonContainer from './AllPokemonContainer'

export default function App() {

  const [choosenPokemon, setChoosenPokemon] = useState([])

const handleChoosePokemon = (pokeobj) => {
  if(choosenPokemon.length > 5){ return }
  // if(!!choosenPokemon.find(p => p.id === pokeobj.id)){
  //   return
  // }
    const newPokemon = [...choosenPokemon, pokeobj]
    setChoosenPokemon(newPokemon)
}
  return (
    <div className="App">
      <PokeTeamContainer pokemon={choosenPokemon}/>
      <AllPokemonContainer handleChoosePokemon={handleChoosePokemon}/>
    </div>
  );
}
