const calcAverage = numbers =>
  numbers.reduce((prev, number) => prev + parseFloat(number), 0) /
  numbers.length;

const calcMedian = (numbers = []) => {
  if (numbers.length === 1) {
    return numbers[0];
  }

  const orderedNumbers = numbers
    .map(number => parseFloat(number))
    .sort((a, b) => a - b);

  const length = orderedNumbers.length;

  if (length % 2 === 0) {
    const a = orderedNumbers[length / 2 - 1];
    const b = orderedNumbers[length / 2];

    return (a + b) / 2;
  } else {
    return orderedNumbers[Math.floor(length / 2)];
  }
};

// First implementation
const calcMode1 = (numbers = []) => {
  if (numbers.length === 1) {
    return numbers[0];
  }

  const orderedNumbers = numbers
    .map(number => parseFloat(number))
    .sort((a, b) => a - b);

  let mode = orderedNumbers.shift();
  let currentNumber = mode;
  let maxRepetitions = 1,
    currentRepetitions = 1;

  console.log(mode);

  for (let i = 0; i < orderedNumbers.length; ++i) {
    if (currentNumber === orderedNumbers[i]) {
      currentRepetitions++;
      continue;
    }

    if (maxRepetitions < currentRepetitions) {
      maxRepetitions = currentRepetitions;
      mode = currentNumber;
    }

    currentNumber = orderedNumbers[i];
    currentRepetitions = 1;
  }

  return mode;
};

// second method
const calcMode = (numbers = []) => {
  if (numbers.length === 1) {
    return numbers[0];
  }

  const frequencyTable = {};

  numbers.forEach(number => {
    const parsedNumber = parseFloat(number);

    if (frequencyTable[parsedNumber]) {
      frequencyTable[parsedNumber]++;
    } else {
      frequencyTable[parsedNumber] = 1;
    }
  });

  const orderedFrequency = Object.entries(frequencyTable)
    .map(([number, frequency]) => ({
      number: parseFloat(number),
      frequency,
    }))
    .sort((a, b) => b['frequency'] - a['frequency']);

  const maxFrequency = orderedFrequency[0]['frequency'];

  return orderedFrequency.filter(e => e['frequency'] === maxFrequency);
};

console.log(calcMode([3, 3, 3, 3, 3, 3, 3]));
