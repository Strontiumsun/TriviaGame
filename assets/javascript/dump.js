$(document).ready(function () {

    // this function generates a set of radio buttons
    // function generateAButton() {
    //     var genQuestion = $("<form>");
    //     var genInput = $("<input>")

    //     genInput.attr("type", "radio");

    //     genInput.attr("name", "test");

    //     genInput.attr("value", "1");

    //     genQuestion.append(genInput, "Test");

    //     $("#generate").append(genQuestion);
    // }

    // but what if I want to generate multiple buttons? Here I think we need to create an array

    var dogsILove = ["Payton", "Westie", "Lucy", "Baxter"];

    // this function creates four buttons with the name of the dogs and with the value of the dogs
    // unlike in the HTML, these buttons displayed horizontally, which is what I want, but I doubt it's consistent
    function dogRadio(arr) {
        var genQuestion = $("<form>");
        for (var i = 0; i < arr.length; i++) {
            var genInput = $("<input>");
            genInput.attr("type", "radio");
            genInput.attr("name", "dog");
            genInput.attr("value", arr[i]);

            genQuestion.append(genInput, arr[i]);
        }
        $("#generate").append(genQuestion);
    }
    dogRadio(dogsILove);

    // Now I will attempt to do the same thing as the previous function, but with an object.

    // var pokeObject = {
    //     question: "Which of these Pokemon evolves with the Leaf Stone?",
    //     options: ["Weepinbell", "Leafeon", "Sunkern", "Petilil"],
    //     answer: "Weepingbell",
    // }
    // console.log(pokeObject);
    // console.log(pokeObject.options);

    // function pokeQuestion(obj) {
    //     var pokeAsk = $("<div>");
    //     var pokeOptions = $("<form>");
    //     for (var i = 0; i < pokeObject.options.length; i++) {
    //         var pokeInput = $("<input>");
    //         pokeInput.attr("type", "radio");
    //         pokeInput.attr("name", "leaf");
    //         pokeInput.attr("value", pokeObject.options[i]);

    //         pokeOptions.append(pokeInput, pokeObject.options[i]);
    //     }
    //     $("poke-ask").append(pokeObject.question);
    //     $("poke-options").append(pokeOptions);
    // }
    // pokeQuestion(pokeObject);

    // this one actually doesn't work

    // I got this from a website and I'm going to modify it.
    // it starts off as an object.
    var test = {
        arrayObject: [objectInArray = {
            item_one: "Number 1",
            item_two: "Test two",
            item_three: "Test three",
        }, "Sample Array"],
    }

    console.log(test.arrayObject);

    var pokemon = {
        firstQuestion: [firstObject = {
            question: "Which of these Pokemon evolves with the Leaf Stone?",
            options: ["Weepinbell", "Leafeon", "Sunkern", "Petilil"],
            answer: "Weepinbell",
        }, "First Question"],
    }

    // the objects inside of an array don't need names
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

    // this console log prints the question for the first button set.
    console.log(pokemon.firstQuestion[0].question);
    // this console log prints "Sunkern"
    console.log(pokemon.firstQuestion[0].options[2]);
    // this console log prints "Weepinbell" which is the answer
    console.log(pokemon.firstQuestion[0].answer);

    // now I'm going to try to put this pokemon object into my button-making function
    // i need help with this one
    function pokeQuestion(obj) {
        // var pokeAsk = $("<div>");
        var pokeOptions = $("<form>");
        for (var i = 0; i < obj.firstQuestion[i].options[i].length; i++) {
            var pokeInput = $("<input>");
            pokeInput.attr("type", "radio");
            pokeInput.attr("name", "leaf");
            pokeInput.attr("value", obj.firstQuestion[i].options[i]);

            pokeOptions.append(pokeInput, obj.firstQuestion[i].options[i]);

        }
        // pokeAsk.append(obj.firstQuestion[i].question);
        // $("#poke-ask").append(pokeAsk);
        $("#poke-options").append(pokeOptions);
    }
    // pokeQuestion(pokemon);

    // this function loops through an array of objects and then loops through an array in an object
    // array (top) object (middle) (array) (bottom)
    // this function makes the questions and answer choices with radio buttons
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
    testWithLuis();

    // let's make a function that compares the values 
    // we want to check the answers when either the time runs out or when the done button is clicked
    // we need to know what the value of each choice is
    var correct = 0;
    var incorrect = 0;

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

    });

    // this function makes a button that you click when you answer all the question
    function makeCheckButton() {
        var buttonCheck = $("<button>")
        buttonCheck.text("Click me!");
        $("#check-button").append(buttonCheck);
    }
    makeCheckButton();

    // this listens for when you click the Check Button and logs the # you got right and wrong
    $("#check-button").on("click", function () {
        console.log("This is # correct: ", correct);
        console.log("This is # incorrect: ", incorrect);
    });

    // in the meantime, I want to create a function that correctly places the meat of the question
    function provideQuestion(obj) {
        var pokeAsk = $("<div>");
        pokeAsk.append(obj.firstQuestion[0].question)
        $("#poke-ask").append(pokeAsk);
    }
    // yes this correctly puts the question onto the page
    provideQuestion(pokemon);

    // This function makes a button that has the text of "Here's a button!"
    function makeAButton() {
        var button = $("<button>")
        button.text("Here's a button!");
        $("#put-button-here").append(button);
    }
    makeAButton();

    // this function makes the button clickable
    // the function creates a second button when the first button is clicked
    $("#put-button-here").on("click", function () {
        console.log("this button clicks!");
        makeSecondButton();
    })

    // with this function, I will create a second button 
    // the second button replaces the first button, but I do not think this is the right solution
    function makeSecondButton() {
        $("#put-button-here").empty();
        var button2 = $("<button>");
        button2.text("This button appeared!");
        button2.attr("id", "second-button");
        button2.attr("value", "the second button");
        $("#put-button-here").append(button2);
        console.log("here is... ", button2.val());
    }
    // how can I make it so pressing the second button will do something?

})