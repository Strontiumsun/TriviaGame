$(document).ready(function () {

    // this makes the start button disappear when you click it
    $("#start-button").on("click", function () {
        $("#start-container").empty();
        $("#countdown-here").prepend("Timer: ");
        $("#countdown").append(120);
        timeOut();
        testWithLuis();
        makeCheckButton();
        $("input[type='radio']").click(function () {

            var radioName = $(this).attr("name");
            var radioData = $(this).attr("data-answer");
            var radioValue = $("input[name='" + radioName + "']:checked").val();

            console.log(radioName);
            console.log(radioValue);
            console.log(radioData);


            if (radioValue === radioData) {
                correct++;
                console.log("this is correct: ", correct);
                // alert("Your are a - " + radioValue);
            }
            else {
                incorrect++;
                console.log("this is incorrect: ", incorrect);
            }
            console.log("This is # correct: ", correct);
            console.log("This is # incorrect: ", incorrect);
        });
    });


    var exampleLuis = [
        {
            name: "Luis",
            color: "green",
            thing: ["Cheese", "Pepperoni", "Sausage", "Veggie"],
            favThing: "Cheese",
        },
        {
            name: "Izzy",
            color: "red",
            thing: ["Coke", "Sprite", "Fanta", "Root Beer"],
            favThing: "Coke",
        },
    ]

    function testWithLuis() {

        var luisP = $("<form>");
        for (var i = 0; i < exampleLuis.length; i++) {
            var luisQ = $("<div>");
            console.log(exampleLuis[i]);
            luisQ.html(exampleLuis[i].name);
            luisP.append(luisQ);

            for (var j = 0; j < exampleLuis[i].thing.length; j++) {
                console.log(exampleLuis[i].thing[j]);
                var exampleInput = $("<input>");
                exampleInput.attr("type", "radio");
                exampleInput.attr("name", exampleLuis[i].color);
                exampleInput.attr("value", exampleLuis[i].thing[j]);
                exampleInput.attr("data-answer", exampleLuis[i].favThing);

                luisP.append(exampleInput);
                luisP.append(exampleLuis[i].thing[j]);
            }
        }
        $("#put-luis-here").append(luisP);
    }


    // let's make a function that compares the values 
    // we want to check the answers when either the time runs out or when the done button is clicked
    // we need to know what the value of each choice is
    var correct = 0;
    var incorrect = 0;

    // this function grabs the value of the chosen button and compares it to the data-answer
    // https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php


    // this function makes a button that you click when you answer all the question
    function makeCheckButton() {
        var buttonCheck = $("<button>")
        buttonCheck.text("Click me!");
        $("#check-button").append(buttonCheck);
    }


    // this listens for when you click the Check Button and logs the # you got right and wrong
    // put correct and incorrect in separate divs
    $("#check-button").on("click", function () {
        gameOver();
        clearTimeout(ticker);
    });

    function gameOver() {
        $("#question-container").empty();
        $("#results").append("This is # correct: ", correct);
        $("#results").append("This is # incorrect: ", incorrect);
        $("#results").append("Total Answered: ", correct + incorrect);
    }

    var ticker;
    var countDown = 120;


    function timeOut() {
        ticker = setInterval(function () {
            console.log('we r ticking!!!!!~')
            countDown--
            if (countDown < 0) {
                clearTimeout(ticker);
                gameOver();
            } else {
                $('#countdown').html(countDown)
            }
        }, 1000);
    }


});