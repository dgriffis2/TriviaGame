


$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});
var count = 0
var correct = 0
var incorrect = 0
var noAnswer = 0
var time = 30
var timer =""
var question1 ={question: "What movie won best picture in 1994?",
answers:["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "Braveheart","#a1","#a2","#a3","#a4"],
correctAnswer: ["Forrest Gump", "#a1","#a2","#a3","#a4"]}

var question2 ={question: "What actor stared in back to back best picture winning films in 2000 and 2001?",
answers:["Brad Pitt", "Leonardo Dicaprio", "Russell Crowe","Tom Cruise", "#b1","#b2","#b3","#b4"],
correctAnswer: ["Russell Crowe", "#b3", "#b1", "#b2", "#b4"]}

var question3 ={question: "What mostly black and white film won best picture in 2011?",
answers:["Midnight in Paris", "The Artist", "Amour","A Serious Man", "#c1","#c2","#c3","#c4"],
correctAnswer: ["The Artist", "#c2", "#c1", "#c3", "#c4"]}

var question4 ={question: "What series concluding film won best picture?",
answers:["Godfather Part 3", "The Lord of the Rings: Return of the King", "Toy Story 3","Batman: The Dark Knight Rises", "#d1","#d2","#d3","#d4"],
correctAnswer: ["The Lord of the Rings: Return of the King", "#d2", "#d1", "#d3", "#d4"]}

var question5 ={question: "What mob movie did not win best picture?",
answers:["Godfather Part 1", "The Departed", "Godfather Part 2", "Goodfellas","#e1","#e2","#e3","#e4"],
correctAnswer: ["Goodfellas", "#e4","#e1","#e2","#e3"]}

var results ={question: "Results:", answers:["Correct: " + correct, "Incorrect: " + incorrect, "Did not Answer: " + noAnswer,"thanks for playing"]}
var questions = [question1,question2,question3,question4,question5]
var intervalId;

$("#reset").hide()
$("#right-pic").hide()
$("#wrong-pic").hide()
$("#noanswer-pic").hide()
function start(){
    var count =0
    display(questions[0])
    timer=setInterval(countDown,1000)
    //console.log(questions[count])
    $("#start").hide()
}

$("#start").click(function(){
    start()
})

// $("#reset").click(function(){
//     reset()
// })
function countDown(){
    if(time>0 && count<5){
    time--
    $("#timer").text(time)
    }else if(count===5){
        $("#right-wrong").text("You are correct the answer is: " + questions[count-1].correctAnswer[0]).hide()
        $("#correct").text("Correct: " + correct).show()
        $("#incorrect").text("Incorrect: " + incorrect).show()
        $("#noAnswer").text("Did not Answer: " + noAnswer)
        $("#last-answer").text("Correct answer is: " + questions[count-1].correctAnswer[0])
    }
    else{
        time = 30
        console.log("time " + time)
        clearInterval(timer)
        next()
        $("#timer").text(time)
        noAnswer++
        
    }    
}


function next(){
    $("#question").text(questions[count].question).hide()
    $(questions[count].answers[4]).text(questions[count].answers[0]).hide()
    $(questions[count].answers[5]).text(questions[count].answers[1]).hide()
    $(questions[count].answers[6]).text(questions[count].answers[2]).hide()
    $(questions[count].answers[7]).text(questions[count].answers[3]).hide()
    count++
    intervalId = setInterval(hello, 5000)
    $("#right-wrong").text("You are out of time the answer is: " + questions[count-1].correctAnswer[0]).show()
    $("#noanswer-pic").show()
}



function resultsCall(){
    $("#reset").show()
    // $("#question").text(object.question).hide()
    // $("#a1").text(object.answers[0]).hide()
    // $("#a2").text(object.answers[1]).hide()
    // $("#a3").text(object.answers[2]).hide()
    // $("#a4").text(object.answers[3]).hide() 
    $("#a1").text("Correct: " )
    $("#a2").text("Incorrect: " )
    $("#a3").text("Did not Answer: ")

}


function display(object){
    correctClick(object)
    $("#question").text(object.question)
    $(object.answers[4]).text(object.answers[0])
    $(object.answers[5]).text(object.answers[1])
    $(object.answers[6]).text(object.answers[2])
    $(object.answers[7]).text(object.answers[3])
}

function hide(object){
    $("#question").text(object.question).hide()
    $(object.answers[4]).text(object.answers[0]).hide()
    $(object.answers[5]).text(object.answers[1]).hide()
    $(object.answers[6]).text(object.answers[2]).hide()
    $(object.answers[7]).text(object.answers[3]).hide()
}

function show(object){
    $("#question").text(object.question).show()
    $(object.answers[4]).text(object.answers[0]).show()
    $(object.answers[5]).text(object.answers[1]).show()
    $(object.answers[6]).text(object.answers[2]).show()
    $(object.answers[7]).text(object.answers[3]).show()
}


function wrong (object){
    $("#right-wrong").text("Sorry that is incorrect.  The correct answer is: " + object.correctAnswer[0]).show()
    $("#wrong-pic").show()
} 

function right(object){
    $("#right-wrong").text("You are correct the answer is: " + object.correctAnswer[0]).show()
    $("#right-pic").show()
}

function hello(){
    timer=setInterval(countDown,1000)
    //clearInterval(timer)
    clearInterval(intervalId)
    show(questions[count])
    display(questions[count])
    console.log(questions[count])
    $("#right-wrong").text("You are correct the answer is: " + questions[count].correctAnswer[0]).hide()
    $("#right-pic").hide()
    $("#wrong-pic").hide()
    $("#noanswer-pic").hide()

}


// function reset(){
//    count =0
//    correct=0
//    incorrect=0
//    show(questions[count])
//    display(questions[count])
//    $("#correct").text("Correct: " + correct).hide()
//    $("#incorrect").text("Incorrect: " + incorrect).hide()
//    $("#start").hide()
//   $("#reset").hide()
//   $("#right-wrong").hide()
//   console.log("Reset count: " + count)
// }
//correctClick1(questions[0])

function correctClick(object){


$(object.correctAnswer[1]).click(function(){
    //timer=setInterval(countDown,1000)
    clearInterval(timer)
    time =30
    hide(object)
    right(object)
    count++
    correct++
    console.log("on click: " + count)
    if(count<5){
    intervalId = setInterval(hello, 5000)
    }else {clearInterval(intervalId)
        $("#right-wrong").text("You are correct the answer is: " + questions[count-1].correctAnswer[0]).hide()
        $("#correct").text("Correct: " + correct).show()
        $("#incorrect").text("Incorrect: " + incorrect).show()
        $("#right-pic").hide()
        $("#wrong-pic").hide()
        $("#noanswer-pic").hide()
        $("#noAnswer").text("Did not Answer: " + noAnswer)
        $("#last-answer").text("Correct answer is: " + questions[count-1].correctAnswer[0])
        //$("#reset").show()
        console.log("Count " + count)

        }

})

$(object.correctAnswer[2]).click(function(){
    //timer=setInterval(countDown,1000)
    clearInterval(timer)
    time =30
    hide(object)
    console.log("Time: " + time)
    wrong(object)
    count++
    incorrect++
    console.log("on click: " + count)
    if(count<5){
    intervalId = setInterval(hello, 5000)
    }else {clearInterval(intervalId)
        $("#right-wrong").text("You are incorrect the answer is: " + questions[count-1].correctAnswer[0]).hide()
        $("#correct").text("Correct: " + correct).show()
        $("#incorrect").text("Incorrect: " + incorrect).show()
        $("#right-pic").hide()
        $("#wrong-pic").hide()
        $("#noanswer-pic").hide()
        $("#noAnswer").text("Did not Answer: " + noAnswer)
        $("#last-answer").text("Correct answer is: " + questions[count-1].correctAnswer[0])
        //$("#reset").show()
        console.log("Count " + count)

        }

})

$(object.correctAnswer[3]).click(function(){
    //timer=setInterval(countDown,1000)
    clearInterval(timer)
    time =30
    hide(object)
    wrong(object)
    count++
    incorrect++
    console.log("on click: " + count)
    if(count<5){
    intervalId = setInterval(hello, 5000)
    }else {clearInterval(intervalId)
        $("#right-wrong").text("You are incorrect the answer is: " + questions[count-1].correctAnswer[0]).hide()
        $("#correct").text("Correct: " + correct).show()
        $("#incorrect").text("Incorrect: " + incorrect).show()
        $("#right-pic").hide()
        $("#wrong-pic").hide()
        $("#noanswer-pic").hide()
        $("#noAnswer").text("Did not Answer: " + noAnswer)
        $("#last-answer").text("Correct answer is: " + questions[count-1].correctAnswer[0])
        //$("#reset").show()
        console.log("Count " + count)

        }

})

$(object.correctAnswer[4]).click(function(){
    //timer=setInterval(countDown,1000)
    clearInterval(timer)
    time =30
    hide(object)
    wrong(object)
    count++
    incorrect++
    console.log("on click: " + count)
    if(count<5){
    intervalId = setInterval(hello, 5000)
    }else {clearInterval(intervalId)
        $("#right-wrong").text("You are incorrect the answer is: " + questions[count-1].correctAnswer[0]).hide()
        $("#correct").text("Correct: " + correct).show()
        $("#incorrect").text("Incorrect: " + incorrect).show()
        $("#right-pic").hide()
        $("#wrong-pic").hide()
        $("#noanswer-pic").hide()
        $("#noAnswer").text("Did not Answer: " + noAnswer)
        $("#last-answer").text("Correct answer is: " + questions[count-1].correctAnswer[0])
        //$("#reset").show()
        console.log("Count " + count)

        }

})


}


//correctClick2(questions[1])


















// function reset(){
    // $("#reset").click(function(){
    //     reset()
    // })
//      var count =0
//     correct=0
//     incorrect=0
//     show(questions[count])
//     display(questions[count])
//     $("#correct").text("Correct: " + correct).hide()
//     $("#incorrect").text("Incorrect: " + incorrect).hide()
//     $("#start").hide()
//    $("#reset").hide()
//    console.log("Reset count: " + count)
// }
//rightWrong(question1)









