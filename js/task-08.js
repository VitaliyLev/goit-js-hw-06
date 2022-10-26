const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;

  if (emailValue !== '' && passwordValue !== '') {
    console.log({ email: emailValue, password: passwordValue });
    event.currentTarget.reset();
  } else {
    alert('Please fill in all the fields!');
  }
}