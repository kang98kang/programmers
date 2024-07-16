function solution(my_string, alp) {
    
    
    if(my_string.includes(alp)){
      return  my_string.replace(new RegExp(alp, 'g'), alp.toUpperCase())
    
    }
    
    return my_string;
}