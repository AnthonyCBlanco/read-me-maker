// TODO: Include packages needed for this application
const fs       = require('fs')
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown.js')
console.log(markdown)

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'Title Of Project',
        name:'title',
    },
    {
        type:'input',
        message:'Description',
        name:'description'
    },
    {
        type:'input',
        message:'Installation Instructions',
        name:'installation'
    },
    {
        type:'input',
        message:'Usage',
        name:'usage'
    },
    {
        type:'list',
        choices:['MIT', 'ApacheLicense2.0', 'ISCLicense'],
        message:'Please Chose A License',
        name:'license'
    },
    {
        type:'input',
        message:'Contribution Guidelines',
        name:'contribution'
    },
    {
        type:'input',
        message:'Test Instructions',
        name:'test'
    },
    {
        type:'input',
        message:'Questions',
        name:'questions'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8',(err)=>{
        if (err) throw err;
        console.log('Read Me Has Been Created')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>{
        writeToFile('README.md', markdown(data))
    }) 
}

// Function call to initialize app
init();
