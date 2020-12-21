# different_shopping_cart
This is a repository to copy all the Javascript code files created for interview question for Different Company


Requirements to run this code:
This is a node js project and needs Node JS to run this code.
It also uses jest tetsing framework to cover the tests asked in the interview question.

Please follow below steps to set up the project :

1) please create a local diretcory
  mkdir shopping_cart_test
  cd .\shopping_cart_test\

2) Run below command for setting up Node project  
    npm init --y

3) Install jest testing framework
    npm install --save-dev jest

4) Update the package.json as below:
    "scripts": {
        "test": "jest"
    },


4) I have created 2 files. Please copy those in shopping_cart_test directory as created in step 1 above
    shopcart.js => Javascript code to add new items in the shopping cart
    shopcart.test.js   => Javascript Testing script for jest. Includes all the tests mentioned in the question.


5) Pleae open the terminal and run bwlow command
    cd .\shopping_cart_test\
    npm test
    This step 5 will run all the tests written in the shopping_cart_test.js file using jest framework.

    Expected outout of above command is:
        Test Suites: 1 passed, 1 total
        Tests:       3 passed, 3 total
