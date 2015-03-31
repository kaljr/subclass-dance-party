var makeSexyDancer = function(top,left,timeBetweenSteps) {


  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("sexyDancer");

  this.$node.css("background-image", "url(PBJtime.gif)");
  this.$node.css("width", "300px ");
  this.$node.css("height", "400px");
  this.$node.css("border", "none");
  this.$node.css("border-radius", "none");

  this.oldStep = this.step;
  this.step = makeSexyDancer.prototype.step;



};

makeSexyDancer.prototype = Object.create(makeDancer.prototype);
makeSexyDancer.prototype.constructor = makeSexyDancer;

makeSexyDancer.prototype.step = function() {
  this.oldStep();
  // var r = Math.floor(Math.random()*20);

  // this.$node.css("width", r+"px ");
  // this.$node.css("height", r+"px");

  };

