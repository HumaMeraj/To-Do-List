#! /usr/bin/env  node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t Welcome to CodingWithHuma-Todo-List Application \n"));

while(conditions){
let addtask = await inquirer.prompt([
    {
        name:"task",
        type:"type",
        message:chalk.green("Enter your NewTask:")

    }
]);
todoList.push(addtask.task);
console.log(`${addtask.task} Task added in Todo-List successfully`);

let addmoreTask = await inquirer.prompt([
{
         name:"addmore",
         type:"confirm",
         message:"Do you want to add more task?",
         default:"False"
}

]);
conditions = addmoreTask.addmore
}
console.log("Your updated Todo-List:" , todoList);