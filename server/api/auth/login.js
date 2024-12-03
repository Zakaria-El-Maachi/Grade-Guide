import { connectDB } from '../../models/connectDB';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User';

export default eventHandler(async (event) => {
  await connectDB();

  if (event.method === 'POST') {
    const { username, password } = await readBody(event);

    if (!username || !password) {
      throw createError({ statusCode: 400, message: "Missing username or password" });
    }

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      throw createError({ statusCode: 401, message: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw createError({ statusCode: 401, message: "Invalid credentials" });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return the token as a response
    return { message: "Login successful", token };
  }

  throw createError({ statusCode: 405, message: "Method Not Allowed" });
});
