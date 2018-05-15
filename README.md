# Rules Kata GUIDESMITH

*  90 minutos
*  TDD pairing

## Part I
The Kata says you should write a function to convert from normal numbers to Roman Numerals: eg

     1 --> I
     10 --> X
     7 --> VII
etc.

For a full description of how it works, take a look at [this useful reference website] : which includes an implementation of the Kata in javascript.

There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn’t tend to go any higher)

## Part II
Write a function to convert in the other direction, ie numeral to digit

Clues
Can you make the code really beautiful and highly readable?
does it help to break out lots of small named functions from the main function, or is it better to keep it all in one function?
if you don’t know an algorithm to do this already, can you derive one using strict TDD?
does the order you take the tests in affect the final design of your algorithm?
Would it be better to work out an algorithm first before starting with TDD?
if you do know an algorithm already, can you implement it using strict TDD?
Can you think of another algorithm?
what are the best data structures for storing all the numeral letters? (I, V, D, M etc)
can you define the test cases in a csv file and use FIT, or generate test cases in xUnit?
what is the best way to verify your tests are correct?
