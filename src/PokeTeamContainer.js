import React from 'react';
import Pokemon from './Pokemon';
import {PokeDiv} from './Styles';

export default function PokeTeamContainer(props){

  const renderPokemon = () => {
    return props.pokemon.map(p => {
      return< Pokemon
        name={p.name} 
        key={p.name} 
        buttonLabel={"remove"}
       spriteUrl={p.spriteUrl}
       handlePokemonClick={p.handlePokemonClick}
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