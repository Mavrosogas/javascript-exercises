const ftoc = function() {
  return Math.round(((arguments[0]-32)*5/9)*10)/10;
};

const ctof = function() {
  return Math.round(((arguments[0]*9/5)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
