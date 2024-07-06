function solution(n) {
    const A = []
    for(i =0 ; i < (n+1); i++ ){
        if(n%i ==0){
            A.push(i)
        }
    }
    return A.length;
}