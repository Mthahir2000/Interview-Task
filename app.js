const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phoneno = document.querySelector('#phoneno');
const password = document.querySelector('#password');

form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const phonenoVal = phoneno.value.trim();
    const passwordVal = password.value.trim();
   

    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required*')
    }
    else if(usernameVal.length<3 || usernameVal.length>15){
        success=false;
        setError(username,'*Username must be between 3-15 characters')
    }
    else if(!validateUsername(usernameVal)){
        success=false;
        setError(username,'*Username should not contain special characters')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required*')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'*Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(phonenoVal === ''){
        success = false;
        setError(phoneno,'Phone No. is required*')
    }
    else if(!validateDigits(phonenoVal)){
        success = false;
        setError(phoneno,'*Phone No. must contains only digits')
    }else if(phonenoVal.length!=10){
        success = false;
        setError(phoneno,'*Invalid Phone No.')
    }

    else{
        setSuccess(phoneno)
    }

    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required*')
    }
    else if(passwordVal.length<6){
        success = false;
        setError(password,'*Password must be atleast 6 characters')
    }
    else if(!validatePassword(passwordVal)){
        success=false;
        setError(password,'*Password should contains atleast one Number or Special Characters')
    }
    else{
        setSuccess(password)
        displayInputs();
    }

    return success;
}


function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateUsername = (username)  => {
    return String(username)
        .match(/^[a-zA-Z0-9]+$/);
};        
        
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

const validateDigits = (number) => {
    return String(number)
        .match(/^\d+$/);
};

const validatePassword = (password) => {
    return String(password)
        .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/);
};

function displayInputs(){
    var Username = document.getElementById("username").value;
    var Email = document.getElementById("email").value;
    var PhoneNo = document.getElementById("phoneno").value;
    var Password = document.getElementById("password").value;

    document.writeln("Your Info: "+"<br>");
    document.writeln("Your UserName : "+Username+"<br>");
    document.writeln("Your Email : "+Email+"<br>");
    document.writeln("Your PhoneNo. : "+PhoneNo+"<br>");
    document.writeln("Your Password : "+Password+"<br>");
}
