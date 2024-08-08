function solution(d, budget) {
    // 부서의 예산 요청을 오름차순으로 정렬
    d.sort((a, b) => a - b);

    let total = 0;
    let count = 0;

    for (let i = 0; i < d.length; i++) {
        // 현재 부서의 예산 요청을 total에 추가
        total += d[i];

        // 전체 예산을 초과하면 반복문 탈출
        if (total > budget) {
            break;
        }

        // 예산 내에서 가능한 부서의 수 증가
        count++;
    }

    return count;
}