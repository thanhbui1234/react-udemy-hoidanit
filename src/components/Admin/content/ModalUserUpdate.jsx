import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ManageUser.scss";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { postCreateUser } from "../../../service/Apiservice";
import _ from "lodash";
import { updateUser } from "../../../service/Apiservice";
const ModalUpdateUser = (props) => {
  const { dataUpdate, fetchListUsers, show, setShow } = props;
  const handleClose = () => {
    setShow(false);
    setImage("");
  };
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      const { email, image, username, role } = dataUpdate;
      setEmail(email);
      setusername(username);
      setRole(role);
      // setImage(image);
      if (image) setImagePreview(`data:image/jpeg;base64,${image}`);
    }
  }, [props.dataUpdate]);
  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleCreateUser = async () => {
    const isValidEmail = validateEmail(email);

    if (!username) {
      toast.error(`Invalid username`);
      return;
    }

    let data = await updateUser(dataUpdate.id, username, role, image);
    if (data.EC) return toast.error(data.EM);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
    }
    fetchListUsers();
  };
  const handleCancleUpload = () => {
    setImage("");
    setImagePreview("");
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal className="modal-add" show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
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
                value={email}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                disabled
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="inputPassword4"
                value={password}
              />
            </div>
            <div className="col-8">
              <label htmlFor="inputAddress" className="form-label">
                username
              </label>
              <input
                onChange={(e) => setusername(e.target.value)}
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                value={username}
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
                <option defaultValue value={role}>
                  {role === "ADMIN" ? "ADMIN" : "USER"}
                </option>
                <option value={role != "ADMIN" ? "ADMIN" : "USER"}>
                  {role != "ADMIN" ? "ADMIN" : "USER"}
                </option>
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
              {imagePreview ? (
                <div className="imageUpload">
                  <span
                    onClick={() => handleCancleUpload()}
                    className="cancelImageUpload btn btn-danger"
                  >
                    x
                  </span>
                  <img src={imagePreview} alt="" />
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
          <Button variant="primary" onClick={() => handleCreateUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
