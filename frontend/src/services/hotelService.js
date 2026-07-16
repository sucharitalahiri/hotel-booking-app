import API from "../api/axios";

export const getHotel = () => {
  return API.get("/hotel");
};