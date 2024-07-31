function solution(A,B){
    const As = A.sort((a, b) => a - b)
    const Bs = B.sort((a, b) => b - a)
    let sum = 0
    
    for(let i = 0; i < As.length; i++){
        sum += As[i] * Bs[i]
    }
    
    return sum;
}