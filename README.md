# Coding Quiz Project

### About

This project uses html, css, and javascript to create a quiz that is responsive to user input and device type. I relied on javascript that edits the DOM based on which page and what the user clicks on to make it more responsive. When you arrive at the site you are greeted to a home page where it describes what the quiz is, and how you are scored. You can start the quiz or go check your high scores from previous attemtps. It will only record your attempts, because it utilizes local storage. The home page looks like the image below.

<img src="images/home.png" stye="width: 350px;">

If you click start, you will see a new page with a progress bar that tells you which question you are on, the time left, and your score up until that point. It will look like the image below.

<img src="Images/quiz.png" style="width: 350px;">

When select an answer, it will change the color of the purple boxes to green if correct, and red if incorrect.

#### Correct Answer

<img src="images/correctanswer.png" style="width: 350px">

#### Incorrect Answer

<img src="Images/incorrectAnswer.png" style="width:350px;">

If the answer is correct, you will recived 100 points for the correct answer plus a factor of the time remaining added to your score. Therfore, the faster you answer a question correctly, the more points you will receive for that question. If incorrect, you receive no points and you lose 50 seconds of time from the remaining time as a penalty for asnwering the question incorrectly.

### End of Quiz

At the end of the quiz the screen will change where you can see your final score and have the option of entering your name and saving your score to the leaderboard. If you do not have any text in the input where you would type your name, the save button will not work. That is by design to prevent a value of null from being entered with a score on the leaderboard.

<img src="Images/savescore.png" style="width: 350px;">

If you save your score, you can view your score on the leaderboard. It is set to only show the top 5 scores.

<img src="Images/leaderboard.png" style="width:350px">

If you want to clear the leaderboard, click on the clear button. This will clear out all scores from local storage.

<img src="Images/clearscores.png" style="width:350px">

If you like this project, you can easily modify it by adding more questions of your own to the questions object in quiz.js. You will need to change the MAX_QUESTIONS variable though to match the number of questions you have. Then it should work with your questions. The progress bar will also still work if you add more questions and will change based on the number of questions you have.
