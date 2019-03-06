
    var randomresult;
    var wins = 0;
    var losses = 0;
    var previous = 0;
    var Crystal1
    var crystal2
    var crystal3
    var crystal4
    
    
    

// reset and start function to begin game on page load


// Crystal1

reset(crystal1) () {

    $("#crystal1").empty("Crystal 1");

    randomresult = Math.floor(Math.random() * 120) + 19;

    $("result").html('Random Result: ' + randomresult);

}

reset (crystal1 i=0; i<4; i++) { 

        var randomnumber = Math.floor(Math.random() * 11) + 1;   
        
        console.log(randomnumber)
        
        var crystal = $();

        crystal.attr({ "class": 'crystal1',

        "data-random": randomnumber
    });

}

resetAndStart();

    $("#crystal1").click(function () {

        var num = parseInt($(this).attr('data-random'));

        previous += num;

    

$("#previous").html("Total Score: " +  previous);
       

        console.log(previous);


        if(previous > randomresult){
            losses++;

            $("#losses").html("Lose: " + losses);

            previous = 0;

            reset();
           
        }
        else if(previous === randomresult){

            win++;

            $("#win").html("Win: " + win);

            previous = 0;

            reset();
            
        }

    });

    reset();

    $("#crystal1").click(function () {

        var num = parseInt($(this).attr('data-random'));

        previous += num;

    

$("#previous").html("Total Score: " +  previous);
       

        console.log(previous);


        if(previous > randomresult){
            losses++;

            $(".losses").html (Lose, " "  + losses);

            previous = 0;

            reset();
           
        }
        else if(previous === randomresult){

            win++;

            $(".win").html (Win, " "  + win);

            previous = 0;

            reset();
            
        }

    });