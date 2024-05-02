

const form = document.getElementById("form"); //This line selects the HTML form element with the id "form" and stores it in the variable form.
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");            
const phone = document.getElementById("phone");
const select = document.getElementById("select");



////These lines select specific input elements within the form by their respective ids ("fullname", "email", "phone", and "select") and store them in variables.


function errorMsg(input, msg) { //Creating a function to show error message
    const formc = input.parentElement; //.parentElement returns our HTML element input
    formc.classList.add("error"); //claslist calls every input in contact form 
    const small = formc.querySelector("small"); //calling small element in our html to show our message
    small.style.visibility = "visible"; //making our message visible when user clicks submit
    if (!small) {  //! flips the meaning of the variable. In thi case if the small element iss not there it creates one 
        const small = document.createElement("small");
        small.innerText = msg; //inner text will show a message
        formc.appendChild(small);     //appendChild adds the small element to the 
    } else {
        small.innerText = msg;
    }
    input.classList.add("error-input");  //This line adds the CSS class "error-input" to the input field (input). This class likely applies styles to indicate that there's an error with the input.
};      

//This block of code checks if there's already a <small> element present for the error message. If not, it creates one, sets its text content to the error message (msg), and appends it to the parent element (formc). If there's already a <small> element, it just updates its text content with the new error message.


function removeErrorMsg(input) { //created a function for when we need to remove the error message
    const form = input.parentElement;
    form.classList.remove("error"); // calling the inputs in our form by calling the variable
    const small = form.querySelector("small");
    if (small === "") {
        small.remove();
    }
    input.classList.remove("error-input");
};

form.addEventListener("submit", function(e) {
    e.preventDefault();
        if (fullName.value === "") {
        
         errorMsg(fullName, "Name is required"); //if user doesn't enter name, show error message
    } 
    else {
        removeErrorMsg(fullName); //if user enters name, remove error message
        
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (email.value === "") {
        errorMsg(email, "Email is required"); //if user doesn't enter email, show error message
    } else {
        removeErrorMsg(email); ////if user enters email, remove error message
        
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (phone.value === "") {
        errorMsg(phone, "Phone number is required");  //if user doesn't enter phone number, show error message
    } else {
        removeErrorMsg(phone); //if user enters phone, remove error message
       
    }
});

form.addEventListener('submit', function(e) {
     e.preventDefault();
});


//The removeErrorMsg function and the event listeners follow similar patterns to handle error messages and field validation.


