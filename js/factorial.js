//factorials
//n! = n x (n-1)!
//if n == 0 return 1

//How computer executes recursive calls
//When computer sees a expression like 
//4 * f(3) it will pause execution and work out 
//what f(3) and then come back. (Stack)
//                 return
//f(4)             4 * f(3) *Pause
//f(3)             3 * f(2) *Pause
//f(2)             2 * f(1) *Pause
//f(1)             1 * f(0) *Pause
//f(0)             1        *okay know what f(0) is now
//----------------------------------
// Work out paused expression
//----------------------------------
//f(1) -> 1 * f(0) = 1 * 1 = 1 since we know f(0) equals 1
//f(2) -> 2 * f(1) = 2 * 1 = 2 since we know f(1) equals 1
//f(3) -> 3 * f(2) = 3 * 2 = 6 since we know f(2) equals 2
//f(4) -> 4 * f(3) = 4 * 6 = 24 since we know f(3) equals 6

function factorial(n){
    if(n == 0){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(1)); //1
console.log(factorial(4)); //24