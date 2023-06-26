const express = require('express')

const mongoose = require('mongoose')

//cors is a package used as a middleware so that
// we can approve the use of our routes of our controllers
// by other applications such as front-end applications.

const cors = require('cors')

const app = express();
const port = process.env.PORT || 4000

mongoose.connect("mongodb+srv://flmadrid:FrancisMadrid47!@sandbox10247.8qfjdrv.mongodb.net/an22_tindahanNiAlingNena?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true

}
)

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => console.log("Connected to MongoDB"))

app.use(express.json());

app.listen(port, () => console.log(`Server is running at port ${port}`));