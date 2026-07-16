function Facilities({ amenities }) {
  if (!amenities || amenities.length === 0) return null;

  return (
    <div
      id="facilities"
      style={{
        padding: "50px",
        background: "#f8f9fa",
      }}
    >
      <h2>Facilities</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {amenities.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "15px 25px",
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
             {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;