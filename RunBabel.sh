#!/bin/bash

alias cdproj='cd /Users/hhundiwala/Documents/Docs/React\ Projects/Indecision-app/'

$cdproj


echo Setting the defauls path

PATH=$PATH:/usr/local/bin

echo Starting Babel

babel /Users/hhundiwala/Documents/Docs/React\ Projects/Indecision-app/src/app.js --out-file=/Users/hhundiwala/Documents/Docs/React\ Projects/Indecision-app/public/scripts/app.js --presets=env,react --watch

echo Babel started successfully
