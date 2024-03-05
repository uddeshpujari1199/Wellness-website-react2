import React from "react";
import "./Body.css";
import { Button } from "./Button";

export const Body = () => {
  return (
    <>
      <div className="Heading-Ele">
        <div>
          <h1>Think Health. Think Maassage.</h1>
        </div>
        <div>
          <p>
            We are open 9am to 6pm; Kindly through sunday.If you would like to
            schedule an appointment with us,<br></br>please call us at
            987-675-3244 today!
          </p>
        </div>
        <div className="body-btn">
          <Button backgroundColor={"#E30B5C"} color={"#ffffff"}>
            Learn More About Us
          </Button>
          <Button backgroundColor={"#E30B5C"} color={"#ffffff"}>
            Contact Us Today
          </Button>
        </div>
      </div>
      <div className="body-para">
        <p style={{
            color:'#E30B5C'
        }}>
          How had she been so wrong? All her instincts and intuition completely
          failed her for the first time in her life. She had so heavily relied
          on both when  so simple as this, how could she make decisions about really important
          things taking place in her life? She wasn't sure what she should do
          next.
        </p>
        <p>
          making decisions up until this moment and she felt a seismic shift
          take place in her self-confidence. If she could be so completely wrong
          about something How had she been so wrong? All her instincts and intuition completely
          failed her for the first time in her life. She had so heavily relied
          on both when
        </p>
        <p>
          so simple as this, how could she make decisions about really important
          things taking place in her life? She wasn't sure what she should do
          next. making decisions up until this moment and she felt a seismic shift
          take place in her self-confidence. If she could be so completely wrong
          about something How 
        </p>
      </div>
      <hr></hr>
    </>
  );
};
