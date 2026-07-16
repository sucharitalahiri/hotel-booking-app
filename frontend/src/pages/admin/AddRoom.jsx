import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

function AddRoom() {

  const navigate = useNavigate();

  const [room, setRoom] = useState({
    roomNumber: "",
    title: "",
    roomType: "",
    price: "",
    capacity: "",
    description: "",
  });

  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  };

  const saveRoom = async () => {
    try {
      await API.post("/rooms", room);

      alert("Room Added Successfully");

      navigate("/admin/rooms");

    } catch (err) {

      alert(err.response?.data?.message);

    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Add Room</h1>

      <input
        name="roomNumber"
        placeholder="Room Number"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="roomType"
        placeholder="Room Type"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="capacity"
        placeholder="Capacity"
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={saveRoom}>
        Save Room
      </button>

    </div>
  );

}

export default AddRoom;