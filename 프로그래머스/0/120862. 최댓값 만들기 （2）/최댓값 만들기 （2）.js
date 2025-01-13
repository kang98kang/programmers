function solution(numbers) {
    let max = -999999999;
   for(let i = 0; i < numbers.length; i++){
       for(let j = i + 1; j < numbers.length; j++){
          if(max < numbers[i] * numbers[j]) {
              max = numbers[i] * numbers[j];
          }
       }
   }
    return max;
}