//I have chosen to build an application that I have called BookBuddy. The main purpose of this app is to help users enter their credentials to go to their account, add books on their TBR and select books so that they are able to journal their feelings and come back to them later!


const readline = require('readline-sync');

//Created a log to welcome users to the app. I modeled this concept from learning about new lines (\n) from the unit "Stringing Characters together"
 console.log("Welcome to BookBuddy! We are so happy that you are here!\nThis app is designed to be a reading companion and assist you in keeping track of all of your books, allowing you to journal your thoughts, and even creating a TBR list for you!\nPlease sign up so that you can begin utilizing the app to the most personalized experience for you!");


 //This next section was learned from the topic "Values, Data Types, and Operations" and helped to assigned values to variables. These variables only have a value if the user inputs data.
let userInputName = readline.question("Please input a username: ");
let userInputPassword = readline.question("Please input a password: ");

//I made sure to make the userName and userPasswords equal to the input value that was defined earlier 
let userName = userInputName;
let userPassword = userInputPassword;

console.log("Thanks for creating an account! Please log in so that you can get started personalizing your account!");

//I added both these loops after learning about this concept in "Working With Loops". These loops are used to validate the username and password that were established above.
do { //The do while loop 
    userNameValidation = readline.question("Please enter your username: ");
  

        if (userNameValidation !== userName) { //I used strict inequality to show the error message when the user got their password wrong! I used the logic that I learned in "Control Structures and Logic" in order to use a boolean so that the loop will work as intended. If the user enters a wrong password, it loops until the righ one is entered. The same can be said for the username. 
            console.log("This username is incorrect. Please try again!");
        }


}while (userNameValidation !== userName);

do {
    userPasswordValidation = readline.question("Please enter your password: ");

    if (userPasswordValidation !== userPassword) {
        console.log("This password is incorrect. Please try again!");

    }

}while (userPasswordValidation !== userPassword) 
    console.log(`Welcome to your personal profile ${userName}! We are so excited to read with you!`);


//In this section, I create another user input and store their response in an array. I used techniques from "Building Arrays".

    let userTbr= readline.question("What books are on your TBR? Please use a comma to separate each book title! "); //This is where I ask the user to input values which will then be added to the array
 
    let userTbrArray = userTbr.split(','); //In this line, I used the .split function in which I learned in "Using Arrays". The main purpose of this code is for the user to input the title of books that they are currently reading. I didn't put a limiter because I know that a reading list is very long!
    console.log("Here are the books that are on your TBR: ");
    console.log(userTbrArray); //I included this so user's can see what books they put on their TBR!

    //I wanted to add another array so that users can choose three books that they are currently reading to keep track of
    
    let userCurrentBooks = readline.question("What are the three books that you are currently reading? Please use a comma to separate each book title! ");

    let userCurrentBooksArray = userCurrentBooks.split(',');//I built another array using the user's input as above. I learned this in "Building Arrays" and was able to do so. 
    console.log("Here are the three books that you entered: "); //In this, I need to add a for loop that only allows the user to enter in three titles - no more no less. I tried to add it in, but kept getting an error. I want to work on this so my code is more logical.
    console.log(userCurrentBooksArray);

    //I want to add a way for users to select a book, enter a journal entry, and then store it so that they are able to come back to it later.
    
