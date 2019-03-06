
    var randomresult;
    var wins = 0;
    var losses = 0;
    var previous = 0;
    
    crystals = ["crystal1", "crystal2", "crystal3", "crystal4"]
    
    

// reset and start function to begin game on page load


// Crystal1

function resetAndStart()( {

    $("crystal1").empty("Crystal 1");

    randomresult = Math.floor(Math.random() * 120) + 19;

    $("result").html('Random Result: ' + randomresult);

    for(crystal1 i=0; i<4; i++) { 

        var randomnumber = Math.floor(Math.random() * 11) + 1;   
        
        console.log(randomnumber)
        
        var crystal = $("<div>");

        crystal.attr({ "class": 'crystal1',

        "data-random": randomnumber
    });

}


// Crystal2

function resetAndStart() {

     $("crystal2").empty("Crystal 2");
 
     randomresult = Math.floor(Math.random() * 120) + 19;
 
     $("result").html('Random Result: ' + randomresult);
 
     for(crystal2 i=0; i<4; i++) { 
 
         var randomnumber = Math.floor(Math.random() * 11) + 1;   
         console.log(randomnumber)
         
         var crystal = $("<div>");
 
         crystal.attr({ "class": 'crystal1',
 
         "data-random": randomnumber
     });
 
 }

//  Crystal3

function resetAndStart() {

     $("crystal3").empty("Crystal 3");
 
     randomresult = Math.floor(Math.random() * 120) + 19;
 
     $("result").html('Random Result: ' + randomresult);
 
     for(crystal3 i=0; i<4; i++) { 
 
         var randomnumber = Math.floor(Math.random() * 11) + 1;   
         console.log(randomnumber)
         
         var crystal = $("<div>");
 
         crystal.attr({ "class": 'crystal1',
 
         "data-random": randomnumber
     });
 
 }

//  Crystal4

function resetAndStart() () {

     $("crystal4").empty("Crystal 4");
 
     randomresult = Math.floor(Math.random() * 120) + 19;
 
     $("result").html('Random Result: ' + randomresult);
 
     for(crystal4 i=0; i<4; i++) { 
 
         var randomnumber = Math.floor(Math.random() * 11) + 1;   
         console.log(randomnumber)
         
         var crystal = $("<div>");
 
         crystal.attr({ "class": 'crystal1',
 
         "data-random": randomnumber
     });
 
 }

/////////////////////////////////////////////////////////

// resetAndStart();

    $("#crystal1").on('click', function () {

        var num = parseInt($(this).attr('data-random'));

        previous += num;

$("#previous").html("Total Score: " +  previous);
       

        console.log(previous);


        if(previous > randomresult){
            losses++;

            $("#losses").html("Lose: " + losses);

            previous = 0;

           

          //   resetAndStart();
           
        }
        else if(previous === randomresult){

            win++;

            $("#win").html("Win: " + win);

            previous = 0;

          //   resetAndStart();
            
        }

    });


    $("#crystal2").on('click', function () {

        var num = parseInt($(this).attr('data-random'));

        previous += num;

$("#previous").html("Total Score: " +  previous);
       

        console.log(previous);


        if(previous > randomresult){
            losses++;

            $("#losses").html("Lose: " + losses);

            previous = 0;

          //   resetAndStart();
           
        }
        else if(previous === randomresult){

            win++;

            $("#win").html("Win: " + win);

            previous = 0;

          //   resetAndStart();
            
        }

    });