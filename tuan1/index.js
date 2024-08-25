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
console.log(calBmi(Mark.height, Mark.mass));
console.log(calBmi(John.height, John.mass));
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
