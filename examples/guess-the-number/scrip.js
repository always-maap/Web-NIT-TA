let randomNumer = Math.floor(Math.random() * 100);

while (true) {
  let guess = Number(window.prompt("Guess a number between 1 and 99"));
  if (guess < randomNumer) {
    alert("Too low");
  } else if (guess > randomNumer) {
    alert("Too high");
  } else {
    alert("You got it!");
    break;
  }
}
