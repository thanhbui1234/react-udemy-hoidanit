import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import defaultImage from "../../../assets/default.png";
import "./ManageUser.scss";
import _ from "lodash";
const ProdAdminDetail = (props) => {
  const { viewUser, setShowDetail, showModalDetail } = props;
  const handleClose = () => {
    setShowDetail(false);
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal
        classNameName="modal-add"
        show={showModalDetail}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Detail User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  className={!viewUser?.image ? "pt-5" : ""}
                  style={{ width: "100%" }}
                  src={
                    viewUser?.image
                      ? `data:image/jpeg;base64,${viewUser.image}  `
                      : `${defaultImage}`
                  }
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <h1>{viewUser?.username}</h1>
                <p>{viewUser?.email}</p>
                <p>ROLE : {viewUser.role}</p>
                <p>Rating: ⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProdAdminDetail;
