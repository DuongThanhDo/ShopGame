let showPassword = document.querySelector('.showPassword')
let inputPassword = document.getElementById('password')

const functionShowPassword = () => {
    showPassword.onclick = function() {
        if(inputPassword.type == 'password'){
            inputPassword.type = 'text'
            showPassword.classList.add('show')
        }
        else {
            inputPassword.type = 'password'
            showPassword.classList.remove('show')
        }
    }
}
functionShowPassword()

let fromLognIn = document.querySelector('.from-lognIn')
let fromRegister = document.querySelector('.from-register')

let lognIn = document.getElementById('logn-in')
let register = document.getElementById('register')

register.onclick = function() {
    fromLognIn.classList.add('doi')
    fromRegister.classList.add('doi')
}
lognIn.onclick = function() {
    fromLognIn.classList.remove('doi')
    fromRegister.classList.remove('doi')
}

const clickFrom = document.querySelector('.from')
clickFrom.onclick = () => {
    clickFrom.classList.add('displayNone')
}

fromLognIn.addEventListener('click', function(event) {
    event.stopPropagation()
})

fromRegister.addEventListener('click', function(event) {
    event.stopPropagation()
})