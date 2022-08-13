import './GalleryItem.css'
import axios from 'axios';
import {useState} from "react";
//import { response } from 'express'

function GalleryItem({ getImgs, image, id, path, description, likes, like}) {

    let [hidden, setHidden] = useState(false)

    return (
        <>
            <div onClick={() => setHidden(!hidden)}>
                {!hidden && <img key={id} src={path} height={100} width={100} />}
                {hidden && <p>{description}</p>}
            </div>
                <p>{likes}</p>
                <p><button onClick={like}>Like!</button></p>
            
        </>

    )
}

export default GalleryItem