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
            <div className='input-group'>
                <input className="form-control form-control-lg input input-group-text" type="url" placeholder="Image link" onChange={(e) => setImg(e.target.value)} value={img} />
                <input className="form-control form-control-lg input input-group-text" type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
            </div>
            <p><button className="hover btn btn-dark" onClick={submit}>Submit</button></p>
        </>
    )
}

export default GalleryForm;