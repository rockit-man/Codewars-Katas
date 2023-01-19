/**Cat Years, Dog Years (2)**

DESCRIPTION:
This is related to my other Kata about cats and dogs.

Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:
Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

// Solution
var ownedCatAndDog = function(catYears, dogYears) {
    if (isNaN(catYears) ||
        isNaN(dogYears) ||
        typeof catYears !== 'number' ||
        typeof dogYears !== 'number' ||
        arguments.length !== 2) {
        throw new Error('Invalid arguments. Input must be two integers.');
    } else {
        let ownedCat = catYears < 15
            ? 0
            : catYears < 24
            ? 1
            : 2 + (catYears - 24)/4;
        let ownedDog = dogYears < 15
            ? 0
            : dogYears < 24
            ? 1
            : 2 + (dogYears - 24)/5;
        return [Math.trunc(ownedCat), Math.trunc(ownedDog)];
    }
};