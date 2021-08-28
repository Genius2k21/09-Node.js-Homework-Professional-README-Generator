let inquirer = require('inquirer');
	let fs = require('fs');
	

	inquirer
	    .prompt([
	        {
	            type: "input",
	            message: "What is the title of your project?",
	            name: "title"
	        },
	        {
	            type: "input",
	            message: "Enter a description for your project:",
	            name: "description"
	        },
	        {
	            type: "input",
	            message: "Enter installation insructions as a comma separated list:",
	            name: "install"
	        },
	        {
	            type: "input",
	            message: "Enter usage information for your project:",
	            name: "usage"
	        },
	        {
	            type: "input",
	            message: "Enter contribution guidelines for your project:",
                name: "contribution"
            },
            {
                type: "input",
                message: "Enter test information for your project:",
                name: "testing"
            },
            {
                type: "input",
                message: "Enter your GitHub Username:",
                name: "github"
            },
            {
                type: "input",
                message: "Enter your email address:",
                name: "email"
            },
            {
                type: "list",
                message: "Which license does this project fall under?",
                name: "license",
                choices: [
                    "MIT License",
                    "Code Project Open License (CPOL)",
                    "Common Development and Distribution License (CDDL)",
                    "Microsoft Public License (Ms-PL)",
                    "Mozilla Public License 1.1 (MPL 1.1)",
                    "Common Public License Version 1.0 (CPL)",
                    "Eclipse Public License 1.0",
                    "Apache License, Version 2.0"
                ]
            }
        ])
    