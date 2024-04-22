const name1 = document.getElementById('name')

const email = document.getElementById('email')

const phoneNumber = document.getElementById('form')

const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name1.value === '' || name1.value == null){
        messages.push('Name is required')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

