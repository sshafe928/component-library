import React from 'react';
import '../pages/css/GalleryPage.css'

const Gallery = ({images}) =>{
    return (
        <div className="gallery">
            {images && images.length > 0 ? (
            images.map((image, index) => (
                <div key={index} className="gallery-item">
                <img
                    src={image.pictureURL}
                    alt={image.altText}
                    title={image.pictureName}
                    className="gallery-image"
                />
                <p>{image.pictureName}</p>
                </div>
            ))
            ) : (
            <p>No images available</p>
            )}
        </div>
        );

}

export default Gallery;