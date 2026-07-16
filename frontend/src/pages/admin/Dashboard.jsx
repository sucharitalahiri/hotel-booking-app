import { useEffect, useState } from "react";
import API from "../../api/axios";
import AdminSidebar from "../../components/AdminSidebar";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await API.get("/admin/dashboard");

      setDashboard(res.data.dashboard);

    } catch (err) {
      console.log(err);
    }
  };

  if (!dashboard) return <h2>Loading...</h2>;

  return (
    <div style={{display:"flex"}}>

      <AdminSidebar />
    <div style={{ padding: "40px", flex:"1" }}>

      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div style={card}>
          <h2>{dashboard.totalUsers}</h2>
          <p>Total Customers</p>
        </div>

        <div style={card}>
          <h2>{dashboard.totalRooms}</h2>
          <p>Total Rooms</p>
        </div>

        <div style={card}>
          <h2>{dashboard.totalBookings}</h2>
          <p>Total Bookings</p>
        </div>

        <div style={card}>
          <h2>₹ {dashboard.revenue}</h2>
          <p>Total Revenue</p>
        </div>
      </div>

    </div>
    </div>
  );
}

const card = {
  width: "220px",
  padding: "20px",
  background: "#1976d2",
  color: "white",
  borderRadius: "10px",
  textAlign: "center",
};

export default Dashboard;