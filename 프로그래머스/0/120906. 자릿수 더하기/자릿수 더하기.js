function solution(n) {
    let a = `${n}`
    
    return a.split('').map((item, index) =>{
      return (item*1)
    }).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}