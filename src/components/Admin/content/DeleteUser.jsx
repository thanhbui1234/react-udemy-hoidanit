import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../service/Apiservice";
import { toast } from "react-toastify";
const DeleteUser = (props) => {
  const { email, show, setShow } = props;

  const handleDelete = async () => {
    let data = await deleteUser(email.id);
    if (data.EC) return toast.error(data.EM);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
    }
  };
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DELETE USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you want to delete user has email = {email.email} ??
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete user
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUser;
