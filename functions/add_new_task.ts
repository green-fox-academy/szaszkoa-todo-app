'use strict';

import { header } from './print_usage'
import { args } from '../main';

const fs = require('fs');


export function add_new_task(){
  let items: string[] =  fs.readFileSync('./data/items.txt','utf-8').split('\r\n');
  items.push(args[3]);
  fs.writeFileSync('./data/items.txt',items.join('\r\n'));
}