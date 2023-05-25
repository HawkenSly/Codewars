// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade(s1, s2, s3) {

  let average = ((s1 + s2 + s3) / 3);

  if (average >= 90) { return 'A' }
  else if (average >= 80) { return 'B' }
  else if (average >= 70) { return 'C' }
  else if (average >= 60) { return 'D' }
  else return 'F';
}

//I spent a few minutes wondering why my code wasn't working and it was because I was using "if (average => 90)" instead of ">=" >_>