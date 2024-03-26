const readline = require('readline');
let tasks = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const showMenu = () => {
  console.log('\nTodo List Application\n');
  console.log('1. Add a task');
  console.log('2. View tasks');
  console.log('3. Exit');
  rl.question('Choose an option: ', (option) => {
    if (option === '1') {
      rl.question('Enter a task: ', (task) => {
        tasks.push(task);
        showMenu();
      });
    } else if (option === '2') {
      console.log('\nTasks:');
      tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
      });
      showMenu();
    } else {
      rl.close();
    }
  });
};

showMenu();
