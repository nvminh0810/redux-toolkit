import axiosClient from "./axiosClient";

const userApi = {
  fetchUser: async () => {
    const users = await axiosClient.get("/users");
    return users;
  },
  addUser: async (user) => {
    const response = await axiosClient.post(`/users`, user);
    return response;
  },
  updateUser: async (user) => {
    const response = await axiosClient.put(`/users/${user.id}`, user);
    return response;
  },
  deleteUser: async (userId) => {
    const response = await axiosClient.delete(`/users/${userId}`);
    return response;
  },
};

export default userApi;
