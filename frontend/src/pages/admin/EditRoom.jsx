import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios";

function EditRoom() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState({
    roomNumber: "",
    title: "",
    roomType: "",
    price: "",
    capacity: "",
    description: "",
    available: true,
  });

  useEffect(() => {
    loadRoom();
  }, []);

  const loadRoom = async () => {
    try {
      const res = await API.get(`/rooms/${id}`);
      setRoom(res.data.room);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setRoom({
      ...room,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const updateRoom = async () => {
    try {
      await API.put(`/rooms/${id}`, room);

      alert("Room Updated Successfully");

      navigate("/admin/rooms");
    } catch (err) {
      alert(err.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h1>Edit Room</h1>

      <input
        name="roomNumber"
        value={room.roomNumber}
        onChange={handleChange}
        placeholder="Room Number"
      />

      <br /><br />

      <input
        name="title"
        value={room.title}
        onChange={handleChange}
        placeholder="Title"
      />

      <br /><br />

      <input
        name="roomType"
        value={room.roomType}
        onChange={handleChange}
        placeholder="Room Type"
      />

      <br /><br />

      <input
        type="number"
        name="price"
        value={room.price}
        onChange={handleChange}
        placeholder="Price"
      />

      <br /><br />

      <input
        type="number"
        name="capacity"
        value={room.capacity}
        onChange={handleChange}
        placeholder="Capacity"
      />

      <br /><br />

      <textarea
        name="description"
        value={room.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <br /><br />

      <label>
        <input
          type="checkbox"
          name="available"
          checked={room.available}
          onChange={handleChange}
        />
        Available
      </label>

      <br /><br />

      <button onClick={updateRoom}>
        Update Room
      </button>
    </div>
  );
}

export default EditRoom;