import SearchPranms from './components/SearchPranms';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom'; // import to make router
// BrowserRouter container tag to router in browser
// Routes container tag to router 

// Route => <Route path='' element={<SearchPranms />} /> 
// path='' = path='/' default 
// path='*' = path='**' error path 
// path='/Details/' || path='/Details?:id' spacific element 

// Link is alternative to <a></a> without refresh 
// Link contain only text 

import NotFound from './components/NotFound';
import Details from './components/Details';
function App() { 
  const [width , setWidth] = useState(window.innerWidth)
useEffect(()=>{
  window.addEventListener('resize' , ()=>{setWidth(window.innerWidth)}  ) ;
  return ()=> window.removeEventListener('resize', ()=>{}) ; // it's clean up function in useEffect 
} )
  return (
    <div>
       <h2> width {width} </h2>
      <BrowserRouter>
      <h1 id='home'>
      <Link to='**' id='home'>  Adopt Me </Link>
      </h1>
            <Routes>
              <Route path='' element={<SearchPranms />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/Details/:id/' element={<Details />} />
            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App; 
