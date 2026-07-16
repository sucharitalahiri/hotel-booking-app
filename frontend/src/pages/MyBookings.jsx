import { useEffect, useState } from "react";
import { getMyBookings } from "../services/bookingService";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function MyBookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const res = await getMyBookings();
      setBookings(res.data.bookings);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelBooking = async (id) => {
  try {
    const res = await API.put(`/bookings/${id}/cancel`);

    alert(res.data.message);

    loadBookings(); // Refresh bookings after cancellation
  } catch (err) {
    console.log(err);

    alert(
      err.response?.data?.message ||
      "Unable to cancel booking."
    );
  }
};

 return (
  <div style={{ padding: "40px" }}>
    <h1>My Bookings</h1>

    {bookings.length === 0 ? (
      <p>No bookings found.</p>
    ) : (
      bookings.map((booking) => (
        <div
          key={booking._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{booking.room?.title}</h3>

          <p>
            <strong>Check In:</strong>{" "}
            {booking.checkIn.substring(0, 10)}
          </p>

          <p>
            <strong>Check Out:</strong>{" "}
            {booking.checkOut.substring(0, 10)}
          </p>

          <p>
            <strong>Guests:</strong> {booking.guests}
          </p>

          <p>
            <strong>Booking Status:</strong> {booking.bookingStatus}
          </p>

          <p>
            <strong>Payment Status:</strong> {booking.paymentStatus}
          </p>

          {/* Show Pay Now only if booking is confirmed and payment is pending */}
          {booking.bookingStatus === "Confirmed" &&
            booking.paymentStatus === "Pending" && (
              <button
                onClick={() => navigate(`/payment/${booking._id}`)}
                style={{ marginRight: "10px" }}
              >
                Pay Now
              </button>
            )}

          {/* Show Cancel button only if booking is confirmed */}
          {booking.bookingStatus === "Confirmed" && (
            <button onClick={() => cancelBooking(booking._id)}>
              Cancel Booking
            </button>
          )}
        </div>
      ))
    )}
  </div>
);
}

export default MyBookings;