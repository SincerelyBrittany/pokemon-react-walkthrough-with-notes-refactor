import React from 'react';
import {PokemonCard, PokeBtn} from './Styles';

export default function Pokemon(props){

  const handleClick = e => {
    props.handleChoosePokemon(props)
  }

  return(
    <PokemonCard>
      <h2> {props.name} </h2>
      <img src={props.spriteUrl} />
      <PokeBtn onClick={handleClick}>Choose</PokeBtn>
    </PokemonCard>
  )
}