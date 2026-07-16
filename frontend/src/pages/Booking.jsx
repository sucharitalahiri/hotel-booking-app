import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getRoomById } from "../services/roomService";
import { createBooking } from "../services/bookingService";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  useEffect(() => {
    loadRoom();
  }, []);

  const loadRoom = async () => {
    try {
      const res = await getRoomById(id);
      setRoom(res.data.room);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async () => {
    try {
      const res = await createBooking({
        room: id,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        guests: Number(form.guests),
      });

      alert("Booking Created Successfully!");

      navigate(`/payment/${res.data.booking._id}`);
    } catch (err) {
      alert(err.response?.data?.message || "Booking Failed");
    }
  };

  if (!room) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1>Book Your Stay</h1>

      <h2>{room.title}</h2>

      <p>
        <strong>Room Type:</strong> {room.roomType}
      </p>

      <p>
        <strong>Price:</strong> ₹{room.price} / Night
      </p>

      <hr />

      <h3>Select Your Stay</h3>

      <input
        type="date"
        name="checkIn"
        value={form.checkIn}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="date"
        name="checkOut"
        value={form.checkOut}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="number"
        name="guests"
        min="1"
        value={form.guests}
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={handleBooking}>
        Proceed to Payment
      </button>
    </div>
  );
}

export default Booking;