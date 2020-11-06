import React from 'react';
import Pokemon from './Pokemon';
import {PokeDiv} from './Styles';

export default function PokeTeamContainer(props){

  const renderPokemon = () => {
    return props.pokemon.map(p => {
      return< Pokemon
        name={p.name}
        id={p.id} 
        key={p.name} 
        buttonLabel={"remove"}
       spriteUrl={p.spriteUrl}
       handlePokemonClick={props.handleRemovePokemon}
      //  handleRemovePokemon={p.handleRemovePokemon}
      />
    })
  }

  return(
    <PokeDiv>
      <h1> Team Area </h1>
      {renderPokemon()}
    </PokeDiv>
  )
}