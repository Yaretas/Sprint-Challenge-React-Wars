import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import StarWarsCard from "./components/starWarsCard";



const App = () => {
  const [people , setPeople] = useState([]);
  // setting axios request

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
useEffect(()=>{
  axios
    .get(`https://swapi.co/api/people/`)
    .then(response =>{
      console.log(response);
      const starWarsData = response.data.results;

      // set keys
      setPeople(starWarsData);
      console.log(setPeople);
      // console.log(starWarsCard);
    
    })
    .catch(Err =>{
      console.log(Err);
    })

},[]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

        {people.map((character, i) =>{
          return (
            <StarWarsCard key={i}  name={character.name} height={character.height} birth_year={character.birth_year} age={character.age} gender={character.gender} created={character.created}/>
          )
        })};


    </div>
  );
}

export default App;
