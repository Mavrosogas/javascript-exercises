const removeFromArray = function() {
    let args = Array.from(arguments);
    let arr = args[0];
    args.shift();
    let undisirable = args;
    let result = new Array;
    for (let i=0 ; i < undisirable.length ; i++){
        result = arr.filter(num => num !== undisirable[i]);
        arr = result;
    }
    return result;
};
module.exports = removeFromArray;
