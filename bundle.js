(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){




function Con() {                                       // Collecting data from login.html
    let form = document.getElementById("Hd");
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        if (element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }
    let jsonData = JSON.stringify(formData);
   // let ValOut = document.getElementById("ValOut");
  //  ValOut.innerHTML =  "<pre>" +jsonData +"<pre>";

                                                      // Ending data collectiing from login.html
   

    const spawner =require('child_process').spawn;    // Sending data to python file
    console.log("2 ",jsonData);
    const send = spawner['python',['./vjhex.py',JSON.stringify(jsonData)]];  // Sending data to python file
    console.log("3 ",jsonData);
    send.stdout.on('data',(data)=>{
        console.log('Welcme :' ,JSON.parse(data.toString()));
    });
    console.log("4 ",jsonData);
    
};

Con();

},{"dns":2}],2:[function(require,module,exports){

},{}]},{},[1]);
