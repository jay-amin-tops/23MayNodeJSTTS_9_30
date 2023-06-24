const yargs = require('yargs')

yargs.command('command', '', (yargs) => {
    yargs.positional('guid', {
        describe: 'a unique identifier for the server',
        type: 'string',
        default: 'Cambi'
      })
}, function (argv) {
    console.log("called command",argv.guid);
}).argv

// yargs.command('hello', '', (yargs) => {
//         // yargs.positional('fname', {
//         //     type: 'string',
//         //     default: 'Cambi',
//         //     describe: 'the name to say hello to'
//         // })
//         // console.log(yargs);
//     }, function (argv) {
//         console.log(argv);
//         // if (argv.fname == undefined || argv.lname == undefined ) {
//         //     console.log("please enter ");
            
//         // } else {
//         //     console.log("inside try");
//         //     console.log('hello user input if ', argv.fname, 'welcome to yargs!')
//         // }
//         // try {
//         //     argv.fname
//         // } catch (error) {
//         //     console.log("called catch");
//         // }
//         // console.log('hello default value of name is ', argv.default, 'welcome to yargs!')
//         // console.log('hello description', argv.describe)
//     })
//     .argv



// const yargs = require('yargs')
// // const argv = yargs(hideBin(process.argv)).argv

// yargs.command("test","Something for test command",(yargs) => {
//     // yargs.positional('fname', {
//     //     type: 'string',
//     //     default: 'Cambi',
//     //     describe: 'the name to say hello to'
//     // })
//     // console.log(yargs);
// },function (data){
//     console.log('hello data')
// }).data



// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv

// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }
// require('yargs')
//   .scriptName("pirate-parser")
//   .usage('$0 <cmd> [args]')
//   .command('hello [name]', 'welcome ter yargs!', (yargs) => {
//     yargs.positional('name', {
//       type: 'string',
//       default: 'Cambi',
//       describe: 'the name to say hello to'
//     })
//   }, function (argv) {
//     console.log('hello', argv.name, 'welcome to yargs!')
//   })
//   .help()
//   .argv