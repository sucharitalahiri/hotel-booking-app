import { useEffect, useState } from "react";
import API from "../../api/axios";
import AdminSidebar from "../../components/AdminSidebar";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const res = await API.get("/users");
      setCustomers(res.data.users);
    } catch (err) {
      console.log(err);
      alert("Unable to load customers");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Manage Customers</h1>

        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Registered On</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td>
                  {customer.firstName} {customer.lastName}
                </td>

                <td>{customer.email}</td>

                <td>{customer.phone}</td>

                <td>{customer.role}</td>

                <td>
                  {customer.createdAt
                    ? customer.createdAt.substring(0, 10)
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {customers.length === 0 && (
          <p style={{ marginTop: "20px" }}>
            No customers found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Customers;