

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

  function he(){

        var pro= document.createElement("nav");            // To create element
        

        pro.setAttribute('id','project');                  // To set id or class name to the created element
      
                                                           // TO replace text content to any html tag
        document.getElementById("intro").innerHTML=" Hereby we are thrilled to inform you that we have multiple courses available for you to pursue  in the field of IT.  </p>"   ;                                                      
        
                                                            // To append html codes into created element
        pro.innerHTML+='<form><table><td><ol>   <li><a>HTML</a></li>  <li><a>JavaScript</a></li>  <li><a>CSS</a></li> <li><a>SQL</a></li> <li><a>Python</a></li> <li><a href="EthicHackz.html" targrt="blank">Ethical Hacking</a></li> <li><a>Machine Learning</a></li>  <li><a>Java</a></li>    <li><a>AutoCad</a></li>  <li><a>Web Development</a></li>  <li><a>Reverse Engineering</a></li>  </ol></td>  </table><button id="bt2" onclick="home()">Previous Page</button></form>';
      
      
        var con = document.getElementById("container");    // To append created element into html file
        con.appendChild(pro);

        var bt = document.getElementById("bt");            // To remove elements
        con.removeChild(bt);

   
        



  }
  


  function home(){
    
        var con = document.getElementById("container");
        var pr = document.getElementById("project");
        con.removeChild(pr);
        con.innerHTML += `<button id="bt" onclick="he()">Let's have a look</button>`;
    


  }


    
