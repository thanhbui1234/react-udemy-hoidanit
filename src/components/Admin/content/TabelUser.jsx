import { useEffect, useState } from "react";
import { getAllUser } from "../../../service/Apiservice";

const TableUser = (props) => {
  // const [users, setUsers] = useState([]);

  const { handleClickDelete, users, handleClickUpdate, onHandleView } = props;
  return (
    <table className="table table-hover table-bordered shadow">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">USERNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">ROLE</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className=" justify-content-center align-items-center">
        {users &&
          users.map((user, index) => {
            return (
              <tr key={`table-user-${index}`}>
                <th>{index + 1}</th>
                <td>{user?.username}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td className="d-flex gap-1">
                  <button
                    onClick={() => onHandleView(user)}
                    className="btn btn-primary"
                  >
                    VIEW
                  </button>
                  <button
                    onClick={() => handleClickDelete(user)}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => handleClickUpdate(user)}
                    className="btn btn-success"
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        {users && users.length === 0 && (
          <tr>
            <th>empty data</th>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableUser;
