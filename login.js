

function Crlog(){
    var BD =document.getElementById("BD");
    var Hd = document.getElementById("Hd");
    var sbt = document.getElementById("sbt");
    var cbt = document.getElementById("cbt");
    var Ps = document.getElementById("Ps");
    var lpass = document.getElementById("lpass");
    var Un = document.getElementById("Un");
    var lun = document.getElementById("lun");
    
    Hd.removeChild(Un);
    Hd.removeChild(lun);
    Hd.removeChild(lpass);
    Hd.removeChild(Ps);
    BD.removeChild(sbt);
    BD.removeChild(cbt);


    Hd.innerHTML +='<label id="lun" for="name">Username :</label>\
                    <input id="Un" type="t" name="name" ></input><br>\
                    <label for="createpass">Create Password :</label> \
                    <input  type="text" name="createpass"></input><br> \
                    <label for="confirmpass">Confirm Password :</label> \
                    <input  type="text" name="confirmpass" ></input><br>';
        
    BD.innerHTML +='<button id="lbt" onclick="Ccompare()">Log</button>';

    
       
}
