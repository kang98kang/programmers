function solution(x) {
   
    if( x % x.toString().split("").map(n => n * 1).reduce((accumulator, currentValue) => accumulator + currentValue, 0) == 0 ){
        return true
    }
    return false
}