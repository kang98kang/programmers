function solution(s){
      
   let s1 = s.split('');
    
    let s2 = [];
     
   for(let i = 0; i < s1.length; i++){
        if(s1[i] == '('){
            s2.push(s1[i])  
        } else if(s1[i] == ')') {
          s2.pop(s1[i]) 
            } 
          }
    
     if(s2.length === 0 && s1[0] == '('){
                return true
        }
return false
        
}