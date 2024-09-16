
var map = function(arr, fn) {
    let result = [];
    for(i=0;i<arr.length;i++){
        result.push(fn(arr[i],i))
    }
    return result;
}; 

let array = [1,2,3]
let fn = function(n,i){
    return n;
}

map(array,fn)