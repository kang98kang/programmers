function solution(array) {
    let sort1 = array.sort((a, b) => a - b);
    
    var answer = sort1[Math.ceil(sort1.length / 2) -1];
    

       return answer;
}