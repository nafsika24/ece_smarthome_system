const express = require('express');
const res = require('express/lib/response');
const app = express();
const mqtt = require('mqtt')
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(express.json())

app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,Bearer-Authentication-Token");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});


// establish connection with the mqtt brocker
var client = mqtt.connect("mqtt://localhost:1883")
client.on("connect",function(){	
    console.log("Mqtt brocker connected.");
    })


app.get('/', (req,res) => {

    res.send("Api running");
})

// open or close lights
app.post('/lights_on_bed', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 1, "room":"bedroom"}))
    console.log("Turn on bedroom light.");

    res.send(req.body)
})

app.post('/lights_off_bed', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');
    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 0, "room":"bedroom"}))
    console.log("Turn off bedroom light.");

    res.send(req.body)
})

app.post('/lights_on_bath', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 1, "room":"bathroom"}))
    console.log("Turn on bathroom light.");

    res.send(req.body)
})

app.post('/lights_off_bath', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 0, "room":"bathroom"}))
    console.log("Turn off bedroom light.");

    res.send(req.body)
})

app.post('/lights_on_kitchen', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 1, "room":"kitchen"}))
    console.log("Turn on kitchen light.");

    res.send(req.body)
})

app.post('/lights_off_kitchen', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 0, "room":"kitchen"}))
    console.log("Turn off kitchen light.");

    res.send(req.body)
})

app.post('/lights_on_liv', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 1, "room":"living room"}))
    console.log("Turn on living room light.");

    res.send(req.body)
})

app.post('/lights_off_liv', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 0, "room":"living room"}))
    console.log("Turn off living room light.");

    res.send(req.body)
})


app.post('/lights_on_garage', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 1, "room":"garage"}))
    console.log("Turn on garage light.");

    res.send(req.body)
})

app.post('/lights_off_garage', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/lights", JSON.stringify({"time": formatted_timestamp, "state": 0, "room":"garage"}))
    console.log("Turn off garage light.");

    res.send(req.body)
})

// open or close oven

app.post('/oven_on', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/oven", JSON.stringify({"time": formatted_timestamp, "state": 1, "device":"oven"}))
    console.log("Turn on oven.");

    res.send(req.body)
})

app.post('/oven_off', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/oven", JSON.stringify({"time": formatted_timestamp, "state": 0, "room":"oven"}))
    console.log("Turn off oven.");

    res.send(req.body)
})
 
// open or close alarm

app.post('/alarm_on', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/alarm", JSON.stringify({"time": formatted_timestamp, "isopen": 1}))
    console.log("Turn on alarm.");

    res.send(req.body)
})

app.post('/alarm_off', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/alarm", JSON.stringify({"time": formatted_timestamp, "isopen": 0}))
    console.log("Turn off alarm.");

    res.send(req.body)
})
 
// turn on/off tv
app.post('/tv_on', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/tv", JSON.stringify({"time": formatted_timestamp, "state": 1, "device":"tv"}))
    console.log("Turn on Television.");

    res.send(req.body)
})

app.post('/tv_off', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/tv", JSON.stringify({"time": formatted_timestamp, "state": 0, "device":"tv"}))
    console.log("Turn off Television.");

    res.send(req.body)
})

// turn on/off radio
app.post('/radio_on', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/radio", JSON.stringify({"time": formatted_timestamp, "state": 1, "device":"radio"}))
    console.log("Turn on Radio.");

    res.send(req.body)
})

app.post('/radio_off', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/radio", JSON.stringify({"time": formatted_timestamp, "state": 0, "device":"radio"}))
    console.log("Turn off Radio.");

    res.send(req.body)
})


// turn on/off coffee maker
app.post('/coffee_on', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/coffee_maker", JSON.stringify({"time": formatted_timestamp, "state": 1, "device":"coffee_maker"}))
    console.log("Turn on Coffee Maker.");

    res.send(req.body)
})

app.post('/coffee_off', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/coffee_maker", JSON.stringify({"time": formatted_timestamp, "state": 0, "device":"coffee_maker"}))
    console.log("Turn off Coffee Maker.");

    res.send(req.body)
})


app.use('/thermostat',require('./temperature'));



app.listen(3001, ()=>
    console.log("Api running"))
   