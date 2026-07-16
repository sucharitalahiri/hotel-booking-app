function HeroSection({ hotel }) {
  if (!hotel) return null;

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        {hotel.name}
      </h1>

      <h3>
        {hotel.address}, {hotel.city}, {hotel.state}, {hotel.country}
      </h3>

      <p style={{ maxWidth: "700px" }}>
        {hotel.description}
      </p>
    </div>
  );
}

export default HeroSection;