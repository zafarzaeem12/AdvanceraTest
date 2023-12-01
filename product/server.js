const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRouter = require("./route/product");

app.use(express.json());
app.use(cors());

// routes start here
app.use("/product/api/", productRouter);

dotenv.config();

const port = process.env.PORT;

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE_URL1)
  .then((res) => console.log(`Database connected successfully`))
  .catch((err) => console.log(`Database not connected `));

app.listen(port, () => {
  console.log(`Product's Server is running on ${port} Port`);
});