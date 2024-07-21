function solution(names) {
    var answer = [];
    // 0부터 names 배열 길이까지 5씩 증가시키면서 반복
    for (let i = 0; i < names.length; i += 5) {
        // 각 그룹의 첫 번째 사람을 결과 배열에 추가
        answer.push(names[i])}
    return answer;
    
}