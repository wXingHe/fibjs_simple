// index.js
const gui = require('gui');
// const db = require('db');
let webview = gui.open('fs:index.html');

webview.onmessage = msg => {
    // console.log(msg);
    let pos = JSON.parse(msg);
    if(pos.code == 1 && pos.data.length>0){

    }
    console.log(JSON.stringify(pos));
}

webview.onload = evt => webview.postMessage("hello from fibjs");

webview.wait();

function saveToDB(pos) {
    //TODO: 保存路径至数据库
}