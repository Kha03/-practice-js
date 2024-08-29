// Ex1;
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// 1. Store Mark's and John's mass and height in variables
var Mark = {
  mass: 78,
  height: 1.69,
};
var John = {
  mass: 92,
  height: 1.95,
};
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
var calBmi = (height, mass) => mass / height ** 2;
var markBmi = calBmi(Mark.height, Mark.mass);
var johnBmi = calBmi(John.height, John.mass);
console.log("mark", markBmi, "john", johnBmi);
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
var markHigherBMI =
  calBmi(Mark.height, Mark.mass) > calBmi(John.height, John.mass);
console.log(" Mark has a higher BMI than John.", markHigherBMI);
// Ex2;
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
console.log(
  markBmi > johnBmi
    ? "Mark's BMI is higher than John's!"
    : "John's BMI is higher than Mark's!"
);
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
console.log(
  markBmi > johnBmi
    ? `Mark's BMI (${Math.round(markBmi)}) is higher than John's (${Math.round(
        johnBmi
      )})!`
    : `John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`
);
// Ex3;
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
var dolphins_1 = [96, 108, 89];
var koalas_1 = [88, 91, 110];
var dolphins_2 = [97, 112, 101];
var koalas_2 = [109, 95, 123];
var dolphins_3 = [97, 112, 101];
var koalas_3 = [109, 95, 106];
var calAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
var compare = (dolphins, koalas) => {
  if (calAverage(dolphins) > calAverage(koalas)) {
    console.log(
      `Dolphins win (${calAverage(dolphins)} vs. ${calAverage(koalas)})`
    );
  } else if (calAverage(dolphins) < calAverage(koalas)) {
    console.log(
      `Koalas win (${calAverage(koalas)} vs. ${calAverage(dolphins)})`
    );
  } else {
    console.log(`Draw (${calAverage(dolphins)} vs. ${calAverage(koalas)})`);
  }
};
compare(dolphins_1, koalas_1);
compare(dolphins_2, koalas_2);
compare(dolphins_3, koalas_3);
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
var compareBonus = (dolphins, koalas) => {
  var averrage_dolphins = calAverage(dolphins);
  var averrage_koalas = calAverage(koalas);
  if (averrage_dolphins >= 100 || averrage_koalas >= 100) {
    if (averrage_dolphins > averrage_koalas) {
      console.log(`Dolphins win (${averrage_dolphins} vs. ${averrage_koalas})`);
    } else if (averrage_dolphins < averrage_koalas) {
      console.log(`Koalas win (${averrage_koalas} vs. ${averrage_dolphins})`);
    } else {
      console.log(`Draw (${averrage_dolphins} vs. ${averrage_koalas})`);
    }
  } else {
    console.log(`No team wins the trophy`);
  }
};
compareBonus(dolphins_1, koalas_1);
compareBonus(dolphins_2, koalas_2);
compareBonus(dolphins_3, koalas_3);
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
var compareBonus2 = (dolphins, koalas) => {
  var averrage_dolphins = calAverage(dolphins);
  var averrage_koalas = calAverage(koalas);
  if (averrage_dolphins >= 100 || averrage_koalas >= 100) {
    if (averrage_dolphins == averrage_koalas) {
      {
        console.log(`Draw (${averrage_dolphins} vs. ${averrage_koalas})`);
      }
    } else {
      console.log(`No team wins the trophy`);
    }
  }
};
compareBonus2(dolphins_1, koalas_1);
compareBonus2(dolphins_2, koalas_2);
compareBonus2(dolphins_3, koalas_3);
// Ex4;
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
var tip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
console.log(
  `The bill was 275, the tip was ${tip(275)}, and the total value ${
    275 + tip(275)
  }`
);
console.log(
  `The bill was 275, the tip was ${tip(40)}, and the total value ${
    40 + tip(40)
  }`
);
console.log(
  `The bill was 275, the tip was ${tip(430)}, and the total value ${
    430 + tip(430)
  }`
);
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
