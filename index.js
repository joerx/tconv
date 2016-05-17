#! /usr/bin/env node

'use strict';

const moment = require('moment');
const assert = require('assert');
const format = 'HH:mm';
const localOffset = moment().format('Z');

const offsets = ['+01:00', '+07:00', '+08:00', '+05:30'];

let base;

if (process.argv.length > 2) {
  base = parseInputTime(process.argv[2]);
} else {
  base = moment();
}

console.log('local\t', base.utcOffset(localOffset).format(format));

offsets.sort().forEach(offset => 
  console.log(offset, '\t', base.utcOffset(offset).format(format)) // DE
);

function parseInputTime(time) {
  assert(/\d{2}:\d{2}/.test(time), 'Invalid time');
  let date = moment().format('YYYY-MM-DD');
  return moment(date + ' ' + time);
}
