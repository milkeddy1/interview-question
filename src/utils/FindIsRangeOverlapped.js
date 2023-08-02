function findRangeNumbers(arrayOfTwoNumbers) {
  let range = [];
  const firstNum = arrayOfTwoNumbers[0];
  const secondNum = arrayOfTwoNumbers[1];
  const amountsOfAllNumbers = Math.abs(firstNum - secondNum) + 1;
  if (firstNum === secondNum) return [firstNum];

  for (let i = 0; i < amountsOfAllNumbers; i++) {
    range.push(firstNum + i);
  }
  return range;
}

export default function FindIsRangeOverlapped(arrayOfRanges) {
  let isOverlapped = false;
  const allRangeOfNumbers = arrayOfRanges.map((range, idx) => {
    return {
      id: idx,
      range: findRangeNumbers(range),
    };
  });
  console.log(allRangeOfNumbers, "allRangeOfNumbers");
  allRangeOfNumbers.forEach((item, idx) => {
    item.range.forEach((number) => {
      for (let i = 0; i < allRangeOfNumbers.length; i++) {
        if (i === idx) return;
        if (allRangeOfNumbers[i].range.includes(number)) {
          isOverlapped = true;
          break;
        }
      }
    });
  });
  return isOverlapped;
}
