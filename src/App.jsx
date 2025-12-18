import React, { useState } from "react";
import { Header } from "./Header/header.jsx";
import { Body } from "./Body/body.jsx";
import { Footer } from "./Footer/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sky-100">
      <Header />
      <main className="flex-1">
        <Body />
      </main>
      <Footer className="items-end" />
    </div>
  );
};

export default App;
