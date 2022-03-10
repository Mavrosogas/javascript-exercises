const reverseString = function(inputString) {
    const tmpArr = inputString.split('');
    let revArr = new Array();
    for (let i = 0 ; i <= tmpArr.length ; i++){
        revArr[i] = tmpArr[tmpArr.length - i];
    }
    let resultString = revArr.join('');
    return resultString;
};



// Do not edit below this line
module.exports = reverseString;
