//? Arithmetic sequence
//? Five positive 2-digit numbers
//? Digits 0-9 once each

//* Loop through each possible starting number (01 - 74)
//* Can't end on 99 or higher, so biggest starting number = 98 - (6 * 4) = 74

//* Numbers have to increase by an amount greater than 5 (or repeating digit in 2-3 numbers)
//* Numbers can't increase by more than 24 (or you get a 3-digit number in the sequence)
//* Therefore possible incrementing numbers are between 6 and 24.

//* Have to check if a number is less than 10, and if so then add a 0 in front.
//* Push each sequence as a sub-array to 'ansArr', with each number being a string.

//* Use RegEx to check each sub-array for repeating digits?

const ansArr = [];

//* Create and push all possible combinations to 'ansArr'.

for (let i = 1; i <= 74; i++) {
    //? Starting numbers
    for (let j = 6; j <= 24; j++) {
        //? Increment amounts
        let tempArr = [];
        i < 10 ? tempArr.push(`0${i}`) : tempArr.push(i.toString())
        let currCount = i;

        for (let k = 0; k < 4; k++) {
            currCount += j;
            currCount < 10 ?
                tempArr.push(`0${currCount}`) :
                tempArr.push(currCount.toString())
        }
    }
}

//* Now I need to check if 'ansArr' contains any correct sequences.

const newArr = ansArr.filter((sequence) => {
    return sequence.join("").includes(
        /0{1}/,
        /1{1}/,
        /2{1}/,
        /3{1}/,
        /4{1}/,
        /5{1}/,
        /6{1}/,
        /7{1}/,
        /8{1}/,
        /9{1}/
    );
});

console.log(newArr);
