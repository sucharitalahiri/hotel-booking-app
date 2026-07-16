import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRoomById } from "../services/roomService";

function RoomDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

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

  if (!room) return <h2>Loading...</h2>;

  return (

    <div style={{ padding: "40px" }}>

      <img
        src={
          room.image ||
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
        }
        alt={room.title}
        style={{
          width: "100%",
          maxHeight: "450px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h1>{room.title}</h1>

      <h3>{room.roomType}</h3>

      <h2>₹ {room.price} / Night</h2>

      <p>{room.description}</p>

      <h4>Capacity : {room.capacity}</h4>

      <button
        onClick={() => navigate(`/booking/${room._id}`)}
      >
        Book Now
      </button>

    </div>

  );

}

export default RoomDetails;