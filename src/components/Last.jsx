import "./Last.css";
import send_img from "../assets/img/Send.webp";

const Last = () => {
  return (
    <div className="last">
      <h1 className="subscribe-for-more">subscribe for more updates</h1>
      <div className="last-inner">
        <div className="email-input-parent">
          <div className="email-input">
            <div className="enter-email-adress">Enter Email Adress</div>
            <div className="email-input-child" />
          </div>
          <div className="frame-wrapper">
            <button className="vector-parent">
              <img className="frame-child" alt="" src={send_img} />
              <div className="send">SEND</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;