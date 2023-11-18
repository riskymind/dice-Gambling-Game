// Get the Dom elememnts
const ROLLDICE = document.getElementById("rollDice");
const GAMERESULT = document.getElementById("gameResult");
const ERROR = document.getElementById("errorReport");

//method to get the sum of all roll
const rolls = (array) => {
  let score = [];
  //validate the array to only contain numbers btw 1-6
  for (let rollNumber of array) {
    if (![1, 2, 3, 4, 5, 6].includes(rollNumber)) {
      return "numbers btw 1 - 6 only";
    }
  }

  //check for rolls that are 1 or 6
  // array.forEach((element, index, arr) => {
  //   console.log(arr[index]);
  //   console.log(index - 1);
  //   if (arr[index - 1] == 1) {
  //     score.push(0);
  //   } else if (arr[index - 1] == 6) {
  //     score.push(arr[index] * 2);
  //   } else {
  //     score.push(arr[index]);
  //   }
  // });

  let firstItem = array[0];

  let counter = 1;
  while (counter < array.length) {
    if (array[counter - 1] === 1) {
      array[counter] = 0;
      score.push(array[counter]);
    } else if (array[counter - 1] === 6) {
      array[counter] *= 2;
      score.push(array[counter]);
    } else {
      score.push(array[counter]);
    }

    counter++;
  }

  score.push(firstItem);

  // return the sum of the total scores
  return score.reduce((prevScore, CurrScore) => prevScore + CurrScore);
};

//method to display the rolls
ROLLDICE.addEventListener("click", () => {
  //validate the users input
  let inputNumber = document.getElementById("inputNumber").value;

  if (inputNumber.length < 3 || inputNumber.length > 6) {
    ERROR.style.display = "block";
    ERROR.textContent = `your input length should be greater than 3 and less than 7`;
    //setTimeout(()=> document.querySelector('.errorReport').remove(), 3000);
  } else {
    //split the input to an array and convert it to array of numbers
    inputNumber = inputNumber.split("").map((num) => parseInt(num));

    //Display Result
    GAMERESULT.textContent = rolls(inputNumber);
    document.getElementById("inputNumber").value = "";
    ERROR.textContent = "";
  }
});
