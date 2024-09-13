import "./App.css";

import video from "./media/vid1.mp4";
import star from "./media/star.gif";

import X from "./media/X.svg";



import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Modal } from "./Modal";

function App() {

  const [modalOpen, setModalOpen] = useState(true)
  const [floatingModalOpen, setFloatingModalOpen] = useState(false)
  const [secondFloatingModalOpen, setSecondFloatingModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFloatingModalOpen(true);
    }, 1000); 

    const secondTimer = setTimeout(() => {
      setSecondFloatingModalOpen(true);
    }, 2000); 

    return () => {clearTimeout(timer)
      clearTimeout(secondTimer)
    }; 
  }, []);


  return (
    <>
      <Navbar />

      <div className="container">
        <Modal
          video={video}
          setModalOpen={setFloatingModalOpen}
          modalOpen={floatingModalOpen}
        />

        <div className={`modal ${!modalOpen ? "hidden" : ""}`}>
          <header>
            <div>Y2K</div>
            <div className="icons">
              <img src={X} onClick={() => setModalOpen(false)}></img>
            </div>
          </header>
          <video src={video} autoPlay controls muted></video>
        </div>

        <Modal
          video={video}
          setModalOpen={setSecondFloatingModalOpen}
          modalOpen={secondFloatingModalOpen}
        />

        <a href="/soon">
          <img className="star" src={star} />
        </a>
      </div>
    </>
  );
}

export default App;
