import emailicon from "../images/email.png"
import linkedinicon from "../images/linkedin.png"

export default function Main() {
    
    return (
        <div className="main--container"> 
            <h3 className="main--heading main--content">
                Song Wei Tyan
            </h3>
            <h4 className="main--h4--one main--content">
                Fake Frontend Developer
            </h4>
            <span className="main--span-two main--content">
                Website Link
            </span>

            <div className="btn--class">
                <button className="btn--email">
                    <img src={emailicon} className="emailimg"/>Email
                </button>
                <button className="btn--linkedin">
                    <img src={linkedinicon} className="linkedinimg"/> LinkedIn
                </button>
            </div>

            <div className="main--content--text">
                <h3>About</h3>
                <p>This is about ME</p>
                <h3>Interests</h3>
                <p>This is my Interests</p>
            </div>
        
        </div>
    );
}