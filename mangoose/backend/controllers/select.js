const Habit=require('../models/schema.js');

const select = async (req,res) => { //do not forget res and req 
    try {
     
       
    const habits = await Habit.find(); //here must two name not the same name 
    console.log('Habit found:',habits);
    res.json(habits); //res.json here in front res.data and do not forget to make state as array to use map

    } catch (error) {
      console.error('Error finding Habit:', error);
      res.status(500).json({ error: 'Error finding habits' });
    }
  };

 

 
  module.exports = {select};
