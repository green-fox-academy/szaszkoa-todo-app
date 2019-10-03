'use strict';

const fs = require('fs');
export const args: string[] = process.argv;

// imported functions of the application from directory ./functions/
import { print_usage } from './functions/print_usage';
import { list_task } from './functions/list_tasks';
import { add_new_task } from './functions/add_new_task';

let controlMethods = () => {

  if (args.length == 2) {
    print_usage();
  } else if (args[2] == '-help') {
    print_usage();
  } else if (args[2] == '-l' ) {
    list_task();
  } else if (args[2] == '-a' ){
    add_new_task();
    console.log('\nYour item have been added!');
  } else {
    console.log('\nsorry, feature not ready yet :(');
  }

}

controlMethods();




