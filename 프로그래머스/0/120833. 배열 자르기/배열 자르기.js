function solution(numbers, num1, num2) {
    const result = []
     for(i = num1; i < (num2 + 1); i++){
        result.push(numbers[i]*1)
    }
    return result
}