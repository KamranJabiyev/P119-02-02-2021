// let a=10;
// let b=6;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log(`a=${a}`)
// console.log(`b=${b}`)

//LOCAL AND GLOBAL VARIABLES
// let name="Sadiq";
// if(true)
// {
//     let name="Nermin"
//     console.log(`local: ${name}`)
// }

// console.log(`global: ${name}`)
// var name="Sadiq";
// if(true)
// {
//     var name="Nermin"
//     console.log(`local: ${name}`)
// }

// console.log(`global: ${name}`)

// const pi;
// pi=3;

//FUNCTION - REUSABLE CODE BLOCK!!!

// function getPower(number,pow) { //number,pow - parametrs
//     let result = 1;
//     for (let i = 0; i < pow; i++) {
//         // debugger;
//         result = result * number;
//     }
//     console.log(result)
// }

// getPower(5,3) //arguments
// getPower(6,2)
// getPower(5)

// function Sum(n1,n2=10){
//     if(!isNaN(n1) && !isNaN(n2))
//         return n1/n2;
//     console.log("Duzgun eded daxil edin")
// }
// let result=Sum(3,2)
// console.log(result)

// function sumArrIndex(number,...arr){
//     let result=number;
//     for (const item of arr) {
//         if(!isNaN(item)){
//             result+=item
//         }   
//     }
    
//     return result;
// }

// console.log(sumArrIndex(10,2,3,"sdsdg",5))

// function sumArrIndex(){
//     console.log(arguments[4])
//     let result=0;
//     for (const item of arguments) {
//         if(!isNaN(item)){
//             result+=item
//         }   
//     }
    
//     return result;
// }

// console.log(sumArrIndex(1,2,3,4,5))


// const Sum=function(...arr){
//     console.log(arguments)
//     // return n1+n2
// }

// console.log(typeof Sum)

// const Sum=(n1,n2)=>n1+n2;

// const Salamlama=()=>console.log("Hello")


// const Print=member=>console.log(member)




// Print(5)
// Salamlama()
// console.log(Sum(10,20))


// function Count(n){
//     let result=0;
//     for (let i = 1; i <= n; i++) {
//         result+=i
//     }
//     return result;
// }

// console.log(Count(5))


// function Count(n){
//     if(n==1){
//         return n;
//     }else{
//         return n+Count(n-1)
//     }
// }

// console.log(Count(3))


