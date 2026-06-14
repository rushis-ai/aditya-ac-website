const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzeJ9PGrsJvodyor_DA6qA3jg5Qxm97Tle3yl0A3QYI1Zx5p_uXAQh8jdEpp9LA6hSC/exec';

const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
const submitBtn = form ? form.querySelector('button[type="submit"]') : null;

if (form && success) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const data = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      service: document.getElementById('service').value,
      message: document.getElementById('message').value
    };

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      form.style.display = 'none';
      success.style.display = 'block';

    } catch (err) {
      submitBtn.textContent = 'Send Request';
      submitBtn.disabled = false;
      alert('Something went wrong. Please call us directly.');
    }
  });
}