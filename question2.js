// Given a number n, print numbers from 1 to n using recursion.

function range(a,b){
    if(a<=b){
    console.log(a);
    return range(a+1,b);
    }

}
range(10,20)