function Location({ hotel }) {
  if (!hotel) return null;

  return (
    <div
      id="location"
      style={{
        padding: "50px",
        background: "#f8f9fa",
      }}
    >
      <h2>Location</h2>

      <p>
        <strong>Address:</strong> {hotel.address}
      </p>

      <p>
        {hotel.city}, {hotel.state}
      </p>

      <p>{hotel.country}</p>

      <p>{hotel.phone}</p>

      <p>{hotel.email}</p>
    </div>
  );
}

export default Location;