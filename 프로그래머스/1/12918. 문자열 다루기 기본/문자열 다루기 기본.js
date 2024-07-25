function solution(s) {
    const isNum = str => /^\d+$/.test(str);
    if(s.length === 4 || s.length === 6){
    return isNum(s)}
    return false
}