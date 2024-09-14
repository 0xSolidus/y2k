import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Soon } from "./Soon";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="/soon" element={<Soon />} />
      </Routes>
    </BrowserRouter>
  );
};
