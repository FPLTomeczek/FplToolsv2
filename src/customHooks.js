import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const getManagerTeam = async () => {
  const { data } = await axiosInstance.get("/team");
  console.log(data);
  return data;
};
