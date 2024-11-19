import { useState } from 'react'
import '../pages/css/Profile.css'

const ProfileCard = ({
  profileImage = 'https://via.placeholder.com/150', 
  firstName, 
  lastName, 
  email, 
  socialLinks = {}
}) => {
    const [showInfo, setShowInfo] = useState(false);
    const linkEntries = Object.entries(socialLinks || {});

    return (
        <div className="profile">
            <header>
                <img 
                    src={profileImage} 
                    alt={`${firstName} ${lastName}`} 
                    className="profile-image" 
                />
                <p>{firstName} {lastName}</p>
            </header>
            <h1>{email}</h1>
            <div className="social-links">
                {linkEntries.length > 0 ? (
                    linkEntries.map(([platform, url], index) => (
                        <a 
                            key={index} 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-link"
                        >
                            {platform}
                        </a>
                    ))
                ) : (
                    <p>No social links available.</p>
                )}
            </div>
        </div>
    )
}

export default ProfileCard;