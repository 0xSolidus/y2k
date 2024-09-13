import "./App.css";

import video from "./media/vid1.mp4";
import star from "./media/star.gif";

import X from "./media/X.svg";



import { useState } from "react";

function App() {

  const [modalOpen, setModalOpen] = useState(true)

  return (
    <>
      <div className="container">
        <div className={`modal ${!modalOpen ? "hidden" : ""}`}>
          <header>
            <div>Y2K</div>
            <div className="icons">
              <img src={X} onClick={() => setModalOpen(false)}></img>
            </div>
          </header>
          <video src={video} autoPlay controls muted></video>
        </div>
      <img className="star" src={star} />
      </div>
    </>
  );
}

export default App;
