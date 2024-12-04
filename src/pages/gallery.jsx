import '../pages/css/GalleryPage.css';
import Gallery from '../components/galleryComponent.jsx';

function GalleryPage() {
    const imageList = [
        { 
            pictureName: "Grey Cat", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721081/samples/animals/cat.jpg", 
            altText: "Description of the image",
            description: "A curious grey cat explores its surroundings in a cozy setting." 
        },
        { 
            pictureName: "Pink Flowers", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721079/sample.jpg", 
            altText: "Description of the image",
            description: "A vibrant bouquet of pink flowers, a symbol of love and beauty." 
        },
        { 
            pictureName: "Analog Clock", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721081/samples/ecommerce/analog-classic.jpg", 
            altText: "Description of the image", 
            description: "A classic analog clock that reminds us of the passage of time." 
        },
        { 
            pictureName: "Lemon Pie", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721081/samples/food/dessert.jpg", 
            altText: "LEmon Pie", 
            description: "A delicious slice of lemon pie with a perfect balance of tart and sweet." 
        },
        { 
            pictureName: "Reindeer", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721081/samples/animals/reindeer.jpg", 
            altText: "Reindeer", 
            description: "A majestic reindeer glides gracefully across a snowy landscape." 
        },
        { 
            pictureName: "Broadway Sign", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721082/samples/landscapes/architecture-signs.jpg", 
            altText: "Broadway sign", 
            description: "The iconic Broadway sign lights up the New York City streets with its vibrant glow." 
        },
        { 
            pictureName: "Beach Boat", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721082/samples/landscapes/beach-boat.jpg", 
            altText: "Beach boat", 
            description: "A tranquil beach scene with a boat resting gently on the shore." 
        },
        { 
            pictureName: "Nature Mountains", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721083/samples/landscapes/nature-mountains.jpg", 
            altText: "Nature mountains", 
            description: "Breathtaking mountain views that take you to the heart of nature's beauty." 
        },
        { 
            pictureName: "Breakfast", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721088/samples/breakfast.jpg", 
            altText: "Breakfast", 
            description: "A cozy breakfast scene, perfect for starting the day with warmth and comfort." 
        },
        { 
            pictureName: "Mountain in Clouds", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721091/cld-sample-2.jpg", 
            altText: "mountain in clouds", 
            description: "A mystical view of a mountain peak, hidden partially by the clouds." 
        },
        { 
            pictureName: "Coffee Pots", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721090/samples/coffee.jpg", 
            altText: "coffee pots", 
            description: "A rustic collection of coffee pots waiting to brew the perfect cup of coffee." 
        },
        { 
            pictureName: "Dessert", 
            pictureURL: "https://res.cloudinary.com/dy2nnbnek/image/upload/v1729721090/samples/dessert-on-a-plate.jpg", 
            altText: "Dessert", 
            description: "A decadent dessert, beautifully plated and ready to be enjoyed." 
        },
        { 
            pictureName: "Girl with a Hood", 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLOP-tXa2JSnKme7T7SWDzHZ4E4t44X4Alw&s", 
            altText: "Girl with a hood", 
            description: "A mysterious girl in a hood, blending into the cool atmosphere around her." 
        },
        { 
            pictureName: "Forest", 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuuPgqp2U-we2PY9AEA1d00dtJEDKw0sCAQ&s", 
            altText: "forest", 
            description: "A quiet forest filled with the sounds of nature and the scent of pine." 
        },
        { 
            pictureName: "Small White Flowers", 
            pictureURL: "https://www.insidewink.com/wp-content/uploads/2020/04/Jean_Trebek_Beauty_in_Nature.jpg", 
            altText: "small white flowers", 
            description: "Delicate white flowers blooming in the midst of nature's simple beauty." 
        },
        { 
            pictureName: "Tree Tops", 
            pictureURL: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=", 
            altText: "tree tops", 
            description: "A view from below, capturing the towering tree tops reaching for the sky." 
        },
        { 
            pictureName: "Lake", 
            pictureURL: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg", 
            altText: "lake", 
            description: "A serene lake surrounded by lush trees, offering a peaceful retreat from the world." 
        },
        { 
            pictureName: "Butterfly", 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUhc8feStsjYKYoW8X7sEQAOzA4Yla1QmGQ&s", 
            altText: "butterfly", 
            description: "A vibrant butterfly flitting gracefully from flower to flower in the garden." 
        },
        { 
            pictureName: "Waterfall", 
            pictureURL: "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg", 
            altText: "waterfall", 
            description: "The majestic cascade of a waterfall, a symbol of nature's power and beauty." 
        },
        { 
            pictureName: "Tree", 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TUEqQ0DjTAes3QECMS5LqyywCsZ7xQPWpA&s", 
            altText: "tree", 
            description: "A single tree standing tall, offering shade and shelter to all who pass by." 
        },
        { 
            pictureName: "Mushrooms", 
            pictureURL: "https://biomimicry.org/wp-content/uploads/2024/09/igor-omilaev-qu-upKvvRHg-unsplash-1600x1250.jpg", 
            altText: "Mushrooms", 
            description: "A cluster of mushrooms thriving in the damp forest floor, a quiet wonder of nature." 
        },
        { 
            pictureName: "Pine Forest", 
            pictureURL: "https://hips.hearstapps.com/hmg-prod/images/nature-quotes-1-1626982102.jpg?crop=1xw:0.8443471337579618xh;center,top", 
            altText: "Pine forest", 
            description: "A peaceful pine forest, where the scent of trees fills the crisp air." 
        },
        { 
            pictureName: "Cherry Blossoms", 
            pictureURL: "https://miro.medium.com/v2/resize:fit:600/1*PFXZhbsECddvTZmTFLvJiQ.jpeg", 
            altText: "Cherry blossoms", 
            description: "A breathtaking view of cherry blossoms in full bloom, welcoming the spring." 
        },
        { 
            pictureName: "Forest Trail", 
            pictureURL: "https://cdn.prod.website-files.com/65ea0fc02c1a7195991711b1/6616e868f8397a3a11e087c1_Greg%20Wolfe%20--%20Trails%20BEST%20IN%20SHOW%20(1)%201.webp", 
            altText: "forest trail", 
            description: "A quiet forest trail invites exploration and connection with nature." 
        },
        { 
            pictureName: "Trees in Fog", 
            pictureURL: "https://media.wired.com/photos/60abf2c7f83409ce52d3c67f/master/pass/Science_forest_1167053895.jpg", 
            altText: "trees in fog", 
            description: "A mysterious fog envelops the trees, creating an ethereal and magical atmosphere." 
        },
        { 
            pictureName: "Forest Trail", 
            pictureURL: "https://www.businesstoday.me/wp-content/uploads/2021/02/nature.jpg", 
            altText: "forest trail", 
            description: "A calm forest trail beckons adventurers to experience its tranquil beauty." 
        },
        { 
            pictureName: "Bird", 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyVvTHb9Hx5qe96czMeeiOvTi3gmPudf4xw&s", 
            altText: "bird", 
            description: "A bird perched on a branch, singing a song of the wild." 
        },
        { 
            pictureName: "Lavender", 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwYnLfmfW_1a6pt6fqsuS1kEihm5cFqahyA&s", 
            altText: "lavender", 
            description: "A field of lavender sways gently in the breeze, releasing its calming fragrance." 
        },
        { 
            pictureName: "Rock Circle", 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpQwTbUBq_RfXUlGLbRP_-RxqtqP0yK5a-A&s", 
            altText: "Rock circle", 
            description: "A mystical circle of rocks, potentially a place of ancient significance." 
        },
        { 
            pictureName: "Fall Trees", 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdTRii-rDiegqpD7Qb9BXUQz9V-AG3y7vZA&s", 
            altText: "fall trees", 
            description: "The brilliant colors of fall transform the forest into a painter's palette." 
        },
        { 
            pictureName: "Pond / Lake", 
            pictureURL: "https://images.squarespace-cdn.com/content/v1/57069f3a40261d83d0646673/c833a6e3-0b16-4c5f-a17a-ab0363a2229f/tempImageMFU0sE.jpg", 
            altText: "pond/ lake", 
            description: "A calm pond or lake reflects the beauty of the surrounding trees and skies." 
        },
        { 
            pictureName: "Fall Trees", 
            pictureURL: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg", 
            altText: "fall trees", 
            description: "A scenic road lined with fall trees, inviting you to take a peaceful drive." 
        },
        { 
            pictureName: "Lake", 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLAZZb0Mi5fBmOEjE8yDtosm0FJFvYFh-mA&s", 
            altText: "lake", 
            description: "A tranquil lake setting, perfect for a relaxing afternoon surrounded by nature." 
        }
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