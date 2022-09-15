const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mjyoon:mjyoon@cluster0.3iesq6d.mongodb.net/mission6",
      {
        useNewUrlparser: true
      }
    );

    console.log('HOOORRRAAAAAAYYYYYYY!!!!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;