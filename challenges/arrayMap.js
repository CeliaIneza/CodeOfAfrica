const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function subArray(array, targetSum) {
    let start = 0;
    let currentSum = 0;
    
    for (let end = 0; end < array.length; end++) {
        currentSum += array[end];
        
        // Shrink the window from the start if the current sum exceeds the target
        while (currentSum > targetSum && start <= end) {
            currentSum -= array[start];
            start++;
        }
        
        // If current sum equals the target, a subarray is found
        if (currentSum === targetSum) {
            return true;
        }
    }
    
    return false;
}

rl.question('Enter the elements of the array separated by spaces: ', (input) => {
    const array = input.trim().split(' ').map(Number);

    // Check if valid numeric inputs are provided
    if (array.some(isNaN)) {
        console.log('Invalid input! Please enter valid numeric values.');
        rl.close();
        return;
    }

    rl.question('Enter the target sum: ', (targetInput) => {
        const targetSum = parseInt(targetInput);

        // Check if a valid numeric target sum is provided
        if (isNaN(targetSum)) {
            console.log('Invalid target sum! Please enter a valid numeric value.');
            rl.close();
            return;
        }

        console.log('Entered Array:', array);
        console.log('Target Sum:', targetSum);

        const result = subArray(array, targetSum);
        console.log('Does a contiguous subarray exist with the given sum?', result);

        rl.close();
    });
});

