
function Con(){
    
    //var Un = document.getElementById("Un").value;
   // var Ps = document.getElementById("Ps").value;
   var Un = "VijayVeerappa";
   var Ps = "KVAFamily";


  
  
    const mysql = require('mysql2');


    // create a new MySQL connection
    const pool = mysql.createPool( { 
        host: 'localhost',
        user: 'root',
        password: 'dingdong',
        database: 'vjhex'}).promise();
  
    
    var value;
    globalThis.value=value;

    var g =10;

    if((g=10) ){
            async function getall(Un){     
                value = await pool.query(`SELECT PASSWORD FROM users WHERE USER_NAME = ?`,[Un])
            
                console.log(value);
                pool.end();                     // close the MySQL connection
                if ( Pass = value){
                    console.log("You are loged In");
                    window.open("index.html","_self");
                }else{
                    console.log("Incorrect password")
                }
                                          

            }; 
        
            getall(Un) 
    }else{
        alert('Incorrect Username or Password')
        }
    
   
 
    
}
Con();