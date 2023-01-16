/* Double Char

DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck! */

// Solution:
function doubleChar(str) {
  let doubleStr = '';
  for (char of str) {
    doubleStr = doubleStr + char + char;
  }
  return doubleStr;
};