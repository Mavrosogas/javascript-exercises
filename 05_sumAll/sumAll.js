const sumAll = function(bottomNumber,topNumber) {
    let sum=0;
    if (bottomNumber>topNumber){
        let tmp = topNumber;
        topNumber = bottomNumber;
        bottomNumber = tmp;
    }
    if ((bottomNumber <= 0 || typeof bottomNumber != "number") || (topNumber <= 0 || typeof topNumber != "number")){
        return 'ERROR';
    }
    for (i=bottomNumber; i<=topNumber ; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
