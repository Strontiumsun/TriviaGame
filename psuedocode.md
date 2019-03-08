Trivia Game Outline
* when the page loads, the user will see the title of the game and a start button
    this button needs to be activated with an on-click event
    -- we need more on-click events in this game than just one. I should ask how to incorporate that.
* After clicking the button, the page will load a survey form with 8 or so multiple-choice questions
    The user can click any of the choices, but they can only choose one at a time
    The buttons have a particular look to them
    -- I wonder if this is something built-in to HTML to get the buttons to look like they do in the example...
    ----- * these buttons are called Radio Buttons
            https://www.w3schools.com/tags/att_input_type_radio.asp
            Radio buttons can be placed horizontally by using {display: inline}
* the user wil have a limited amount of time to play the game. No matter if they answer all the questions, the game will hard end when the time runs out
    We will need to use a ticker for this element of the game, with the condition that if the ticker === 0, the results screen must load
    -- we did this earlier in the week
    In the demo video, the narrator suggested giving the user 120 seconds.
* if the user answers all the questions in the alloted time, they can press a button at the bottom of the page that will load the results screen.
    this results screen will replace everything inside of the questions div. 
* the results screen should include the following elements:
    - The number of questions answered
    - the number of questions answered correctly
    - the number of questions answered incorrectly
* in the demo, there was no "play again" button, so I assume that for this assignment, we don't have to worry about refreshing the page. However, I think I should ask the TA's about this to make sure

