function solution(n) {
    const T3 = n.toString(3)
    const T3R = T3.split("")
    console.log(T3R)
    const T3RM = T3R.map((a, b) => a * 3 ** b)
    return T3RM.reduce((a, b) => a + b , 0)
}