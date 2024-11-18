import {useState} from 'react'
const Profile = ({profileImage, firstName, lastName, email, socialLinks}) => {
    const [showInfo, setShowInfo] = useState(false);
    return(
        <div className="profile">
            <header>
                <h4>{profileImage}</h4>
                <p>{firstName},{lastName}</p>
            </header>
            <h1>{email}</h1>
            <div className="social-links">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                ))}
        </div>
        </div>
    )
}

export default Profile;


