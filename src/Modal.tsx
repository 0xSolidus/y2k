import React from 'react'

import X from "./media/X.svg";


export const Modal = ({
  video,
  modalOpen,
  setModalOpen,
//   isCenterModal,
}: {
  video: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   isCenterModal?: boolean
}) => {
  return (
    <div
      className={`modal floater ${modalOpen ? "show" : ""}   ${
        !modalOpen ? "hidden" : ""
      }`}
    >
      <header>
        <div>Y2K</div>
        <div className="icons">
          <img src={X} onClick={() => setModalOpen(false)}></img>
        </div>
      </header>
      <video src={video} autoPlay controls muted></video>
    </div>
  );
};
