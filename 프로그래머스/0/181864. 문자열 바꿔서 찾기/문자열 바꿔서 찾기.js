function solution(myString, pat) {
    let myString2 = '';
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'A') {
            myString2 += 'B';
        } else if (myString[i] === 'B') {
            myString2 += 'A';
        }
    }
    if (myString2.includes(pat)) {
        return 1;
    } 
        return 0;
}