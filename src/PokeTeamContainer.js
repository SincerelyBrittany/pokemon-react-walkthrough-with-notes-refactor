import React from 'react';
import Pokemon from './Pokemon';
import {PokeDiv} from './Styles';

export default function PokeTeamContainer(props){

  const renderPokemon = () => {
    return props.pokemon.map(p => {
      return< Pokemon
        name={p.name} 
        key={p.name} 
       spriteUrl={p.spriteUrl}
       handleChoosePokemon={p.handleChoosePokemon}
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