const connectDb = require("./config/config");
const express = require("express");
const cors=require("cors")
const userRoutes = require("./routes/userRoutes");

connectDb();

const app = express();

app.use(express.json());
app.use(cors())

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running in PORT: 3000");
});
