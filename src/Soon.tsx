import { Navbar } from "./Navbar"
import Y2K from "./media/Y2K.jpg"
import "./styles/soon.css"

import star from "./media/star.gif"

export const Soon = () => {
  return (
    <>
      <Navbar />
      <main>
        <img src={Y2K} />

        <img className="star" src={star} />
      </main>
    </>
  );
}
