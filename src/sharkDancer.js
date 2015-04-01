var makeSharkDancer = function(top,left,timeBetweenSteps) {


  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.css("top", 640 + Math.round(Math.random()*800));
  this.$node.css("left", Math.round(Math.random()*2200)-300);

  this.$node.addClass("sharkDancer");

  // if(Math.floor(Math.random()*2)){
  this.$node.css("background", "url(left.gif) no-repeat");

  // } else{
  // this.$node.css("background", "url(right.gif) no-repeat");

  // }

  this.$node.css("width", "380px ");
  this.$node.css("height", "300px");
  this.$node.css("border", "none");
  this.$node.css("border-radius", "none");
  this.$node.css("background-size", "cover");




};

makeSharkDancer.prototype = Object.create(makeDancer.prototype);
makeSharkDancer.prototype.constructor = makeSharkDancer;

makeSharkDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // var r = Math.floor(Math.random()*20);

  // this.$node.css("width", r+"px ");
  // this.$node.css("height", r+"px");

  };

