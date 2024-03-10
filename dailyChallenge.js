function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1, sum;
    for (let i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return b;
}

console.log(fibonacci(3)); // should output 2

// march 6th

function countVowels(str) {
    let count = 0;
    const cleanWord = str.toLowerCase();
    for (let i = 0; i < cleanWord.length; i++) {
        if ('aeiou'.includes(cleanWord[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World")); // Example usage

function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord("Javascript is awesome!")); // Should output "Javascript"

