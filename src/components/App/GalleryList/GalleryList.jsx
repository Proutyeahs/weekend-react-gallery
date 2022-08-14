
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios'

function GalleryList({image, getImgs}) {

    const liked = (picture) => {
        let likes = picture.likes
        likes++
        console.log(likes)
        axios({
            method: 'PUT',
            url: `/gallery/like/${picture.id}`,
            data: {
                likes: likes
            }
        }).then((response) => {
            console.log(response)
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
                    <span key={picture.id}>
                        <GalleryItem picture={picture} path={picture.path} description={picture.description} likes={picture.likes} liked={liked}/>

                    </span>
                ))}
            </div>
        </>
    )
}

export default GalleryList