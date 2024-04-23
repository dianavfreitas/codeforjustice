const name1 = document.getElementById('name')

const email = document.getElementById('email')

const phoneNumber = document.getElementById('form')

const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let email = []
    if (name1.value === '' || name1.value == null){
        messages.push('Name is required')
    }
    if (email.value === '' || email.value === null){
        messages.push('Email is required')
        errorElement.innerText = messages.join(', ')
    }
})

