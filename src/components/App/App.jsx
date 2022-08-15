import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import GalleryList from './GalleryList/GalleryList'
import GalleryForm from './GalleryForm/GalleryForm';

function App() {

  useEffect( () => {
    getImgs();
  }, []); // run this effect once at load

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

    const newImage = (img, description) => {
      console.log(img, description)
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                img: img,
                description: description
            }
        }).then(response => {
            console.log(response)
            getImgs()
        }).catch(err => {
            console.log(err)
            alert("Limited to 120 characters")
        })
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm newImage={newImage}/>
      <GalleryList image={image} getImgs={getImgs}/>
    </div>
  );
}

export default App;
