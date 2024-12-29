
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


// On page load, check if we have HTML stored in localStorage
window.onload = function() {
    const buttonHTML = localStorage.getItem('buHTML');
    _onload()
    if (buttonHTML) {
        document.getElementById('bDiv').innerHTML = buttonHTML;
        localStorage.removeItem('buHTML'); // Clear it after use
        
    }
};

  function _onload(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('l_in').style.display = 'none';
    document.getElementById('s_up').style.display = 'none';
    document.getElementById('ot').style.display = 'none';
  }
  
  function sig_Up(){
      document.getElementById('main').style.display = 'none';
      document.getElementById('l_in').style.display = 'none';
      document.getElementById('s_up').style.display = 'block';
  }
  function log_In(){
      document.getElementById('main').style.display = 'none';
      document.getElementById('l_in').style.display = 'block';
      document.getElementById('s_up').style.display = 'none';
      document.getElementById('ot').style.display = 'none';
    }


function lg_rlt(){
    
    document.getElementById('l_in').style.display = 'none';
    document.getElementById('s_up').style.display = 'none';
    document.getElementById('main').style.display = 'block'; 
    document.getElementById("llinking").style.display ='none';
    document.getElementById("slinking").style.display ='none';
    document.getElementById("ot").style.display ='none';
}

function s_proceed_rlt(){
    document.getElementById('lin').innerText = 'Account created successfully! You can log in now.';
    document.getElementById('s_up').style.display = 'none';
    document.getElementById('l_in').style.display = 'block';
    document.getElementById('lin').style.display = 'block';
}


function ot_send_rlt(){
    alert('OTP sent to your email!');
    document.getElementById('ot').style.display = 'block';
    document.getElementById('main').style.display = 'none';
    document.getElementById('l_in').style.display = 'none';
    document.getElementById('s_up').style.display = 'none';
}



// Send OTP to the provided email
 
 document.getElementById('sif').addEventListener('submit', async function (e) {
            e.preventDefault();
            const email = document.getElementById('e_m').value; // Make sure the email input field is correct

            fetch('https://2.49.66.28:3000/ot_s', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })
            .then(response => {
               // console.log('Raw response:', response);
                return response.json(); // Attempt to parse as JSON
            })
            .then(data => {
                if (data.success) {
                    alert('OTP sent to your email!');
                   ot_send_rlt()
                } else {
                    alert('Failed to send OTP');
                }
            })
            .catch(error => {
                console.error('Error sending OTP:', error);
                alert('Error sending OTP');
            });
});
   




function v_OTP() {
    const email = document.getElementById('e_m').value; // Ensure email is from the signup form
    const otp = document.getElementById('otp').value;

    fetch('https://2.49.66.28:3000/ot_v', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('OTP verified successfully!');
            // Proceed with signup or login
            s_proceed() ;
            log_In()
        } else {
            alert('Invalid OTP');
        }
    })
    .catch(error => {
        console.error('Error verifying OTP:', error);
        
        alert('Error verifying OTP');
    });
}


   // Login form submit event
   document.getElementById('lof').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('l_username').value;
    const password = document.getElementById('l_password').value;
    

    try {
        const response = await fetch('https://2.49.66.28:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const rlt = await response.json();
        
        if (rlt.success) {
            document.getElementById('bDiv').innerHTML= rlt.buHTML;
            lg_rlt()
        } else {
            document.getElementById('lin').innerText = rlt.msg;
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
});




    // Sign-up form submit event
    async function s_proceed() {
        
    
        const username = document.getElementById('s_username').value;
        const password = document.getElementById('s_password').value;
        const confirmPassword = document.getElementById('s_Cpassword').value;
        const lastName = document.getElementById('l_n').value;
        const firstName = document.getElementById('f_n').value;
        const address = document.getElementById('adr').value;
        const city = document.getElementById('city').value;
        const email = document.getElementById('e_m').value;
        const phone = document.getElementById('c_ph').value;
        
    
    
        // Check if passwords match
        if (password !== confirmPassword) {
            document.getElementById('sig').innerText = 'Passwords do not match!';
            return;
        }
    
        try {
            const response = await fetch('https://2.49.66.28:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, firstName, lastName,address,city,email,phone }),
            });
    
            const result = await response.json();
    
            if (result.success) {
                s_proceed_rlt()
             
                
            } else {
                document.getElementById('sig').innerText = result.msg;
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };
   