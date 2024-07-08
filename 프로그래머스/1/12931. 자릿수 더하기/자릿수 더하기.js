function solution(N)
{
return N.toString().split("").map(n => n*1).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}