//Q.No-1. Print all the numbers in the given range.

// function printNumbers(a,b){
//     if(a<=b){
//     console.log(a);
//     return printNumbers(a+1,b)

//     }
// }
// printNumbers(10,20)

// Q.no-2. Print all the numbers in descending order in the given range

// function desOrder(a,b){
//     if(a<=b){
//         console.log(b);
//         desOrder(a,b-1);
//     }
// }
// desOrder(10,20)


// Q.NO-3.Print all the even numbers in the given range

// function getEven(a, b){
//     if(a<=b){
//         if(a%2==0){
//         console.log(a);
//         }
//     return getEven(a+1,b);
//     }
// }
// getEven(10,20);

// Q.no-4.Find the factorial of a given number n.

// function fact(num,count){
//     if(num>0){
//         count=num*count;
//         return fact(num-1,count);
//     }
//     return count;
// }
// console.log(fact(5,1));

// Q.No-5. Find the nth digit of the fibonacci series.

// function fibo(first,second,counter){
//     if (counter < 10){
//     // console.log(first);
//     let c= first + second;

//     return fibo(second,c,counter+1);
//     }
//     console.log(first);
// }
// fibo(1,1,1);

// Q.No-6.Print sum of all the numbers in the given range.

// function sum(number1,number2,total){
//     if(number1<=number2){
//         total=total+number1;
//         return sum(number1+1,number2,total);
//     }
//     return total;
// }
// console.log(sum(1,10,0));

// Q.No-7. Print the product of all the numbers in given range

// function productRange(a,b,product){
//     if(a<=b){
//         product= product *a;
//         return productRange(a+1,b,product);
//     }
//     return product;

// }
// console.log(productRange(5,10,1))

// Q.No-8. Write the recursive function to check whether a given number is prime or not.
