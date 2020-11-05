import React, {useState, useEffect} from 'react'
import Pokemon from './Pokemon'
import {PokeBtn} from './Styles'
export default function AllPokemonContainer(props){
  

  //useState gives us back two things.
  //1. it gives us back a way to get the state, 2. it gives us a way to set the state
  //Below pokemon is a getter, and setPokemon is a function that takes in as an arugment the NEW state
  //useState([]) is pass in the initial value of pokemon to be and in this case it is an empty array
  const [pokemons, setPokemon] = useState([]);

  const [nextURL, setNextURL] = useState('https://pokeapi.co/api/v2/pokemon')

  const [ prevUrl, setPrevUrl] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [getNextPokemon, setGetNextPokemon] = useState(true)

  useEffect(()=>{

    async function mapNewLocationInData(initialArray){
      return Promise.all(initialArray.map(pokemonInfo => {
         return fetch(pokemonInfo.url)
          .then(res => {
            if(!res.ok){throw res}
            return res.json()
          })
      }))
    }

      //promise.all will only resolve once all of the promises within the array is resolve
  async function fetchPokemon(){
      setIsLoading(true)
        try{
          const res = await fetch(nextURL)
          if(!res.ok){
            throw res
          }
          const data = await res.json()
          setNextURL(data.next) 
          setPrevUrl(data.prev)
          const initialPokemonList = data.results
          // const pokeFullDataList = []
          // for (let p of initialPokemonList){
          //   const pokeRes = await fetch(p.url)
          //   if(!res.ok){
          //     throw res
          //   }
          //   const pokeResult = await pokeRes.json();
          //   pokeFullDataList.push(pokeResult);
          // }
          // // console.log(data)
          // // console.log(pokeFullDataList)
            const pokeFullDataList = await mapNewLocationInData(initialPokemonList)
            setPokemon(pokeFullDataList)
            setIsLoading(false)
        }
        catch(err){
          setIsLoading(false)
          alert(err.status)
        }
      }
      if(getNextPokemon){
          fetchPokemon()
          setGetNextPokemon(false)
      }
  }, [getNextPokemon])
  //useEffect takses in as an argument a function that will run upon every single render of this componenet.
  //is you pass in an empty array as an argument it will only run upon component mounting
  //if you return a function form use efft, the function will run upon unmounting 

 // https://pokeapi.co/api/v2/



  const renderPokeCards = () => {
    console.log("hello")
    return pokemons.map(p => {
       return <Pokemon name={p.name} 
       key={p.id} 
       spriteUrl={p.sprites.front_default}
       handleChoosePokemon={props.handleChoosePokemon}/>
    })
  }
  
  const handleNextPage = () => {
    setGetNextPokemon(true)
      // try{

      // }catch(err){

      // }
  }

  const handlePrevPage = () => {
    
      // try{

      // }catch(err){

      // }
  }

  const renderLoaderOrButtons = () => {
      if(isLoading){
        return <div class="loader"></div>
      } else {
        return (
        <div>
        <PokeBtn onClick={handlePrevPage}> Prev </PokeBtn>
        <PokeBtn onClick={handleNextPage}> Next </PokeBtn>
        </div>
        )
      }
  }

  return(
    <div>
    {renderPokeCards()}
    {renderLoaderOrButtons()}
    {/* <PokeBtn onClick={handleNextPage}> Next </PokeBtn> */}
    </div>
  )
}