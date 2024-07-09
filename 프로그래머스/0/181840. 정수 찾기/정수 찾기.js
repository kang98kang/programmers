function solution(num_list, n) {
    const result = (num_list.filter(num => num == n).length >= 1) ? 1 : 0
    return result;
}