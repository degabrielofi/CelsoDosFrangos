import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "pages/Home";
import History from "pages/History";
import Proposals from "pages/Proposals";
import ProposalsPage from "pages/ProposalsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/historia" element={<History />} />
        <Route path="/propostas" element={<Proposals />} />
        <Route path="/propostas/:id" element={<ProposalsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
