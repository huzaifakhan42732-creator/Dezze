import { useEffect } from "react";
import "./deze.css";

export default function Dezze() {
  useEffect(() => {
    const audio = new Audio("./music.mp3"); // put your mp3 in public folder
    audio.volume = 0.4;
    audio.loop = true;
    audio.play().catch(() => {}); // avoid autoplay errors
  }, []);

  return (
    <div className="page">

      {/* Floating particles */}
      <div className="particles"></div>

      <div className="hero fadeIn">
        <h1 className="glow">Dezze</h1>
        <p>Best Friend In The Dark</p>
      </div>
<div className="notes-section">
  <div className="note-card">
    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" />
    <div className="note-text">
      <h3>Lonely Nights</h3>
      <p>“Even in darkness, your soul shines brighter than the city lights.”</p>
    </div>
  </div>

  <div className="note-card">
    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" />
    <div className="note-text">
      <h3>Silent Roads</h3>
      <p>“Some paths are walked alone, but the heart feels accompanied.”</p>
    </div>
  </div>

  <div className="note-card">
    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131" />
    <div className="note-text">
      <h3>Soft Souls</h3>
      <p>“Cats teach us what humans sometimes forget: patience and love.”</p>
    </div>
  </div>
</div>

      <div className="gallery fadeIn">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" />
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" />
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023" />
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1493238792000-8113da705763" />
        </div>
      </div>

      <div className="quotes fadeIn">
        <p>“In a world full of noise, you chose silence.”</p>
        <p>“You don’t shine loud — You glow in the dark.”</p>
        <p>“Friendship is not about time, it’s about loyalty.”</p>
        <p>Dezze — a rare soul I’m lucky to know
        </p>
      </div>

      <div className="cats fadeIn">
        <h2>Soft Souls</h2>
        <p>“Cats understand what humans never try to.”</p>

        <div className="cat-gallery">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131" />
          <img src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4" />
        </div>
      </div>

      <div className="healing fadeIn">
        <p>“Some people come into our lives not to stay…”</p>
        <p>“but to teach us how strong we really are.”</p>
        <p>“You didn’t lose love — you escaped pain.”</p>
      </div>

      <div className="secret fadeIn">
        <p>
          If no one told you today…  
          you matter.  
          And your darkness is beautiful.
        </p>
        <div className="final-note-section">
  <div className="final-note">
    <h2>“Even in the deepest darkness, you are the brightest star.”</h2>
    <p>— Huzaifa</p>
  </div>
</div>

        
      </div>

    </div>
  );

}