function checkAge(name, age) {
  if (age < 21){
    return "Go home, " + name + "!";
  } else {
    return "Welcome, " + name + "!";
  }
  
}
console.log(checkAge('Silvia', 22));