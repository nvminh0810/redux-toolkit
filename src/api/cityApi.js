import axiosClient from "./axiosClient";

const cityApi = {
  fetchCity: async () => {
    try {
      const cities = await axiosClient.get("/cities");
      return cities;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default cityApi;
