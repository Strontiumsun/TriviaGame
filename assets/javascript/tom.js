var questions = [
    {
        q: 'What is Toy Story release date',
        choice1: '1990',
        choice2: '1991',
        choice3: '1990'
    },
    {
        q: 'What is Monsters Inc release date',
        choice1: '2010',
        choice2: '2000',
        choice3: '1990'
    },
    {
        q: 'What is jungle book release date',
        choice1: '2010',
        choice2: '2000',
        choice3: '1990'
    },
    {
        q: 'What is titanic release date',
        choice1: '2010',
        choice2: '2000',
        choice3: '1990'
    }
]

$('#start').on('click', function () {
    console.log('we r clicked!!')
    startScreen()
})

function startScreen() {
    $('#tom-container').empty()
    for (var i = 0; i < questions.length; i++) {
        var container = $('<div>')

        var questionTitle = $('<h1>')
        var questionChoice = $('<p>')
        questionChoice.text(questions[i].choice1)

        questionTitle.text(questions[i].q)
        container.append(questionTitle, questionChoice)
        $('#tom-container').append(container)
    }
};