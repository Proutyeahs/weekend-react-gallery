import { useState } from 'react';
import './GalleryForm.css'

function GalleryForm({ newImage }) {

    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')


    const submit = () => {
        if (img != "") {
            newImage(img, description)
            setDescription('')
            setImg('')
        } else {
            alert('Please submit and image link!')
        }
    }

    return (
        <>
            <h3>Add new Image:</h3>
            <input className="input" type="text" placeholder="Image link" onChange={(e) => setImg(e.target.value)} value={img} />
            <input className="input" type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
            <p><button className="hover" onClick={submit}>Submit</button></p>
        </>
    )
}

export default GalleryForm;