//fibonacci 
//fib 4 = fib 3 + fib 2
//fib n = fib of n - 1 + fib of n - 2

//fib 0 = 1
//fib 1 = 1
//fib 2 = 1 + 1 = 2
//fib 3 = 2 + 1 = 3
//fib 4 = 3 + 2 = 5
//fib 5 = 5 + 3 = 8

//How fib is executed?
//Like a tree from left work out each fib

            //             fib(4)
            //             /    \
            //       [3] fib(3) + fib(2)[2] = 3 + 2
            //           /         \
            //   fib(2) + fib(1)   fib(1) + fib(0)
            //      /       |         |       |
  //fib(1) + fib(0)     +   1         1    +  1
  //  |         |
  //  1    +    1 = 2

  //Problem with recursive implementation is that fib(2) etc is calculates many times 
  //Over and over again this is causing slowness when working out fib of big numbers
function fibonacci(n){
    if(n <= 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(5));//8
console.log(fibonacci(6));// 8 + 5 = 13
// console.log(fibonacci(20));
// console.log(fibonacci(40)); //Takes a while

// Non recursive factorial
// fib(0) = 1
// fib(1) = 1
// fib(2) = 2 
// With this we dont calculate fib(2) many times only once 
// then move onto fib(n+1)

function fibonacci2(n){
    if(n <= 1){
        return 1;
    }

    var f0 = 1;
    var f1 = 1;
    var fn = 0;

    for(var i = 2; i <= n; i++){
        fn = f0 + f1;
        f0 = f1; //fib n  -2 
        f1 = fn; //fib n - 1
    }
    return fn;
}

console.log(fibonacci2(40)); //Really fast!


