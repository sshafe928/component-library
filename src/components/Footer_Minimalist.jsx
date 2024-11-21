import '../pages/css/MinimalFooter.css'

const MinimalFooter = ({
    logo = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1732171177/Screenshot__54_-removebg-preview_bcqxfi.png" ,

    socials ={Instagram: 'link', Github:'link', Facebook: 'link', linkedin: 'link'},
}) => {
    return (
        <footer class="footer">
    <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
    </div>

    <img src={logo} width="350" alt="Logo" className="logo" />

    <ul class="social-icon">
        <li class="social-icon__item">
            <a class="social-icon__link" href={socials.Facebook}>
                <i class="fa fa-facebook"></i>
            </a>
        </li>
        <li class="social-icon__item">
            <a class="social-icon__link" href={socials.Github}>
                <i class="fa fa-github"></i>
            </a>
        </li>
        <li class="social-icon__item">
            <a class="social-icon__link" href={socials.linkedin}>
                <i class="fa fa-linkedin"></i>
            </a>
        </li>
        <li class="social-icon__item">
            <a class="social-icon__link" href={socials.Instagram}>
                <i class="fa fa-instagram"></i>
            </a>
        </li>
    </ul>
    <ul class="menu">
        <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
        <li class="menu__item"><a class="menu__link" href="#">About</a></li>
        <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
        <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
        <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2024 Sabrina Shafer | All Rights Reserved</p>
    </footer>


    )
}

export default MinimalFooter;