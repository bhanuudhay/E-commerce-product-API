const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://bhanu:1234@nodeexpressprojects.ak8pi.mongodb.net/04-Store-Api?retryWrites=true&w=majority&appName=NodeExpressProjects ";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
