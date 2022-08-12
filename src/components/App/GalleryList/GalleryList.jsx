import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({image}) {
    return (
        <>
            <h2>My Gallery</h2>
            <GalleryItem image={image}/>
        </>
    )
}

export default GalleryList