function greetUser(name) {
  return `Welcome back, ${name}!`;
}

// Add event listener to the button
document.getElementById('greetButton').addEventListener('click', function() {
  const name = document.getElementById('nameInput').value;
  const message = greetUser(name);
  document.getElementById('greetingMessage').textContent = message;
});
