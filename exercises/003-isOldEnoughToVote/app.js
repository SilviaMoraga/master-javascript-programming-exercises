function isOldEnoughToVote(age) {
  if (age < 18){
    return false;
  } else {
    return true;
  }
}
console.log(isOldEnoughToVote(12));
