import { Link } from "react-router-dom";

function AdminSidebar() {

  return (

    <div
      style={{
        width: "250px",
        background: "#0B4EA2",
        color: "white",
        height: "100vh",
        padding: "30px",
      }}
    >
      <h2>Hotel Admin</h2>

      <hr />

      <p>
        <Link to="/admin/dashboard" style={link}>
          Dashboard
        </Link>
        <Link to="/admin/bookings">
        <Link to="/admin/customers">
  <p>Manage Customers</p>
</Link>
  <p>Manage Bookings</p>
</Link>
      </p>


      <p>
        <Link to="/admin/rooms" style={link}>
          Rooms
        </Link>
      </p>

      <p>
        <Link to="/admin/bookings" style={link}>
          Bookings
        </Link>
      </p>

      <p>
        <Link to="/admin/customers" style={link}>
          Customers
        </Link>
      </p>

    </div>

  );

}

const link = {
  color: "white",
  textDecoration: "none",
};

export default AdminSidebar;