const fs = require('fs');
const http = require('http');

let request = http.get('http://jsonplaceholder.typicode.com/posts', (res)=>{
    let data ='';
    res.on('data', (chunk)=>{
        data += chunk;
    });

    res.on('close', ()=>{
        fs.mkdirSync('result');
        fs.writeFile('./result/posts.txt', data, (err)=>{
            if(err) console.log('something is wrong');
        });
    });
});
request.on('error', (err)=>{
    console.log('error has been encountered');
});
