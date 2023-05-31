function findDifference(a, b) {
    let arrA;
    let arrB;
    a.forEach((element) => { arrA + element });
    b.forEach((element) => { arrB + element });
    console.log(arrA + " " + arrB)
    if (arrA >= arrB) { return arrA - arrB }
    else return (arrB - arrA);
}

findDifference([1, 2, 3], [1, 2, 4]);