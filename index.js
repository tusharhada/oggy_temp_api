import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
 
import routes from "./routes/restaurants.js";

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({extended: true }));
app.use(cors());
dotenv.config();

const CONNECTION_URL = process.env.CONNECTION_URL;
//const CONNECTION_URL = "mongodb://localhost:8081/oggy";

const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//mongoose.set("useFindAndModify", false);

app.listen(PORT, () => {
  console.log("Server Started on port " + PORT);
});

app.use("/restaurants", routes);

app.get("/", (_, res) => {
  res.send("Hello from the profile backend!");
});


app.get("/:any", (_, res) => {
  res.status(404).json({ message: "404 Page not found" });
});
