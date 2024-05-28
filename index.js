const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
const CustomerRouter = require('./Routes/CustomerRouter');
app.use(express.json());
app.use(cors())

app.use(bodyParser.json());
app.use('/', CustomerRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
