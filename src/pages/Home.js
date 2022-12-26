import React from "react";
import CardsHeadline from "../components/CardsHeadline";
import Categories from "../components/Categories";
import Food from "../components/Food";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <CardsHeadline />
      <Food />
      <Categories />
    </>
  );
};

export default Home;
