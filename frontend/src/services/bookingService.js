import API from "../api/axios";

export const createBooking = (data) => {
  return API.post("/bookings", data);
};

export const getMyBookings = () => {
  return API.get("/bookings/my");
};

export const cancelBooking = (id) => {
  return API.put(`/bookings/${id}/cancel`);
};