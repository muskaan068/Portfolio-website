import React from "react";
import "../Resume/Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("MUSKAAN-YADAV_RESUME.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MUSKAAN-YADAV_RESUME.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h1>Resume</h1>
            <button className="btn_shadow" onClick={onButtonClick}>
              <h2>Download PDF </h2>
            </button>
          </div>

          <div className="content-section mtop d_flex">
            <div className="left">
              <div className="heading">
                <h1>Education </h1>
              </div>

              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="left">
              <div className="heading">
                <h1>Work Experience</h1>
              </div>

              <div className="content">
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
