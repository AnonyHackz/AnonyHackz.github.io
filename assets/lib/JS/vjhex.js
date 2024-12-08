
  
  
  



       // soon() section

  function Soon(){
      var con = document.getElementById("container");
      var pr = document.getElementById("project");
      con.removeChild(pr);
      var btn = document.getElementById("btn");
      con.removeChild(btn);
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
      var btn = document.getElementById("btn");
      
  }

  






         // he()  section 

  function he(){
        

        var pro= document.createElement("nav");            // To create element
        
        var bt2= document.createElement("div"); 
        bt2.setAttribute('id','btn');
       

        pro.setAttribute('id','project');                  // To set id or class name to the created element
      
                                                           // TO replace text content to any html tag
        document.getElementById("intro").innerHTML=" Hereby we are thrilled to inform you that we have multiple courses made available for you to pursue  in the field of IT."   ;                                                      
        
                                                            // To append html codes into created element
        pro.innerHTML+=`                         <div id="prj" onclick="Soon()" ><img id="im" src="HTML/Icons/icon.png"><lable id="prclk"  >HTML</lable></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="JavaScript/Icons/icon.png"><lable id="prclk" >JavaScript</lable></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="CSS/Icons/icon.png"><lable id="prclk" >CSS</lable></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="SQL/Icons/icon.png"><lable id="prclk" >SQL</lable></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Python/Icons/icon.png"><lable id="prclk" >Python</lable></a></div> 
                                                 <div id="prj" onclick="window.location.href='assets/lib/HTML/EthicHackz.html';" ><img id="im" src="Cyber Security/Icons/icon.png"><lable id="prclk" >Cyber Security </lable></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Machine Learning/Icons/icon.png"><lable id="prclk" >Machine Learning</lable></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Java/Icons/icon.png"><lable id="prclk" >Java</lable></a></div> 
                                                 <div id="prj" onclick="window.location.href='assets/lib/HTML/CloudComputing.html';"><img id="im" src="Cloud Computing/Icons/icon.png">   <lable id="prclk" >Cloud Computing</lable></a></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Web Development/Icons/icon.png"><lable id="prclk" >Web Development</lable></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Reverse Engineering/Icons/icon.png"><lable id="prclk" >Reverse Engineering</lable></div> 
                        `;
       
        bt2.innerHTML+= '<center><button id="bt2" onclick="home()">Previous Page</button></center>';
        var con = document.getElementById("container");    // To append created element into html file
        con.appendChild(pro);
        document.getElementById("project").insertAdjacentElement('afterend',bt2)

        var bt = document.getElementById("bt");            // To remove elements
        con.removeChild(bt);
      

  }
  






         // home() section

  function home(){
    
        var con = document.getElementById("container");
        var pr = document.getElementById("project");
        var btn=document.getElementById("btn");
        con.removeChild(btn);
        con.removeChild(pr);
        con.innerHTML += `<button id="bt" onclick="he()">Let's have a look</button>`;
    


  }


    
