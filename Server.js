const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.Port || 3001;
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

let arr = [{id:1, name:"AAA"}, {id:2, name:"BBB"}, {id:3, name:"CCC"}];
let count = 4;
// define a simple routes
app.get('/', (req, res) => {
    res.json(arr);
});
app.get('/:id', (req, res) => {
    res.json(arr.filter(a => a.id === req.params.id));
});
app.post('/', (req, res) => {
    res.json(arr.push({id: count++, name: req.body.name}));
});
app.put('/', (req, res) => {
    res.json(arr[0]);
});
app.delete('/', (req, res) => {
    let dat = arr.filter(a => a.id === req.params.id)
    if(dat){
        res.json(dat);
    }
    res.json({});
});

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port 3000");
});