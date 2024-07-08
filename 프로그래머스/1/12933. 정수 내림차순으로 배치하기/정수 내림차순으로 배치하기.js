function solution(n) {
    const str = n.toString()
    return str.split("").sort((a, b)=>a - b).reverse().join("") * 1
    
}