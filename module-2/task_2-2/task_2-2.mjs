"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1Ans2 = 2 + 3 * 2 - 4 * 6;
const part1Ans = (2 + 3 * (2 - 4) * 6);
printOut("2 + 3 * 2 - 4 * 6 = " + part1Ans2);
printOut("(2 + 3 * (2 - 4) * 6 = " + part1Ans);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meters = 2534000;
const inches = (meters / 254 / 10);
const inchesRounded = Math.round(inches * 100) / 100;
printOut("25 meters and 34 centimeters in inches is equal to " + (inchesRounded));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Days = 3;
const Hours = 12;
const Minutes = 14;
const Seconds = 45;
let Dmath = Days * 60 * 24;
let Hmath = Hours * 60;
let Mmath = Minutes;
let Smath = Seconds / 60;
const part3Answer = Dmath + Hmath + Mmath + Smath;
printOut("3 days, 14 Hours, 14 Minutes and 34 Seconds is equal to " + part3Answer + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part4Minutes = 6322.52;
let part4Rest = part4Minutes / (24 * 60);
const part4Days = Math.floor(part4Rest);
part4Rest = part4Rest - part4Days;
part4Rest = part4Rest * 24;
const part4Hours = Math.floor(part4Rest);
part4Rest = part4Rest - part4Hours;
part4Rest = part4Rest * 60;
const part4Minute = Math.floor(part4Rest);

printOut("6,322.52 minutes is " +
    part4Days + " days " + 
    part4Hours + " hours, " +
    part4Minute + " minutes"
);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const DollarToNok = 76 / 8.6;
const NokToDollar = 8.6 / 76;

let TotalDollar = 54;
let TotalNok = TotalDollar * DollarToNok;


printOut("54 Dollar er det samme som " + TotalNok.toFixed(0) + "kr");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let sentence = "There is much between heaven and earth that we do not understand."
const countSentence = sentence.length;
printOut("det er " + countSentence + " totalt antall bokstaver i setningen: " + sentence);
printOut("bokstaven på 19. plass er : " + sentence.charAt(19));
printOut("Bokstavene fra plass 35 - 8 = : " + sentence.substring(35, 8));
printOut("Ordet 'earth' starter på indeks: " + sentence.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 greater than or equal to 7? " + (7 >= 7));
printOut('Is "a" greater than "b"? ' + ("a" > "b"));
printOut('Is "1" less than "a"? ' + ("1" < "a"));
printOut('Is "2500" less than "abcd"? ' + ("2500" < "abcd"));
printOut('"arne" is not equal to "thomas": ' + ("arne" !== "thomas"));
printOut("(2 equals 5) is this statement true? " + (2 === 5));
printOut('("abcd" is greater than "bcd") is this statement false? ' + !("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const num1 = Number("254");
const num2 = Number("57.23");
const num3 = Number("25 kroner");

printOut('"254" as a number: ' + num1);
printOut('"57.23" as a number: ' + num2);
printOut('"25 kroner" as a number: ' + num3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1;
printOut("Random number r (1 <= r <= 360): " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const days = totalDays % 7;
printOut(totalDays + " days is " + weeks + " weeks and " + days + " days.");
printOut(newLine);S