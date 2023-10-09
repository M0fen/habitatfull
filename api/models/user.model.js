import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String, // Corrige el tipo de dato
      required: true,
      unique: true,
    },
    email: {
      type: String, // Corrige el tipo de dato
      required: true,
      unique: true,
    },
    password: {
      type: String, // Corrige el tipo de dato
      required: true,
    },
    avatar: {
      type: String,
      default:
        'https://www.nasa.gov/wp-content/uploads/2022/07/web_first_images_release_0.png',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
