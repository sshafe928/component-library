import '../pages/css/ProfilePage.css';
import ProfileCard from '../components/Profile';

function ProfilePage() {
    console.log('Rendering ProfilePage');
    return (
        <div className="profile">
            <ProfileCard/>
        </div>
    );
}

export default ProfilePage;