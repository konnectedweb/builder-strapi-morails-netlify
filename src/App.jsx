import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// @builder.io
import { builder } from "@builder.io/react";
// @moralis
import { MoralisProvider } from "react-moralis";
// @pages
import Home from "./pages/home";

builder.init("166036aec7f845c3a2523ae75b2d3166");

function App() {
  return (
    <MoralisProvider
      serverUrl="https://5untbynbshk2.usemoralis.com:2053/server"
      appId="DAm7expO5NrZGXfiiMpNKk2gLP01dch34Q66Wtb2"
    >
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MoralisProvider>
  );
}

export default App;
