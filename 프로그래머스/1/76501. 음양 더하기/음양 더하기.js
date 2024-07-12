function solution(absolutes, signs) {
   const result = []
    absolutes.map((n, i )=> (
        signs[i] ? result.push(n) : result.push(n * -1)))
    
    return result.reduce((a,b)=>(a + b), 0);
}