function isOddLength(palabra) {
    if (palabra.length % 2 != 0){
        return true;
    } else {
        return false;
    }
}
console.log(isOddLength('aguas'));