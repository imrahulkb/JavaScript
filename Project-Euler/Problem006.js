// https://projecteuler.net/problem=6

export const squareDifference = (num = 100) => {
   let sumOfSquares = (100)*(100+1)*(200+1)/6
  let sums = (100*101)/2
  
  return sums ** 2 - sumOfSquares // difference of square of the total sum and sum of squares
}
