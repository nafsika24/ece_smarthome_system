#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
A script for generating publish and subscribe event for our Informational
Systems Project.
"""

import os


stream = os.popen("mosquitto_pub -t topic/fire -m " + repr('{"time": "2021-03-03 18:00:00", "isdetected": 1, "room":"bathroom"}'.rstrip()))
output = stream.read()

print(output)

