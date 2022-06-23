/* Write a Javascript program to count
the number of digits in a given number has using recursion.*/

function countNumber(number,count){
    if(number>1){
        // console.log(number);
        number = Math.floor(number/10);
        return countNumber(number,count+1);

    }
    console.log(count);


}
countNumber(7457745,0);