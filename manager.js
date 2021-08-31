const fs = require('fs');
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
const addedtask_file = fs.readFileSync('Added_tasks.json', 'utf-8');
const donetasks_file = fs.readFileSync('Done_tasks.json', 'utf-8');
let addedtask = JSON.parse(addedtask_file);
let donetask = JSON.parse(donetasks_file)
const save = (json, x) => {
    let data = JSON.stringify(x);
    fs.writeFile(json, data, function (err) {
        if (err)
            return console.log(err);
    });
}

let list = new Array();
list[0] = "\nWelcome to your task manager, select:\n"
list[1] = "\n1. To see all your tasks\n"
list[2] = "\n2. To add a task\n"
list[3] = "\n3. To delete a task\n"
list[4] = "\n4. To mark a task as done\n"
list[5] = "\n5. View tasks marked as done\n"
list[6] = "\n6. To Exit the task manager\n"

const manager = () => {
    list.forEach(function (i) {
        console.log(i);
    });
    rl.question('\nselect a number: ', (answer) => {
        if (answer === "1") {
            console.log("\nThis is your currently list of tasks:");
            console.log(`\n${addedtask}\n`);
            manager();
        }
        else if (answer === "2") {
            rl.question('\nAdd a task: ', (answer) => {
                addedtask.push(answer);
                save('Added_tasks.json', addedtask);
                console.log("\nYou have added your task!");
                manager();
            });
        }
        else if (answer === "3") {
            rl.question('\nDelete a task: ', (answer) => {
                if (addedtask.includes(answer)) {
                    addedtask.splice(addedtask.indexOf(answer), 1);
                    save('Added_tasks.json', addedtask);
                    console.log("\nYou have deleted your task!");
                } else if (donetask.includes(answer)) {
                    donetask.splice(donetask.indexOf(answer), 1);
                    save('Done_tasks.json', donetask);
                    console.log("\nYou have deleted your task!");
                } else {
                    console.log("\nThe task entered could not be found");
                }
                manager();
            });
        }
        else if (answer === "4") {
            rl.question('\nMark a task as done: ', (answer) => {
                if (addedtask.includes(answer)) {
                    addedtask.splice(addedtask.indexOf(answer), 1);
                    save('Added_tasks.json', addedtask);
                    donetask.push(answer);
                    save('Done_tasks.json', donetask);
                    console.log("\nYou have marked your task as done!\n");
                } else {
                    console.log("\nThe task entered could not be found\n");
                }
                manager();
            });
        }
        else if (answer === "5") {
            rl.question('\nView tasks marked as done.')
            console.log("\nThis is your currently list of tasks marked as done:")
            console.log(`\n${donetask}\n`);
            manager()
        }
        else if (answer === "6") {
            rl.question('\nAre you sure you want to leave? (yes/not): ', (answer) => {
                if (answer == 'yes') {
                    console.log("\nBye\n")
                    rl.close();
                } else if (answer == 'not') {
                    console.log("\nGreat!\n");
                    manager();
                }
            });
        }
    });
};
manager()