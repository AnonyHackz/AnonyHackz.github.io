
       // soon() section

/*var form = document.getElementById('form-d');

form.addEventListener('submit',() =>{
    window.open('assets/lib//HTML/login.html');
});*/

//<div id="bDiv"><center><button id="bt" onclick="he()">Let's have a look</button></center></div>
var form = document.getElementById('form-d');
form.addEventListener('submit',() =>{
    let newWindow = open('assets/lib//HTML/login.html', 'width=300,height=300');

            newWindow.onload = function() {
            newWindow.close();
            alert(newWindow.closed); // true
            };})





  function Soon(){
      
      if (document.contains(document.getElementById("project"))){document.getElementById("project").remove();};
      if (document.contains(document.getElementById("btn"))){document.getElementById("btn").remove();};
      document.getElementById("intro").innerHTML=" We are pleased to consider exploring alternative courses at the moment."   ;                     
      document.getElementById("container").innerHTML += ` <h1 id="GoBack" >Coming Soon.......</h1>`;
      document.getElementById("container").innerHTML += `<center id="cenbt"><button id="btsoon" onclick="soonremove(); he()">Previous Page</button></center>`;
  }


  function soonremove(){
      if (document.contains(document.getElementById("GoBack"))){document.getElementById("GoBack").remove();};
      if (document.contains(document.getElementById("cenbt"))){document.getElementById("cenbt").remove();};
    
      
  }

  
                                                   // he()  section 

  function he(){
        

        var pro= document.createElement("nav");            // To create element
        
        var bt2= document.createElement("div"); 
        bt2.setAttribute('id','btn');

        var bottmBID= document.createElement("div");            // To create element
        bottmBID.setAttribute('id','BID');                  // To set id or class name to the created element
       

        pro.setAttribute('id','project');                  // To set id or class name to the created element
                                                    // TO replace text content to any html tag
        document.getElementById("intro").innerHTML=" Hereby we are thrilled to inform you that we have multiple courses made available for you to pursue  in the field of IT."   ;                                                      
        
                                                            // To append html codes into created element
        pro.innerHTML+=`                         <div id="prj" onclick="Soon()" ><img id="im" src="HTML/Icons/icon.png"> <span id="prclk" >HTML</span ></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="JavaScript/Icons/icon.png"><span id="prclk" >JavaScript</span ></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="CSS/Icons/icon.png"><span id="prclk" >CSS</span ></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="SQL/Icons/icon.png"><span id="prclk" >SQL</span ></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Python/Icons/icon.png"><span id="prclk" >Python</span ></div> 
                                                 <div id="prj" onclick="window.location.href='assets/lib/HTML/EthicHackz.html';" ><img id="im" src="Cyber Security/Icons/icon.png"><span id="prclk" >Cyber Security </span ></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Machine Learning/Icons/icon.png"><span id="prclk" >Machine Learning</span ></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Java/Icons/icon.png"><span id="prclk" >Java</span ></div> 
                                                 <div id="prj" onclick="window.location.href='assets/lib/HTML/CloudComputing.html';"><img id="im" src="Cloud Computing/Icons/icon.png">   <span id="prclk" >Cloud Computing</span ></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Web Development/Icons/icon.png"><span id="prclk" >Web Development</span ></div> 
                                                 <div id="prj" onclick="Soon()" ><img id="im" src="Reverse Engineering/Icons/icon.png"><span id="prclk" >Reverse Engineering</span ></div> 
                        `;
       
        bt2.innerHTML+= '<center><button id="bt2" onclick="home()">Previous Page</button></center>';

       
        
                                                        // To append html codes into created element
        bottmBID.innerHTML+=    '<center>\
                                        <center><img id="BIcon" src="Common/Media/Logo/logo-white.png">\
                                        <h1 id="Bhd"> Anony Hackz </h1> </center>\
                                        <center><span style=" color: aliceblue;">Contact Us If You Need Help</span></center>\
                                        <center><p id="BContact">+971503118352, +919047891106, vijayveerappa741@gmail.com</p></center>\
                                </center>'   
                                                 // To append created element into html file
        document.getElementById("container").appendChild(pro);
        document.getElementById("project").insertAdjacentElement('afterend',bt2)

                                                                // To remove elements
        if (document.contains(document.getElementById("bDiv"))){document.getElementById("bDiv").remove();};
        document.getElementById("bt2").insertAdjacentElement('afterend',bottmBID)
      

  }
  


                                                  // home() section

  function home(){
      
        if (document.contains(document.getElementById("project"))){document.getElementById("project").remove();};
        if (document.contains(document.getElementById("btn"))){document.getElementById("btn").remove();};
        document.getElementById("container").innerHTML += `<div id="bDiv"><center><button id="bt" onclick="he()">Let's have a look</button></center></div>`;
    
  }


    
