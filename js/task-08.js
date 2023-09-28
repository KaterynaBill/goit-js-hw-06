const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const formData = new FormData(event.target); 
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert('Будь ласка, заповніть всі поля форми.');
    return;
  }

  console.log(formObject);

  event.target.reset();
});

