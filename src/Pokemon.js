import React from 'react';
import {PokemonCard, PokeBtn} from './Styles';

export default function Pokemon(props){

  const handleClick = e => {
    console.log(props)
     props.handlePokemonClick(props)
  }

  return(
    <PokemonCard>
      <h2> {props.name} </h2>
      <img src={props.spriteUrl} />
      <PokeBtn onClick={handleClick}>{props.buttonLabel}</PokeBtn>
    </PokemonCard>
  )
}