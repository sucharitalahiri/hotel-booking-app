import { useEffect, useState } from "react";
import { getHotel } from "../services/hotelService";
import { getRooms } from "../services/roomService";
import HeroSection from "../components/HeroSection";
import BookingSearch from "../components/BookingSearch";
import PropertyNav from "../components/PropertyNav";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";
import Location from "../components/Location";

import RoomCard from "../components/RoomCard";

function Home() {

  const [hotel, setHotel] = useState(null);

  const [rooms, setRooms] = useState([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    try {

      const hotelRes = await getHotel();

      const roomRes = await getRooms();

      setHotel(hotelRes.data.hotel);

      setRooms(roomRes.data.rooms);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div style={{ padding: "30px" }}>

     <HeroSection hotel={hotel} />

<PropertyNav />

<BookingSearch />

<div id="rooms" style={{ padding: "30px" }}>
  <h2>Available Rooms</h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "25px",
    }}
  >
    {rooms.map((room) => (
      <RoomCard key={room._id} room={room} />
    ))}
  </div>

  <Facilities amenities={hotel?.amenities} />

<Gallery images={hotel?.gallery} />

<Location hotel={hotel} />
</div>

      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {rooms.map((room) => (
          <RoomCard
            key={room._id}
            room={room}
          />
        ))}
      </div> */}

    </div>

  );
}

export default Home;