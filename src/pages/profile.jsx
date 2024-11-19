import '../pages/css/ProfilePage.css';
import ProfileCard from '../components/ProfileCard';

function ProfilePage() {
    console.log('Rendering ProfilePage');
    return (
        <div className="profile">
            <ProfileCard
                profileImage="https://example.com/profile.jpg"
                firstName="John"
                lastName="Doe"
                email="johndoe@example.com"
                socialLinks={{
                    github: "https://github.com/johndoe",
                    instagram: "https://instagram.com/johndoe"
                }}
            />
        </div>
    );
}

export default ProfilePage;