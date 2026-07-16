import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";
import AdminSidebar from "../../components/AdminSidebar";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await API.get("/rooms");
      setRooms(res.data.rooms);
    } catch (err) {
      console.error(err);
      alert("Unable to load rooms.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this room?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/rooms/${id}`);

      alert("Room deleted successfully.");

      fetchRooms();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Delete failed.");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Manage Rooms</h1>

          <Link to="/admin/add-room">
            <button>Add New Room</button>
          </Link>
        </div>

        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Room No</th>
              <th>Title</th>
              <th>Room Type</th>
              <th>Price</th>
              <th>Capacity</th>
              <th>Available</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr key={room._id}>
                <td>{room.roomNumber}</td>

                <td>{room.title}</td>

                <td>{room.roomType}</td>

                <td>₹ {room.price}</td>

                <td>{room.capacity}</td>

                <td>{room.available ? "Yes" : "No"}</td>

                <td>
                  <Link to={`/admin/edit-room/${room._id}`}>
                    <button>Edit</button>
                  </Link>

                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(room._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {rooms.length === 0 && (
          <p style={{ marginTop: "20px" }}>No rooms found.</p>
        )}
      </div>
    </div>
  );
}

export default Rooms;