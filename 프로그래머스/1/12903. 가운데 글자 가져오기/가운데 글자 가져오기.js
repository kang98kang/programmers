function solution(s) {
const len = s.length;
    const mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        return s.substring(mid - 1, mid + 1);
    } else {
        return s.charAt(mid);
    }
}