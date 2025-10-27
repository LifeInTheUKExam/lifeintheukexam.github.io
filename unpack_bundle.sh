#!/bin/sh

cat blob.tar.gz.enc.part-* | openssl enc -d -aes-256-cbc -base64 -pass file:key.txt | tar -xzf -

