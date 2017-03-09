#!/bin/bash
if [ ! -f src/environments/environment.local.ts ]; then
    echo "Building dev env"
    ng build --dev
else
    echo "Building local env"
    ng build --environment=local
fi

