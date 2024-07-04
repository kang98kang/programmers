function solution(n) {
    const a = [];
    for(i=2; i < n; i++){
        if(n % i == 1){
            a.push(i)
        }
    }
    return a[0]
}