function canChange(start: string, target: string): boolean {
    let pointer = target.length - 1;
    let startPointer = pointer;
    while(pointer >= 0){
        let found = false;
        if(target[pointer] === 'R'){
            while(startPointer >= 0){
                if(start[startPointer] === 'L'){
                   return false;
                }else if(start[startPointer] === 'R'){
                   if(pointer < startPointer){
                      return false;
                   }
                   found = true;
                   startPointer--;
                   break;
                }
                
                startPointer--;
            }
            if(!found) return false;
        }else if(target[pointer] === 'L'){
            while(startPointer >= pointer){
                if(start[startPointer] === 'R'){
                   return false;
                }else if(start[startPointer] === 'L'){
                   found = true;
                   startPointer--;
                   break;
                }
                
                startPointer--;
            }
            if(!found) return false;
        }
        
        pointer--;
    }
    
   while(startPointer >= 0){
         if(start[startPointer] === 'L' || start[startPointer] === 'R'){
            return false;
         }
         startPointer--;
   }
    
    return true;
};