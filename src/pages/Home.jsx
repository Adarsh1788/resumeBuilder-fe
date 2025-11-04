import React from "react";

import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
   
      <div className="home-bg-img">
        <div className="home-content">
          <h1 className="home-heading"> Designed to get hired.</h1>
          <p className="">
            Your skills, your story, your next job — all in one.
          </p>
          <Link to="/makeresume">
            <button className="home-button">MAKE YOUR RESUME</button>
          </Link>
        </div>
      </div>
      <div className="text-center mt-5">
        <h1>Tools</h1>
      </div>
      <div className="d-flex">
        <div className="ms-5">
          <h2>Resume</h2>
          <p>Create unlimited new resumes and easily edit them afterwards.</p>
          <h2>Cover Letters</h2>
          <p>Easily write professional cover letters.</p>
          <h2>Jobs</h2>
          <p>Automatically receive new and relevant job postings.</p>
          <h2>Applications</h2>
          <p>
            Effortlessly manage and track your job applications in an organized
            manner.
          </p>
        </div>

        <div>
          <img
            className="tools-img"
            src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
          />
        </div>
      </div>
      <div className="home-bg-3"></div>
      <div className="text-center p-5">
        {" "}
        <h1>Testimony</h1>
      </div>
      <div className=" d-flex justify-content-between align-items-center ms-5 container">
        <div>
          <h2>Trusted by professionals worldwide.</h2>
          <p>
            At LiveCareer, we don't just help you create résumés — we help you
            land the job.Whether you're a <br /> seasoned professional or just
            starting out, our tools are designed to get results.
          </p>
          <p>
            In fact, users who used LiveCareer reported getting hired an average
            of 48 days faster.
          </p>
          <p>
            {" "}
            Join thousands of job-seekers who’ve fast-tracked their careers with
            a résumé that truly stands out.
          </p>
        </div>


<div className="row container">

  <div clas></div>



</div>


        <div className="row ">
          <div className="row container">
            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>

            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>

            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>

            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>
          </div>
          <div className="row container">
            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>

            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>

            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>

            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>
          </div>
          <div className="row container ">
            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>

            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>

            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>

            <div className="col-3">
              {" "}
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </div>
          </div>
      
        </div>
      </div>
      
    </>
  );
};

export default Home;
