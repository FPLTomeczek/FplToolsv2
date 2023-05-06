import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const getManagerTeam = async (id) => {
  const { data } = await axiosInstance.get("/team", { params: { userID: id } });
  console.log(data);
  return data;
};
