const http = require('http');
const url = require('url');

function timesTable(num){
    result = "";
    for(i=1; i<=9; i++){
        result += `${num}*${i}=${num*i}\n`;
    }
    return result;
}

http.createServer((req, res)=>{
    const queryObject = url.parse(req.url, true).query;

    const num = Number(queryObject.num);
    if(Number.isInteger(num)){
        res.end(timesTable(num));
    } else {
        res.statusCode = 400;
        res.end();
    }
    
}).listen(3000);