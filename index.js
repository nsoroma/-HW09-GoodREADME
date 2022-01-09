// console.log('Hello World');

const fs=require('fs'); // fs = file system
const path=require('path');
const generateMarkdown=require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const questions = [
    {
        type:'input', name:'title', message:'What is the title of the project?'
    },
    {
        type:'input', name:'description', message:'Please add the description for the project: '
    },
    {
        type:'input', name:'installIns', message:'Please add installation instructions: '
    },
    {
        type:'input', name:'usageInfo', message:'Please add usage information: '
    },
    {
        type:'input', name:'contributing', message:'What are the contribution guidelines?'
    },
    {
        type:'input', name:'testIns', message:'Please add test instructions: '
    },
    {
        type:'list', name:'license', message:'Which license are you using?', choices:['MIT', 'Apache', 'GPL']
    },
    {
        type:'input', name:'githubuser', message:'What is the GitHub username?'
    }
]


inquirer.prompt(questions).then(function(answers){
    console.log(generateMarkdown(answers));
    fs.writeFileSync(path.join(__dirname,'README.md'), generateMarkdown(answers));
})



