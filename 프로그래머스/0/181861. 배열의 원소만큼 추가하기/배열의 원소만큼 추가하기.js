function solution(arr) {
   let result = []
    arr.forEach(num => {
        for(let i = 0; i < num; i++){
         result.push(num)
                }
    })
    return result
}