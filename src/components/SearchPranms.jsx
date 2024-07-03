import React from 'react';
import { useEffect, useState } from "react";
import useBreedList from '../hooks/useBreedList';
import Results from './Results';
import Pet from './Pet'; 

const ANIMALS = [ "bird", "cat", "dog", "rabbit", "reptile"];
const SearchPranms = () => {
  const [animal, setAnimal] = useState( "" );
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = useBreedList(animal); // custom hook 
  

  let URLAPI = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}`
  
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setBreed('');
  };

  const handleAnimalChange = (e) => {
    setAnimal(e.target.value);
  };
  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };
 const fetchPets = async ()=>{
  const res = await fetch(URLAPI);
  const json = await res.json();
  setPets(json.pets)
  console.log(json)
 }
  // eslint-disable-next-line
 useEffect(()=>{fetchPets()} , [])
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={location}
          placeholder="location"
          onChange={handleLocationChange}
        />
        <label htmlFor="animal">Animal</label>
        <select id="animal" value={animal} onChange={handleAnimalChange}>
          {
            //  ANIMALS.map((animal)=> { is error reoace { WITH ()
            ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))
          }
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          disabled={!breeds.length}
          id="breed"
          value={breed}
          onChange={handleBreedChange}
        >
          {breeds.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button onClick={fetchPets}>  Submit </button>
      </form>
      {/* HOF high order function component in component */}
      <Results pets={pets}/>  
    </div>
  );
};

export default SearchPranms;
