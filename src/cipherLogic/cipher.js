export const railFenceCipherEncryptor = (enteredPlainText, enteredKey) => {
  if (!enteredPlainText || !enteredKey) {
    return "invalid key or input";
  }
  let arrOfPlainText = enteredPlainText.split(""),
    result = [];

  for (let i = 0; i < enteredKey; i++) {
    result[i] = [];
    for (let j = 0; j < arrOfPlainText.length; j++) {
      let cipherTextElOne = j * 2 * (enteredKey - 1) + i;
      
      if (cipherTextElOne < arrOfPlainText.length)
        result[i].push(cipherTextElOne);

      if (i !== 0 && i !== enteredKey) {
        let cipherTextElTwo = j * 2 * (enteredKey - 1) - i;
        if (cipherTextElTwo < arrOfPlainText.length && cipherTextElTwo > 0)
          result[i].push(cipherTextElTwo);
      }
    }
  }
  const sortingUniqueValues = (arrayElements) => {
    let clonedElements = [...new Set(arrayElements)];
    return clonedElements.sort((a, b) => a - b);
  };

  result = result
    .map((arrayElements) => {
      return sortingUniqueValues(arrayElements);
    })
    .reduce((a, b) => {
      return a.concat(b);
    })
    .map((element) => {
      return arrOfPlainText[element];
    })
    .join("");
  return result;
};

export const railFenceCipherDecryptor = (enteredCipherText, enteredKey) => {
  if (!enteredCipherText || !enteredKey) {
    return "invalid input or key";
  }
  let divider = 2 * (enteredKey - 2) + 2,
    cipherTextArr = enteredCipherText.split(""),
    arraySplits = [],
    arrayNode = [],
    result = [],
    quotient = parseInt(cipherTextArr.length / divider),
    remainder = cipherTextArr.length % divider;

  for (let i = 0; i < enteredKey; i++) {
    arraySplits.push(i === 0 || i === enteredKey - 1 ? quotient : 2 * quotient);
  }
  if (remainder > enteredKey) {
    arraySplits = arraySplits.map((num) => {
      return num + 1;
    });
    remainder = remainder - enteredKey;
    for (let j = enteredKey - 2; j >= enteredKey - remainder - 1; j--) {
      arraySplits[j]++;
    }
  } else {
    for (let j = 0; j < remainder; j++) {
      arraySplits[j]++;
    }
  }

  arrayNode = arraySplits.map((el) => {
    let ans = cipherTextArr.splice(0, el);
    return ans;
  });
  let matrix = 0,
    stringlength = 0;

  const finalString = (isAdd) => {
    if (stringlength === enteredCipherText.length) {
      return;
    }
    result.push(arrayNode[matrix].shift());
    stringlength++;
    isAdd ? matrix++ : matrix--;

    if (matrix === enteredKey) {
      matrix = matrix - 2;
      isAdd = false;
    }
    if (matrix === 0) {
      isAdd = true;
    }
    finalString(isAdd);
  };

  finalString(true);
  result = result.join("");
  return result;
};
