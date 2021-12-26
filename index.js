const express = require('express')
const app = express();
const cors = require("cors");
const dbConnection = require("./db");
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.use("/trucks/", require("./routes/trucksRoute"));
app.use("/cars/", require("./routes/carsRoute"));
app.use("/bikes/", require("./routes/bikesRoute"));
app.use("/users/", require("./routes/usersRoute"));
app.use("/bookings/", require("./routes/bookingsRoute"));

// const path = require("path");

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//   });
// }

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log("Backend Server Started"))