import { useState,useEffect } from 'react';
import './App.css';
import { Navb } from './utils/navbar';
import { Search } from './components/search';
import { Films } from './components/films';
import { films } from './data';

function App() {
  const [tabmovie,setTab]=useState([]);
  const [cherMovie,setCher]=useState("");


  useEffect(() => {
    if(cherMovie===""){
      setTab(films)
    }else{
      setTab(films.filter(film=>film.titre.includes(cherMovie)))
    }
    
  }, [cherMovie]);
  const hanldeChange = (text)=>{
    console.log("hello")
    setCher(text)
  }
  return (
    <div className="App">

      <Navb/>
      <Search hanldeChange={hanldeChange}/>
      <Films Film={tabmovie}/>
    </div>
    
  )
}

export default App;
