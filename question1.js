//Print factorial of a number using recursion.

function fact(num,facto){
    if(num>0){
        facto=num*facto;
        // console.log(num);
        return fact(num-1,facto);
    }
    return facto;
}
console.log(fact(4,1));
console.log(fact(5,1));
console.log(fact(6,1));