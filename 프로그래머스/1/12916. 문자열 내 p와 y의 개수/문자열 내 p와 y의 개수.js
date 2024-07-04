function solution(s){
   
    if(s.toLowerCase().split('').filter(n => n == "p").length == s.toLowerCase().split('').filter(n => n == "y").length) {
      return  true
    }
     return false


}