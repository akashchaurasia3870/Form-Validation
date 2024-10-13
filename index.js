const form  = document.getElementById("form")
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("c_password");
const submotBtn = document.getElementById("btn")

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
})

const validateInputs  = ()=>{
    const usernameValue = (username.value).trim(); 
    const emailValue = (email.value).trim(); 
    const passwordValue = (password.value).trim(); 
    const confirmPasswordValue = (confirmPassword.value).trim(); 


    if(usernameValue==='')
    {
        setError(username,"Username is required");
    }else{
        setSuccess(username);
    }

    if(emailValue===''){
        setError(email,"Email is required")
    }else if(!isValidEmail(emailValue)){
        setError(email,"Provide a valid email address")
    }else{
        setSuccess(email)
    }


    if(passwordValue===''){
        setError(password,"Password is required")
    }else{
        if(passwordValue.length<5){
            setError(password,'Password must be 5 character long')
        }else{
            setSuccess(password)
        }
    }

    if(confirmPasswordValue===''){
        setError(confirmPassword,"Please Confirm Your Password")
    }else{
        if(confirmPasswordValue.length<5){
            setError(confirmPassword,'Password must be 5 charactor long')
        }else{

            if(confirmPasswordValue!==passwordValue){
                setError(confirmPassword,"Password doesn't match")

            }else{
                setSuccess(confirmPassword)
            }
        }
    }



}

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');

    // setTimeout(()=>{
    //     errorDisplay.innerText = '';
    // },5000)
}


const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const isValidEmail = (emailValue)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailValue)
}

