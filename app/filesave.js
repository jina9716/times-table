const fs = require('fs');

function timesTable(){
    result = "";
    for(i=1; i<=9; i++){
        for(j=2; j<9; j=j+2){
            result += `${j}*${i}=${i*j}\t`;
        }
        result += "\n";
    }
    result += "\n";
    for(i=1; i<=9; i++){
        for(j=3; j<=9; j=j+2){
            result += `${j}*${i}=${i*j}\t`;
        }
        result += "\n";
    }
    return result;
}

const data = timesTable();
fs.writeFileSync('timesTable.txt', data, 'utf8');

const fileData = fs.readFileSync('timesTable.txt', 'utf8');
console.log(fileData);