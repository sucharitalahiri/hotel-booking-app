import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function RoomCard({ room }) {
    const navigate = useNavigate();
  return (
    <Card sx={{ width: 320 }}>
      <img
        src={
          room.image ||
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
        }
        alt={room.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Typography variant="h6">
          {room.title}
        </Typography>

        <Typography>
          {room.roomType}
        </Typography>

        <Typography>
          ₹ {room.price} / night
        </Typography>

        <Typography>
          Capacity : {room.capacity}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
    variant="contained"
    fullWidth
    onClick={() => navigate(`/rooms/${room._id}`)}
>
    View Details
</Button>
      </CardActions>
    </Card>
  );
}

export default RoomCard;