//Assignment 10

//Nikhil Bharatbhaui Bhingradiya


const username = document.getElementById('uname');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
      return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const unameValue = uname.value.trim();
  
    const passwordValue = password1.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){ 
        setError(uname, 'This field is required');
    } else {
        setSuccess(uname);
    }

    if(password1Value === '') {
        setError(password1, 'This field is required');
    } else if (password1Value.length < 12 ) {
        setError(password1, '12 characters password is required')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'This field is required');
    } else if (password2Value.length < 12 ) {
        setError(password2, '12 characters password is required.')
    } else  {
        setSuccess(password2);
    }

};