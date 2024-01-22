let login_content = document.getElementById('login_content');
let login_content2 = document.getElementById('login_content2');
let change_content_afterLogIn = document.getElementById('change_content_afterLogIn');
let nonSignIn = document.querySelector('.signup');
let signinshow = document.querySelector('.show_after_login');
let logo = document.querySelector('.logo');
let cart= document.getElementById('cart')


let getuserdetails = JSON.parse(localStorage.getItem('userdetails'));

// Retrieve istrue from local storage or default to true

let istrue;

if(Object.values(getuserdetails).length>0){
   istrue=JSON.parse(localStorage.getItem('istrue'))!==false;
}else{
    istrue=JSON.parse(localStorage.getItem('istrue'))!==true;
}


logo.style.cursor = 'pointer';
logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});



let shortName = '';
if (getuserdetails) {
    let splitName = getuserdetails.Name.split(' ');
    for (let first of splitName) {
        let firstchar = first.charAt(0).toUpperCase() + '.';
        shortName += firstchar;
    }
}

if (istrue) {
    if (getuserdetails) {
        login_content.innerHTML = shortName;
        nonSignIn.style.display = 'none';
        signinshow.style.display = 'block';
    }
    if (getuserdetails) {
        login_content2.innerHTML = getuserdetails.Name;
    }
}

change_content_afterLogIn.addEventListener('click', () => {
    // Check if istrue is still true before executing the code
    if (istrue) {
        login_content.innerHTML = 'log in';
        login_content2.innerHTML = 'log in';
        signinshow.style.display = 'none';
        nonSignIn.style.display = 'block';
        window.location.href = 'index.html';
        istrue = false;
        
        // Store the updated value of istrue in local storage
        localStorage.setItem('istrue', JSON.stringify(istrue));
    }
});

cart.addEventListener('click', () => {
    // Check if istrue is false
    if (!istrue) {
        // Redirect to the login page
        window.location.href = 'login.html';
    }
});
