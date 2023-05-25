/**
 This function should test if the factor is a factor of base.

    Return true if it is a factor or false if it is not.
 */

function checkForFactor1(base, factor) {

  if (base % factor == 0) {
    return true
  }
  else {
    return false
  }
}

//optimized solution

function checkForFactor2(base, factor) {
  return base % factor === 0;
}