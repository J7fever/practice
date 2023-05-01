#!/bin/sh

const msg = require('fs').readFileSync('.git/COMMIT_EDITMSG', 'utf-8').trim();
console.log('msg=================>', msg)
process.exit(1)