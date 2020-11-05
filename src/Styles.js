import styled from 'styled-components';

const PokeDiv = styled.div`
background-color: #fffff0;
border: 3px solid red;
`

const PokemonCard = styled.div`
  background-color: yellow;
  border: 1px solid blue;
  display: inline-block;
  margin:10px;
  padding: 10px;  
`

const PokeBtn = styled.button`
    background-color: red; 
    color: yellow;
    font: 2em;
`

export {
  PokeDiv,
  PokemonCard,
  PokeBtn
}