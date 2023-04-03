import SocialMediaFloatButton from "./SocialMediaFloatButton";

const Footer = () => {
    return(
        <div className="footer-socials">
            <SocialMediaFloatButton social="facebook" bgColor="#3b5998"/>
            <SocialMediaFloatButton social="twitter" bgColor="#55acee"/>
            <SocialMediaFloatButton social="github" bgColor="#333333"/>
            <SocialMediaFloatButton social="instagram" bgColor="#ac2bac"/>
        </div>
    )
}

export default Footer