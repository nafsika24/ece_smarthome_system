import paho.mqtt.client as mqtt
from datetime import datetime
import json 
import random as rd
import time

client = mqtt.Client('power')
client.connect('localhost')

now = datetime.now()
dt_string = now.strftime("%Y-%m-%d %H:%M:%S")
print(dt_string)

counter = 0

while 1 :
    counter += 1
    now = datetime.now()
    if not int(now.strftime("%M")) % 5 :
        dt_string = now.strftime("%Y-%m-%d %H:%M:%S")
        current_payload = {
            "time" : dt_string,
            "temperature" : rd.randint(50,150),
            "energy_type" : "power",
            "capacity" : rd.randint(0,80)
        }
        client.publish("topic/power", str(json.dumps(current_payload, indent = 4)))
        print(str(json.dumps(current_payload, indent = 4)))
        time.sleep(60)
        continue

    else :
        print("Cool")
        time.sleep(60)

    if counter >= 30 :
        break



