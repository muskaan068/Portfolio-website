import React from "react";
import "../Home/Home.css";
import hero from "../pic/hero1.png";

import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY PORTFOLIO</h3>
            <h1>
              Hi, I’m <span>Muskaan Yadav</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Coder.", " Web Developer.", " Designer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I am passionate about Web Development,Data Analytics , Android
              Development and Graphic Designing. I am continually searching for
              new ways to stay updated of industry developments and emerging
              technologies.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button>
                    <a href="https://www.linkedin.com/in/muskaan-yadav-068/">
                      <FaLinkedin size="40px" />
                    </a>
                  </button>

                  <button>
                    <a href="https://github.com/muskaan068">
                      <FaGithub size="40px" />
                    </a>
                  </button>

                  <button>
                    <a href="mailto:muskaany047@gmail.com">
                      <FaMailBulk size="40px" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
