let emailElement = document.querySelector('input[type="email"]')
let emailMsg = document.querySelector('.email-msg')
let passwordElement = document.querySelector('input[type="password"]')
let passwordMsg = document.querySelector('.password-msg')
function submitForm(){
    if(emailElement.value == ""){
        emailElement.classList.add('border-danger')
        emailMsg.textContent = "Vui lòng nhập email"
    }else{
        emailElement.classList.remove('border-danger')
        emailElement.classList.add('border-success')
        emailMsg.textContent = ""
    }
    if(passwordElement.value == ""){
        passwordElement.classList.add('border-danger')
        passwordMsg.textContent = "Vui lòng nhập mật khẩu"
    }else{
        passwordElement.classList.remove('border-danger')
        passwordElement.classList.add('border-success')
        passwordMsg.textContent = ""
    }
}
function emailValidate(){
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!emailRegex.test(emailElement.value)){
        emailMsg.textContent = "Email không đúng định dạng"
    }else{
        emailMsg.textContent = ""
        emailElement.classList.add('border-success')

    }
}
function goToLogin(){
    location.href = "./pages/login.html"
}