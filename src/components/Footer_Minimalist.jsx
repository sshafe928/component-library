const MinimalFooter = ({
    logo = //uploaded cloudinary logo ,
    services = {Shipping:'link', returns_exchanges: 'link', contact: 'link' },
    socials ={Instagram: 'link', Github:'link', Facebook: 'link'},
    info ={privacy: 'privacy', about: 'link', terms_of_service: 'terms of service link' }
}) => {
    return (
        <div className="footer">
            <div className="logo">{logo}</div>
            <div className="about">
                <ul>
                    <li className="Shipping">{services.Shipping}</li>
                    <li className="returns_exchanges">{services.returns_exchanges}</li>
                    <li className="conact">{services.contact}</li>
                </ul>
            </div>
            <div className="socials">
                <ul>
                    <li className="insta">{socials.Instagram}</li>
                    <li className="github">{socials.Github}</li>
                    <li className="facebook">{socials.Facebook}</li>
                </ul>
            </div>
            <div className="services">
                <ul>
                    <li className="privacy">{info.privacy}</li>
                    <li className="about">{info.about}</li>
                    <li className="terms_of_service">{info.terms_of_service}</li>
                </ul>
            </div>

        </div>
    )
}

export default MinimalFooter;