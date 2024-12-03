import mongoose from 'mongoose';

let db;

export const connectDB = async () => {
  if (db) return db;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    db = mongoose.connection;
    console.log('MongoDB connected');
    return db;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection failed');
  }
};
