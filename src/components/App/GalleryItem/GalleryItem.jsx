import './GalleryItem.css'
import { useState } from "react";

function GalleryItem({path, description, likes, liked, picture}) {

    let [hidden, setHidden] = useState(false)

    return (
        <>
            <div className='card'>
                <div onClick={() => setHidden(!hidden)}>
                    {!hidden && <img src={path} height={100} width={100} />}
                    {hidden && <div className='text'>{description}</div>}
                </div>
                    <p>{likes}</p>
                    <button onClick={() => liked(picture)}>Like!</button>
            </div>

        </>

    )
}

export default GalleryItem