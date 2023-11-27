const mongoose = require("mongoose");

const movieSchema=new mongoose.Schema({
    name:{
      type:String,
      require:true
    },
    description:{
      type:String,
      require:true
    },
    duration:{
      type:Number,
      require:true
    },
    rating:{
      type:Number,
      validate:{
        validator:function(value){
            return value>=1 && value <=10;
        },
        message:'rating should be above 1 and below 10'
      }
    },

    total:{
      type:Number,
      require:true
    },
    createdby:String
  });

movieSchema.pre('save',function(next){
  this.createdby='uditha';
  next();
})
const Movie=mongoose.model('movie',movieSchema);

module.exports=Movie