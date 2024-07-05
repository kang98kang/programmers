function solution(s) {

    const A = s.split(' ').sort((a,b) => (a - b))
    const B = [...A].reverse()
    
    return  A[0] +" "+ B[0]
}