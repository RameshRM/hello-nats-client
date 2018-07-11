# Installation

`brew install gnatsd`
> [NATS)(https://www.nats.io/documentation/tutorials/gnatsd-install/)

# Server Setup

## Configure Servers

1. Create Server 1 [server1.conf](https://gist.github.com/RameshRM/4b124c6851cadf81768aa47106e49acb#file-server1-conf)

2. Create Server 2 [server2.conf](https://gist.github.com/RameshRM/4b124c6851cadf81768aa47106e49acb#file-server2-conf)

## Start Servers

> Download the `Configuration` files from above links to `$(pwd)`

```shell
gnatsd -config server1.conf -D
gnatsd -config server2.conf -D
```

# Client Setup

```
git clone https://github.com/RameshRM/hello-nats-client.git
cd hello-nats-client

```


## Installation
