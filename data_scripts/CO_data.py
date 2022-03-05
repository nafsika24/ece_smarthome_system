import paho.mqtt.client as mqtt
from datetime import datetime
import json 
import random as rd
import time

# Data production for CO event :
# topic : topic/CO

# Payload :
# type : JSON
# fields : time, room : [bathroom, kitchen, bedroom, balcony, garage, living room], gas_type : fire, value : int (Critical for 
# values greater than 6)


client = mqtt.Client('CO')
client.connect('localhost')

now = datetime.now()
dt_string = now.strftime("%Y-%m-%d %H:%M:%S")
print(dt_string)

rooms = ["bathroom", "kitchen", "bedroom", "balcony", "garage", "living room"]

while 1 :
    now = datetime.now()
    if not int(now.strftime("%M")) % 5 :
        dt_string = now.strftime("%Y-%m-%d %H:%M:%S")
        for room in rooms :
            current_payload = {
                "time" : dt_string,
                "value" : rd.randint(0,11),
                "room" : room,
                "gas_type" : "CO"
            }
            client.publish("topic/CO", str(json.dumps(current_payload, indent = 4)))
            print(str(json.dumps(current_payload, indent = 4)))
        time.sleep(60)
        continue

    else :
        print("Cool")
        time.sleep(60)



