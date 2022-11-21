const firstname = document.getElementById('firstname')
const lasttname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) =>{
    let messages = []
    if (firstname.value === '' || firstname.value == null){
        messages.push('First name harus diisi!')
    }

    if (lastname.value === '' || lastname.value == null){
        messages.push('Last name  harus diisi!')
    }

    if (email.value === '' || email.value == null){
        messages.push('Email harus diisi!')
    }
  
    if (password.value.length <= 8){
        messages.push('Password minimal 8 karakter!')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join (', ')
    }
   
})
