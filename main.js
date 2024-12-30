// Create a program that will:

// 1.Ask the user for their age and determine whether they are
// a child (0-11),
// teenager (12-17),
// adult (18_59),
// or pensioner (60...),
// and allow for the possibility of entering incorrect data.
function userAge() {
  let age = prompt("Enter your age please");
  age >= 0 && age <= 11
    ? alert("You are a child.")
    : age >= 12 && age <= 17
    ? alert("You are a teenager.")
    : age >= 18 && age <= 59
    ? alert("You are an adult.")
    : age >= 60 && age <= 112
    ? alert("You are a pensioner.")
    : alert("Invalid age entered.");
}
userAge();
// 2. Ask the user for a number from 0 to 9 and display the special character
// that is located on this key (1 !, 2 @, 3 #, etc.).
function symbol() {
  while (true) {
    let num = prompt("Enter a number from 0 to 9:");
    num = parseInt(num);

    if ((num < 0 && num > 9) || isNaN(num)) {
      alert("Enter a valid number.");
    } else {
      const specialCharacter = [
        ")",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
      ];
      return specialCharacter[num];
    }
  }
}

alert(symbol());

// 3. Game “Guess the number”.
// Ask the user to guess a number
// from 0 to 100 and guess it in the following way: each iteration of the loop,
// divide the range of numbers in half,
// write the result in N and ask the user “Is your number > N,
//  <N or == N?”. Depending on what the user says, reduce the range.
// The initial range is from 0 to 100, divide it in half and get 50.
// If the user has indicated that their number is > 50, then change the range to 50 to 100.
// And so on until the user selects == N
// (it will be useful to read about the algorithm: “binary search”).

function guessTheNumber() {
  let minNum = 0;
  let maxNum = 100;
  let guess;
  alert("I'll guess the number from 0 to 100 you have in mind.");

  while (true) {
    let mid = Math.floor((minNum + maxNum) / 2);
    let ans = prompt(`Is this ${mid}?\nplease input < > or =`);
    switch (ans) {
      case "<":
        maxNum = mid - 1;
        break;
      case ">":
        minNum = mid + 1;
        break;
      case "=":
        alert("I knew it!  It's " + mid);
        return;
        break;
      default:
        alert("Please input only < > or =");
    }
  }
}
guessTheNumber();
