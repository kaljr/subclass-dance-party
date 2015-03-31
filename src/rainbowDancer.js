var makeRainbowDancer = function(top,left,timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.oldStep = this.step;
  this.step = makeRainbowDancer.prototype.step;

};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);
makeRainbowDancer.prototype.constructor = makeRainbowDancer;

makeRainbowDancer.prototype.step = function() {
  this.oldStep();
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  this.$node.css("border", "10px solid rgb("+r+","+g+","+b+")");
};
