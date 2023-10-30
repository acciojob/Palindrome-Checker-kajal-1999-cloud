// complete the given function

function palindrome(str){
 const cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Step 2: Compare with its reverse
  const reversedString = cleanString.split('').reverse().join('');

  // Step 3: Check if both strings are the same
  return cleanString === reversedString;
}
module.exports = palindrome