const randomIntToN = x => Math.ceil(Math.random() * x);

const randomPair = max => {
    const first = randomIntToN(10);
    const second  = Math.min(10, randomIntToN(Math.floor(max/first)));

    return [first, second];
}

const ifLastThreeContainPair = (pair, list) => {
  let i = list.length - 1;
  while (i > 0) {
    const e = list[i];
    if (
      (e[0] === pair[0] && e[1] === pair[1])
    ) {
      return true;
    }
    i--;
  }
  return false;
}

const generateList = (max, amount) => {
  const arr = [];
  
  while(arr.length < amount) {
    const pair = randomPair(max);

    if (pair[0] && pair[1] && !ifLastThreeContainPair(pair, arr)) {
      arr.push(pair);      
    }
  }
  
  return arr;
}

const createMultiply = pair => `${pair[0]} * ${pair[1]} = ___`;
const createDivision = pair => {
  const result = pair[0] * pair[1];
  if (Math.random() >= 0.5) {
    return `${result} : ${pair[0]} = ___`;
  } else {
    return `${result} : ${pair[1]} = ___`;
  }
}

const printList = (max, amount) => {
    const space = "        ";
    const br = "\n";

    let str = "";

    const list = generateList(max, amount);

    list.forEach((el, idx) => {
    if (idx % 2 > 0) {
        str += createDivision(el);
        str += br;
    } else {
        str += createMultiply(el);
        str += space;    
    }
    });

    return str
}

module.exports = {
    generateList, 
    printList
};