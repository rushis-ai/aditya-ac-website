// Contact form — show success message on submit
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
 
if (form && success) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    success.style.display = 'block';
  });
}