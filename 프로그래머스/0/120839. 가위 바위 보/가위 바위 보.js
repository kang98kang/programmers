function solution(rsp) {
    const result = []
   for(i = 0; i < rsp.split('').length; i++) {
    if(rsp.split('')[i] * 1 === 2){
        result.push(0)
    } else if(rsp.split('')[i] * 1 === 0){
        result.push(5)
    } else if(rsp.split('')[i] * 1 === 5){
        result.push(2)
    }
   }
    return result.join('')
}