var name1 = prompt("what is your name?");
var years = prompt("what is your birtdate enter first years?");
var month = prompt("enter month");
var days = prompt("enter days?");
var age = 2022 - parseInt(years);
var years_left = 99 - parseInt(age);
var monthLeft = 11 - parseInt(month);
var daysLeft = 30 - parseInt(days);
alert(
  "Hi " +
    name1 +
    " you left more " +
    years_left +
    "years and" +
    monthLeft +
    " month" +
    " and " +
    daysLeft +
    "days left on earth"
);
