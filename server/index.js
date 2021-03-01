const express = require('express');
const db = require('./db')
const bodyparser = require('body-parser');
const employeeRoutes = require('./routes/employee_routers');
const cors = require('cors');


const app = express();
const port = 3000;
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function (req, res) {
    res.send('Employee Details');
});

app.use('/employee', employeeRoutes);
app.listen(port, () => console.log(`Listining at port ${port}`));