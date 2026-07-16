import { useState } from "react";

function BookingSearch() {
  const [search, setSearch] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log(search);
    // We'll connect this to backend later
  };

  return (
    <div
      style={{
        background: "#0B4EA2",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="date"
        name="checkIn"
        onChange={handleChange}
      />

      <input
        type="date"
        name="checkOut"
        onChange={handleChange}
      />

      <input
        type="number"
        min="1"
        name="guests"
        value={search.guests}
        onChange={handleChange}
        placeholder="Guests"
      />

      <button
        onClick={handleSearch}
        style={{
          background: "#F4A000",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        CHECK AVAILABILITY
      </button>
    </div>
  );
}

export default BookingSearch;