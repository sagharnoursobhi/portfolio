import '../asset/styles/landingPage.scss';

export default function LandingPage() {
    return (
        <div className="landing-container">
            <div className="heading-container d-flex justify-content-around align-items-center">
                <div className="content-container">
                    <div className='introduction'>Welcome to my site</div>
                    <h2 className="title-first">Hi! I am Saghar</h2>
                    <div className="title-second">Frontend <span>Developer</span></div>
                    <div className="description">
                        I like to craft solid and scalable frontend products with great user experiences.
                    </div>
                </div>
                <div className="image-container">
                    <div className="photo-container"><img src={require('../asset/images/photo.png')} alt="profile" /></div>
                    <div className="rec-container"></div>
                </div>
            </div>
        </div>
    )
}