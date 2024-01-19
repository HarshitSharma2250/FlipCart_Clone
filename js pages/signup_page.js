let form = document.getElementById('sign_up_form');
let Name = document.getElementById('signup_name');
let number = document.getElementById('signup_number');
let password = document.getElementById('signup_password');

let getuserdetail = JSON.parse(localStorage.getItem('userdetails')) || {}; // Ensure getuserdetails is an object

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (Name.value === '' || number.value === '' || password.value === '') {
        alert('Please fill all boxes!');
    } else {
        // Check if the number already exists
        if (getuserdetail && getuserdetail.number === number.value) {
            alert('This number already exists, please try another number!');
        } else {
            let obj = {
                Name: Name.value,
                number: number.value,
                password: password.value
            };

            localStorage.setItem('userdetails', JSON.stringify(obj));

            Name.value = '';
            number.value = '';
            password.value = '';
            window.location.href = 'index.html';
        }
    }
});
