const mongoose = require("mongoose");

const movieSchema=new mongoose.Schema({
    name:String,
    description:String,
    duration:Number,
    rating:Number
  });
  
const Movie=mongoose.model('movie',movieSchema);

module.exports=Movie