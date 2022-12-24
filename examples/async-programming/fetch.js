// then
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((json) => console.log(json));

// async/await
const response = await fetch("https://restcountries.com/v3.1/all");
const data = await response.json();
function c() {}
