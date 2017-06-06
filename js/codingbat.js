//We have a number of bunnies and each bunny has two big floppy ears. 
//We want to compute the total number of ears across all the bunnies recursively/

// bunnyEars(0) → 0
// bunnyEars(1) → 2
// bunnyEars(2) → 4

function bunnyEars(n){
    if(n == 0){
        return 0;
    }
    return 2 + bunnyEars(n-1); 
    //Each bunny has 2 ears so we add 2 
    //and then go down the list using n-1
};

// console.log(bunnyEars(0));
// console.log(bunnyEars(1));
// console.log(bunnyEars(2));

//We have bunnies standing in a line, numbered 1, 2, ... 
//The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..)
// we'll say have 3 ears, because they each have a raised foot.
// Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEars2(n){
    if(n == 0){
        return 0;
    }

    if(n % 2 == 0){
        //Even bunny have 3 ears
        return 3 + bunnyEars2(n-1);
    }
    //Odd have 2 ears
    return 2 + bunnyEars2(n-1);
}

//      *
//      ***
//      ******
//      **********
//      ***************

// triangle(0) → 0		
// triangle(1) → 1	
// triangle(2) → 3		
// triangle(3) → 6		
// triangle(4) → 10		
// triangle(5) → 15		
// triangle(6) → 21	
// triangle(7) → 28

//1     2       3       4       5       6       7
//|     |       |       |       |       |       |
//1     3       6       10      15      21      28
//  +2     +3       +4      +5      +6      +7    //Difference between each number on this row

// We add rows + triangles(rows - 1);     

//http://codingbat.com/prob/p194781
function triangle(rows) {
  if(rows == 0){
    return 0;
  }
  
  return rows + triangle(rows - 1);
}

//console.log(triangle(7)); //28

//http://codingbat.com/prob/p163932
//sumDigits(126) → 9
// 6 + 2 + 1 = 9
//Add each digit

function sumDigits(n) {
  if(n >= 0 && n <= 9){
    return n;
  }
  var lastDigit = n % 10; 
  n = Math.round(n / 10);
  console.log(n);
  return lastDigit + sumDigits(n);
}

//console.log(sumDigits(123)); //1 + 2 + 3 = 6

//http://codingbat.com/prob/p101409
// public int count7(int n) {
//   if(n >= 0 && n <= 9){
//     if(n == 7){
//       return 1;
//     } 
//     return 0;
//   }
//   int increment = 0;
//   int lastDigit = n % 10;
//   n = n / 10;
//   if(lastDigit == 7){
//     increment = 1;
//   }
  
//   return increment + count7(n);
// }



