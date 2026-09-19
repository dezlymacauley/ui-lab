#!/usr/bin/env bash

#MISE description="🧼 Delete the 'node_modules' directory"
#MISE quiet=true

if [ ! -d node_modules ]; then
    printf "\n%s\n\n" '✅ No node_modules directory found'
    exit 0
fi

rm -rf node_modules
printf "\n%s\n\n" '✅ The node_modules directory has been deleted'
