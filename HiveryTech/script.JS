document.getElementById('submit').addEventListener('click', function () {
  const passcode = document.getElementById('passcode').value;
  const message = document.getElementById('message');

  // List of valid passcodes
  const validPasscodes = ['Operation', 'Access2024', 'TechHive', 'Secure123', 'destiny', 'HiveryTech'];

  if (validPasscodes.includes(passcode)) {
    message.textContent = 'Access Granted!';
    message.style.color = 'green';
    document.getElementById('submit').style.color = 'green';
    setTimeout(() => {
      window.location.href = 'generic.html';
    }, 1000);
  } else {
    message.textContent = 'Access Denied! Try again.';
    message.style.color = 'red';
    document.getElementById('submit').style.color = 'red';
  }
});