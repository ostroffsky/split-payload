## Description
If you grep logs, look for response and request, then unescape json-strings, then prettify and e.t.c. This package is for you :)

## Installation
```shell
npm install -g split-payload
```

## Usage
```shell
zgrep YOUR_REQUEST_ID YOUR_PAYLOAD_ARCHIVE.gz | split-payload
```
As a result you get two files with prettified JSON in the current directory: request.json and response.json.

## Status
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/ostroffsky/split-payload/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/ostroffsky/split-payload/tree/main)
