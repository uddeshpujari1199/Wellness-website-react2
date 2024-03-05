import React from "react";
import { Navbar } from "../componet/Navbar";
import './HomeScreen.css'
import img from './../img/yoga.jpg'
import { Body } from "../componet/Body";
import { Footer } from "../componet/Footer";
function HomeScreen() {
  return (
    <>
      <div className="Heading">
        <h1 style={{ color: "#E30B5C" }}>Family Wellness</h1>
        <span>Massage Therapy</span>
      </div>
      <Navbar />
      <img src={img} alt="yoga" className="yoga-img"></img>
      <Body/>
      <Footer/>
    </>
  );
}

export default HomeScreen;
