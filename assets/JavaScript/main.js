$(document).ready(function () {
    // globals
    answersArray = [3, 2, 3, 3, 1, 4, 4, 3, 3];
    userChoiceArray = [1];
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;

    $("#submit-button").on("click", function () {
        for (var i = 1; i < 10; i++) {
             var userChoices = $("[name='" + i + "']:checked")
        }
        if (userChoices != null) {
            userChoiceArray.push(userChoices.val())
            console.log(userChoices.val())
          }
        
          console.log(userChoiceArray)
    })




    // for loop to attach radio buttons to the list items with different names so they can be selected correctly
    for (var i = 1; i < 10; i++) {
        $("<input type='radio' name='" + i + "' />").prependTo('ul[class=question' + i + '] li');
        for (var j = 1; j < 5; j++) {
            $("li input").attr("value", j)
        }
    }
    // need two for loops in order to apply the right value attribute to each radio button for answer checking(cant without applying 4 to all with this method)
    // for (var i = 1; i < 10; i++) {
        
    //     for (var j = 1; j < 5; j++) {
    //         $('ul[class=question' + i + '] li input').attr("value", j)
    //      }
    // }

});