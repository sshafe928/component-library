import {useState} from 'react'
const Profile = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return(
        <article className="profile">
            <header>
                <h4>{title}</h4>
            </header>
            <p>{info}</p>
            </article>
    )
}

export default Profile;
