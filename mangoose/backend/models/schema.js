const { mongoose }=require('../db.js');


// models/User.js

 

// Define the User schema
const habitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date ,
    default: Date.now
  },

  category:{
   type:String,
 

  },
  iscompleted:{
    type:Number,
    default: 0,
  
 
   }
  
 
  } );

// Create the User model
const   Habit= mongoose.model('Habit', habitsSchema); //here the name of model is habit but the name of colleciton in atlas will be habits 
//if name is person in atlas will be people

module.exports = Habit;
