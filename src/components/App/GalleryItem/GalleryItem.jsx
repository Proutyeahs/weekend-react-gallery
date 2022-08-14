import './GalleryItem.css'
import { useState } from "react";
import axios from 'axios'

function GalleryItem({getImgs, path, description, likes, liked, picture}) {

    let [hidden, setHidden] = useState(false)

    const remove = (id) => {
        axios({
            method: 'DELETE',
            url: `/gallery/${id}`
        }).then(result => {
            console.log(result)
            getImgs()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className='card'>
                <div onClick={() => setHidden(!hidden)}>
                    {!hidden && <img src={path} height={100} width={100} />}
                    {hidden && <div className='text'>{description}</div>}
                </div>
                    <p>{likes}</p>
                    <button className="hover" onClick={() => liked(picture)}>Like!</button><button className="hover" onClick={() => remove(picture.id)}>Delete</button>
            </div>

        </>

    )
}

export default GalleryItem