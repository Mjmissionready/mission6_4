const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Minju:MissionReadyLevel5@missionready.qydpjji.mongodb.net/Mission-6A",
       {
        useNewUrlParser: true
      }

    );

    console.log('HOOORRRAAAAAAYYYYYYY!!!!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;