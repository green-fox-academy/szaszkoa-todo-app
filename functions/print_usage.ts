'use strict'

export function print_usage(){
  console.log(
`
===================================
** Command Line Todo application **
===================================

    ${list_of_arguments}`);
}

let list_of_arguments: string = command_line_arguments();

function command_line_arguments(){
return `\tCommand line arguments:
\t-l\tList all tasks
\t-a\tAdds a new task
\t-r\tRemoves a task
\t-c\tCompletes a task
\t-help\tLists all commands`
}

export let header: string = header_function();

function header_function(){
  return`
===================================
** Command Line Todo application **
===================================
`
};
