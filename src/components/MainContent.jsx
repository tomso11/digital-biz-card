import SocialMediaButtonLinkedin from "./SocialMediaButtonLinkedin"
import SocialMediaButtonEmail from "./SocialMediaButtonEmail"

const MainContent = () => {
    return(
        <div className="main-content-body">
            <div className="main-content-header">
                    <h1>Tom So</h1>
                    <h3>Tinkerer</h3>
                    <a href="https://tom.so/">tom.so</a>
                    <div className="main-header-buttons">
                        <SocialMediaButtonEmail/>
                        <SocialMediaButtonLinkedin/>
                    </div>
            </div>
            <div className="main-content-info">
                <h4>About</h4>
                <p>I like to play around with silicon things</p>
                <h4>Interests</h4>
                <p>Video games and sweets</p>
            </div>
        </div>
    )
}

export default MainContent