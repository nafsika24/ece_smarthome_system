import paho.mqtt.client as mqtt
from datetime import datetime
import json 
import random as rd
import time

# Data production for fire event :
# topic : topic/fire

# Payload :
# type : JSON
# fields : time, room : [bathroom, kitchen, bedroom, balcony, garage, living room], gas_type : fire

client = mqtt.Client('fire')
client.connect('localhost', keepalive=600)

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
                "value" : rd.randint(0,1),
                "room" : room,
                "gas_type" : "fire"
            }
            client.publish("topic/fire", str(json.dumps(current_payload, indent = 4)))
            print(str(json.dumps(current_payload, indent = 4)))
        time.sleep(60)
        continue

    else :
        print("Cool")
        time.sleep(60)

    if counter >= 30 :
        break




