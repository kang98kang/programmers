function solution(num_list) {
    let len = num_list.length;
    
    if(num_list[len-1] > num_list[len-2]){
         num_list.push(num_list[len-1] - num_list[len-2]);
    } else if (num_list[len-1] <= num_list[len-2]) {
         num_list.push(num_list[len-1] * 2);
    };
    
    var answer = num_list;
    return answer;
}