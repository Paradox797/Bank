document.getElementById('login-submit').addEventListener('click', function () {
    const emailfield = document.getElementById('user_email');
    const useremail = emailfield.value;
    //password field
    const passwordfield = document.getElementById('user_password');
    const userpassword = passwordfield.value;

    if (useremail == 'swad1234@gmail.com' && userpassword == 'secret') {
        window.location.href = 'banking.html';
    }
})