const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/razorpay';

const connectDb = () => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('mongodb connected');
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = connectDb;
