'use strict';

import { header } from './print_usage'
import { args } from '../main';

const fs = require('fs');

export function add_new_task(){
  // adding the text and number
  let items: string[] =  fs.readFileSync('./data/items.txt','utf-8').split('\r\n');
  items.push(args[3]);
  fs.writeFileSync('./data/items.txt',items.join('\r\n'));
  // adding the completion status to the completion.txt
  let completed: string[] =  fs.readFileSync('./data/completion.txt','utf-8').split('\r\n');
  completed.push('false');
  fs.writeFileSync('./data/completion.txt',completed.join('\r\n'));
  console.log('\nYour item have been added!');
}