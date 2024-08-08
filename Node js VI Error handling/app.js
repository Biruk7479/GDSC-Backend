const fs = require('fs');

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


async function sumNumbersInFile(filePath) {
    try {
        const data = await readFile(filePath, 'utf8');
        const numbers = data.split('\n').map(line => {
            const num = parseFloat(line.trim());
            if (isNaN(num)) throw new Error(`Invalid number in file ${filePath}: ${line}`);
            return num;
        });

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        console.log(`Sum for ${filePath}: ${sum}`);
        return sum;
    } catch (error) {
        console.error(`Error processing ${filePath}: ${error.message}`);
        return 0;
    }
}

async function processFiles(filePaths) {
    try {
        let totalSum = 0;
        for (const filePath of filePaths) {
            totalSum += await sumNumbersInFile(filePath);
        }
        console.log(`Total sum of all files: ${totalSum}`);
    } catch (error) {
        console.error(`Unexpected error: ${error.message}`);
    }
}

const files = ['./num1.txt','./num2.txt'];

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled promise rejection:', reason);
    process.exit(1);
});


processFiles(files);
