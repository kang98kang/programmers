function solution(arr1, arr2) {
    
    if(arr1.length > arr2.length){
        return 1
    } else if(arr1.length < arr2.length){
        return -1
    }
    else if(arr1.length === arr2.length){
        if(arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0) > arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)){
            return 1
        } else if(arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0) < arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)){
                  return -1
                  } else if(arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0) == arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)){
                  return 0

        }
    }
}