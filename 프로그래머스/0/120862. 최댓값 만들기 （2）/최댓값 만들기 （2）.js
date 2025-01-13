function solution(numbers) {
    const numbers2 = [...numbers];
    const Snumbers = numbers2.sort();
    const S1numbers = numbers.sort((a , b) => b - a);
    
    const A = Snumbers[0] * Snumbers[1];
    const B = S1numbers[0] * S1numbers[1];
    
    let answer = 0;
    
    if(A > B){
      answer = A;
    } else {
       answer = B;
    }
    
    return answer;
}