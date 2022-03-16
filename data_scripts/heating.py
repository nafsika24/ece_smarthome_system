import paho.mqtt.client as mqtt
from datetime import datetime
import json 
import random as rd
import time

# Data production for heating event :
# topic : topic/thermostat

# Payload :
# type : JSON
# fields : time, state : int temperature : int



client = mqtt.Client('temperature')
client.connect('localhost', keepalive=600)

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
            "temperature" : rd.randint(5,50),
            "state" : rd.randint(0,1)
        }
        client.publish("topic/thermostat", str(json.dumps(current_payload, indent = 4)))
        print(str(json.dumps(current_payload, indent = 4)))
        time.sleep(60)
        continue

    else :
        print("Cool")
        time.sleep(60)

    if counter >= 30 :
        break



