async function testAsync() {
  console.log("Before");
  await fetch("https://restcountries.com/v3.1/all");
  console.log("After");
}

testAsync();
console.log("after the entire function");

//////////////////////////////////////////////////////////

function testThen() {
  console.log("Before");
  fetch("https://restcountries.com/v3.1/all").then(() => {
    console.log("inside the then() block");
  });
  console.log("After");
}

testThen();
console.log("after the entire function");
