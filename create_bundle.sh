#!/bin/sh

if ! [ -d $1 ]
then
    echo "$1 is not a directory"
fi

key="$1/key.txt"

if ! [ -f "$key" ]
then
    echo "$key is not a valid file"
fi

tar --exclude='.git' --exclude='_site' --exclude='.github' -czf - $1 | openssl enc -aes-256-cbc -salt -base64 -pass file:$1/key.txt \
    | split -b 50M - blob.tar.gz.enc.part-
