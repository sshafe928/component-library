import React from 'react';
import '../pages/css/GalleryPage.css'

const Gallery = ({ images }) => {
return (
    <div className="gallery-container">
    {images.map((image, index) => (
        <div key={index} className="gallery-item">
        <img
            src={image.pictureURL}
            alt={image.altText}
            className="gallery-image"
        />
        <div className="gallery-caption">
            <h3>{image.pictureName}</h3>
        </div>

        <p className="overlay">{image.description}</p>
        </div>
    ))}
    </div>
);
};

export default Gallery;
