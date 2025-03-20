require("dotenv").config;
// async error

require("express-async-error");
const express = require("express");
const app = express();

const productRoute = require("./routes/products");
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/notfound");
const errorMiddleware = require("./middleware/errorhandler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "<h1> Store Api </h1> <a href='/api/v1/products'>products route </a>"
  );
});

app.use("/api/v1/products", productRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB();
    console.log("connected to the DB");
    app.listen(port, () => {
      console.log(`Server is listening on ${port} `);
    });
  } catch (error) {
    console.log("Not able to establish connection");
  }
};
start();
