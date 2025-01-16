

//Reverse a string (each word)
// let str = 'HELLO WORLD'

// str = str.split(' ')

// for (let i = 0; i < str.length; i++) {
//     let reversed = ''
//     for (let j = str[i].length-1; j >= 0; j--) {
//         reversed += str[i][j]
//     }
//     str[i] = reversed
// }
// str = str.join(' ')
// console.log(str)



// String to lowercase
// let str = 'To Lowercase'
// str = str.split(' ')
// let result = ""

// for (let i = 0; i < str.length; i++) {
//     let char = str[i]
//     let charCode = char.charCodeAt()
//     if(charCode >=65 && charCode <= 90){
//         result += String.fromCharCode(charCode + 32)
//     }else{
//         result += char
//     }
// }



// SecondLargest 

// let arr = [1341, 2, 3, 4, 526, 7, 8, 8, 29, 220];
// let seconLargest = -Infinity
// let result = arr[0];


// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > result) {
//         seconLargest = result
//         result = arr[i]
//     }
//     else if (arr[i] > seconLargest && arr[i] !== result) {
//         seconLargest = arr[i]
//     }
// }

// console.log(seconLargest)



// To Title case 

// let str = "heello world"
// str = str.split(' ')

// for(let i=0;i<str.length;i++){
//    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    
// }

// console.log(str.join(' '));


//To Camel case

// let str = "camel case"

// str = str.split(' ')

// for(let i=0;i<str.length;i++){
//     str[i] = str
// }


// let str = 'Hello World'


// function reverse(str,reversed){
//     if(!reversed){
//         reversed = ""
//     }

//     if(str.length == 0){
//         return console.log(reversed);
//     }

//     reversed += str[str.length-1] // d,
//     str = str.slice(0,-1) // Hello Worl
   
//     return reverse(str,reversed)
    
// }

// reverse(str)



// febinocci
// let result =[0,1]
// for(let i = 0;i<5;i++){
//     result.push(result[i] + result[i+1])
// }

// console.log(result);


// function febinocci(n,result=[0,1]){
//     if(n==0){
//         return console.log(result);
        
//     }

//     result.push(result[result.length-1] + result[result.length-2] )
//     return febinocci(n-1,result)
// }

// febinocci(5)


// function factorial(n){
//     if(n==0){
//         return 1
//     }

//     return n * factorial(n-1)
// }
// console.log(factorial(5));



// let arr = [ [1,2,3] , [4,5,6] , [7,8,9]  ]

// // arr = arr.flat()
// // console.log(arr);
// let flattened = []
// for(subArray of arr){

//     for(item of subArray){
//         flattened.push(item)
//     }

// }

// console.log(flattened);



// let str = '1helo 2how 3are 4you...'
// let nums = ["1","2","3","4","5","6","7","8","9","0"]

// let result = ''

// for(let i=0;i<str.length;i++){

//     if(!nums.includes(str[i])){
//         result += str[i]
//     }

// }

// console.log(result);


// let str = '1helo 2how 3are 4you...'
// let result = str.replace(/[0-9]/g,'')

// console.log(result);


// let str = 'hello how are you'
// let result = ''

// for(let i=0;i<str.length;i++){
//     if(str[i] != 'o'){
//         result += str[i]
//     }
// }
// console.log(result);

// let result = str.replace(/['o']/g,"")
// console.log(result);



let str = 'hello how re you';
let result = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] !== 'o' && str[i] !== 'a') {  
        result += str[i];
    }
}

console.log(result);  // Output: "hell hw re yu"
