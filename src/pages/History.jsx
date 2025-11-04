import React, { useEffect, useState } from "react";
import { deleteResume, getResume } from "../../services/allApi";
import Swal from "sweetalert2";
import { Col, Row } from "react-bootstrap";
import PreviewComponent from "../components/PreviewComponent";


import { MdDelete } from "react-icons/md";
import EditComponent from "../components/EditComponent";

const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadResume();
  }, []);

  const loadResume = async () => {
    let apiResponse = await getResume();

    if (apiResponse.status == 200) {
      // store data
      setData(apiResponse.data);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong cant't load data!",
      });
    }
  };

  const deleteClick = async (id) => {
    let apiResponse = await deleteResume(id);
    if (apiResponse.status == 200) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Success fully Deleted",
      });loadResume()
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong cant't delete data!",
      });
    }
  };

  return (
    <>
      <h1 className="text-center mt-3">History</h1>
      {
        /* {   conditional rendering */
        data.length > 0 ? (
          <Row>
            {data.map((eachResume, index) => (
              <Col md={4} key={index}>
                <div className="d-flex justify-content-end me-5 gap-5">
                  {" "}
                  <MdDelete
                    className="fs-2 text-danger fw-bolder"
                    onClick={() => deleteClick(eachResume.id)}
                  />
                  <EditComponent  resumeData={eachResume}/>
                </div>
                <PreviewComponent resumeData={eachResume} />
              </Col>
            ))}
          </Row>
        ) : (
          <h1>No history found</h1>
        )
      }
    </>
  );
};

export default History;
