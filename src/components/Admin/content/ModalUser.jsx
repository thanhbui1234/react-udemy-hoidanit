import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ManageUser.scss";
import camly from "../../../assets/camly.jpg";
import camly2 from "../../../assets/Screenshot 2023-10-13 214208.png";
import { FaPlus } from "react-icons/fa";
const ModalUser = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");

  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleCancleUpload = () => {
    setImage("");
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal className="modal-add" show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-8">
              <label htmlFor="inputAddress" className="form-label">
                Username
              </label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Role
              </label>
              <select
                onChange={(e) => setRole(e.target.value)}
                id="inputState"
                className="form-select"
              >
                <option defaultValue value="USER">
                  User
                </option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="col-md-4">
              <label
                htmlFor="inputZip"
                className="form-label label-upload btn btn-success"
              >
                <FaPlus /> Upload image
              </label>
              <input
                onChange={(e) => handleUpload(e)}
                type="file"
                hidden
                className="form-control"
                id="inputZip"
              />
            </div>
            <div className="col-md-12 image-preview">
              {image ? (
                <div className="imageUpload">
                  <span
                    onClick={() => handleCancleUpload()}
                    className="cancelImageUpload btn btn-danger"
                  >
                    x
                  </span>
                  <img src={image} alt="" />
                </div>
              ) : (
                <span>Preview image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUser;
