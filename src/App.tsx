import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Enumerals } from "./components/Enumerals";
import { Features } from "./components/Features";
import { Depoiment } from "./components/Depoiment";
import { Marcs } from "./components/Marcs";
import { CallAction } from "./components/CallAction";
import { Footer } from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Enumerals />
      <Features />
      <Depoiment />
      <Marcs />
      <CallAction />
      <Footer />
    </>
  );
}

export default App;
