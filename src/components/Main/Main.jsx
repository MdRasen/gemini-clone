import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>What is the weather today?</p>
            <img src={assets.compass_icon} alt="compass_icon" />
          </div>
          <div className="card">
            <p>Briefly summarize the latest tech news</p>
            <img src={assets.bulb_icon} alt="bulb_icon" />
          </div>
          <div className="card">
            <p>Brainstrom names for a new company</p>
            <img src={assets.message_icon} alt="message_icon" />
          </div>
          <div className="card">
            <p>What is React JS used for?</p>
            <img src={assets.code_icon} alt="code_icon" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img src={assets.send_icon} alt="send_icon" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
