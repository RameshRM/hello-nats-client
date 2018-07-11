# Installation

`brew install gnatsd`
> [NATS)(https://www.nats.io/documentation/tutorials/gnatsd-install/)

# Server Setup

## Configure Servers

1. Create Server 1 [server1.conf](./conf/server1.conf)

2. Create Server 2 [server2.conf](./conf/server2.conf)

## Start Servers

> Download the `Configuration` files from above links to `$(pwd)`

```shell
./server.sh --Starts 1st Server
./server2.sh --Starts 2nd Server
```

# Client Setup

```
git clone https://github.com/RameshRM/hello-nats-client.git

cd hello-nats-client

```


## Installation

`npm install`

## Run

### Publisher

`node publisher.js`

### Subscriber

#### First

`node subscriber-one.js`

#### Second

`node subscriber-two.js`

### Summary

Results are stored in `output/result1.txt` for 1st Subscriber & `output/result2.txt` for 2nd Subscriber.
