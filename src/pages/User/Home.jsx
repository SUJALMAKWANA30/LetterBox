import React from "react";
import Header from "../../components/User/Header.jsx";
import Hero from "../../components/User/Hero.jsx";
import HowItWorks from "../../components/User/HowItWorks.jsx";
import WhyChooseUs from "../../components/User/WhyChooseUs.jsx";
import Testimonials from "../../components/User/Testimonials.jsx";
import Footer from "../../components/User/Footer.jsx";

function Home() {
    return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Home;