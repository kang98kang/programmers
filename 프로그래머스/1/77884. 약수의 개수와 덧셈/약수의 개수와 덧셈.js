function solution(left, right) {
    const A = []
    const B = []
    for(let i = 0; i < right+1; i++){
        A.push(i)
    }
    for(let z = 0; z < left; z++){
        B.push(z)
    }
    
    const C = A.filter(a => !B.includes(a))
    
 const F = (arr) => {
     return arr.map(num=>{if(Math.sqrt(num)%1==0){
         return num*-1}
                          return num
                         }
                   )
 }
   
 
    return F(C).reduce((a,b) => a + b, 0)
}