function solution(number) {
    let result = 0;
    
    function dfs(idx, count, sum) {
        if (idx > number.length) {
            return;
        }
        if (count === 3) {
            if (sum === 0) {
                result++;
            }
            return;
        }
        dfs(idx + 1, count + 1, sum + number[idx]);
        dfs(idx + 1, count, sum);
    }
    dfs(0, 0, 0);
    
    return result;
}