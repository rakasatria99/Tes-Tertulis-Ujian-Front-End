
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (email.value === '' || email.value == null){
        messages.push('Email harus diisi!')
    }


    if (password.value.length <= 8){
        messages.push('Password minimal 8')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join (' , ')
    }
   
})
