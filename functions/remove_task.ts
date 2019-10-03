'use strict';

import { header } from './print_usage';
import { args } from '../main';

const fs = require('fs');

export function remove_task() {
  //removing the new item
  let items: string[] = fs.readFileSync('./data/items.txt', 'utf-8').split('\r\n');
  items.splice(args[3] - 1, 1);
  fs.writeFileSync('./data/items.txt', items.join('\r\n'));
  //removing the completion status from completion.txt
  let completed: boolean[] = fs.readFileSync('./data/completion.txt', 'utf-8').split('\r\n');
  completed.splice(args[3] - 1, 1);
  fs.writeFileSync('./data/completion.txt', completed.join('\r\n'));
  console.log(`\nItem No.${args[3]} have been removed from the list!`);
}