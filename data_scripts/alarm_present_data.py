import paho.mqtt.client as mqtt
from datetime import datetime
import json 
import random as rd
import time

# Data production for present event :
# topic : topic/present

# Payload :
# type : JSON
# fields : time, room : [bathroom, kitchen, bedroom, living room], isopen : 1 or 0



client = mqtt.Client('present')
client.connect('localhost', keepalive=600)

now = datetime.now()
dt_string = now.strftime("%Y-%m-%d %H:%M:%S")
print(dt_string)

rooms = ["bathroom", "kitchen", "bedroom", "living room", "garage"]

counter = 0

while 1 :
    counter += 1
    now = datetime.now()
    if not int(now.strftime("%M")) % 5 :
        dt_string = now.strftime("%Y-%m-%d %H:%M:%S")
        for room in rooms :
            current_payload = {
                "time" : dt_string,
                "state" : rd.randint(0,1),
                "room" : room,
            }
            client.publish("topic/present", str(json.dumps(current_payload, indent = 4)))
            print(str(json.dumps(current_payload, indent = 4)))
        time.sleep(60)
        continue

    else :
        print("Cool")
        time.sleep(60)

    if counter >= 30 :
        break



