'use strict';

import { args } from '../main';

const fs = require('fs');

export function complete(){
  let completion_status: boolean[] =  fs.readFileSync('./data/completion.txt','utf-8').split('\r\n');
  completion_status[args[3]-1] = true;
  fs.writeFileSync('./data/completion.txt',completion_status.join('\r\n'));
  console.log(`\nTask No.${args[3]} have been completed!`);
}