// Event Listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const stored_u_ple = localStorage.getItem('u_ple');

    if (stored_u_ple) {
        const u_Ple = JSON.parse(stored_u_ple);

        if (u_Ple && u_Ple.token && u_Ple.username) {
            console.log('User is already logged in:', u_Ple);
            in_Dex('5566rEq739', 57); // Render logged-in state
        } else {
            console.log('Invalid profile data. Clearing storage.');
            localStorage.removeItem('u_ple'); // Clear invalid data
        }
    } else {
        console.log('No user profile found. Rendering initial state.');
        window.location.href='./assets/lib/HTML/login.html'; // Render initial state for non-logged-in users
    }
});

// Scroll Event Listener for Header Styling
const header = document.querySelector('.HD');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Dynamic Profile Creation
const un_name = 'vijay';
function p_file() {
    let ud = document.getElementById('prof') || document.createElement('div');
    if (!document.contains(ud)) {
        ud.setAttribute('id', 'prof');
        ud.innerHTML = `<div><label class="lbl" for="username">Username</label><h3 id="pfUN">${un_name}</h3></div>`;
        document.getElementById('container').appendChild(ud);
    }
    document.getElementById('pfUN').textContent = un_name;
    document.getElementById('prof').style = 'color: white; position: absolute; top: 30%';
    pr_check();
}

// Inactivity Timeout Handler
function handleInactivity(timeout) {
    let inactivityTimer;
    const resetTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(logoutUser, timeout);
    };

    ['mousemove', 'keypress', 'click'].forEach((event) =>
        window.addEventListener(event, resetTimer)
    );

    resetTimer();
}

// Logout User
function logoutUser() {
    localStorage.removeItem('u_ple');
    console.log('User logged out due to inactivity.');
    alert('Session expired. Please log in again.');
    in_Dex('5566rEq739', 55);
}

// Logout Event Listener
document.getElementById('log_out').addEventListener('click', () => {
    localStorage.removeItem('u_ple');
    console.log('User logged out.');
    alert('You have been logged out.');
    const df = document.getElementById('lin_sup_fo');
    if (df) df.innerHTML = '';
    in_Dex('5566rEq739', 55);
});

// Function to Dynamically Render Login/Signup Forms
function linSupFo(rlt) {
    const body = document.querySelector('body');
    const t_Box = document.getElementById('lin_sup_fo');
    if (!t_Box) {
        body.insertAdjacentHTML('beforeend', `<div id="lin_sup_fo" class="lin_sup_fo"><div id="ref">${rlt}</div></div>`);
    } else {
        t_Box.innerHTML = rlt;
    }
}

// Function to Dynamically Render Courses Content
function courses(rlt) {
    const body = document.querySelector('body');
    const c_box = document.getElementById('lin_sup_fo');
    if (!c_box) {
        body.insertAdjacentHTML('beforeend', `<div id="lin_sup_fo" class="lin_sup_fo">${rlt}</div>`);
    } else {
        c_box.innerHTML = rlt;
    }
}

// Login Form Submission Listener
function l_in() {
    const lofE = document.getElementById('lof');
    if (lofE) {
        lofE.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.getElementById('l_username').value.trim();
            const password = document.getElementById('l_password').value.trim();

            try {
                const response = await fetch('https://2.51.149.76:3000/5566_ln', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                });

                const rlt = await response.json();

                if (rlt.success) {
                    const u_ple = {
                        ...rlt.profile,
                        token: rlt.token,
                        loginTime: Date.now(),
                    };
                    localStorage.setItem('u_ple', JSON.stringify(u_ple));
                    console.log('User profile stored:', u_ple);
                    
                    courses(rlt);
                    handleInactivity(120000); // 2 minutes timeout
                } else {
                    const errorElement = document.getElementById('lin');
                    if (errorElement) errorElement.innerText = rlt.msg;
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('An error occurred while logging in. Please try again later.');
            }
        });
    }
}

// Sign-Up Form Submission Listener
function s_Up() {
    const sif = document.getElementById('sif');
    if (sif) {
        sif.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = {
                username: document.getElementById('s_username').value.trim(),
                password: document.getElementById('s_password').value.trim(),
                confirmPassword: document.getElementById('s_Cpassword').value.trim(),
                firstName: document.getElementById('f_n').value.trim(),
                lastName: document.getElementById('l_n').value.trim(),
                address: document.getElementById('adr').value.trim(),
                city: document.getElementById('city').value.trim(),
                e_mail: document.getElementById('e_m').value.trim(),
                phone: document.getElementById('c_ph').value.trim(),
            };

            if (formData.password !== formData.confirmPassword) {
                document.getElementById('sig').innerText = 'Passwords do not match!';
                return;
            }

            try {
                const res = await fetch('https://2.51.149.76:3000/ot_s', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                const data = await res.json();
                if (data.success) {
                    document.querySelector(".con_tentBox").innerHTML =
                        `<div id="ot"><input type="text" id="otp"/><button id="v_Otp">Verify OTP</button></div>`;
                    document.getElementById('v_Otp').addEventListener('click', () => {
                        v_OTP(formData);
                    });
                } else {
                    document.getElementById('sig').innerText = data.msg;
                }
            } catch (err) {
                alert('Error connection');
                console.error('Error connection:', err);
            }
        });
    }
}

// OTP Verification
function v_OTP(formData) {
    const otp = document.getElementById('otp').value.trim();
    fetch('https://2.51.149.76:3000/ot_v', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData, otp }),
    })
        .then((res) => res.json())
        .then((data) => {
            alert(data.msg);
            in_Dex('5566rEq739', 55);
        })
        .catch(() => alert('Error verifying OTP'));
}

// Fetch and Render Content
async function in_Dex(seq, id) {
    try {
        const response = await fetch(`https://2.51.149.76:3000/${encodeURIComponent(seq)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ c_key: id }),
        });
        const c_Rlt = await response.json();
        if (c_Rlt.success) {
            if (id === 55) {
                linSupFo(c_Rlt.C_rlt);
                l_in();
            } else if (id === 56) {
                linSupFo(c_Rlt.C_rlt);
                s_Up();
            } else if (id >= 57 && id <= 60) {
                courses(c_Rlt.C_rlt);
            } else if (id >= 5566 && id <= 5580) {
                courses(c_Rlt.C_rlt);
            } else {
                console.log(c_Rlt.C_rlt);
            }
        } else {
            alert(c_Rlt.msg);
        }
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

// Login Navigation Listener
document.getElementById('log_in').addEventListener('click', () => {
    in_Dex('5566rEq739', 55);
});
