$(document).ready(function () {
    // globals
    answersArray = [3, 2, 3, 4, 1, 4, 4, 3, 3];
    userChoicesArray = [];
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;

    // create reset function and use it insde reset button click event
    function reset() {
        userChoicesArray = [];
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
        $("<input>").attr("checked", false);
        $("#results").hide();  
        $("#questions-section").show();
    }
    $("#reset-button").on("click", function () {
        reset();
    })

    $("#submit-button").on("click", function () {
        for (var i = 1; i < 10; i++) {
            var userChoices = $("[name='" + i + "']:checked")
            // var userUnansweredQuestions = $("[name='" + i + "']:not(:checked)")
            // console.log(userUnansweredQuestions)
            console.log(userChoices)
            // $("[name='"+i+"']:not(:checked)") 
            if (userChoices != null) {
                userChoicesArray.push(parseInt(userChoices.val()))
                console.log(userChoicesArray)
            }
            // CANT GET UNANSWERED WORKING RIGHT NOW
            // if (userChoices === NaN) {
            //     unansweredQuestions++;
            //     userChoicesArray.push(0)
            //     console.log("incorrectAnswers=" + incorrectAnswers)
            // }
        }

        for (var i = 0; i < 9; i++) {
            if (userChoicesArray[i] === answersArray[i]) {
                correctAnswers++;
                console.log("correctAnswers= " + correctAnswers)
            }
            else if (userChoicesArray[i] !== answersArray[i]) {
                incorrectAnswers++;
                console.log("incorrectAnswers= " + incorrectAnswers)
            }
        }
        console.log(userChoicesArray)
        console.log(answersArray)

        $("#questions-section").hide();
        $("#correct").text("Answered Correctly = " + correctAnswers);   
        $("#incorrect").text("Answered Incorrectly = " + incorrectAnswers);
        // gotta come back to unanswered
        $("#unanswered").text("Unanswered = 0");
        $("#results").show();       
    })

    // for loop to attach radio buttons to the list items with different names so they can be selected once for each question
    for (var i = 1; i < 10; i++) {
        $("<input type='radio' name='" + i + "' />").prependTo('ul[class=question' + i + '] li');
    }
    // Create a class for each li to target the input correctly and assign values 1-4 for the radio buttons applied
    for (var j = 1; j < 5; j++) {
        $("." + j + " input").attr("value", j)
    }


});