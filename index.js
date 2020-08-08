// --------Function to output The Fibonacci sequence of 30--------

let arr = [];
let fibo = (num) => {
  
  if(arr.length < 1){
    arr.push(0);
   if(num > 1){
      arr.push(1);
   }
 }
    while(arr[arr.length-1] < num){
      let newnumber = arr[arr.length - 1]
+ arr[arr.length - 2];
    arr.push(newnumber);
    }
    if(arr[arr.length-1] > num){
      arr.pop()
    }
     
  console.log(arr);
}

fibo(30);