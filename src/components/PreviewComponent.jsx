import React from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PreviewComponent = ({ resumeData }) => {
  const downloadClick = async () => {
    // get paper elemnts by using the dom methods

    let paperElement = document.getElementById("result");

    //  creates the canvas image of thet elament m html2canvas returns a promise
    // so handled with async and await , arguments scale -2 refers to increse the
    // resolution to 2x quality
    let paperCanvas = await html2canvas(paperElement, { scale: 2 });

    // convert that canvas into a base64 as an png

    let paperImageData = paperCanvas.toDataURL("image/png");
    console.log(paperImageData);

    // initialization of pdf p- portrait , mm -millimeter , a4- paper size

    let pdf = new jsPDF("p", "mm", "a4");

    // for taking the pdf width
    let pdfWidth = pdf.internal.pageSize.getWidth();

    let pdfHeight = (paperCanvas.height * pdfWidth) / paperCanvas.width;

    pdf.addImage(paperImageData, "png", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <Container>
      <button onClick={downloadClick} className="btn">
        <FaFileDownload className="fs-3 mt-5 text-dark" />
      </button>
      <Paper
        id="result"
        sx={{ marginBottom: "20px", marginTop: "5px" }}
        elevation={10}
      >
        <Typography variant="h6" align="center">
          {resumeData.fullName}
        </Typography>
        <Typography align="center">{resumeData.jobTitle}</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography align="center">
            {resumeData.location} | {resumeData.email}| {resumeData.phoneNumber}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <a href=""> {resumeData.gitHub}</a>||
          <a href=""> {resumeData.linkedIn}</a>||
          <a href=""> {resumeData.portFolio}</a>
        </Box>{" "}
        <Divider sx={{ marginTop: "40px" }}>Professional Summary</Divider>
        <Typography variant="p">{resumeData.summary}</Typography>
        <Divider sx={{ marginTop: "20px" }}>Education</Divider>
        <Typography variant="h6" align="center">
          {resumeData.courseName}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography align="center">
            {resumeData.collegeName} | {resumeData.university} |{" "}
            {resumeData.yearOfPassOut}
          </Typography>
        </Box>
        <Divider sx={{ marginTop: "40px" }}>Work Experience</Divider>
        <Typography variant="h6" align="center">
          {resumeData.jobOfWork}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography align="center">
            {resumeData.companyName} | {resumeData.locationOfWork} |{" "}
            {resumeData.durationOfWork}
          </Typography>
        </Box>
        <Divider sx={{ marginTop: "40px" }}>Skills</Divider>
        <Stack direction={"row"}>
          {resumeData.skills.map((eachSkill, index) => (
            <Button key={index} variant="outlined">
              {eachSkill}
            </Button>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
};

export default PreviewComponent;
