let Host;

document.addEventListener('DOMContentLoaded', async () => {

    try {
        // Fetch the host.json file and assign Host
        const response = await fetch('assets/lib/JS/host.json');
        const dat = await response.json();
        Host = dat.host; // Assign the host value
        console.log('Host:', Host); // Log the Host value to check if it loaded properly

        // Check if user profile exists in localStorage
        const stored_u_ple = localStorage.getItem('u_ple');

        if (stored_u_ple) {
            // Parse stored profile and validate
            const u_Ple = JSON.parse(stored_u_ple);
            
            if (u_Ple && u_Ple.token && u_Ple.username) {
                
                await in_Dex('5566rEq739', 57); // Render logged-in state
            } else {
                console.log('Invalid profile data. Clearing storage.');
                localStorage.removeItem('u_ple'); // Clear invalid data
            }
        } else {
            alert('Please Log In.');
            window.location.href = 'assets/lib/HTML/login.html';
        }
    } catch (error) {
        console.error('Error loading host:', error);
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
    location.reload();

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


/*function courses(rlt){
    const body = document.querySelector('body');
    const c_box = document.getElementById('course_box');
    if (!c_box) {
        body.insertAdjacentHTML('beforeend', `<div id="course_box" class="course_box">${rlt}</div>`);
    } else c_box.innerHTML = rlt;
*/

let currentState = 0;

function courses(rlt) {
    const body = document.querySelector('body');
    const hr = document.getElementById('hd_hr')
    const c_box = document.getElementById('course_box');
    
    
    // Insert or update the content (without removing previous content)
    if (!c_box) {
        
        const dd = document.createElement('div');  // Create a new div element
        dd.id = 'course_box';                      // Set the id
        dd.classList.add('course_box');            // Add the class
        dd.innerHTML = rlt;                        // Set the innerHTML
        hr.insertAdjacentElement('afterend', dd);
    } else {
        c_box.innerHTML = rlt;
    }

    // Hide the current content if moving forward
    const courseBox = document.getElementById('course_box');
    if (currentState > 0) {
        courseBox.style.display = 'block';  // Show the current content
    }
    
    // Push state to browser history
    currentState++;
    history.pushState({ page: currentState }, '', `?page=${currentState}`);
}


function lesson(rlt) {
    const body = document.querySelector('body');
    const les_box = document.getElementById('les_box');
    const les_syll = document.getElementById('syllu_bus');
    const les_con = document.getElementById('les_con');
    const hr = document.getElementById('hd_hr')

    
    // Insert or update the content (without removing previous content)
    if (!les_box) {
        const lesBox = document.createElement('div');
        lesBox.id = 'les_box';
        lesBox.classList.add('les_box');
        lesBox.innerHTML = `<div class="syllu_bus" id="syllu_bus">${rlt.tbl}</div>
                            <div class="les_con" id="les_con">${rlt.C_rlt}</div>`
        hr.insertAdjacentElement('afterend',lesBox);
    } else {
        //les_syll.innerHTML = rlt.syllubus;
        les_con.innerHTML = rlt.C_rlt;
        les_syll.innerHTML = rlt.tbl
    }

    // Hide the current content if moving forward
    const lesBox = document.getElementById('les_box');
    if (currentState > 0) {
        lesBox.style.display = 'block';  // Show the current content
    }

    const courseBox = document.getElementById('course_box');
    if (currentState > 0) {
        courseBox.style.display = 'none';  // Show the current content
    }
    
    // Push state to browser history
    currentState++;
    history.pushState({ page: currentState }, '', `?page=${currentState}`);
}


function handleBackAndForward() {
    window.addEventListener('popstate', function(event) {
        // Handle back/forward button clicks
        if (event.state && event.state.page) {
            currentState = event.state.page;
            const courseBox = document.getElementById('course_box');
            const lesBox = document.getElementById('les_box');
            
            if (currentState > 0) {
                // If we're in a "new" state, show the current content
                courseBox.style.display = 'grid';
                lesBox.style.display = 'none'; 
            } else {
                // If we're back to the initial state, hide the current content
                courseBox.style.display = 'none';
                lesBox.style.display = 'block'; 
            }
        }
    });
}

// Initialize popstate listener on page load
window.onload = function() {
    handleBackAndForward();
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
    if (!Host) {
        console.error('Host is not defined!');
        return; // Return early if Host is not yet defined
    }

    try {
        const response = await fetch(`${Host}/${encodeURIComponent(seq)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });
        
        const c_Rlt = await response.json();
        
        if (c_Rlt.success) {
            if (id == 55) {
                linSupFo(c_Rlt.C_rlt);
                l_in();
            } else if (id == 56) { 
                linSupFo(c_Rlt.C_rlt);
                s_Up();
            } else if (id >= 57 && id <= 60) {
                courses(c_Rlt.C_rlt);
            } else if (id >= 5566 && id <= 5580) {
                lesson(c_Rlt);
            } else {
                console.log(c_Rlt.C_rlt);
            }
        } else {
            alert(c_Rlt.msg);
        }
    } catch (error) {
        console.error('Error in in_Dex:', error);
    }
}