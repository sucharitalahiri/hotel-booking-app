import { useEffect, useState } from "react";
import API from "../../api/axios";
import AdminSidebar from "../../components/AdminSidebar";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data.bookings);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Manage Bookings</h1>

        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Customer</th>
              <th>Room</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Guests</th>
              <th>Amount</th>
              <th>Booking</th>
              <th>Payment</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>
                  {booking.user?.firstName} {booking.user?.lastName}
                </td>

                <td>
                  {booking.room?.roomNumber}
                </td>

                <td>
                  {booking.checkIn.substring(0, 10)}
                </td>

                <td>
                  {booking.checkOut.substring(0, 10)}
                </td>

                <td>{booking.guests}</td>

                <td>₹ {booking.totalAmount}</td>

                <td>{booking.bookingStatus}</td>

                <td>{booking.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;