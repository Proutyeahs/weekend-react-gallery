
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios'

function GalleryList({image, getImgs}) {

    const like = () => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${image.id}`,
            data: {
                likes : image.likes +1
            }
        }).then((response) => {
            getImgs()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <h2>My Gallery</h2>
            <div>
                {image.map( picture => (
                    <span key={image.id}>
                        <GalleryItem getImgs={getImgs} image={image} id={picture.id} path={picture.path} description={picture.description} likes={picture.likes} like={like}/>

                    </span>
                ))}
            </div>
        </>
    )
}

export default GalleryList