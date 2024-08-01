import fs from 'fs';
import path from 'path';

const commandFilePath = path.join('C:', 'Users', 'USER', 'Desktop', 'Node-Js-III-fsProject', 'command.txt');

function createFile(fileName) {
    fs.writeFile(fileName, '', 'utf8', (err) => {
        if (err) {
            console.error(`Error creating thr file ${fileName}:`, err);
        } else {
            console.log(`File named ${fileName} is created.`);
        }
    });
}


function deleteFile(fileName) {
    fs.unlink(fileName, (err) => {
        if (err) {
            console.error(`Error deleting the file ${fileName}:`, err);
        } else {
            console.log(`File named ${fileName} is deleted.`);
        }
    });
}
function renameFile(oldName, newName) {
    fs.rename(oldName, newName, (err) => {
        if (err) {
            console.error(`Error renaming file ${oldName} to ${newName}:`, err);
        } else {
            console.log(`File named ${oldName} renamed to ${newName}.`);
        }
    });
}

function addToFile(fileName, textToAdd) {
    fs.appendFile(fileName, textToAdd, 'utf8', (err) => {
        if (err) {
            console.error(`Error adding text to ${fileName}:`, err);
        } else {
            console.log(`Added text to ${fileName}.`);
        }
    });
}


function handleCommand(command) {
    if (command.startsWith('create a file ')) {
        const fileName = command.slice('create a file '.length);
        createFile(fileName);
    } else if (command.startsWith('delete the file ')) {
        const fileName = command.slice('delete the file '.length);
        deleteFile(fileName);
    } else if (command.startsWith('rename the file ')) {
        const renameParts = command.slice('rename the file '.length).split(' to ');
        if (renameParts.length === 2) {
            const oldName = renameParts[0];
            const newName = renameParts[1];
            renameFile(oldName, newName);
        } else {
            console.log('Invalid rename command format.');
        }
    } else if (command.startsWith('add to the file ')) {
        const addParts = command.slice('add to the file '.length).split(' ', 2);
        if (addParts.length === 2) {
            const fileName = addParts[0];
            const textToAdd = command.slice(('add to the file ' + fileName + ' ').length);
            addToFile(fileName, textToAdd);
        } else {
            console.log('Invalid add command format.');
        }
    } else {
        console.log('Unknown command.');
    }
}

fs.watchFile(commandFilePath, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        fs.readFile(commandFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading command file:', err);
            } else {
                const command = data.trim();
                if (command) {
                    handleCommand(command);
                }
            }
        });
    }
});

console.log(`////////////////WATCHING FOR CHANGES IN ${commandFilePath}//////////////////////////
//////create a file {FILENAME}
//////delete the file {FILENAME}
//////rename the file {FILENAME} to {FILENAME}
//////add to the file {FILENAME} {CONTENT}
`);
