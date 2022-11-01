import React from "react";
import Header from "../../components/organisms/Header/Header";
import Hero from "../../components/templates/Hero/Hero";
import Compainies from "../../components/templates/Compainies/Compainies";
import Branding from "../../components/templates/Branding/Branding";
import Custome from "../../components/templates/Custome/Custome";
import Testimonial from "../../components/templates/Testimonial/Testimonial";
import Contact from "../../components/templates/Contact/Contact";
import Footer from "../../components/organisms/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Compainies />
      <Branding />
      <Custome />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
