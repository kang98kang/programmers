function solution(n, m) {
    const M = n < m ? m : n;
    const N = n > m ? m : n;
    let A = 0
    for(let i = N; i >= 1; i--){
        if(M%i == 0 && N%i == 0){
            A = i
            break
        }
    }
    const B = M*N/A
    console.log(M)
    console.log(N)
    console.log(A)
    console.log(B)
    return [A, B]
}