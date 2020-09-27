// Build a web server
const express = require('express');
const app = express();
app.use(express.json())


// SEND DATA FROM BODY
app.post('/api/courses', (req, res) => {
    // localhost:3000/api/courses
    // PAYLOAD: {"name":"Rahul"}
    console.log(req.body);
    let x = JSON.stringify(req.body)
    res.send(`HELLO! ${x}`);
});

// QUERY PARAM
app.get('/api/courses', (req, res) => {
    // localhost:3000/api/courses?name=Rahul&designation=software developer
    console.log("query-param", req.query);
});

// PARMAS
app.get('/api/courses/:id', (req, res) => {
    // localhost:3000/api/courses/512
    console.log("query-param", req.params);
});


// Listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at port ${port}`));