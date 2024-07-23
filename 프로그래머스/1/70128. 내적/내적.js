function solution(a, b) {
    const sum = []
    for(let i = 0; i < a.length; i++){
      sum.push(a[i] * b[i])
    }
    return sum.reduce((a, b) => a+b,0);
}