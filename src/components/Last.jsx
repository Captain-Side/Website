import "./Last.css";
import send_img from "../assets/img/Send.webp";

const Last = () => {
  return (
    <div className="last">
      <h1 className="subscribe-for-more">subscribe for more updates</h1>
      <div className="last-inner">
        <div className="email-input-parent">
          <form>
          <input type="email" placeholder="Enter Email Adress" required/>
            <div className="email-input-child" />
          </form>
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