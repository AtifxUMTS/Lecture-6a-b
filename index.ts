import inquirer from "inquirer";
import a from "./data/data1.js"
import {b,c, sum} from "./data/data1.js"
import { num1, num2, students } from "./data/data2.js"

console.log("🚀 ~ file: index.ts:4 ~ num1:", num1)
console.log("🚀 ~ file: index.ts:4 ~ students:", students)



// inquirer documentation: https://github.com/SBoundrias/inquirer.js


let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age"}
   ]);

   console.log("Inshah Allah in " + (60 - answers.age) + "years you will 60 years old.");

















// https://www.typescriptlang.org/docs/handbook/esm-node.htm1

/*
1. *Install Node.js:*
   - Install Node.js version 18.17.1 LTS from the official Node.js website (https://nodejs.org/en).

2. *Install TypeScript:*
   - Install TypeScript globally using the command:
     ```
     npm install -g typescript
     ```

3. *Create Project Folder and File:*
   - Open a new folder in your preferred code editor.
   - Create a file named "index.ts" within the folder.

4. *Initialize TypeScript Configuration:*
   - Initialize TypeScript configuration by running:
     ```
     tsc --init
     ```
   - Run the TypeScript compiler to generate the JavaScript files from TypeScript:
     ```
     tsc
     ```

5. *Initialize Node.js Project:*
   - Initialize a Node.js project by running:
     ```
     npm init -y
     ```

6. *Install Node.js Type Definitions:*
   - Install type definitions for Node.js using the following command:
     ```
     npm i @types/node -D
     ```

7. *Configure tsconfig.json and package.json:*
   - Adjust the tsconfig.json file according to the instructions from the official TypeScript documentation (https://www.typescriptlang.org/docs/h....
     - Set `"target": "ES2022"`
     - Set `"module": "NodeNext"`
     - Set `"moduleResolution": "NodeNext"`
     - If using JSON files, uncomment `"resolveJsonModule": true`
     - Set `"outDir": "./dist"` to specify an output folder for emitted files.

   - In the package.json file, add `"type": "module"` under the project's name.

8. *Create .gitignore File:*
   //Create a file named `.gitignore`.
   //Inside the `.gitignore` file, write `node_modules` to exclude the `node_modules` directory from version control.

*/