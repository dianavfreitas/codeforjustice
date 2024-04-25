// const name1 = document.getElementById('name')

// const email = document.getElementById('email')

// const phoneNumber = document.getElementById('form')

// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//     let email = []
//     if (name1.value === '' || name1.value == null){
//         messages.push('Name is required')
//     }
//     if (email.value === '' || email.value === null){
//         messages.push('Email is required')
//         errorElement.innerText = messages.join(', ')
//     }
// })


// investigate about:
// Trim = 
// charAT = 
// slice
// forEach
// Event listener
// If we add attribute "autocomplete="off"" the drop down on the inputs will disappear

const form = document.getElementById("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const select = document.getElementById("select");



function errorMsg(input, msg) {
    const formc = input.parentElement;
    formc.classList.add("error");
    const small = formc.querySelector("small");
    small.style.visibility = "visible";
    if (!small) {
        const small = document.createElement("small");
        small.innerText = msg;
        formc.appendChild(small);
    } else {
        small.innerText = msg;
    }
    input.classList.add("error-input"); // Add a class to change input box to red
};

function removeErrorMsg(input) {
    const form = input.parentElement;
    form.classList.remove("error");
    const small = form.querySelector("small");
    if (small) {
        small.remove();
    }
    input.classList.remove("error-input"); // Remove the class to revert input box styling
};

form.addEventListener("submit", function(e) {
    e.preventDefault();
        if (fullName.value === "") {
        
         errorMsg(fullName, "Name is required");
    } 
    // else {
    //     removeErrorMsg(fullName);
    //     // Additional validation logic for other fields if needed
    // }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (email.value === "") {
        errorMsg(email, "Email is required");
    } else {
        removeErrorMsg(email);
        // Additional validation logic for other fields if needed
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (phone.value === "") {
        errorMsg(phone, "Phone number is required");
    } else {
        removeErrorMsg(phone);
        // Additional validation logic for other fields if needed
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (select.value === "") {
        errorMsg(select, "Subject is required");
    } else {
        removeErrorMsg(select);
    
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

let isValid = true;

// input.forEach(input => {
//     const parent = input.parentNode;
//     const errorMessage = parent.querySelector('small');
//     if(input.value.trim() === ""){
//         errorMessage.style.visibility = 'visible';
//         isValid = false;
//     } else {
//         errorMessage.style.visibility = 'hidden';
//     }
// });


