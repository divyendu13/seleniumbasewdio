# WebdriverIO project
## The project is about all basic automation on a demo website. Project uses below tool/library/framework/language
- JavaScript
- Mocha
- Webdriverio v7
- Nodejs
## Task
- 15 Tasks automated.
- The test will generate allure report with recording in  **allure-results** file
- The test case is present in follwoing path
**test/specs/example.e2e.js**
- The page objects are present in **test/pageobjects/.js** file


## Instruction to run test in local env

Clone or Download the repository and open the project in VS Code.
All the dependencies are mentioned in package.json file will be installed on below cmd
Go to the terminal and type below command
```sh
npm install
npx wdio run ./wdio.conf.js
```
To see the allure reporting type below in terminal
```sh
allure serve -h localhost
```
### Note - User must have nodejs 14v LTS installed.

