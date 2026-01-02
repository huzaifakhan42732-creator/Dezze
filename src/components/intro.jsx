import "./intro.css";

export default function Intro({ onEnter }) {
  return (
    <div className="intro">
      <div className="intro-box">
        <h1>For Dezze</h1>
        <p>The girl who survives the dark in silence</p>
        <button onClick={onEnter}>Enter</button>
      </div>
    </div>
  );
}
