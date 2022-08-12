import './GalleryItem.css'
import axios from 'axios'
import { response } from 'express'

function GalleryItem({image}) {

    const like = () => {
        axios({
            method: 'PUT',
            url: `/like/${image.id}`
        }).then( (response) => {
            
        })
    }
// .map needs to be in GalleryList
    return (
        <>
        <p>Items</p>
        <ul>
            {image.map(picture =>
                (<span key={picture.id}><img src={picture.path} height={100} width={100}/></span>)
            )}
        </ul>
        <button>Like!</button>
        </>
        
    )
}

export default GalleryItem