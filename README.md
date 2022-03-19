# Mini Smarthome System :iphone: :bulb:

Our System aims to give you the ability to secure and monitor your home using a smartphone or tablet through an internet connection. The functionalities provided are:
* Alert user in case of a possible break into the house, using the alarm system.
* Alert user in case of fire or high levels of dangerous gases.
* Alert user if the doorbell is ringing.
* Alert user if the fridgefoor was left open for several minutes or the faucet or oven were left open while no one is in the house.
* Control (open/close) the lights, the television, the radio and the coffee maker.
* Control the heatig system.
* Inform user about the energy consumption.
* Show many timestamp graphs for the above functionalities

The system was developed using the tool [Node-Red](https://nodered.org/). 

We assume that the messages we retrieve (for the several states of the house) are from sensors. These sensors send data at Node-Red using the [Mosquitto MQTT Brocker](https://mosquitto.org/). Node-Red recieves those messages and stores them in a database. In case of need for alert, the user will recieve messages at a [Slack](https://slack.com/) channel. 

THe file flows.json contains all the flows of the system. The flows contain connection to PostgreSQL Database, Mosquitto MQTT Brocker and the Slack channel.

For the visualisation of all the states we used the tool [Grafana](https://grafana.com/). You can import the files from the Folder Grafana Dashboards and see a demo of visualisations and the control of the devices.

For the control of the devices (e.x. lights) you will use Grafana's Dashboard, where there are several buttons for that purpose. As Grafana can not send MQTT requests when a button is clicked, we developed a simple Nodejs API, which listens at user's controls and sends MQTT requests.

As we do not have real sensors, we will simulate them by using python scripts. In the folder data_scripts you will find the test_script.sh. By running it all the contained scripts begin simultaneously to send MQTT requests every five minutes, with hypothetical timestamp data from the house's sensors.  

### Build note 
### Database
1. After downloading and setting up PostgreSQL, create a batabase with the tables that are in the file sql_tables.
### Node Red
1. To open Node-Red, after installing it, run on your terminal "node-red" and open the link http://127.0.0.1:1880/.
2. Import the file flows.json.
3. Navigate in Manage Palette and install the packages: node-red-contrib-loop-processing, node-red-contrib-postgresql and node-red-contrib-slack-files
4. In the postgresql insert nodes, you should configure the database you created.
5. Enter Deploy.

### MQTT (sensors)
* In the file mqtt there are some examples of MQTT Requests you can send.
* In order to simulate a real situation with simultaneous mqtt requests from sensors you can run the script `./test_scripts.sh` as explained bellow.
* To run data scripts, first run on your terminal in the folder data_scripts `pip install paho-mqtt`. In order to run all scripts simultaneously, in the terminal:
  1. run `chmod +x test_scripts.sh`
  2. run `./test_scripts.sh`
 Data will be sent every five minutes for 30 minutes.
 ### Grafana
 * To open Grafana, after installing it, run on your terminal "sudo systemctl start grafana-server" and open http://localhost:3000/.
 * Import the files from the folder Grafana Dashboards.
 * You can see now the timestamp graphs.
 * You can control the devices provided from the buttons, but first you should run the provided API (folder smarthome_api).
 ### API
 * To run the API, inside the folder smarthome_api: 
    1. `npm install`
    2. `nodemon start`
  ### Slack
* Slack channel for alert messages: https://join.slack.com/t/smarthomeapplication/shared_invite/zt-14gi1xq83-nAKqM6GHoSK8J4joeC5u0Q

