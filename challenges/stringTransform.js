function stringTransformation(input) {
    const length = input.length;
    let result = '';

    // Check if the length is divisible by 3
    if (length % 3 === 0) {
        // Reverse the string
        result = input.split('').reverse().join('');
    }

    // Check if the length is divisible by 5
    if (length % 5 === 0) {
        // Convert each character to its ASCII code
        result = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // Check if the length is divisible by 15
    if (length % 15 === 0) {
        // Perform both transformations
        result = input.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If none of the conditions are met, return the input string
    if (result === '') {
        result = input;
    }

    return result;
}

// Test
console.log(stringTransformation("Hamburger"));
console.log(stringTransformation("Pizza"));
console.log(stringTransformation("Chocolate Chip Cookie"));
