import React from "react";
import Banner from "../components/Banner";
import BestSellingItem from "../components/BestSellingItem";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Offer from "../components/Offer";
import Qualities from "../components/Qualities";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Banner />
      <ImageSlider />
      <BestSellingItem />
      <Offer />
      <Qualities />
    </>
  );
};

export default HomeScreen;
