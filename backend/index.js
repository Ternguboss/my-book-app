import express from "express";
import { port, mongoDBURL } from "./config.js";
import Mongoose from "mongoose";
import cors from 'cors';
import bookroutes from "./routes/bookeroutes.js";

const app = express();

// MIDDLEWARE (Must come before routes!)
app.use(express.json()); // Allows the server to read JSON data
app.use(cors());         // Allows the frontend to talk to the backend

// ROUTES
app.use("/books", bookroutes);

// DATABASE CONNECTION
Mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("db connected");
    app.listen(port, () => {
      console.log(`app is listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  }); 