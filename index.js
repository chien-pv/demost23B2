const express = require("express");
const bodyParser = require("body-parser");

const rootRouter = require("./routes/root");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const connectMongo = require("./config/connectDB");
const userApiRouter = require("./routes/api/user");

connectMongo().catch((err) => console.log(err));

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
// parse application/json
app.use(bodyParser.json());

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/api/v1", userApiRouter);

app.listen(3000, () => {
  console.log("Server Started!!!");
});
