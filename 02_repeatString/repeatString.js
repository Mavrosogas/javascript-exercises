const repeatString = function(word,numberOfTimes) {
    let sumString = word;
    let result = word;
    for (let i = 1 ; i < numberOfTimes ; i++ ){
        sumString = result;
        result = sumString.concat(word);
    }
     if (numberOfTimes > 0 && word){
        return result;
     } else if (numberOfTimes == 0 || word == '') {
        return "";
     } else {
        return "ERROR";
     }
};

// Do not edit below this line
module.exports = repeatString;
