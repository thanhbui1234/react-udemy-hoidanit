import axios from "../utilities/AxiosCustomize";
const postCreateUser = (email, password, userName, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", userName);
  data.append("role", role);
  data.append("userImage", image);

  return axios.post(`api/v1/participant`, data);
};

const getAllUser = () => {
  return axios.get(`api/v1/participant/all`);
};
const deleteUser = (id) => {
  return axios.delete(`api/v1/participant/${id}`);
};

const updateUser = (id, userName, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", userName);
  data.append("role", role);
  data.append("userImage", image);

  return axios.put(`api/v1/participant/${data}`);
};

export { postCreateUser, getAllUser, updateUser, deleteUser };
