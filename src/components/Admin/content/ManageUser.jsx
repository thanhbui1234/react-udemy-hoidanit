import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalUser from "./ModalUser";
import { FaPlus } from "react-icons/fa";
import TableUser from "./TabelUser";
import { getAllUser } from "../../../service/Apiservice";
import { useEffect } from "react";
import ModalUpdateUser from "./ModalUserUpdate";

const ManageUser = () => {
  const [showModal, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [showModalUpdate, setShowUpdate] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchListUsers();
  }, []);

  const handleClickUpdate = (user) => {
    setShowUpdate(!showModalUpdate);
    setUser(user);
  };
  const fetchListUsers = async () => {
    let res = await getAllUser();
    if (res.EC === 0) setUsers(res.DT);
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button
            onClick={() => setShow(!showModal)}
            className="my-3 btn btn-danger"
          >
            <FaPlus /> Add new users
          </button>
        </div>

        <div>
          <TableUser handleClickUpdate={handleClickUpdate} users={users} />
        </div>

        <ModalUser
          fetchListUsers={fetchListUsers}
          show={showModal}
          setShow={setShow}
        />
        <ModalUpdateUser
          dataUpdate={user}
          setShow={setShowUpdate}
          show={showModalUpdate}
        />
      </div>
    </div>
  );
};

export default ManageUser;
