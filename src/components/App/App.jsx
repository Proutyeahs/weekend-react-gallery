//import { response } from 'express';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import GalleryList from './GalleryList/GalleryList'

function App() {

  useEffect( () => {
    getImgs();
  }, []);

  const [image, setImage] = useState([])

  const getImgs = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log(response.data)
      setImage(response.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList image={image} getImgs={getImgs}/>
    </div>
  );
}

export default App;
