const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log('Connected with Database');
});

const userSchema = mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Message cannot be empty'],
    unique: true,
  },
  data: {
    type: Array,
    required: [true, 'Data cannot be empty'],
  },
});

// const User = mongoose.model('User', userSchema); //Collection
const Testing = mongoose.model('Testing', userSchema); //Collection

const testUser = new Testing({
  message: 'testing',
  data: ['1', '2', '3'],
});

testUser
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('ERROR!', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
