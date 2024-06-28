function solution(array, n) {
    
    var result = array.filter((value) => value == n);
    var answer = result.length;
    
    return answer;
}