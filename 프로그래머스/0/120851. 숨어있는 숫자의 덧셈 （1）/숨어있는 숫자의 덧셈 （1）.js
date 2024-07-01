function solution(my_string) {
    let result = my_string.split('').filter(char => !isNaN(char))
    
    var answer = result.reduce((a, b) => +a + +b, 0);

    return answer;
}