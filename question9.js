// Given a number n, print all the odd numbers from 1 to n using recursion.

function getOdd(a,b){
    if(a<=b && a%2==1){
    console.log(a);
        return getOdd(a+2,b);
    }
        return;

}
getOdd(1,13);

// let getOdd = (a,b) =>{
//     if(a==b){
//         if(a%2!=0){
//             console.log(a);
//         }
//         return;
//     }else if(a>b){
//         return;
//     }else{
//         if(a%2!=0){
//             console.log(a);
//             getOdd(a+2,b);
//         }else{
//             getOdd(a+1,b);
//         }
//     }
// }
// getOdd(1,11)