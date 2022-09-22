var color = ["red","blue","green","yellow"];
var pattern = [];
var userPattern = [];
var start = false;
var level = 0;

// keypress to start the game //
$(document).keypress(function(){
    if(!start){
        $("#level-title").text("Level "+level);
        nextSequence();
        start = true;
    }
})




$(".btn").click(function(){
    var userColor = $(this).attr("id");
    userPattern.push(userColor);
    playSound(userColor);
    buttonAnimation(userColor);
    check(userPattern.length - 1);
});

// pattern checker //

function check(value){
    if(pattern[value]===userPattern[value]){
        if(pattern.length === userPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game over, Press any key to Restart.");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startOver();
    }
}

// Start Over Function //

function startOver(){
    level = 0;
    pattern = [];
    start = false;

}

// next Sequence function //
function nextSequence(){
    userPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomColor = color[randomNumber];
    pattern.push(randomColor);
    playSound(randomColor);
    buttonAnimation(randomColor);
}

// Sound function //
function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

//  Button Animation function //
function buttonAnimation(name){
    activeButton = $("."+name);
    activeButton.addClass("pressed");
    setTimeout(function(){
        activeButton.removeClass("pressed"),100;
    });
}




