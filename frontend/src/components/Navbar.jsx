import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#0B5ED7",
        color: "white",
      }}
    >
      {/* Logo */}
      <h2>Hotel Paradise</h2>

      {/* Navigation */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link style={linkStyle} to="/">
          Home
        </Link>

        <Link style={linkStyle} to="/rooms">
          Rooms
        </Link>

        {!user ? (
          <>
            <Link style={buttonStyle} to="/login">
              Login
            </Link>

            <Link style={registerStyle} to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            {user.role === "admin" ? (
              <Link style={linkStyle} to="/admin">
                Dashboard
              </Link>
            ) : (
              <Link style={linkStyle} to="/my-bookings">
                My Bookings
              </Link>
            )}

            <span>Welcome, {user.firstName}</span>

            <button
              onClick={logout}
              style={logoutStyle}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const buttonStyle = {
  color: "#0B5ED7",
  background: "white",
  padding: "8px 16px",
  borderRadius: "5px",
  textDecoration: "none",
};

const registerStyle = {
  color: "white",
  background: "#198754",
  padding: "8px 16px",
  borderRadius: "5px",
  textDecoration: "none",
};

const logoutStyle = {
  background: "#DC3545",
  color: "white",
  border: "none",
  padding: "8px 15px",
  cursor: "pointer",
};

export default Navbar;