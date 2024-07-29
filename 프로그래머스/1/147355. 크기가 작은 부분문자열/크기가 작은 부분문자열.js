function solution(t, p) {
    const T = t.split('').length
    const P = p.split('').length
    let sum = 0
    for(let idx = 0; idx < (T - P) + 1; idx++){
        if(t.substring(idx, idx + P)*1 <= p*1){
            sum ++
            console.log(t.substring(idx, idx + P), sum, idx)
        }
        }
    return sum;
    }
    
