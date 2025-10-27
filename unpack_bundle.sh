#!/bin/sh

if ! [ -f $1 ]
then
    echo "$1 is not a valid file"
fi

if ! [ -f "$2" ]
then
    echo "$2 is not a valid file"
fi

openssl enc -d -aes-256-cbc -base64 -pass file:$1 -in $2 | tar -xzf -

