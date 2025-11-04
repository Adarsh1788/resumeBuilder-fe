import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import StepperComponent from "../components/StepperComponent";
import PreviewComponent from "../components/PreviewComponent";
 

const Form = () => {


const[resumeData,setResumeData]=useState({
fullName:"",
jobTitle:"",
location:"",
email:"",
phoneNumber:"",
gitHub:"",
linkedIn:"",
portFolio:"",
education:"",
courseName:"",
collegeName:"",
university:"",
yearOfPassout:"",
jobOfWork:"",
companyName:"",
locationOfWork:"",
durationOfWork:"",
summary:"",
skills:[]
})

  return (
    <>
      <Row>
        <Col lg={6} sm={12}>
         <StepperComponent setResumeData={setResumeData} resumeData={resumeData}/>
        </Col>
        <Col lg={6} sm={12}>
          <PreviewComponent resumeData={resumeData}/>
        </Col>
      </Row>
    </>
  );
};

export default Form;
