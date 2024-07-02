function solution(n, control) {
    let cspl = control.split('');
    for(i = 0; i < control.length; i++){
      if(cspl[i] == 'w'){
          n++
      } else if(cspl[i] == 's'){
          n--
      } else if(cspl[i] == 'd'){
          n += 10
      } else if(cspl[i] == 'a'){
          n -= 10
      }
    }
    var answer = n;
    return answer;
}