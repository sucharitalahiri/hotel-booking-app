const Booking = require("../models/Booking");
const Room = require("../models/Room");

const createBooking = async(req,res)=>{

try{

const{
room,
checkIn,
checkOut,
guests
}=req.body;


// Check room

const selectedRoom=await Room.findById(room);

if(!selectedRoom){

return res.status(404).json({

success:false,
message:"Room not found"

});

}


// Nights

const start=new Date(checkIn);
const end=new Date(checkOut);

const nights=Math.ceil(

(end-start)/(1000*60*60*24)

);

if(nights<=0){

return res.status(400).json({

success:false,
message:"Invalid dates"

});

}


// Prevent overlapping bookings

const existingBooking=await Booking.findOne({

room,

bookingStatus:"Confirmed",

checkIn:{$lt:end},

checkOut:{$gt:start}

});

if(existingBooking){

return res.status(400).json({

success:false,
message:"Room already booked for selected dates"

});

}


// Total

const totalAmount=nights*selectedRoom.price;


// Create

const booking=await Booking.create({

user:req.user.id,

room,

checkIn,

checkOut,

guests,

totalAmount

});

res.status(201).json({

success:true,

message:"Booking confirmed",

booking

});


}

catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("room", "roomNumber title roomType price images");

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("room")
      .populate("user", "firstName lastName email");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (booking.bookingStatus === "Cancelled") {
      return res.status(400).json({
        success: false,
        message: "Booking is already cancelled",
      });
    }

    booking.bookingStatus = "Cancelled";

    if (booking.paymentStatus === "Paid") {
      booking.paymentStatus = "Refunded";
    } else {
      booking.paymentStatus = "Cancelled";
    }

    await booking.save();

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "firstName lastName email")
      .populate("room", "roomNumber title");

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports={

createBooking, getMyBookings, getBookingById, cancelBooking, getAllBookings,

};