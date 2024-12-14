import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import QRScanner from "./components/QRScanner/QRScanner";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <QRScanner />
        </main>
      </div>
    </div>
  );
}
