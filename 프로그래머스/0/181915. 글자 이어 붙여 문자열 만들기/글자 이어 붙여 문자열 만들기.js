function solution(my_string, index_list) {
    const ms = my_string.split('')
    const msidx = []
    for(i = 0; i < index_list.length; i++){
        msidx.push(ms[index_list[i]])
    }
    return msidx.reduce((a, b) => a + b)
}