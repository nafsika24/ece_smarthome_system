import paho.mqtt.client as mqtt
from datetime import datetime
import json 
import random as rd
import time

# Data production for CO2 event :
# topic : topic/CO2

# Payload :
# type : JSON
# fields : time, room : [bathroom, kitchen, bedroom, balcony, garage, living room], gas_type : fire, value : int (>400)


client = mqtt.Client('CO2')
client.connect('localhost', keepalive=600)

now = datetime.now()
dt_string = now.strftime("%Y-%m-%d %H:%M:%S")
print(dt_string)

rooms = ["bathroom", "kitchen", "bedroom", "balcony", "garage", "living room"]

counter = 0

while 1 :
    counter += 1
    now = datetime.now()
    if not int(now.strftime("%M")) % 5 :
        dt_string = now.strftime("%Y-%m-%d %H:%M:%S")
        for room in rooms :
            current_payload = {
                "time" : dt_string,
                "value" : rd.randint(400,7000),
                "room" : room,
                "gas_type" : "CO2"
            }
            client.publish("topic/CO2", str(json.dumps(current_payload, indent = 4)))
            print(str(json.dumps(current_payload, indent = 4)))
        time.sleep(60)
        continue

    else :
        print("Cool")
        time.sleep(60)

    if counter >= 30 :
        break



