
  
  
  



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
      con.removeChild(btn);
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
        pro.innerHTML+='                         <div id="prj"><img id="im" src="Common/Media/Background/BG5.jpg"><a  onclick="Soon()"><h3 id="prclk">HTML</h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" onclick="Soon()" ><h3>JavaScript</h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" onclick="Soon()"><h3>CSS</h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" onclick="Soon()" ><h3>SQL</h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" onclick="Soon()" ><h3>Python</h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" href="EthicHackz.html" ><h3>Cyber Security </h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" onclick="Soon()" ><h3>Machine Learning</h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" onclick="Soon()" ><h3>Java</h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" href="CloudComputing.html"  ><h3>Cloud Computing</h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" onclick="Soon()" ><h3>Web Development</h3></a></div> \
                                                 <div id="prj"><img id="im" src=""><a id="prclk" onclick="Soon()" ><h3>Reverse Engineering</h3></a></div> \
                        ';
       
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
        con.removeChild(pr);
        con.innerHTML += `<button id="bt" onclick="he()">Let's have a look</button>`;
    


  }


    
