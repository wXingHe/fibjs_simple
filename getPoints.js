// index.js
const gui = require('gui'); //界面模块
const db = require('db'); //数据库模块

var mysql = db.openMySQL('mysql://root:123456\@localhost/advx');

let webview = gui.open('fs:getPoints.html');

webview.onmessage = msg => {
    // console.log(msg);
    let pos = JSON.parse(msg);
    if(pos.code == 1 && pos.data.length > 0){
    	let data = pos.data;
    	for(let i = 0; i < data.length; i++){
    		for(let j = 0; j < data[i].tr.length; j++){
    			saveToDB(data[i].tr[j].title, data[i].tr[j].point.lat, data[i].tr[j].point.lng);
    		}
    	}
    	
    }else{
    	console.log("no point\n");
    }
    // console.log(JSON.stringify(pos));
}

webview.onload = evt => webview.postMessage("hello from fibjs");

webview.wait();

function saveToDB(title,lat,lng) {
    //TODO: 保存路径至数据库
    let sql = db.formatMySQL("insert into cmf_test_points (name,lat,lng) values(?, ?, ?)",
    title,lat,lng);
    let id = mysql.execute(sql);
    console.log(id);
}