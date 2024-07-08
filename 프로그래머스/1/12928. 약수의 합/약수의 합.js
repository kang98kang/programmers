function solution(n) {
    const a = []
    for(i = 1; i <= n; i++){
        if(n%i == 0){
            a.push(i)
        }
    }
        
    
    return a.reduce((accumulator, currentValue) => accumulator + currentValue, 0) ;
}