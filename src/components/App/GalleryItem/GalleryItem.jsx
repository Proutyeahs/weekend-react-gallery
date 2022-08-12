import './GalleryItem.css'

function GalleryItem({image}) {
    return (
        <>
        <p>Items</p>
        <ul>
            {image.map(picture =>
                (<span key={picture.id}><img src={picture.path} height={100} width={100}/></span>)
            )}
        </ul>
        </>
        
    )
}

export default GalleryItem