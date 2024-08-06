function solution(my_string, is_prefix) {
    if(is_prefix.substr(0,is_prefix.split("").length) === my_string.substr(0,is_prefix.split("").length) && my_string.includes(is_prefix) ){
        return 1
    }
    return 0;
}