import { useState } from 'react';
import './GalleryForm.css'

function GalleryForm({newImage}) {

    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')

    const submit = () => {
        newImage(img, description)
    }

    return (
        <>
            <input className="input" type="text" placeholder="Image link" onChange={(e) => setImg(e.target.value)} value={img}/>
            <input className="input" type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description}/>
            <p><button onClick={submit}>Submit</button></p>
        </>
    )
}

export default GalleryForm;