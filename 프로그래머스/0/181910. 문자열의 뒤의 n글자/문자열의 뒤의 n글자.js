function solution(my_string, n) {
    const alp = my_string.split('').length
    return my_string.substr(alp - n);
}