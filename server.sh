#!/bin/bash

echo 'Starting NATs Server'

echo '*** Starting Server1 with ./conf/server1.conf ***'
gnatsd -config ./conf/server1.conf -D
