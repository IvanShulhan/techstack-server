import mongoose from 'mongoose';

const apartmentSchema = new mongoose.Schema(
  {
    rooms: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  }, 
  {
    timestamps: true
  }
);

export default mongoose.model('Apartment', apartmentSchema);

