const Habit=require('../models/schema.js');

const createHabit = async () => {
    try {
      const habit = new Habit({
        name: 'go to school2',
        description: 'go to school earlyc',
        category:'study'
      });
      await habit.save();
      console.log('User created:', Habit);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  
  createHabit();