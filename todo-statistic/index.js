const {show} = require('./show');
const {important} = require('./important');
const {user} = require('./user');
const {getAllFilePathsWithExtension, readFile} = require('./fileSystem');
const {readLine} = require('./console');

const files = getFiles();

console.log('Please, write your command!');
readLine(processCommand);

function getFiles() {
    const filePaths = getAllFilePathsWithExtension(process.cwd(), 'js');
    //console.log(filePaths.map(path => readFile(path)))
    return filePaths.map(path => readFile(path));
}

function processCommand(command) {
    let param = command.split(/\s+/g)[1];
    switch (command) {
        case 'exit':
            process.exit(0);
            break;
            
        case 'show':
            show(getFiles());
            break;
        
        case 'important':
            important(getFiles());
            break;
        
        case 'user ' + param:
            user(getFiles(), param);
            break;

        default:
            console.log('wrong command');
            break;
    }
}

// TODO you can do it!

