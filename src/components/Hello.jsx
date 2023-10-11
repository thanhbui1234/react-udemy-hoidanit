import React, { useState } from "react";
import App from "../App";
import "./Hello.scss";
const Hello = (props) => {
  const { listUser } = props;

  const [show, setShow] = useState(true);
  return (
    <div className="hello-container">
      <button onClick={() => setShow(!show)}>
        {show === true ? "hide" : "true"}
      </button>
      {show && (
        <div>
          {listUser.map((user, index) => {
            return (
              <div className={user.id > 8 ? "age" : "ageOc"} key={index + 1}>
                {user.name}
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Hello;
