import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// @builder.io
import { builder } from "@builder.io/react";

// @component
import CatchallPage from "./components/CatchallPage";

builder.init("166036aec7f845c3a2523ae75b2d3166");

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/nft" element={<CatchallPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
