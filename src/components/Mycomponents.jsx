import React from "react";
import Hello from "./Hello";
const Mycomponents2 = () => {
  const listUser = [
    { id: 1, name: "thanh" },
    { id: 1, name: "thanh" },
    { id: 12, name: "thanh" },
    { id: 13, name: "thanh" },
    { id: 4, name: "thanh" },
  ];

  return (
    <div>
      <Hello listUser={listUser} />
    </div>
  );
};

export default Mycomponents2;
