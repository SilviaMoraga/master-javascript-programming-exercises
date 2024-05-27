function computeAverageOfNumbers (arr){
    if (arr.length == 0){
        return 0;
    }
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    let media = total / arr.length;
    return media;
}
