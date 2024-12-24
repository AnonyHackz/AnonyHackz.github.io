

  


export function c(){   
    var mysql1 = require('mysql');
    var con_Get = mysql1.createConnection({
    host: "localhost",
    user: "root",
    password: "dingdong",
    database: "vjhex"
    });
/* con_Get.connect(function(err) {
        if (err) throw err;
        con_Get.query("SELECT PASSWORD FROM users WHERE USER_NAME ='MurugesanVeerappa'", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });*/
    var Un = document.getElementById("Un").value;
    var sql = 'SELECT PASSWORD FROM users WHERE USER_NAME  = ?';
    con.query(sql, [Un], function (err, result) {
    if (err) throw err;
    console.log(result);
    });
};