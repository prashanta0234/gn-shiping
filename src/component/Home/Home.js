import React from "react";
import Achivment from "./Achivment/Achivment";
import Banner from "./Banner/Banner";
import HomeServices from "./HomeServices/HomeServices";
import Why from "./WhyChooseUs/Why";
import Process from "./WorkingProcess/Process";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <Process></Process>
      <Achivment></Achivment>
      <Why></Why>
    </div>
  );
};

export default Home;
