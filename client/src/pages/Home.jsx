import React from "react";
import AluminiSection from "../components/AluminiSection";
import CardSection from "../components/CardSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ReviewsSection from "../components/ReviewsSection";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Main />
      </div>
      <CardSection />
      <AluminiSection />
      <ReviewsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
