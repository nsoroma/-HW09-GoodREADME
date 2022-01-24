const fs=require('fs'); // fs = file system
const path=require('path');
const generateMarkdown=require('./utils/generateMarkdown');
const inquirer = require('inquirer');

const questions = [
    {
        type:'input', 
        name:'title', 
        message:'What is the title of the project?',
        validate: validTitle => {
            if (validTitle) {
                return true;
            } else {
                console.log('A Project Title is required. Please enter it here:');
                return false;
            }
        }
    },
    {
        type:'input', 
        name:'description', 
        message:'Please add the description for the project:',
        validate: validDescription => {
            if (validDescription) {
                return true;
            } else {
                console.log('A Description for this project is required. Try again.');
                return false;
            }
        }
    },
    {
        type:'input', 
        name:'installIns', 
        message:'Please add installation instructions:',
        validate: validInstall => {
            if (validInstall) {
                return true;
            } else {
                console.log('Installation Instructions are required.');
                return false;
            }
        }
    },
    {
        type:'input', 
        name:'usageInfo', 
        message:'Please add usage information: ',
        validate: validUsage => {
            if (validUsage) {
                return true;
            } else {
                console.log('Usage Instructions are required.');
                return false;
            }
        }
    },
    {
        type:'input', 
        name:'contributing', 
        message:'What are the contribution guidelines?',
        validate: validContribution => {
            if (validContribution) {
                return true;
            } else {
                console.log('Contribution Guidelines are required.');
                return false;
            }
        }
    
    },
    {
        type:'input', 
        name:'testIns', 
        message:'Please add testing instructions: ',
        validate: validTest => {
            if (validTest) {
                return true;
            } else {
                console.log('Testing Instructions are required.');
                return false;
            }
        }

    },
    {
        type:'list', 
        name:'license', 
        message:'Which license are you using?', 
        choices:[
            'Apache License v2.0', 
            'GNU General Public License v3.0',
            'ISC',
            'MIT License', 
            'None'
        ]
    },
    {
        type:'input', 
        name:'githubuser', 
        message:'What is the GitHub username?',
        validate: validUserName => {
            if (validUserName) {
                return true;
            } else {
                console.log('A Github username is required.');
                return false;
            }
        }
    },
    {
        type:'input', 
        name:'email', 
        message:'What is your email address?',
        validate: validEmail => {
            if (validEmail) {
                return true;
            } else {
                console.log('An email address is required.');
                return false;
            }
        }
    }
]

function formatLicense(license) {
switch (license) {
    case 'Apache License v2.0':
      license = 'Apache%202.0';
      break;
    case 'GNU General Public License v3.0':
      license = 'GPL';
      break;
    case 'MIT License':
      license = 'MIT';
      break;
  }
  return license;

}

inquirer.prompt(questions).then(function(answers){
    console.log(generateMarkdown(answers));
    fs.writeFileSync(path.join(__dirname,'README.md'), generateMarkdown(answers));
})



