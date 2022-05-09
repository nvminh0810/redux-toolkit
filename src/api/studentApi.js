import axiosClient from "./axiosClient";
import queryString from "query-string";

const studentApi = {
  fetchStudent: async (filters) => {
    try {
      const params = queryString.stringify(filters);
      const response = await axiosClient.get(`students?${params}`);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
  addStudent: async (student) => {
    try {
      const response = await axiosClient.post(`/students`, student);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
  updateStudent: async (student) => {
    try {
      const response = await axiosClient.put(
        `/students/${student.id}`,
        student
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteStudent: async (studentId) => {
    try {
      const response = await axiosClient.delete(`/students/${studentId}`);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default studentApi;
