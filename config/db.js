const mongoose = require('mongoose');
const connectDb=async()=>{
  const db = await mongoose.connect(process.env.MONGO_URI);
  console.log(`db connected`);
}
module.exports=connectDb;