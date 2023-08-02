const MAX_AGE = 20;

function findRangeNumbers(arrayOfTwoNumbers) {
  let range = [];
  const firstNum = arrayOfTwoNumbers[0];
  const secondNum = arrayOfTwoNumbers[1];
  const amountsOfAllNumbers = Math.abs(firstNum - secondNum) + 1;
  if (firstNum === secondNum) return firstNum;

  for (let i = 0; i < amountsOfAllNumbers; i++) {
    range.push(firstNum + i);
  }
  return range;
}

// e.g. [[1,2], [3,8], [10,19]] => output 9
export default function FindNotIncludedRange(arrayOfRanges) {
  const allRangeOfNumbers = arrayOfRanges.map((range) => {
    return findRangeNumbers(range);
  });
  let defaultRange = Array.from(Array(MAX_AGE + 1)).map((_, idx) => idx);
  allRangeOfNumbers.forEach((item) => {
    item.forEach((item2) => {
      const arrayItemPosition = defaultRange.indexOf(item2);
      if (arrayItemPosition !== -1) defaultRange.splice(arrayItemPosition, 1);
    });
  });
  return defaultRange;
}
