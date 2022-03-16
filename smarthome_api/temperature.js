
const querystring = require('querystring');
const bodyParser = require('body-parser');

const express = require('express');
const router = express.Router();
const mqtt = require('mqtt')

var client = mqtt.connect("mqtt://localhost:1883")

// turn on/off temperature
router.post('/on', (req,res) => {
    const temp = req.body.temp;
    console.log("Turn on Thermostat at temperature", temp ,"°C");

    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');

    client.publish("topic/thermostat", JSON.stringify({"time": formatted_timestamp, "temperature": temp, "state":1}))
    res.send(req.body)
})

router.post('/off', (req,res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted_timestamp = dt.format('Y-m-d H:M:S');
    var x = Math.random() * (30 - 10);

    client.publish("topic/thermostat", JSON.stringify({"time": formatted_timestamp, "temperature":  parseInt(x), "state":0}))
    console.log("Turn off Thermostat.");

    res.send(req.body)
})

module.exports = router ;
