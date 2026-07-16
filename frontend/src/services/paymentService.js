import API from "../api/axios";

export const makePayment = (bookingId) => {
  return API.post("/payment", {
    bookingId,
  });
};