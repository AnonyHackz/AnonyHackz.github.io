
function Con(){
    
    var Un = document.getElementById("Un").value;
    var Ps = document.getElementById("Ps").value;


  
  
    const mysql = require('mysql2');


    // create a new MySQL connection
    const pool = mysql.createPool( { 
        host: 'localhost',
        user: 'root',
        password: 'dingdong',
        database: 'vjhex'}).promise();
  
    
    var value;
    globalThis.value=value;

    if((Un==false) & (Ps == false)){
            async function getall(Un){     
                value = await pool.query(`SELECT PASSWORD FROM users WHERE USER_NAME = ?`,[Un])
            
                console.log(value);
                pool.end();
                if ( Pass = value){
                    console.log("You are loged In");
                    window.open("index.html","_self");
                }else{
                    console.log("Incorrect password")
                }
                getall(Un)                               // close the MySQL connection

                
        
            };
    }else{
        alert('Incorrect Username or Password')
        }
    
   
 
    
}