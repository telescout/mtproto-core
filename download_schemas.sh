#!/bin/bash

# Download mtproto.json from the provided URL
curl https://core.telegram.org/schema/mtproto-json -o ./scheme/mtproto.json

# Download api.json from the provided URL
curl https://core.telegram.org/schema/json -o ./scheme/api.json
