import React, { useEffect, useRef } from 'react'

import X from "./media/X.svg";

export const FloatingModal = ({
  video,
  modalOpen,
  setModalOpen,
  containerRef,
  modalRef
}: {
  video: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef: React.RefObject<HTMLDivElement>;
  modalRef: React.RefObject<HTMLDivElement>;
}) => {

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!modalRef.current || !containerRef.current) return;

    const modal = modalRef.current;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
      coords.current.lastX = modal.offsetLeft;
      coords.current.lastY = modal.offsetTop;
    };

    const onMouseUp = () => {
      isClicked.current = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      // Ensure that the modal stays within the container boundaries if needed
      const containerRect = container.getBoundingClientRect();
      const modalRect = modal.getBoundingClientRect();

      // Adjust position to be within container bounds
      const newX = Math.max(
        0,
        Math.min(nextX, containerRect.width - modalRect.width)
      );
      const newY = Math.max(
        0,
        Math.min(nextY, containerRect.height - modalRect.height)
      );

      modal.style.left = `${newX}px`;
      modal.style.top = `${newY}px`;
    };

    modal.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseleave", onMouseUp);

    return () => {
      modal.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseUp);
    };
  }, [containerRef, modalRef]);

  return (
    <div
      ref={modalRef}
      className={`modal floater ${modalOpen ? "show" : ""}   ${
        !modalOpen ? "hidden" : ""
      }`}
    >
      <header>
        <div>$Y2K</div>
        <div className="icons">
          <img src={X} onClick={() => setModalOpen(false)}></img>
        </div>
      </header>
      <video src={video} autoPlay controls muted loop></video>
    </div>
  );
};
