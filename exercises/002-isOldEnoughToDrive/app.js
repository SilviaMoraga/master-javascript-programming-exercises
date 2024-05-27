function isOldEnoughToDrive(age) {
  if (age < 16){
    return false;
  } else {
    return true;
  }
}

console.log(isOldEnoughToDrive(12));