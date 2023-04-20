// reverse -> will reverse string (using array methods is not allowed)

// const str = "hello jimmy";
// const backWard = str.reversedStr();

// String.prototype.reversedStr = function () {
//   let reversedString = "";
//   for (let i = this.length - 1; i >= 0; i--) {
//     reversedString += this[i];
//   }

//   return reversedString;
// };

// console.log(backWard);

// capitalizing first word
// let str = "hello world";
// let capitalString = str.capitalStr();

// String.prototype.capitalStr = function () {
//   return this.charAt(0).toLocaleUpperCase();
// };

// console.log(capitalString);

// capitalize vowels



String.prototype.capitalizeVowel = function () {
  return this.replace(/[aeiou]/g, function (match) {
    return match.toUpperCase();
  });
};

let str = "hello mmemmed"; 
let capitalizeVowel = str.capitalizeVowel();

console.log(capitalizeVowel);
