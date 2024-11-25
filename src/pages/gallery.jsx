import '../pages/css/GalleryPage.css';
import Gallery from '../components/galleryComponent.jsx';

function GalleryPage() {
    const imageList = [
        { pictureName: "Grey Cat", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721081/samples/animals/cat.jpg", altText: "Description of the image" },
        { pictureName: "Pink FLowers", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721079/sample.jpg", altText: "Description of the image" },
        { pictureName: "ANalog Clock", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721081/samples/ecommerce/analog-classic.jpg", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721081/samples/food/dessert.jpg ", altText: "LEmon Pie" },
        { pictureName: "Image Name", pictureURL: " https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721081/samples/animals/reindeer.jpg", altText: "Reindeer" },
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721082/samples/landscapes/architecture-signs.jpg ", altText: "Broadway sign" },
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721082/samples/landscapes/beach-boat.jpg ", altText: "Beach boat" },
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721083/samples/landscapes/nature-mountains.jpg ", altText: "Nature mountains" },
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/video/upload/v1729721083/samples/sea-turtle.mp4 ", altText: "Turtle" },
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721088/samples/breakfast.jpg ", altText: "Breakfast" },
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/video/upload/v1729721084/samples/elephants.mp4 ", altText: "Elephant" },
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721091/cld-sample-2.jpg ", altText: "mountain in clouds" },
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721090/samples/coffee.jpg ", altText: "coffee pots" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
        { pictureName: "Image Name", pictureURL: " ", altText: "Description of the image" },
    ]
    console.log('Rendering Gallery Page');
    return (
        <>
        <div className="profile">
            <Gallery images={imageList}/>
        </div>
        </>
    );
}

export default GalleryPage;