document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const lengthSlider = document.getElementById('length');
  const lengthVal = document.getElementById('lengthVal');
  const uppercaseEl = document.getElementById('uppercase');
  const lowercaseEl = document.getElementById('lowercase');
  const numbersEl = document.getElementById('numbers');
  const symbolsEl = document.getElementById('symbols');
  const generateBtn = document.getElementById('generateBtn');
  const copyBtn = document.getElementById('copyBtn');
  const toast = document.getElementById('toast');

  const chars = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };

  lengthSlider.addEventListener('input', () => {
    lengthVal.textContent = lengthSlider.value;
  });

  function generatePassword() {
    let allowedChars = '';
    if (uppercaseEl.checked) allowedChars += chars.uppercase;
    if (lowercaseEl.checked) allowedChars += chars.lowercase;
    if (numbersEl.checked) allowedChars += chars.numbers;
    if (symbolsEl.checked) allowedChars += chars.symbols;

    if (!allowedChars) {
      alert('Please select at least one character type!');
      return;
    }

    let pass = '';
    const len = parseInt(lengthSlider.value);
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      pass += allowedChars[randomIndex];
    }

    passwordInput.value = pass;
  }

  copyBtn.addEventListener('click', () => {
    if (!passwordInput.value) return;
    navigator.clipboard.writeText(passwordInput.value);
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  });

  generateBtn.addEventListener('click', generatePassword);

  // Generate an initial password immediately
  generatePassword();
});
