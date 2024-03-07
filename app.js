const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const options = {
    socketTimeoutMS: 0,
    connectTimeoutMS: 0,
};
//.connect('mongodb://127.0.0.1:27017/GenieStore')
mongoose
    .connect('mongodb://mongoadmin:mongoadmin@13.234.67.201:27017/GenieStore?authSource=admin', options)
    .then((x) => {
        console.log(`Connected to ${x.connections[0].name}`)
    })
    .catch((err) => {
        console.log('Could not connect to the database:::', err);
        console.error('Error occurs while connecting to the database:::', err.reason);
        process.exit();
    })

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    next();
});
let routes = require("./routes/routes.js");
app.use("/api", routes);

app.get('/', (req, res) => {
    res.json({
        message: 'Hello Node, Welcome to AWS'
    })
})

// Listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});