#!/bin/bash

echo '*** Starting Server2 with ./conf/server2.conf ***'
gnatsd -config ./conf/server2.conf -D

# gnatsd -p 5222 -cluster nats://localhost:5248 -routes nats://localhost:4248 -D
#
# listen: localhost:5222
# cluster {
#   host: 127.0.0.1
#   port: 5248
#   routes = [
#     nats-route://localhost:4248
#   ]
# }
