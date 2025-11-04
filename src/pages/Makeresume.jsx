import React from "react";

import "./makeresume.css";
import { FaFileAlt } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Makeresume = () => {
  return (
    <>
      <h1 className="text-center mt-5">
        Create a job-winning Resume in minutes
      </h1>

      <div className="d-flex">
        <div className=" firstbox  container text-center mt-5 py-5 ms-5 border shadow">
          <div className="doc">
            {" "}
            <FaFileAlt />
          </div>
          <h3>Add your information</h3>
          <p>Add pre-written examples to each section</p>
          <h3>step 1</h3>
        </div>
        <div className=" secondbox container text-center mt-5 ms-5 me-5 py-5 border shadow">
          <div className="doc2">
            {" "}
            <FaFileArrowDown />
          </div>
          <h3>Download your Resume</h3>
          <p>Download and start applying</p>
          <h3>step 2</h3>
        </div>
      </div>
      <div className="text-center my-5">
        <Link to={"/form"}>
          <button className="btn-start">LETS START</button>
        </Link>
      </div>
    </>
  );
};

export default Makeresume;
