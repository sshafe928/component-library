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
        { pictureName: "Image Name", pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721090/samples/dessert-on-a-plate.jpg ", altText: "Dessert" },
        { pictureName: "Image Name", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLOP-tXa2JSnKme7T7SWDzHZ4E4t44X4Alw&s ", altText: "Girl with a hood" },
        { pictureName: "Image Name", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuuPgqp2U-we2PY9AEA1d00dtJEDKw0sCAQ&s ", altText: "forest" },
        { pictureName: "Image Name", pictureURL: "https://www.insidewink.com/wp-content/uploads/2020/04/Jean_Trebek_Beauty_in_Nature.jpg ", altText: "small white flowers" },
        { pictureName: "Image Name", pictureURL: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q= ", altText: "tree tops" },
        { pictureName: "Image Name", pictureURL: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg ", altText: "lake" },
        { pictureName: "Image Name", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUhc8feStsjYKYoW8X7sEQAOzA4Yla1QmGQ&s ", altText: "butterfly" },
        { pictureName: "Image Name", pictureURL: "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg ", altText: "waterfall" },
        { pictureName: "Image Name", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TUEqQ0DjTAes3QECMS5LqyywCsZ7xQPWpA&s ", altText: "tree" },
        { pictureName: "Image Name", pictureURL: "https://biomimicry.org/wp-content/uploads/2024/09/igor-omilaev-qu-upKvvRHg-unsplash-1600x1250.jpg ", altText: "Mushrooms" },
        { pictureName: "Image Name", pictureURL: "https://hips.hearstapps.com/hmg-prod/images/nature-quotes-1-1626982102.jpg?crop=1xw:0.8443471337579618xh;center,top ", altText: "Pine forest" },
        { pictureName: "Image Name", pictureURL: "https://miro.medium.com/v2/resize:fit:600/1*PFXZhbsECddvTZmTFLvJiQ.jpeg ", altText: "Cherry blossoms" },
        { pictureName: "Image Name", pictureURL: "https://cdn.prod.website-files.com/65ea0fc02c1a7195991711b1/6616e868f8397a3a11e087c1_Greg%20Wolfe%20--%20Trails%20BEST%20IN%20SHOW%20(1)%201.webp ", altText: "forest trail" },
        { pictureName: "Image Name", pictureURL: "https://media.wired.com/photos/60abf2c7f83409ce52d3c67f/master/pass/Science_forest_1167053895.jpg ", altText: "trees in fog" },
        { pictureName: "Image Name", pictureURL: "https://www.businesstoday.me/wp-content/uploads/2021/02/nature.jpg ", altText: "forest trail" },
        { pictureName: "Image Name", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyVvTHb9Hx5qe96czMeeiOvTi3gmPudf4xw&s ", altText: "bird" },
        { pictureName: "Image Name", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwYnLfmfW_1a6pt6fqsuS1kEihm5cFqahyA&s ", altText: "lavender" },
        { pictureName: "Image Name", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpQwTbUBq_RfXUlGLbRP_-RxqtqP0yK5a-A&s ", altText: "Rock circle" },
        { pictureName: "Image Name", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdTRii-rDiegqpD7Qb9BXUQz9V-AG3y7vZA&s ", altText: "fall trees" },
        { pictureName: "Image Name", pictureURL: "https://images.squarespace-cdn.com/content/v1/57069f3a40261d83d0646673/c833a6e3-0b16-4c5f-a17a-ab0363a2229f/tempImageMFU0sE.jpg ", altText: "pond/ lake" },
        { pictureName: "Image Name", pictureURL: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg ", altText: "fall trees" },
        { pictureName: "Image Name", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLAZZb0Mi5fBmOEjE8yDtosm0FJFvYFh-mA&s ", altText: "lake" },
    ]
    console.log('Rendering Gallery Page');
    return (
        <>
        <a href="/"><button className="btn" id="back">Back to Home</button></a>
        
            <Gallery images={imageList}/>
        </>
    );
}

export default GalleryPage;