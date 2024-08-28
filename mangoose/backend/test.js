const { User, mongoose }=require('./db.js');
// const User  = require('./db.js'); // Import the User model

// Function to test creating a user
const createUser = async () => {
  try {
    const user = new User({
      name: 'ريم',
      email: 'reemnedal@example.com'
    });
    await user.save();
    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};


const createUser2 = async () => {
    try {
      const users=([
      {  name: 'ريم',
        email: 'reemnedal@example.com'},
  
        {  name: 'ريما',
          email: 'reemanedal@example.com'},
          {  name: 'ديما',
              email: 'dimanedal@example.com'},
    ]);
    const result = await User.insertMany(users);
      console.log('User created:',result);
    } catch (error) {
      console.error('Error creating user:', result);
    }
  };
  
// Function to test finding users
const findUsers = async () => {
  try {
    const users = await User.find();
    console.log('Users found:', users);
  } catch (error) {
    console.error('Error finding users:', error);
  }
};

const deleteUser = async (id) => {
    try{
    await User.findByIdAndDelete(id);
    console.log('User deleted');}

    catch(err){

   console.log(err);

    }
  };
  



  const deleteUserone = async (name) => {
    try{
    await User.deleteOne({name});
    console.log('User deleted');}

    catch(err){

   console.log(err);

    }
  };
  

// Function to run the tests 
    // createUser(); // Create a user
    // createUser2(); // Create a user
    findUsers();  // Find all users
    deleteUserone("ديما");

    // deleteUser('66cd8bc1c6328e5e53f3f7ac');

// Run the tests
 