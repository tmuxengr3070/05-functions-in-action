function greetUser(name) {
  return `Welcome back, ${name}!`;
}

console.log(greetUser("Alice")); // Output: Welcome back, Alice!

let greetBtn = document.getElementById('greetBtn');
let nameInput = document.getElementById('nameInput');
let greetingDiv = document.getElementById('greeting');

greetBtn.addEventListener('click', function() {
  let name = nameInput.value;
  let message = greetUser(name);
  greetingDiv.textContent = message;
});
