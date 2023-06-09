// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.


function queueTime(customers, n) {
    let time = 0;
    let tillNumber = n;
    let tills = [];
    let queue = customers;

    function loadTill(a) {
        if (arguments.length > 0) {
            tills.splice(a, 1)
            console.log('splice successful')
        }
        tills.push(queue[0]);
        queue.splice(0, 1);
    }

    function checkReduce() {
        for (let i = 0; i < tills.length; i++) {
            if (tills[i] > 0 || queue.length > 0) {
                return true
            }
        }
        return false;
    }

    function checkReplace() {
        for (let i = 0; i < tills.length; i++) {
            if (tills[i] <= 0 && queue.length > 0) {
                loadTill(i);
            }
        }
    }

    function reduce() {
        for (i = 0; i < tills.length; i++) {
            tills[i]--;
        }
        console.log(tills);
        time++;
    }

    function fill() {
        //for loop going over every till to potentially fill
        for (let i = 0; i < tillNumber; i++) {
            //if till slots aren't filled, fill
            if (tillNumber > tills.length) {
                //if queue has any numbers left
                if (queue.length > 0) {
                    loadTill();
                }
            }
        }
        console.log(tills);
    }

    fill();


    while (checkReduce()) {
        for (let i = 0; i < tills.length; i++) {
            checkReplace();
        }
        reduce();
    }

    console.log(time);
    return time;
}


queueTime([2,2,3,3,4,4], 2)