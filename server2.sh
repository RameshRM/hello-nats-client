#!/bin/bash

echo '*** Starting Server2 with ./conf/server2.conf ***'
gnatsd -config ./conf/server2.conf -D
