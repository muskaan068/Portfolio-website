import React from "react";

// import Features from "./component/Features/Features"
// import Home from "./component/Hero/Home"
// import Portfolio from "./component/Portfolio/Portfolio"
// import Resume from "./component/Resume/Resume"
// import Testimonial from "./component/Testimonial/Testimonial"
// import Blog from "./component/Blog/Blog"
// import Contact from "./component/Contact/Contact"
// import Footer from "./component/Footer"
import "./App.css";
import Header from "./component/Head/Header";
import Home from "./component/Home/Home";
import Resume from "./component/Resume/Resume";
import Portfolio from "./component/Portfolio/Portfolio";
import Features from "./component/Features/Features";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Features></Features>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
      {/* <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
