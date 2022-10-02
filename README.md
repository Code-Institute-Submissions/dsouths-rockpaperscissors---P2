<h1> Rock Paper Scissors</h1>

<b>[Deployed Website](https://dsouths.github.io/rockpaperscissors---P2/)</b>

<b>[Github](https://github.com/dsouths/rockpaperscissors---P2)</b>

![am i responsive](https://user-images.githubusercontent.com/105642587/193278077-65f4b9e9-dce0-4cbb-8adc-c8f1f2917d53.jpg)

<!--ts-->
   * [Intro](#intro)
   * [UX](#ux)
   * [Fonts](#fonts)
   * [Icons](#icons)
   * [Design](#design)
   * [Features](#features)
   * [Validation Checks](#validation-checks)
   * [Bugs](#bugs)
   * [Technologies Used](#technologies-used)
<!--te-->


<h2>Intro</h2>
I have created a Rock Paper Scissors game which utilizes HTML & CSS, with the main purpose of the project to showcase the skills I have learned in the latest Code Institute module, Javascript. The game pits the user/player against the computer in a game of chance. The site's goal is to create a challenging game for the player while entertaining them online. 

<h3>The Rules:</h3>

The user chooses one of three options (Rock, Paper or Scissors) & this choice is compared against the computers choice. 

* <b>Rock</b> beats <b>Scissors</b>
* <b>Paper</b> beats <b>Rock</b>
* <b>Scissors</b> beats <b>Paper</b>

The user/computer score increments by 1 each time they win & does not increment if they draw or lose a game.  The first to 10 points wins! 

<h2>Features</h2>
I plan to include the following features:

  * Pattern matching functionality
  * A limited number of tries before the game is over
  * A score tracking system
  * The ability to play against the computer
 
<h2>UX</h2>
 
I plan to incorporate the following into the user experience:

 * a game that is easy to understand, intuative & entertaining for the user
 * pit the user against the computer
 * make the game visually appealing to the user with complimentary colors, icons/emojis & call to actions
 * the game should work without any bugs or faults  

<h2>Fonts</h2>

I used [<b>Google Fonts</b>](https://fonts.google.com/) as it has a vast amount of modern & contemporary fonts. The two fonts I have used are Hind Siligur & Rubik, I felt these fonts complimented each other, where clean & modern & easily readible for the user. 

<h2>Icons</h2>

I have used a favicon from [Font Awesome](https://fontawesome.com/)

I wanted to make the website visually appealing to the user so decided to use emojis for the selection buttons; 

* Rock ✊  
* Paper ✋  
* Scissors ✌️

I used a smiling emoji (😁) when the user wins & a crying emoji (😭) in the result description when the user loses, to add to the visual experience of the user. These were sourced from [GetEmoji](https://getemoji.com/)   

<h2>Design</h2>

I used [Coolors](https://coolors.co/) to get a complimentary color palette to add to the visual experience of the user. I used the following:

* #05445E - very dark blue
* #FFD700 - gold
* #F0F8FF - alice blue

<h2>Features</h2>

<h3>Main Screen</h3>

![main screen](https://user-images.githubusercontent.com/105642587/192106432-870cee2b-f9a5-408b-a1f1-b7e3cde38b7e.jpg)

<h3>Header</h3>

![header](https://user-images.githubusercontent.com/105642587/192106474-81a199af-baf3-4d3c-8114-fb017f8ed681.jpg)


<h3>User Choice Buttons</h3>

![UserChoice buttons](https://user-images.githubusercontent.com/105642587/192106485-acf343fb-6b8a-48e4-b4cb-68a8daa08537.jpg)


<h3>Scoreboard</h3>

![scoreboard](https://user-images.githubusercontent.com/105642587/192106479-73bdb851-1a75-4aac-89b5-ea0ca22c4e2a.jpg)

<h3>Results description</h3>

![results description - draw](https://user-images.githubusercontent.com/105642587/192106501-406abc54-4495-4453-a85c-1087a60f288c.jpg)
![results description - lose](https://user-images.githubusercontent.com/105642587/192106502-7a309ddd-4e3a-481a-a813-21822246b5d0.jpg)
![results description - win](https://user-images.githubusercontent.com/105642587/192106504-f95ff3f4-4990-41c2-b443-65f66f64a39c.jpg)

<h3>Game Result Alerts</h3>

![you won alert](https://user-images.githubusercontent.com/105642587/193286598-bc3815bc-dbd4-4648-b52c-7e40882368fc.jpg)

![you LOST alert](https://user-images.githubusercontent.com/105642587/193286608-eb7da41d-532f-43bc-9882-7fe9ed8ce4a8.jpg)


<h2>Validation Checks</h2>

<b>W3c Html Validation service</b>

![image](https://user-images.githubusercontent.com/105642587/192105445-f46818ec-5660-46e0-84f2-4c7de8c63a50.png)

<b>W3c Css Validation service</b>

![image](https://user-images.githubusercontent.com/105642587/192105537-959ccdb3-bed7-4c3f-b962-b116b2c908f2.png)

<b>JSHint</b>

![jshint validation](https://user-images.githubusercontent.com/105642587/193472749-72373d9c-d616-4178-82d9-5eea7672eac2.jpg)

<b>Wev Dev Tools Chrome</b>

I used web dev tools in chrome to access the quality & accessibility of the webpage. It gave me insight into how the RockPaperScissors website performed & scored highly in Performance, Accessibility, Best Practices & SEO for both desktop & mobile devices

<b>Mobile Devices</b>

![lighthouse 1 ](https://user-images.githubusercontent.com/105642587/193277827-ce4090be-d69e-435d-b242-2fe1f1e3eb22.jpg)

<b>Desktop devices</b>

![lighthouse desktop](https://user-images.githubusercontent.com/105642587/193277836-6eae1716-2487-4566-9383-d801ce09cb2e.jpg)


<h2>Bugs</h2>

<b>Deployed website would not function - </b> Issue with relative & absolute file path for javascript file "app.js", would work with gitpod website preview using:
<script src="assets/app.js"></script>  

but would not function on deployed website. For javascript file to load correctly I changed to absolute file path  
<script src="/rockpaperscissors---P2/assets/app.js"></script>
<hr>
<b>Issue with gameOver function - </b> I had issues with getting game to stop when user or computer reached max_points (set to 10 in this example).I overcame this by setting a variable as "let isGameover = false;". Then adding isGameOver function into the game() function. So if isGameOver function is false then play the game. Within the game function the gameOver function was included to run with statements defined within the function gameOver() with an else if statement. These determined the conditions for who won, the user or computer or if the game was drawn. The code was executed if the conditions were true, i.e.
<br>
if(userScore === max_points && computerScore < max_points){<br>
alert('You WON the game!! Congrats!');<br>
userScore = 0;<br>
computerScore = 0;<br>
isGameOver = true;<br>

<hr>
<b>Restart button only appearing when game was over - </b> I initially had this as display:none within CSS but this did not work. I overcame this issue by including CSS styling rules within the gameOver function: 
<p>if(isGameOver){ <br>
        restart.style.display = 'flex';<br>
    }<br>
    else {<br>
        restart.style.display = "none";<br>
    }<br>
  
<h2>Deployment</h2>

The website was deployed on GitHub by using following steps:

Login into GitHub and locate the repository - pharmacy
At the top of repository locate the "settings" button and click on it
On the left sidebar find locate the "pages" button and click on it
Click on the branch dropdown menu and select: master
Click save
link to your deployed repository on the screen below
  
<h2>Technologies Used</h2>

* HTML
* CSS
* Javascript

<h3>Tools</h3>

* [Git hub](https://github.com/)
* [Git pod](https://www.gitpod.io/docs/configure/)
* [W3c Html Validation service](https://validator.w3.org/)
* [W3c Css Validation service](https://jigsaw.w3.org/css-validator/)
* [JSHint JavaScript Validator](https://jshint.com/)
* [Stack OverFlow](https://stackoverflow.com/)
* [Font Awesome](https://fontawesome.com/)
* [GetEmoji](https://getemoji.com/)
* [Coolors](https://coolors.co/)


<h3>Credits/References</h3>

<li><b>Code Institute - </b>giving me the knowledge & skills to develop this project</li>
<li><b>W3 Schools (https://www.w3schools.com/) - </b>clearing up some function queries I had</li>
<li><b>Stack Overflow - </b>another extremely useful resource I used to rectify many issues with my code throughout the project including how to make my game end when getting to max amount of points</li>

<h3>Acknowledgements</h3>

<li><b>martina_mentor - </b>my mentor Martina who was always on hand to answer any questions</li>
<li><b>Code Institute Channel on Slack - </b> I found this a great resource with many knowledgeable people who were more than willing to answer my questions & help out.
<li>https://www.geeksforgeeks.org/ - useful resource to see work examples to improve my understanding of JavaScript syntax & functions<li>
<li>Youtube - I found a number of tutorials on youtube useful in helping me understand javascript & how I should structure my code in relation to a rock, paper, scissors game. I found the tutorials an invaluable resource in overcoming issues that arose. In particular I would like to acknowledge Ania Kubów, Whatsdev, Webdevsimplified, Traversy Media, Dave Gray & Rajneesh Rana
