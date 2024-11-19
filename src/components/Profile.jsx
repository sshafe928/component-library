const ProfileCard = ({
    profileImage = "https://cloudinary.com/150", 
    firstName = "John", 
    lastName = "Doe", 
    email = "johndoe@example.com", 
    socialLinks = {
        github: "https://github.com/johndoe", 
        instagram: "https://instagram.com/johndoe", 
        facebook: "https://facebook.com/johndoe"
    }
}) => {
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
                {socialLinks.github && (
                    <a href={socialLinks.github} ><p>Github</p></a>
                )}
                {socialLinks.instagram && (
                    <a href={socialLinks.instagram}><p>Instagram</p></a>
                )}
                {socialLinks.facebook && (
                    <a href={socialLinks.facebook}><p>Facebook</p></a>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;