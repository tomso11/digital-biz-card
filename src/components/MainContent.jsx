import SocialMediaButton from "./SocialMediaButton"

const MainContent = () => {
    return(
        <div className="main-content-body">
            <div className="main-content-header">
                    <h1>Tom So</h1>
                    <h3>Tinkerer</h3>
                    <a href="https://tom.so/">tom.so</a>
                    <br />
                    <SocialMediaButton/>
                    <SocialMediaButton/>
            </div>
            <div className="main-content-info">
                <h3>About</h3>
                <p>I like to play around with silicon things</p>
                <h3>Interests</h3>
                <p>Video games and sweets</p>
            </div>
        </div>
    )
}

export default MainContent