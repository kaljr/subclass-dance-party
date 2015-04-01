var makeRainbowDancer = function(top,left,timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);


};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);
makeRainbowDancer.prototype.constructor = makeRainbowDancer;

makeRainbowDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  this.$node.css("border", "10px solid rgb("+r+","+g+","+b+")");
};
