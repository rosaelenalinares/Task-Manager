let array_1 = []
array_1[0] = "Read";
array_1[1] = "Eat";
array_1[2] = "Code";
let list = [];
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

const manager = () => {
    console.log("Welcome to your task manager, Press:")
    console.log("1. to see all your tasks");
    console.log("2. to add a task");
    console.log("3. to delete a task");
    console.log("4. to mark a task as done");
    console.log("5. to Exit the task manager");

        rl.question('select a number: ', (answer) => {
        if(answer == "1") {
            console.log(array_1[0]);
            console.log(array_1[1]);
            console.log(array_1[2]);
            manager()
        }
            else if (answer == "2") {
                rl.question('Add a task: ', (answer) => {
                list.push(answer);
                console.log("You have added your task!");
                manager()
                });
            }
            else if (answer == "3") {
                rl.question('Delete a task: ', (answer) => {
                list.push(answer);
                console.log("You have deleted your task!");
                manager()
                });
            }
            else if (answer == "4") {
                rl.question('Mark a task as done: ', (answer) => {
                list.push(answer);
                console.log("You have marked your task as done!");
                manager()
                });
            }
            else if (answer == "5") {
                rl.question('Are you sure you want to leave?', (answer) => {
                console.log("You have left your task manager.");
                rl.close()
                });
            }
        });
}
manager()