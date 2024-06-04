

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

function Con() {
    let form = document.getElementById("Hd");
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        if (element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }
    let jsonData = JSON.stringify(formData);
    let ValOut = document.getElementById("ValOut");
    ValOut.innerHTML =  "<pre>" +jsonData +"<pre>";
}


var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

// Create an object
const userData = {
    job: "Programmer",
    skills: [
      { id: 4200, name: "Angular" },
      { id: 3000, name: "React" },
      { id: 8080, name: "Vue" },
    ],
  };// Store the object into storage
localStorage.setItem("userData", JSON.stringify(userData));
