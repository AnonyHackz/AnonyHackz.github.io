





let Host;


// For user management
document.addEventListener('DOMContentLoaded', async () =>  {
   // Fetch the host.json file and assign Host
       try{ const response = await fetch('../JS/host.json');
            const dat = await response.json();
            Host = dat.host; // Assign the host value
            
            // Function to check user profile in localStorage
            const checkUserProfile = () => {
                // Check if user profile exists in localStorage
                const stored_u_ple = localStorage.getItem('u_ple');

                if (stored_u_ple) {
                    // Parse stored profile and validate
                    const u_Ple = JSON.parse(stored_u_ple);

                    if (u_Ple && u_Ple.token && u_Ple.username) {
                        console.log('User is already logged in:', u_Ple);
                    //window.location.href = '../../../index.html'; // Redirect to logged-in state
                    } else {
                        console.log('Invalid profile data. Clearing storage.');
                        localStorage.removeItem('u_ple'); // Clear invalid data
                    }
                } else {
                    console.log('No user profile found. Rendering initial state.');
                    lin(); // Call the lin function for the initial state
                }
            }
            // Call the function initially when the page loads
            checkUserProfile();

            // Set an interval to check user profile every 5 seconds (5000ms)
            setInterval(checkUserProfile, 120000); // Adjust the interval time as needed (in milliseconds)
        }catch (error) {
            console.error('Error loading host:', error);
        }});





// main.js
const handlers = window.e_Handlers; // Access handlers from the global object
console.log(window.e_Handlers); // Should log the handlers object

document.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (action && handlers[action]) {
        handlers[action]();
    }
});






function lin() {
   
    const ll = `
        <form id="login-form" void="javascript" method="post">
            <div class="form-group">
                <h2>Log In</h2>
               
            </div>
            <div id="lin" class="error-message"></div>
            <div class="form-group">
                <label class="lbl" for="username">
                    <img id="d" src="../../../Common/Media/Icons/1.png" alt="Username Icon">
                </label>
                <input type="text" id="l_username" name="username" placeholder="Username" required>
            </div>
            <div class="form-group">
                <label class="lbl" for="password">
                    <img id="d" src="../../../Common/Media/Icons/2.png" alt="Password Icon">
                </label>
                <input type="password" id="l_password" name="password" placeholder="Password" required>
            </div>
            <div class="form-group">
                <button type="submit">Login</button>
            </div>
            <div class="form-group">
                <div class="toggle-link">
                    <p>Don't have an account? <a data-action="signup" id="show-signup">Sign Up</a></p>
                </div>
            </div>
        </form>
    `;

    document.getElementById('form-container').innerHTML = ll;
    const lif = document.getElementById('login-form');

    if (lif) {
        lif.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.getElementById('l_username').value.trim();
            const password = document.getElementById('l_password').value.trim();

            try {
                const response = await fetch(`${Host}/5566_ln`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                });

                const rlt = await response.json();

                if (rlt.success) {
                    alert('Done');
                    const u_ple = {
                        ...rlt.profile,
                        token: rlt.token,
                        loginTime: Date.now(),
                    };
                    localStorage.setItem('u_ple', JSON.stringify(u_ple));
                    console.log('User profile stored:', u_ple);
                    window.location.href='../../../index.html';
                    // Redirect or handle logged-in state
                } else {
                    const errorElement = document.getElementById('lin');
                    errorElement.innerText = rlt.msg;
                }
            } catch (error) {
                alert('An error occurred during login. Please try again later.');
                console.error('Login error:', error);
            }
        });
    }
}
window.lin=lin;


