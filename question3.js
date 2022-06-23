// Given a number n, print numbers from n to 1 using recursion.

function range(a,b){
    if(a>=b){
    console.log(a);
    return range(a-1,b);
    }

}
range(10,1)