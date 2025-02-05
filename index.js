// This will contain the JS for index.html - be sure to link to the correct file.
const firstNameRegex = /^[\p{L}\p{M}'-]+(?: [\p{L}\p{M}'-]+)*$/u;

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const company = document.getElementById('company');
const jobTitle = document.getElementById('jobTitle');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('form');


const handleBlur = (e) => {
  // if a form message exists - remove it
  const child = document.querySelector('.present');
  if (form.contains(child)) {
    child.remove();
    submitBtn.disabled = false;
  }

  const value = e.target.value;
  const element = e.target;
  changeBorderColor(element, validateValue(value));
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  if (areInputsGreen([firstName, lastName, company, jobTitle])) {
    const params = new URLSearchParams({
      firstName: firstName.value,
      lastName: lastName.value,
      company: company.value,
      jobTitle: jobTitle.value,
      email: email.value,
      phone: phone.value
    });
    window.location.href = 'success.html?' + params.toString();
  } else {
    createInvalidMessage();
    submitBtn.disabled = true;
  }
};

// utility functions
const validateValue = (val) => {
  return firstNameRegex.test(val);
};

const changeBorderColor = (element, boolean) => {
  if (boolean === true) {
    element.classList.add('green-border');
    element.classList.remove('red-border');
    removeErrorMessage(element);
  } else {
    element.classList.remove('green-border');
    element.classList.add('red-border');
    addErrorMessage(element);
  }
};

const addErrorMessage = (element) => {
  // check if error message already exists 
  if (element.parentElement.lastChild.innerText === 'Oops! Invalid') { return; }

  const paragraph = document.createElement('p');
  element.parentElement.appendChild(paragraph);
  applyStyles(paragraph);
};

const applyStyles = (element) => {
  element.style.backgroundColor = '#f4a1a1';
  element.style.borderRadius = '5px';
  element.style.padding = '.1rem';
  element.style.marginTop = '.2rem';
  element.innerText = 'Oops! Invalid';
};

const removeErrorMessage = (element) => {
  let elToRemove = element.parentElement.lastChild;
  // check element to remove exists
  if (elToRemove.innerText === 'Oops! Invalid') {
    element.parentElement.removeChild(elToRemove);
  } else { return; }
};

const createInvalidMessage = () => {
  const paragraph = document.createElement('p');
  paragraph.classList.add('present');
  paragraph.textContent = 'Invalid. Please ammend.';
  form.appendChild(paragraph);
};

const areInputsGreen = (inputs) => {
  return inputs.every(input => input.classList.contains('green-border'));
};


firstName.addEventListener('blur', handleBlur);
lastName.addEventListener('blur', handleBlur);
company.addEventListener('blur', handleBlur);
jobTitle.addEventListener('blur', handleBlur);
form.addEventListener('submit', handleFormSubmit);