function sup() {
    const su = `
        <form id="signup-form" void="javascript" method="post">
            <h2>Sign Up</h2>
            <div id="sig" class="error-message"></div>
            <div class="form-group">
                <label class="lbl" for="f_n">
                    <img id="d" src="../../../Common/Media/Icons/1.png" alt="Firstname Icon">
                </label>
                <input type="text" id="f_n" name="f_n" placeholder="Firstname" required>
            </div>
            <div class="form-group">
                <label class="lbl" for="l_n">
                    <img id="d" src="../../../Common/Media/Icons/1.png" alt="Lastname Icon">
                </label>
                <input type="text" id="l_n" name="l_n" placeholder="Lastname" required>
            </div>
            <div class="form-group">
                <label class="lbl" for="e_m">
                    <img id="d" src="../../../Common/Media/Icons/mail.png" alt="Email Icon">
                </label>
                <input type="email" id="e_m" name="e_m" placeholder="Email" required>
            </div>
            <div class="form-group">
                <label class="lbl" for="c_ph">
                    <img id="d" src="../../../Common/Media/Icons/PN.png" alt="Phone Number Icon">
                </label>
                <input type="text" id="c_ph" name="c_ph" placeholder="Phone Number" required>
            </div>
            <div class="form-group">
                <label class="lbl" for="adr">
                    <img id="d" src="../../../Common/Media/Icons/adr.png" alt="Address Icon">
                </label>
                <input type="text" id="adr" name="adr" placeholder="Address" required>
            </div>
            <div class="form-group">
                <label class="lbl" for="city">
                    <img id="d" src="../../../Common/Media/Icons/city.png" alt="City Icon">
                </label>
                <input type="text" id="city" name="city" placeholder="City" required>
            </div>
            <div class="form-group">
                <label class="lbl" for="username">
                    <img id="d" src="../../../Common/Media/Icons/1.png" alt="Username Icon">
                </label>
                <input type="text" id="s_username" name="username" placeholder="Username" required>
            </div>
            <div class="form-group">
                <label class="lbl" for="password">
                    <img id="d" src="../../../Common/Media/Icons/2.png" alt="Password Icon">
                </label>
                <input type="password" id="s_password" name="password" placeholder="Password" required>
            </div>
            <div class="form-group">
                <label class="lbl" for="C_password">
                    <img id="d" src="../../../Common/Media/Icons/2.png" alt="Confirm Password Icon">
                </label>
                <input type="password" id="s_Cpassword" name="C_password" placeholder="Confirm Password" required>
            </div>
            <button type="submit">Signup</button>
            <div class="toggle-link">
                <p>Already have an account? <a data-action="login" id="show-login">Login</a></p>
            </div>
        </form>
    `;

    document.getElementById('form-container').innerHTML = su;

    const suf = document.getElementById('signup-form');
    if (suf) {
        suf.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Gather form data
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

            // Validate password and confirmPassword
            if (formData.password !== formData.confirmPassword) {
                document.getElementById('sig').innerText = 'Passwords do not match!';
                return;
            }

            try {
                // Call the signup API
                const res = await fetch(`${Host}/ot_s`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                const data = await res.json();

                if (data.success) {
                    // Render OTP form on success
                    const ot = `
                        <form id="otp-form">
                            <h2>OTP Verification</h2>
                            <div id="otp-error" class="error-message"></div>
                            <label for="otp-code">Enter OTP</label>
                            <input type="number" id="otp-code" name="otp-code" placeholder="Enter the OTP sent to your email" required>
                            <button type="submit">Verify OTP</button>
                            <div class="toggle-link">
                                <p>Back to <a href="#" id="show-login-from-otp">Login</a> or <a href="#" id="show-signup-from-otp">Sign Up</a></p>
                            </div>
                        </form>
                    `;

                    document.getElementById('form-container').innerHTML = ot;

                    // Add OTP form event listener
                    document.getElementById('otp-form').addEventListener('submit', async (e) => {
                        e.preventDefault();

                        const otp = document.getElementById('otp-code').value.trim();

                        try {
                            const res = await fetch(`${Host}/ot_v`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ formData,otp }),
                            });

                            const otpData = await res.json();
                            if (otpData.success) {
                                alert('Signup and OTP verification successful!');
                                lin(); // Redirect to login
                            } else {
                                document.getElementById('otp-error').innerText = otpData.msg || 'Invalid OTP!';
                            }
                        } catch (error) {
                            console.error('Error verifying OTP:', error);
                            document.getElementById('otp-error').innerText = 'An error occurred during OTP verification.';
                        }
                    });
                } else {
                    // Display error message from signup response
                    document.getElementById('sig').innerText = data.msg;
                }
            } catch (err) {
                console.error('Error connecting to signup API:', err);
                document.getElementById('sig').innerText = 'An error occurred. Please try again later.';
            }
        });
    }
}
window.sup = sup;




