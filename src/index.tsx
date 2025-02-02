import { useState } from "react";
import "./App.css";

const phrase = [
  "No",
  "Are you sure?",
  "Really Sure Athan?",
  "Pookie Please po",
  "Don't do this to me",
  "Di mo nako Lab? I'm gonna cry...:<",
  "You're breaking my heart :<",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img 
            alt="bears kissing"
            src="https://gifdb.com/gif/muah-498-x-498-gif-krwgz86rpgo5nsaw.html"
          />
          <div className="text">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/gif/sweet-man-love-you-bear-hearts-t8z6ypgryastx9ft.html"
          />

          <div>Will you be my Valentine Mr. Romero?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize 
              onClick={() => setYesPressed(true)}
            >
              Yes 
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}