// Function to check if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Function to determine ticket price based on age
function ticketPrice(age) {
    if (age <= 12) {
        return 10; // Children
    } else if (age >= 13 && age <= 17) {
        return 15; // Teenagers
    } else {
        return 20; // Adults
    }
}

// Function to calculate the nth Fibonacci number using recursion
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Function to check if a string is a palindrome using recursion
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}

// Main program to interact with the user
(function main() {
    let choice = parseInt(prompt("Choose a task:\n1. Leap Year Checker\n2. Ticket Pricing\n3. Fibonacci Sequence\n4. Palindrome Checker"));

    switch (choice) {
        case 1:
            let year = parseInt(prompt("Enter a year:"));
            if (isLeapYear(year)) {
                alert(year + " is a leap year.");
            } else {
                alert(year + " is not a leap year.");
            }
            break;
        case 2:
            let age = parseInt(prompt("Enter your age:"));
            let price = ticketPrice(age);
            alert("The price of the ticket is: $" + price);
            break;
        case 3:
            let n = parseInt(prompt("Enter the position for Fibonacci sequence:"));
            alert("The " + n + "th Fibonacci number is: " + fibonacci(n));
            break;
        case 4:
            let string = prompt("Enter a string:");
            if (isPalindrome(string)) {
                alert("'" + string + "' is a palindrome.");
            } else {
                alert("'" + string + "' is not a palindrome.");
            }
            break;
        default:
            alert("Invalid choice. Please try again.");
    }
})();
