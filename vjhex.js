function GetInfo(e){
      document.getElementById("test3").innerHTML = e.target.myCustomID;
      var tagID = e.target.myCustomID;
      $.ajax({
      url: 'Ajax1',
      type: "POST",
      data: {
            'tagID': tagID,
            'csrfmiddlewaretoken': '{{ csrf_token }}',
      },
      success: function (data) {
            alert ("Congrats! You sent some data: " + tagID);}
      ,
      error: function() {
            alert ("Something went wrong");
      }
      })};
/*var local = 'hii';
function check(){
      $.ajax({
            type: "GET",
            url:`printsome/?variable=` + local,
            
            
            success: function(response) {
                  console.log('success')
                  console.log(local)
                  alert("success returned");},
            error: function (response){
                  console.log('error');}})};*/
  
/*
  function hi(event){


   

        var ip = document.getElementById("project").value;
        
        var tg = document.createElement("h1");

        var tt =document.createTextNode(ip)
        
        tg.appendChild(tt);
        console.log(tg);
       
        var gt= document.getElementById("new");

    
        gt.appendChild(tg);
        
       


  }*/



       // soon() section

  function Soon(){
      var con = document.getElementById("container");
      var pr = document.getElementById("project");
      con.removeChild(pr);
      document.getElementById("intro").innerHTML=" We are pleased to consider exploring alternative courses at the moment."   ;                     
      con.innerHTML += ` <h1 id="GoBack" >Coming Soon.......</h1>`;
      con.innerHTML += `<center id="cenbt"><button id="btsoon" onclick="soonremove(); he()">Previous Page</button></center>`;
  }
  function soonremove(){
      var con = document.getElementById("container");
      var GoBack = document.getElementById("GoBack"); 
      con.removeChild(GoBack);
      var cenbt = document.getElementById("cenbt");
    
      con.removeChild(cenbt);
  }

  






         // he()  section 

  function he(){
        

        var pro= document.createElement("nav");            // To create element
        

        pro.setAttribute('id','project');                  // To set id or class name to the created element
      
                                                           // TO replace text content to any html tag
        document.getElementById("intro").innerHTML=" Hereby we are thrilled to inform you that we have multiple courses available for you to pursue  in the field of IT."   ;                                                      
        
                                                            // To append html codes into created element
        pro.innerHTML+='<form>\
                              <table>\
                                    <td>\
                                          <ol>\
                                                <li><a onclick="Soon()">HTML</a></li> \
                                                <li><a onclick="Soon()" >JavaScript</a></li>\
                                                <li><a onclick="Soon()">CSS</a></li>\
                                                <li><a onclick="Soon()" >SQL</a></li>\
                                                <li><a onclick="Soon()" >Python</a></li>\
                                                <li><a href="EthicHackz.html" targrt="blank">Ethical Hacking</a></li>\
                                                <li><a onclick="Soon()" >Machine Learning</a></li>\
                                                <li><a onclick="Soon()" >Java</a></li>\
                                                <li><a onclick="Soon()" >AutoCad</a></li>\
                                                <li><a onclick="Soon()" >Web Development</a></li>\
                                                <li><a onclick="Soon()" >Reverse Engineering</a></li>\
                                          </ol>\
                                    </td>\
                              </table>\
                              <button id="bt2" onclick="home()">Previous Page</button>\
                        </form>';
       
      
        var con = document.getElementById("container");    // To append created element into html file
        con.appendChild(pro);

        var bt = document.getElementById("bt");            // To remove elements
        con.removeChild(bt);
      

  }
  






         // home() section

  function home(){
    
        var con = document.getElementById("container");
        var pr = document.getElementById("project");
        con.removeChild(pr);
        con.innerHTML += `<button id="bt" onclick="he()">Let's have a look</button>`;
    


  }


    
