

// let i = 0
// function abc(){
//     console.log(i++)
//     abc()
// }


// function goToLunch(person){
//     if(person === 5) return true
//     console.log(person)
//     goToLunch(person + 1)
// }


// goToLunch(1)


// function multiply(arr){
//     let multiply = 1
//     for(let i=0 ;i<arr.length;i++){
//         multiply *= arr[i]
//     }
//     return console.log(multiply)
// }
// let arr = [1,2,3,4,5]
// multiply(arr)


// function multiply(arr){
//     console.log(arr)
//     if(arr.length <=0){
//         return 1
//     }else return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1));
// }

// console.log(multiply([1,2,3,4]))

//Factorial
// function factorial(n){
//     if(n==0){
//         return 1
//     }else{
//         return n * factorial(n-1)
//     }
   
// }
// console.log(factorial(5));


// calculate total 

// function calculate(n,total = 0){
//     if(n==0){
//         return total
//     }
//      return calculate(n-1 , total += n)
    
// }

// console.log(calculate(5))


//  Create a array with range
// let result = []
// function rangeOfNumber(startNum, endNum) {
//     if (startNum > endNum) {
//         return;
//     }
//     result.push(startNum)
//     rangeOfNumber(startNum + 1, endNum);
// }

// rangeOfNumber(0, 10);
// console.log(result)


// function febinocci(n){
//     let prev = 0 , curr = 1
//     for(let i = 2 ;i<=n ;i++){
//         let temp =  curr 
//         curr = prev + curr
//         prev = temp

//     }
// }


// for(let i=1;i<=10;i++){
//     console.log(fibonacciRecursive(i));
// }



// function print(n,count = 1){
//     if(count <= n){
//         console.log(count)
//         print(n,count+1)
//     }
// }


// print(10)



// function binarySearch(arr,low,high,target){
//     if(low > high){
//         console.log(target, 'not found');
//         return false
//     }

//     const mid = Math.floor((low + high) / 2)

//     if(arr[mid] == target){
//         console.log(target, 'found at ',mid)
//         return
//     }
//     else if(arr[mid] < target){
//         binarySearch(arr , mid+1 , high , target)
//     }else{
//         binarySearch(arr, low , mid-1 , target)
//     }
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// binarySearch(arr, 0 ,arr.length-1 , 9)



// function factorial(n){
//     if(n == 0){
//         return 1
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(5))



// function fibonacciRecursive(n) {
//     if (n <= 1) return n;
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// console.log(fibonacciRecursive(10))




function reverseString(word){
    if(word.length <=1 ){
        return word
    }

    return reverseString(word.slice(1)) + word[0]
}

let word = "HELLO"
console.log(reverseString(word))



// function factorial(n){
//     if(n==0){
//         return 1
//     }
//     return n * factorial(n-1)
//   }
  
//   console.log(factorial(5))



// function binarySearch(arr,low,high,target){

//     if(low > high){
//         console.log(target, 'not found');
//         return false
//     }
//     const mid = Math.floor( (low+high) / 2)

//     if(arr[mid] == target){
//         return console.log(arr[mid],' find at index of ,',mid)
//     }
//     else if(arr[mid] < high){
//         binarySearch(arr,mid+1,high,target)
//     }else{
//         binarySearch(arr,low,high-1,target)
//     }
// }


// let arr = [1,2,3,4,5,6,7,8,9]
// binarySearch(arr,0,arr.length-1,100)