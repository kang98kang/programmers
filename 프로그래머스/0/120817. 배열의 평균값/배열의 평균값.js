function solution(numbers) {
    const result = numbers.reduce(function add(sum, currValue) {return sum + currValue;}, 0);

    var answer = result/numbers.length;
    return answer;
}                            
                                 
