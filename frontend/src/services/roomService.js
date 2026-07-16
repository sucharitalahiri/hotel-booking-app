import API from "../api/axios";

export const getRooms = () => {
  return API.get("/rooms");
};

export const getRoomById = (id) => {
  return API.get(`/rooms/${id}`);
};