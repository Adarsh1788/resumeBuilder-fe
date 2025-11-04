import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaEdit } from "react-icons/fa";
import { editResume } from "../../services/allApi";
import Swal from "sweetalert2";

const EditComponent = ({ resumeData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editData, setEditData] = useState(resumeData);

  const handleEdit = async () => {
    let apiResponse = await editResume(editData.id, editData);
    if (apiResponse.status == 200) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Edit successfull",
      });
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong cant't edit data!",
      });
    }
    setShow(false)
  };

  return (
    <>
      {" "}
      <Button onClick={handleShow}>
        <FaEdit className="text-warning fs-3" />
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {" "}
            <div className="col-6">
              <TextField
                value={editData.fullName}
                onChange={(e) =>
                  setEditData({ ...editData, fullName: e.target.value })
                }
                sx={{ width: "100%" }}
                id="fullName"
                label="fullName"
                variant="standard"
              />
              <TextField
                value={editData.jobTitle}
                onChange={(e) =>
                  setEditData({ ...editData, jobTitle: e.target.value })
                }
                sx={{ width: "100%" }}
                id="jobTitle"
                label="jobTitle"
                variant="standard"
              />
              <TextField
                value={editData.location}
                onChange={(e) =>
                  setEditData({ ...editData, location: e.target.value })
                }
                sx={{ width: "100%" }}
                id="location"
                label="location"
                variant="standard"
              />
              <TextField
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
                sx={{ width: "100%" }}
                id="email"
                label="email"
                variant="standard"
              />
              <TextField
                value={editData.phoneNumber}
                onChange={(e) =>
                  setEditData({ ...editData, phoneNumber: e.target.value })
                }
                sx={{ width: "100%" }}
                id="phonenumber"
                label="phoneNumber"
                variant="standard"
              />
              <TextField
                value={editData.gitHub}
                onChange={(e) =>
                  setEditData({ ...editData, gitHub: e.target.value })
                }
                sx={{ width: "100%" }}
                id="github"
                label="gitHub"
                variant="standard"
              />
              <TextField
                value={editData.linkedIn}
                onChange={(e) =>
                  setEditData({ ...editData, linkedIn: e.target.value })
                }
                sx={{ width: "100%" }}
                id="linkedin"
                label="linkedIn"
                variant="standard"
              />
              <TextField
                value={editData.portFolio}
                onChange={(e) =>
                  setEditData({ ...editData, portFolio: e.target.value })
                }
                sx={{ width: "100%" }}
                id="portfolio"
                label="portFolio"
                variant="standard"
              />
              <TextField
                value={editData.courseName}
                onChange={(e) =>
                  setEditData({ ...editData, courseName: e.target.value })
                }
                sx={{ width: "100%" }}
                id="coursename"
                label="courseName"
                variant="standard"
              />{" "}
            </div>
            <div className="col-6">
              {" "}
              <TextField
                value={editData.collegeName}
                onChange={(e) =>
                  setEditData({ ...editData, collegeName: e.target.value })
                }
                sx={{ width: "100%" }}
                id="collegename"
                label="collegeName"
                variant="standard"
              />{" "}
              <TextField
                value={editData.university}
                onChange={(e) =>
                  setEditData({ ...editData, university: e.target.value })
                }
                sx={{ width: "100%" }}
                id="university"
                label="university"
                variant="standard"
              />
              <TextField
                value={editData.yearOfPassout}
                onChange={(e) =>
                  setEditData({ ...editData, yearOfPassout: e.target.value })
                }
                sx={{ width: "100%" }}
                id="yearofpassout"
                label="yearOfPassOut"
                variant="standard"
              />
              <TextField
                value={editData.jobOfWork}
                onChange={(e) =>
                  setEditData({ ...editData, jobOfWork: e.target.value })
                }
                sx={{ width: "100%" }}
                id="jobOfWork"
                label="jobOfWork"
                variant="standard"
              />
              <TextField
                value={editData.companyName}
                onChange={(e) =>
                  setEditData({ ...editData, companyName: e.target.value })
                }
                sx={{ width: "100%" }}
                id="companyName"
                label="companyName"
                variant="standard"
              />
              <TextField
                value={editData.durationOfWork}
                onChange={(e) =>
                  setEditData({ ...editData, durationOfWork: e.target.value })
                }
                sx={{ width: "100%" }}
                id="durationOfWork"
                label="durationOfWork"
                variant="standard"
              />
              <TextField
                value={editData.locationOfWork}
                onChange={(e) =>
                  setEditData({ ...editData, locationOfWork: e.target.value })
                }
                sx={{ width: "100%" }}
                id="locationOfWork"
                label="locationOfWork"
                variant="standard"
              />{" "}
              <TextField
                value={editData.summary}
                onChange={(e) =>
                  setEditData({ ...editData, summary: e.target.value })
                }
                sx={{ width: "100%" }}
                id="summary"
                label="Write a short summary of yourself"
                variant="standard"
              />
              <div>
                {/* to display already added skill */}
                <div className="d-flex gap-2 mb-2">
                  {" "}
                  {editData.skills.map((eachSkill, index) => (
                    <Button key={index}>{eachSkill}</Button>
                  ))}
                </div>
                <div className="d-flex">
                  {" "}
                  <TextField
                    sx={{ width: "50%" }}
                    id="durationOfWork"
                    label="skills"
                    variant="standard"
                  />
                  <Button>Add Skill</Button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditComponent;
