import '../pages/css/ProfilePage.css';
import ProfileCard from '../components/Profile';

function ProfilePage() {
    console.log('Rendering ProfilePage');
    return (
        <>
        <a href="/"><button className="btn" id="back">Back to Home</button></a>
        <div className="profile">
            <ProfileCard/>
        </div>
        </>
    );
}

export default ProfilePage;