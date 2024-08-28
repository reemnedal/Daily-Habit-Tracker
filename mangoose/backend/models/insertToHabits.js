 
const Habit=require('./schema.js');
// const User  = require('./db.js'); // Import the User model

// Function to test creating a user
const createHabit = async () => {
    try {
      const habit = new Habit({
        name: 'read new book',
        description: 'new book to new authors',
        category:'history'
      });
      await habit.save();
      console.log('User created:', Habit);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  
  createHabit();

 
  

// Function to run the tests 
    // createUser(); // Create a user
    // createUser2(); // Create a user
  // Find all users
  

    // deleteUser('66cd8bc1c6328e5e53f3f7ac');

// Run the tests
 