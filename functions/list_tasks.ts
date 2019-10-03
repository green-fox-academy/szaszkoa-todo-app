'use strict';

import { header } from './print_usage'

const fs = require('fs');

export function list_task() {
  let items: string[] = fs.readFileSync('./data/items.txt', 'utf-8').split('\r\n');
  let completed: string[] = fs.readFileSync('./data/completion.txt', 'utf-8').split('\r\n');
  // checking for empty list
  if (items[0] == "") {
    console.log('\nYou are all done for today :)')
  } else {
    // printing all the tasks
    for (let i: number = 0; i < items.length; i++) {
      items[i] = (i + 1) + '. ' + (completed[i] === 'true' ? '[X] ' : '[ ] ') + items[i];
    }
    console.log(`${header}\nYour items in your list are the following:\n\n${items.join('\r\n')}`);
  }
}