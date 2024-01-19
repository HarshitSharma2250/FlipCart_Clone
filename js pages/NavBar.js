
let login_content = document.getElementById('login_content')
let login_content2 = document.getElementById('login_content2')
let change_content_afterLogIn = document.getElementById('change_content_afterLogIn')
let nonSignIn = document.querySelector('.signup')
let signinshow = document.querySelector('.show_after_login')
let logo = document.querySelector('.logo')



logo.style.cursor = 'pointer';
logo.addEventListener('click',()=>{
    window.location.href = 'index.html';
})


let getuserdetails = JSON.parse(localStorage.getItem('userdetails'));

console.log(getuserdetails)
let shortName = ''
if(getuserdetails){
    let splitName = getuserdetails.Name.split(' ')
for (let first of splitName) {
    let firstchar = first.charAt(0).toUpperCase() + '.';
    shortName += firstchar
}


change_content_afterLogIn.addEventListener('click',()=>{
    localStorage.removeItem('userdetails');
    window.location.href = 'index.html';
})


}


if (getuserdetails) {
    login_content.innerHTML = shortName
    nonSignIn.style.display='none' 
    signinshow.style.display='block' 
}
if (getuserdetails) {
    login_content2.innerHTML = getuserdetails.Name
}
