import { connectDB } from '../../models/connectDB';
import bcrypt from 'bcryptjs';
import User from '../../models/User';

export default eventHandler(async (event) => {
  await connectDB();

  // Check if the request method is POST
  if (event.method === 'POST') {
    const { username, password } = await readBody(event);

    // Validate input
    if (!username || !password) {
      throw createError({ statusCode: 400, message: "Missing username or password" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw createError({ statusCode: 400, message: "Username already taken" });
    }

    // Hash the password before saving the new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    // Return a success message
    return { message: "User created successfully" };
  }

  // Method not allowed for anything other than POST
  throw createError({ statusCode: 405, message: "Method Not Allowed" });
});
