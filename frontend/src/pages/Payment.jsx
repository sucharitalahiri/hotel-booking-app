import { useParams, useNavigate } from "react-router-dom";
import { makePayment } from "../services/paymentService";

function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      await makePayment(id);

      alert("Payment Successful!");

      navigate("/my-bookings");
    } catch (err) {
      alert(err.response?.data?.message || "Payment Failed");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Payment</h1>

      <p>Payment Gateway</p>

      <button onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default Payment;