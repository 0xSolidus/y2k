import "./styles/App.css"

import video from "./media/vid1.mp4";
import video2 from "./media/vid2.mp4";
import star from "./media/star.gif";

import X from "./media/X.svg";



import { useEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar";
import { FloatingModal } from "./FloatingModal";
import { Popup } from "./Popup";

function App() {

  const [modalOpen, setModalOpen] = useState(true)
  const [floatingModalOpen, setFloatingModalOpen] = useState(false)
  const [secondFloatingModalOpen, setSecondFloatingModalOpen] = useState(false)

   const containerRef = useRef<HTMLDivElement>(null);
   const modalRef = useRef<HTMLDivElement>(null);
   const secondModalRef = useRef<HTMLDivElement>(null);


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

      <div className="container" ref={containerRef}>
        <FloatingModal
          video={video}
          setModalOpen={setFloatingModalOpen}
          modalOpen={floatingModalOpen}
          containerRef={containerRef}
          modalRef={modalRef}
        />

        <div id="main-modal" className={`modal ${!modalOpen ? "hidden" : ""}`}>
          <header>
            <div>$Y2K</div>
            <div className="icons">
              <img src={X} onClick={() => setModalOpen(false)}></img>
            </div>
          </header>
          <video src={video} autoPlay controls muted></video>
        </div>

        <video id="main-vid" src={video2} autoPlay muted loop={true}></video>

        <Popup />

        <FloatingModal
          video={video}
          setModalOpen={setSecondFloatingModalOpen}
          modalOpen={secondFloatingModalOpen}
          containerRef={containerRef}
          modalRef={secondModalRef}
        />

        <a href="/soon">
          <img className="star" src={star} />
        </a>
      </div>
    </>
  );
}

export default App;
