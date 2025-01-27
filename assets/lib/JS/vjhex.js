// For user management

document.addEventListener('DOMContentLoaded', () => {
    // Check if user profile exists in localStorage
    const stored_u_ple = localStorage.getItem('u_ple');

    if (stored_u_ple ) {
        // Parse stored profile and validate
        const u_Ple = JSON.parse(stored_u_ple );
        
        if (u_Ple && u_Ple.token && u_Ple.username) {
            console.log('User is already logged in:', u_Ple);
            in_Dex('5566rEq739', 57) // Render logged-in state
            
        } else {
            console.log('Invalid profile data. Clearing storage.');
            localStorage.removeItem('u_ple'); // Clear invalid data
        }
    } else {
        alert('No user profile found. Rendering initial state.');
        window.location.href='assets/lib/HTML/login.html'
    }
});




function checkLocalStorageKey() {
    if (localStorage.getItem('u_ple')) {
        console.log('u_ple exists in localStorage. Do something...');
        // Perform the action when 'u_ple' exists
    } else {
        console.log('u_ple does not exist in localStorage. Do something else...');
        // Perform the action when 'u_ple' does not exist
    }
}










// Scroll event listener
const header = document.querySelector('.HD');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 0);
});




document.getElementById('log_out').addEventListener('click',()=>{
    localStorage.removeItem('u_ple'); // Clear stored profile
    console.log('User logged out.');
    alert('You have been logged out.'); 
})


document.getElementById('log_in').addEventListener('click',()=>{
    in_Dex('5566rEq739', 55); 
})














// Handle response for "l_s_Face" and display content
function l_s_Face(rlt) {

}


function linSupFo(rlt){
    
    const body = document.querySelector('body');
    const t_Box = document.getElementById('ref');
    if (!t_Box) {
        body.insertAdjacentHTML('beforeend', `<div id="lin_sup_fo" class="lin_sup_fo"><div id="ref">${rlt}</div></div>`);
    } else t_Box.innerHTML = rlt;
}


function courses(rlt){
    const body = document.querySelector('body');
    const c_box = document.getElementById('course_box');
    if (!c_box) {
        body.insertAdjacentHTML('beforeend', `<div id="course_box" class="course_box">${rlt}</div>`);
    } else c_box.innerHTML = rlt;

};










// Dynamic event listener for elements with ids from 50-5599
setInterval(() => {
    for (let i = 50; i <= 5599; i++) {
        const element = document.getElementById(i.toString());
        if (element && !element.hasEventListener) {
            element.addEventListener('click', () => {
                in_Dex('5566rEq739', element.id);
                console.log(element.id)
            });
            element.hasEventListener = true;
        }
    }
}, 1000);







// Fetch and render content from the server based on ID
async function in_Dex(seq, id) {
    const response = await fetch(`https://375d-2001-8f8-1a67-44cc-5cdc-617b-30a6-69a4.ngrok-free.app/${encodeURIComponent(seq)}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ c_key: id })
    });
    const c_Rlt = await response.json();
    if (c_Rlt.success) {
        if (id == 55) {
            linSupFo(c_Rlt.C_rlt);
            l_in()

        }else if (id == 56){ 
            linSupFo(c_Rlt.C_rlt);
            s_Up();
        }else if (id >= 57 && id <= 60) {
            courses(c_Rlt.C_rlt);
        }else if (id >= 5566 && id <= 5580) {
            courses(c_Rlt.C_rlt);
        }else {console.log(c_Rlt.C_rlt)};
    } else alert(c_Rlt.msg);
}