import mongoose from 'mongoose'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null } // do not create a new conn on every page load

export const connectToDatabase = async (
  MONGODB_URI = process.env.MONGODB_URI
) => {
  if (cached.conn) return cached.conn // return cached connection

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing') 

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI) 

  cached.conn = await cached.promise  // connect to db

  return cached.conn
}
