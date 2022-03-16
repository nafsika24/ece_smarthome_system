# Mini Smarthome System :iphone: :bulb:

Our System aims to give you the ability to secure and monitor your home using a smartphone or tablet through an internet connection. The functionalities provided are:
* Alert user in case of a possible break into the house, using the alarm system.
* ALert user in case of fire or high levels of dangerous gases.
* Alert user if the doorbell is ringing.
* ALert user if the fridgefoor was left open for several minutes or the faucet or oven was left open while no one is in the house.
* Control (open/close) the lights, the television, the radio and the coffee maker.
* Control the heatig system.
* Inform user about the energy consumption.
* Show many timestamp graphs for the above functionalities

The system was developed using the tool [Node-Red](https://nodered.org/). \\
We assume that the messages we retrieve (for the several states of the house) are from sensors. These sensors send data at Node-Red using the [Mosquitto MQTT Brocker](https://mosquitto.org/). Node-Red recieves those messages and stores the in a database. In case of need for alert, the user will recieve messages at a [Slack](https://slack.com/) channel. \\

THe file flows.json contains all the flows of the system. By uploading it at Node-Red you can see them. The flows contain connection to PostgreSQL Database and Mosquitto MQTT Brocker.

For the visualisation of all the states we used the tool [Grafana](https://grafana.com/).

For the control of the devices (e.x. lights) you will use Grafana's Dashboard, where there are several buttons for that purpose. As Grafana can not send MQTT requests when a button is clicked, we developed a simple API, which listens at user's controls and sends MQTT requests.

As we do not have real sensors, we will simulate them by using python scripts. In the folder data_scripts you will find the test_script.sh. By running it all the contained scripts begin simultaneously to send MQTT requests every five minutes, with hypothetical timestamp data from the house's sensors.  

### Build note 
To run data scripts, first run on your terminal "pip install paho-mqtt"
