const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require('./routes/chatRoutes')
const {errorHandler, notFound} = require('./middleware/errorMiddleware')

dotenv.config();

connectDB();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(express.json()) // to accept json data form the front end
 
app.use("/api/user", userRoutes);
app.use('/api/chat',chatRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server started on port ${PORT}`));
