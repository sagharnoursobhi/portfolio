import '../asset/styles/landingPage.scss';

export default function LandingPage() {
    return (
        <div className="landing-container">
            <div className="heading-container d-flex justify-content-around align-items-center">
                <div className="content-container">
                    <h2 className="title">Hi! I am Saghar</h2>
                    <div className="description">Frontend <span>Developer</span></div>
                </div>
                <div className="image-container">
                    <div className="photo-container"><img src={require('../asset/images/photo.png')} alt="profile" /></div>
                    <div className="rec-container"></div>
                </div>
            </div>
        </div>
    )
}