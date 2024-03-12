const mongoose = require('mongoose'); 
const musicSchema = new mongoose.Schema({ 
    id:Number,
    title: String, 
    image: String, 
    link: String 
}); 
module.exports = new mongoose.model("Music", musicSchema);