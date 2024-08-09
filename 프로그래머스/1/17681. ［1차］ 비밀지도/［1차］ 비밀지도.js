function solution(n, arr1, arr2) {
    
    let result = []
    
    for(let i = 0; i < n; i++){
       let arr1b = arr1[i].toString(2).padStart(n,'0')
       let arr2b = arr2[i].toString(2).padStart(n,'0')
        let mapline = ''
        for(let j = 0; j < n; j++){
            mapline += (arr1b[j] == '1' || arr2b[j] == '1')? '#' : ' '
               
            }
               result.push(mapline)
        }
        return result
    }
    
   
    
