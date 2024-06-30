function solution(price) { 
    
    if(price >= 500000){
      price = 0.80 * price
    } else if (price >= 300000){
      price = 0.90 * price
    } else if (price >= 100000){
      price = 0.95 * price
    } else {
        price
    }
    
    
    var answer = Math.floor(price);
    
    return answer;
}