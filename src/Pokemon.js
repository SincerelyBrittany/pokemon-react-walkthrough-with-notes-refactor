import React, {useState} from 'react';
import {PokemonCard, PokeBtn} from './Styles';
import pokeball from './assets/pokebal_img.png'

export default function Pokemon(props){

  const [imgLoaded, setImgLoaded] = useState(false)

  const handleClick = e => {
     props.handlePokemonClick(props)
  }

  const handleLoad = () => {
    setImgLoaded(true)
  }

  return(
    <PokemonCard>
      <h2> {props.name} </h2>
      <img src={props.spriteUrl} 
      height={90} 
      width={90} 
      style={{visibility: imgLoaded ? 'visible' : 'hidden'}} 
      onLoad={handleLoad}/>
      <img src={pokeball} 
      height={90} 
      width={90} 
      style={{visibility: !imgLoaded ? 'visible' : 'hidden'}} />
      <PokeBtn onClick={handleClick}>{props.buttonLabel}</PokeBtn>
    </PokemonCard>
  )
}