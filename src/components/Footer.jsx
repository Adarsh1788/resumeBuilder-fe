import React from "react";
import "./footeer.css";
const Footer = () => {
  return (
    <>
      <div className="top-content text-center p-5">
        <h1>Contact Us</h1>
        <h3 className="mt-4 fs-5">
          {" "}
          <i class="fa-solid fa-envelope"></i>rbuilder@gmail.com
        </h3>

        <h3 className="fs-5">
          {" "}
          <i class="fa-solid fa-mobile"></i>9898989898
        </h3>

        <h1 className="fs-2 mt-4">Connect with Us</h1>
        <div className="fs-4 mt-3">
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-instagram ms-2"></i>
          <i class="fa-brands fa-linkedin ms-2"></i>

        </div>
        <h3 className="fs-5">Designed & built with ❤️ using React</h3>
      </div>
    </>
  );
};

export default Footer;
