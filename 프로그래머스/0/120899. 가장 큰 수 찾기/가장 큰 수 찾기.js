function solution(array) {
    var answer = [];
    
    let sor = [...array].sort((a, b) => b - a);
    var sor1 = sor[0];
    
    
    answer.push(sor1, array.indexOf(sor1))
    
    return answer;
}