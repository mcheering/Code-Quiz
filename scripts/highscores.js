const highScoresList = document.querySelector('#highScoresList')
const highScore = JSON.parse(localStorage.getItem('highScores')) || []
const clearScores = document.querySelector('clearScores')

highScoresList.innerHTML =
    highScore.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`
    }).join('')

function clearBoard() {
    highScoresList.remove()
    localStorage.clear()
}