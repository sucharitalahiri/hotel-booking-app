import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);

      alert("Registration Successful!");

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;