import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoomDetails from "./pages/RoomDetails";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import MyBookings from "./pages/MyBookings";
import Dashboard from "./pages/admin/Dashboard";
import Rooms from "./pages/admin/Rooms";
import AddRoom from "./pages/admin/AddRoom";
import EditRoom from "./pages/admin/EditRoom";
import Bookings from "./pages/admin/Bookings";
import Customers from "./pages/admin/Customers";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
         path="/rooms/:id"
         element={<RoomDetails />}
/>
{/* <Route
    path="/booking/:id"
    element={<Booking />}
/> */}

<Route
  path="/booking/:id"
  element={
    <PrivateRoute>
      <Booking />
    </PrivateRoute>
  }
/>
{/* <Route path="/payment/:id" element={<Payment />} /> */}
{/* <Route path="/my-bookings" element={<MyBookings />} /> */}

<Route
  path="/payment/:id"
  element={
    <PrivateRoute>
      <Payment />
    </PrivateRoute>
  }
/>

<Route
  path="/my-bookings"
  element={
    <PrivateRoute>
      <MyBookings />
    </PrivateRoute>
  }
/>

<Route
  path="/admin/bookings"
  element={<Bookings />}
/>
{/* <Route
    path="/admin/dashboard"
    element={<Dashboard />}
/> */}
<Route
  path="/admin/dashboard"
  element={
    <AdminRoute>
      <Dashboard />
    </AdminRoute>
  }
/>

{/* <Route path="/admin/rooms" element={<Rooms />} /> */}

<Route
  path="/admin/rooms"
  element={
    <AdminRoute>
      <Rooms />
    </AdminRoute>
  }
/>
<Route
    path="/admin/add-room"
    element={
    <AdminRoute>
       <AddRoom />
    </AdminRoute>
    }
   
/>
<Route
  path="/admin/edit-room/:id"
  element={
  <AdminRoute><EditRoom />
  </AdminRoute>
  }
/>
<Route
  path="/admin/customers"
  element={<Customers />}
/>

      </Routes>
    </>
  );
}

export default App;