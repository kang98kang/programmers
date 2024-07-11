function solution(num_list) {
num_list.sort((a,b) => a - b).splice(0,5).reverse()
    return num_list
}