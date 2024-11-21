import "../pages/css/ProfilePage.css"
import 'font-awesome/css/font-awesome.min.css';

const ProfileCard = ({
    profileImage = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1732083205/cute_cat_chsehj.jpg", 
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
        
        <div className="wrap">

<div className="card">
    <div className="card-liner">
    <figure><img src={profileImage} alt={`${firstName} ${lastName}`} classNameName="profile-image"/>       </figure>
    <div className="card--social">
        <ul className="social-links">
            
            
            {socialLinks.facebook && (
                <li className="facebook">
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                    </a>
                </li>
            )}

            {socialLinks.github && (
                <li className="github">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
                </li>
            )}

        </ul>
    </div>
    <div className="card--title">
        <h3>{firstName} {lastName}</h3>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}><p>{email}</p></a>
    </div>
    <div className="card--desc">
        <hr />
        <p>Coffee, code, repeat... he doesn't eat food, and only stops to defend the table tennis crown.</p>
    </div>
        <div className="card--btn">
        <a href="#0">
            <span className="moreinfo"><i className="fa fa-info-circle"></i> More Info</span>
            <span className="fullprof">View Full Profile</span>
        </a>
        </div>
    </div>
</div>

</div>
    );
};





export default ProfileCard;