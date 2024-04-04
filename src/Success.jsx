import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const dismiss = () => navigate("/")
  return (
    <div className="success">
      <img className="success-icon"
        src='../src/assets/images/icon-success.svg'
        alt='success-icon'
      />
      <h1 className="success--heading">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span className="success--email">ash@loremcompany.com.</span> Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className="btn btn-dark" onClick={dismiss}>Dismiss message</button>
    </div>
  );
}
