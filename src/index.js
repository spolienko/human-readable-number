module.exports = function toReadable(number) {
    const arrZerotoNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrEleventoNineteen = ['ten', 'eleven', 'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    const arrTwentytoNinety = ['ten', 'twenty', 'thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let strNum = number.toString();
    let result = numberBeforeTwenty(number, arrZerotoNine, arrEleventoNineteen);
    if (number > 19 && number < 100) {
        result = arrTwentytoNinety[(Number(strNum[0]) - 1)];
        if (strNum[1] !== '0') {
            result += ' ';
          result += arrZerotoNine[Number(strNum[1])];
        }
    }
    if (number >= 100) {
        let numAfterHungred = Number(strNum.slice(1));
        result = arrZerotoNine[Number(strNum[0])];
      result += ' ';
      result += 'hundred';
      if (numAfterHungred == 0) {
        return result;
      }
      else {
        result += ' ';
      if (numAfterHungred <= 19) {
        result += numberBeforeTwenty(numAfterHungred, arrZerotoNine, arrEleventoNineteen);
        return result;
      }
      else {
        result += arrTwentytoNinety[(Number(strNum[1]) - 1)];
        if (strNum[2] !== '0') {
          result += ' ';
          result += arrZerotoNine[Number(strNum[2])];
        }
      }
      
        }
    }
    return result;
}


function numberBeforeTwenty(number, arrZerotoNine, arrEleventoNineteen) {
let result ="";
     if (number <= 9) {
       result = arrZerotoNine[number];
    }
    if (number >= 10 && number <= 19) {
        result = arrEleventoNineteen[number - 10];
    }
    return result;
}

