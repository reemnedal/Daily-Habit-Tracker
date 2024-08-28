const mongoose = require('mongoose');

const uri = 'mongodb+srv://reemnedal:123456789R0r@cluster0.hswuv.mongodb.net/myhabits';
``
mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String
// });

// // Create the model
// const User = mongoose.model('User', userSchema);

// Export both mongoose and User
module.exports = { mongoose };
