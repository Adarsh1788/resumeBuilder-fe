import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { addResume } from "../../services/allApi";
import Swal from "sweetalert2";

const StepperComponent = ({ setResumeData, resumeData }) => {
  const [skillInput, setSkillInput] = useState("");

  // const [skillArray,setSkillArray]=useState([])
  const createResume = async () => {
    try {
      if (
        resumeData.fullName == "" ||
        resumeData.jobTitle == "" ||
        resumeData.location == "" ||
        resumeData.email == "" ||
        resumeData.phoneNumber == "" ||
        resumeData.gitHub == "" ||
        resumeData.linkedIn == "" ||
        resumeData.portFolio == "" ||
        resumeData.courseName == "" ||
        resumeData.collegeName == "" ||
        resumeData.university == "" ||
        resumeData.yearOfPassout == "" ||
        resumeData.jobOfWork == "" ||
        resumeData.companyName == "" ||
        resumeData.locationOfWork == "" ||
        resumeData.durationOfWork == "" ||
        resumeData.summary == "" ||
        skills == []
      ) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please fill the Form",
        });
      } else {
        // api calling
        let apiResponse = await addResume(resumeData);
        if (apiResponse.status == 201) {
          Swal.fire({
            title: "Saved!",
            text: "Form filled successfully",
            icon: "success",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error Occured",
          });
        }
        console.log(apiResponse);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error Occured",
      });
      console.log(error);
    }
  };

  const pushSkill = (skill) => {
    if (resumeData.skills.includes(skill)) {
      alert("already exits");
    } else {
      // setSkillArray([...setSkillArray,skill])
      setResumeData({ ...resumeData, skills: [...resumeData.skills, skill] });
    }
  };

  const [skills, setSkills] = useState([
    "React",
    "Node",
    "Express",
    "Angular",
    "MongoDB",
  ]);

  const steps = [
    "Basic Information",
    "Contact Details",
    "Education Details",
    "Work Experience",
    "Skills & Certifications",
    "Review & Complete",
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderForm = (currentStep) => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <Typography variant="h5"> Personal Details</Typography>
            <Box>
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, fullName: e.target.value })
                }
                sx={{ width: "100%" }}
                id="fullName"
                label="Full Name"
                variant="standard"
                value={resumeData.fullName}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, jobTitle: e.target.value })
                }
                sx={{ width: "100%" }}
                id="jobTitle"
                label="Job Title"
                variant="standard"
                value={resumeData.jobTitle}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, location: e.target.value })
                }
                sx={{ width: "100%" }}
                id="location"
                label="location"
                variant="standard"
                value={resumeData.location}
              />
            </Box>
          </div>
        );
      case 1:
        return (
          <div>
            {" "}
            <Typography variant="h5"> Personal Details</Typography>{" "}
            <Box>
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, email: e.target.value })
                }
                sx={{ width: "100%" }}
                id="email"
                label="email"
                variant="standard"
                value={resumeData.email}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, phoneNumber: e.target.value })
                }
                sx={{ width: "100%" }}
                id="Phnumber"
                label="Phone Number"
                variant="standard"
                value={resumeData.phoneNumber}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, gitHub: e.target.value })
                }
                sx={{ width: "100%" }}
                id="gitHub"
                label="gitHub Profile Link"
                variant="standard"
                value={resumeData.gitHub}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, linkedIn: e.target.value })
                }
                sx={{ width: "100%" }}
                id="linkedin"
                label="Linkedin Profile Link"
                variant="standard"
                value={resumeData.linkedIn}
              />{" "}
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, portFolio: e.target.value })
                }
                sx={{ width: "100%" }}
                id="portfolio"
                label=" Portfolio Link"
                variant="standard"
                value={resumeData.portFolio}
              />
            </Box>
          </div>
        );
      case 2:
        return (
          <div>
            <Typography variant="h5">Education Details</Typography>{" "}
            <Box>
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, courseName: e.target.value })
                }
                sx={{ width: "100%" }}
                id="coursename"
                label="Course Name"
                variant="standard"
                value={resumeData.courseName}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, collegeName: e.target.value })
                }
                sx={{ width: "100%" }}
                id="collegename"
                label="College Name"
                variant="standard"
                value={resumeData.collegeName}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, university: e.target.value })
                }
                sx={{ width: "100%" }}
                id="university"
                label="university"
                variant="standard"
                value={resumeData.university}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    yearOfPassout: e.target.value,
                  })
                }
                sx={{ width: "100%" }}
                id="yearOfPassout"
                label="yearOfPassout"
                variant="standard"
                value={resumeData.yearOfPassout}
              />
            </Box>
          </div>
        );
      case 3:
        return (
          <div>
            {" "}
            <Typography variant="h5">Work Experience</Typography>
            <Box>
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, jobOfWork: e.target.value })
                }
                sx={{ width: "100%" }}
                id="joborintern"
                label="Job or Intership"
                variant="standard"
                value={resumeData.jobOfWork}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({ ...resumeData, companyName: e.target.value })
                }
                sx={{ width: "100%" }}
                id="companyName"
                label="Company Name"
                variant="standard"
                value={resumeData.companyName}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    locationOfWork: e.target.value,
                  })
                }
                sx={{ width: "100%" }}
                id="location"
                label="location"
                variant="standard"
                value={resumeData.locationOfWork}
              />
              <TextField
                onChange={(e) =>
                  setResumeData({
                    ...resumeData,
                    durationOfWork: e.target.value,
                  })
                }
                sx={{ width: "100%" }}
                id="duration"
                label="Duration"
                variant="standard"
                value={resumeData.durationOfWork}
              />
            </Box>
          </div>
        );
      case 4:
        return (
          <div>
            {" "}
            <Typography variant="h5"> Skills & Experiences</Typography>{" "}
            <Box>
              <TextField
                onChange={(e) => setSkillInput(e.target.value)}
                sx={{ width: "100%" }}
                id="skills"
                label="Add skill"
                variant="standard"
              />
            </Box>
            <Button
              onClick={() => pushSkill(skillInput)}
              className="mt-2"
              variant="contained"
            >
              Add
            </Button>
            <Typography variant="h5">Suggestions:</Typography>
            <Box>
              {skills.map((eachSkills, index) => (
                <Button
                  onClick={() => pushSkill(eachSkills)}
                  sx={{ marginRight: "5px" }}
                  key={index}
                  variant="outlined"
                >
                  {eachSkills}
                </Button>
              ))}
            </Box>
          </div>
        );
      case 5:
        return (
          <div>
            {" "}
            <Typography variant="h5">Professional Summary</Typography>{" "}
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, summary: e.target.value })
              }
              multiline
              rows={10}
              sx={{ width: "100%", marginBottom: "10px",marginTop:"10px" }}
              id="prof"
              label="Write a short summary of yourself"
              defaultValue="I'm a Passionate full stack developer with hands- on experience in React,Node ...."
              variant="standard"
              // value={resumeData.summary}
            />{" "}
          </div>
        );
      default:
        break;
    }
  };

  return (
    <Container maxWidth="md">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

          {renderForm(activeStep)}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={createResume}> Finish</Button>
            ) : (
              <Button onClick={handleNext}> Next </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Container>
  );
};

export default StepperComponent;
