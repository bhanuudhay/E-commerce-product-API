const connectDB = require("./db/connect");
const Product = require("./model/product");
const jsonProduct = require("../products.json");

const start = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.create(jsonProduct);
    console.log("connection established");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
