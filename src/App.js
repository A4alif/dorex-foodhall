import "./App.css";
import CardsHeadline from "./components/CardsHeadline";
import Food from "./components/Food";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsHeadline />
      <Food />
    </>
  );
}

export default App;
