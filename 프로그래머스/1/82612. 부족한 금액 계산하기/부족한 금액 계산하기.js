function solution(price, money, count) {
    const fee = price/2 * count * (count+1)
    
    return money - fee >= 0 ? 0 : fee - money 
}