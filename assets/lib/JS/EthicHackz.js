
function conect(){
    
    
    const express = require('express');
    const app = express();
    const mysql = require('mysql2');


    // create a new MySQL connection
    const pool = mysql.createPool( { 
        host: 'localhost',
        user: 'root',
        password: 'dingdong',
        database: 'vjhex'}).promise();
  
    var name = "VijayVeerappa";
    var Pass ="KVAFamily"
    var value;
    globalThis.value=value;
    async function getall(name){

        
       value = await pool.query(`SELECT PASSWORD FROM users WHERE USER_NAME = ?`,[name])
       
        console.log(value);
        pool.end();
        if ( Pass = value){
            console.log("You are loged In");
            window.open('index.html','_self');
        }else{
            console.log("Incorrect password")
        }
                                           // close the MySQL connection

        
   
    };
    getall()
   
 
    
}








function check() {;
     var checkbox = document.getElementById("checkbox");
    if (checkbox.checked == true){;
        checkbox.checked = false;
        window.open("Et.html" ,"_self" );
        
        alert  ("You will be tracked by our technical team for security purpose..")
      
    }else{
        alert ("Please agree with terms and conditions!.");
    }
}






  /*if (!this._connectCalled) {
    this._connectCalled = true;

    // Connect either via a UNIX domain socket or a TCP socket.
    this._socket = (this.config.socketPath)
      ? Net.createConnection(this.config.socketPath)
      : Net.createConnection(this.config.port, this.config.host);

    // Connect socket to connection domain
    if (Events.usingDomains) {
      this._socket.domain = this.domain;
    }*/