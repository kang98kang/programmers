function solution(arr) { 
let min = Math.min(...arr);

// 가장 작은 값의 인덱스 찾기
let minIndex = arr.indexOf(min);
    
    
    if(arr.length == 1){
        return [-1]
    }  
     arr.splice(minIndex, 1)  
    return arr
}