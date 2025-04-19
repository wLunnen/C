//ctors
const checkedLabel = document.querySelector('.switch-toggle input:checked + label');
bool checkedLabel = true;

//captcha
function onSubmit(token) {
document.getElementById("demo-form").submit();
}

//dynamic presentation of form elements
function getElementsByClassName('checkedLabel') {
  if (checkedLabel != true) {
    opacity: 0;
  }
}

//custom captcha (considerothers)
document.addEventListener("DOMContentLoaded", function () {
  const captchaQuestion = document.getElementById("captchaQuestion");
  const captchaAnswer = document.getElementById("captchaAnswer");
  const captchaFeedback = document.getElementById("captchaFeedback");
  const form = document.getElementById("contactForm");

  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let correctAnswer = num1 + num2;

  captchaQuestion.textContent = `What is ${num1} + ${num2}?`;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (parseInt(captchaAnswer.value) === correctAnswer) {
      captchaFeedback.textContent = "✅ Verified!";
      captchaFeedback.className = "success";

      // simulate form submission (you could also actually submit here)
      setTimeout(() => alert("Form submitted!"), 500);
    } else {
      captchaFeedback.textContent = "❌ Incorrect, try again.";
      captchaFeedback.className = "error";
    }
  });
});
