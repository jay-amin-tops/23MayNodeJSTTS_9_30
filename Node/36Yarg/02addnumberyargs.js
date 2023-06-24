const yargs = require('yargs')

yargs.command({
    command : "add",
    describe:"Add two numbers",
    builder:{
        firstNumber:{
            describe:"First Number",
            demandOption: true,  // Required
            type: 'number', 
            default:10
        },
        secondNumber:{
            describe:"Second Number",
            demandOption: true,  // Required
            type: 'number', 
            default:10

        }
    },
    handler(argv){
        // console.log(argv);
        console.log(argv.firstNumber+argv.secondNumber);
    }

})
yargs.parse() 

//node 02addnumberyargs.js add --firstNumber=10  --secondNumber 20