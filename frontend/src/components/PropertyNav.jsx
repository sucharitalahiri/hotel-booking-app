function PropertyNav() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        padding: "18px",
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
        fontWeight: "bold",
      }}
    >
      <a href="#rooms">Rooms</a>
      <a href="#facilities">Facilities</a>
      <a href="#gallery">Gallery</a>
      <a href="#location">Location</a>
    </div>
  );
}

export default PropertyNav;