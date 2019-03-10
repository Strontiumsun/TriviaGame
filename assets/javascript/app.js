$(document).ready(function () {

    // this makes the start button disappear when you click it
    $("#start-button").on("click", function () {
        $("#start-container").empty();
        $("#countdown-here").prepend("Timer: ");
        $("#countdown").append(120);
        timeOut();
        testWithLuis();
        makeCheckButton();
        // this function grabs the value of the chosen button and compares it to the data-answer
        // https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php
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

    // name is "what the question is"
    // color is the category to make sure they're all different
    // thing contains the answer choices
    // fav thing is the correct answer
    var exampleLuis = [
        {
            name: "What type is Pikachu, the mascot of the Pokemon series?",
            color: "green",
            thing: ["Fire", "Grass", "Electric", "Water"],
            favThing: "Electric",
        },
        {
            name: "Which of these elemental stones is NOT used to evolve Eevee?",
            color: "red",
            thing: ["Fire Stone", "Thunderstone", "Leaf Stone", "Water Stone"],
            favThing: "Leaf Stone",
        },
        {
            name: "How many gym badges does a trainer need to challenge the Elite Four?",
            color: "blue",
            thing: ["Five", "Ten", "Eight", "Twelve"],
            favThing: "Eight",
        },
        {
            name: "What's the name of the Pokeball that will catch a Pokemon with 100% accuracy?",
            color: "yellow",
            thing: ["Ultra Ball", "Super Ball", "Ultimate Ball", "Master Ball"],
            favThing: "Master Ball",
        },
        {
            name: "What's the name of the beneficial virus that when contracted by your Pokemon increases the amount of experience earned per battle?",
            color: "orange",
            thing: ["Pokerus", "Pokepox", "Pokeplague", "Pokedemic"],
            favThing: "Pokerus",
        },
        {
            name: "Pokemon Crystal is to Pokemon Gold and Silver as Pokemon ____ is to Pokemon Ruby and Sapphire",
            color: "purple",
            thing: ["Pearl", "Emerald", "Diamond", "Beryl"],
            favThing: "Emerald",
        },
        {
            name: "Which group of Pokemon share the trait of having their base stat total (BST) all equal prime numbers?",
            color: "teal",
            thing: ["Mythical Pokemon", "Tao Trio", "Ultra Beasts", "Mega Evolutions"],
            favThing: "Ultra Beasts",
        },
        {
            name: "Electric-type Pokemon have only one type weakness. Which type is it?",
            color: "pink",
            thing: ["Ground", "Rock", "Water", "Steel"],
            favThing: "Ground",
        },

    ]

    var luisFind = $("#find-questions");
    function testWithLuis() {

        var luisP = $("<form>");
        for (var i = 0; i < exampleLuis.length; i++) {
            var luisQ = $("<div>");
            // console.log(exampleLuis[i]);
            luisQ.addClass("a-spacer");
            luisQ.html(exampleLuis[i].name);
            luisP.append(luisQ);

            for (var j = 0; j < exampleLuis[i].thing.length; j++) {
                console.log(exampleLuis[i].thing[j]);
                var exampleInput = $("<input>");
                exampleInput.attr("type", "radio");
                exampleInput.attr("name", exampleLuis[i].color);
                exampleInput.attr("value", exampleLuis[i].thing[j]);
                exampleInput.attr("data-answer", exampleLuis[i].favThing);
                exampleInput.addClass("q-spacer");


                luisP.append(exampleInput);
                luisP.append(exampleLuis[i].thing[j]);
            }
        }
        $("#put-luis-here").append(luisP);
    }


    var correct = 0;
    var incorrect = 0;


    // this function makes a button that you click when you answer all the question
    function makeCheckButton() {
        var buttonCheck = $("<button>")
        buttonCheck.addClass("btn btn-info");
        buttonCheck.text("Check my answers!");
        $("#check-button").append(buttonCheck);
    }


    // this listens for when you click the Check Button and logs the # you got right and wrong
    $("#check-button").on("click", function () {
        gameOver();
        clearTimeout(ticker);
    });

    function gameOver() {
        luisFind.empty();
        var correctHere = $("<div>")
        var incorrectHere = $("<div>")
        var answeredHere = $("<div>")

        correctHere.append("This is # correct: ", correct);
        incorrectHere.append("This is # incorrect: ", incorrect);
        answeredHere.append("Total Answered: ", correct + incorrect);
        $("#results").append(correctHere);
        $("#results").append(incorrectHere);
        $("#results").append(answeredHere);
    }

    // here's the function for the timer
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