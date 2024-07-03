import { useState, useEffect, useCallback } from 'react';
const localCache = {} // it is a cash object to save data while rendering
const useBreedList = (animal)=>{
const [breedList , setBreedList] = useState([]);

const fetchBreedList = useCallback( // have callback function to render in useEffect function without problem woth asyncronouns
  async ()=> {
    //http://pets-v2.dev-apis.com/breeds?animal=${animal}
    //http://pets-v2.dev-apis.com/breeds?animal=${preed}&animal=${preed}
    // ? is a search parameter 
    // animal=${animal} is a property in api 
    // & compaination property in api 
    const res  =  await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`); 
    const json = await res.json();
    localCache[animal] = json.breeds || [];
    setBreedList(localCache[animal] )
    }
)
useEffect(()=>{
if (!animal){
  fetchBreedList([]);
} 
else if (localCache[animal] ) {
  fetchBreedList(localCache[animal]);
}
else  fetchBreedList();
} , []);
return breedList;  
}

export default useBreedList;

