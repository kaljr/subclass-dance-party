$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */


    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    console.dir(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  $(".sexyDancer").on("click", function() {
    console.dir(this);
    $(this).css("background","url(sandwich-wings2.png) no-repeat");
    $(this).animate({top:"-500px"},3000);
    setTimeout($().remove.bind($(this)),3500);
  });


  $(".sharkDancer").on("click", function() {
    console.dir(this);
    $(this).css("background","url(rocket.gif) no-repeat");
    $(this).css("background-size","cover");
    $(this).addClass("rotate");
    $(this).animate({"top":"-500px","left":"0px"},2000);
    setTimeout($().remove.bind($(this)),3500);
  });
  });

  $("#lineUp").on("click", function(e) {

    var x = 0;
    for(var i=0;i<window.dancers.length;i++) {
      var numberOfPx = window.dancers[i].$node.css("width");
      numberOfPx = +numberOfPx.slice(0, numberOfPx.length-2);

      window.dancers[i].lineUp(x);
      x += (numberOfPx-150);
    }

  });

  $("#wavify").on("click", function(e) {
    console.log("here");
    var x = 0;
    var $dryingMan = $('<span class="dryingMan"></span>');
    $dryingMan.css({top:"800px",
                    left:"-600px",
                    'background':"url(drying.gif) no-repeat",
                    width: "600px",
                    height: "600px"});
    $('body').append($dryingMan);

    $dryingMan.animate({left:"1500px"},1000);

  });

  $("#play").on("click", function(e) {
  var $guy = $('<span class="guy"></span>');
  var $bomb = $('<span class="bomb"></span>');
    $bomb.css({top:"1010px",
                left: "960px",
                'background': "url(bomb.png) no-repeat",
                'background-size': "cover",
                width: "200px",
                height: "260px"});
    $('body').append($bomb);
    $guy.css({top:"750px",
                    left:"510px",
                    'background': "url(tug.png) no-repeat",
                    'background-size': "cover",
                    width: "1070px",
                    height: "520px"});
    $('body').append($guy);

  $("body").keypress(function(e){
    console.log(e);

      var $guy = $(".guy");
      var position = $guy.css("left");
      position = +position.slice(0,position.length-2);
    if(e.which === 97) {
      $(".guy").css("left", "" + (position-10) +"px");
      console.log(position);
    } else if(e.which === 106 ) {
      $(".guy").css("left", "" + (position+10) +"px");
    }

//left blow 740

//righ tblow 320
if( position === 740 || position === 320 ) {
 var $explode = $('<span class="explode"></span>');
    $explode.css({top:"700px",
                left: "850px",
                'background': "url(explode.gif) no-repeat",
                'background-size': "cover",
                width: "500px",
                height: "700px"});
    $('body').append($explode);

    setTimeout(function() {
      $(".guy").remove();
      $(".explode").remove();
      $(".bomb").remove();
    }, 600);
  }


  });

});//end of play



  $("body").on("click", function(e) {
    //825 left
    //558 right
    console.log(e.clientX, e.clientY);
  });
    var counter = 0;

  $("#type").on("click",function(e) {
        if($('.stopwatch')) {
          $('.stopwatch').remove();
          counter = 0;
          $('.answer').remove();
        }

    $('body').append('<div class="stopwatch"></div>');

    //start timer


    var stopwatch = new Stopwatch(document.getElementsByClassName("stopwatch")[0]);
    stopwatch.start();


    var answer = "supercalifragilisticexpialidocious".split("");
    var $word = $('<span class="answer"></span>');
     $word.css({top:"700px",
                    left: "600px",
                    width: "500px",
                    height: "700px",
                    'font-size': "100px"});
         $('body').append($word);

         console.dir(answer);
    $('body').keypress(function(e){
      if(String.fromCharCode(e.which) === answer[counter]) {
        counter++;

        $word.html(answer.slice(0,counter));
        //if win (stop)
        if(counter >=  answer.length) {
          stopwatch.stop();
        }


      }
      console.log(String.fromCharCode(e.which));
    });


  });




});// outer

