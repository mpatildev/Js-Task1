 //-----------------------Var----------------------------------
//1. Create a var variable called name and initialize it with your name. Print it.
var name = "Maheshwari";
console.log(name);      //Maheshwari

//2. Create a var variable called age with value 25. Reassign it to 30 and print it.
var age = 25;
age = 30;

console.log(age); //30

//3. Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.
var city = "Chennai";
city = "Bangalore";

console.log(city);   //Banglore

//4. Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.
var salary = 25000;
var salary = 35000;

console.log(salary); //35000

//5. Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.
var value = 10;
value = 20;
var value = 30;

console.log(value); //30

//6. Create a var variable called department with "ECE" and redeclare it with "CSE".
var department = "ECE";
var department = "CSE";

console.log(department); //CSE

//7. Create a var variable called mark with 50, reassign it to 75, and print it.
var mark = 50;
mark = 75;

console.log(mark); //75

//8. Create a var variable called company and redeclare it with another company name.
var company = "TCS";
var company = "Infosys";

console.log(company); //Infosys

//9. Create a var variable without assigning a value, then initialize it later and print it.
var country;

country = "India";

console.log(country);  //India

//10. Create one var variable and change its value three times. Print the final value.
var number = 10;

number = 20;
number = 30;
number = 40;

console.log(number); //40




//---------------------------Let------------------------------

//11. Create a let variable called age and initialize it with your age. Print it.
let age1 = 22;

console.log(age1); //22

//12. Create a let variable called salary, initialize it with 30000, then reassign it to 40000.
let salary1 = 30000;

salary1 = 40000;

console.log(salary1); //40000

//13. Create a let variable called name, assign your name, then change it to another name.
let name1 = "Maheshwari";

name1 = "Priya";

console.log(name1); //Priya

//14. Create a let variable called department and change its value from "ECE" to "CSE".
let department1 = "ECE";

department1 = "CSE";

console.log(department1); //CSE

//15. Create a let variable called mark, initialize it with 60, then reassign it to 90.
let mark1 = 60;

mark1 = 90;

console.log(mark1); //90

//16. Declare a let variable without initialization. Later assign a value and print it.
let city1;

city1 = "Bangalore";

console.log(city1); //Banglore

//17. Try to redeclare the same let variable. Observe what happens.
let age2 = 25;

// let age2 = 30;

// console.log(age); // error --reinitialization

//18. Create a let variable called city and reassign it two times. Print the final value.
let city2 = "Chennai";

city2 = "Bangalore";
city2 = "Hyderabad";

console.log(city2);    //Hyderabad

//19. Create three different let variables and print all three.
let name2 = "Maheshwari";
let age3 = 22;
let city3 = "Bangalore";

console.log(name2);   //Maheshwari
console.log(age3);   //22
console.log(city3);  //Banglore

//20. Create a let variable, initialize it, reassign it, and try to redeclare it.
let salary3 = 30000;
salary3 = 40000;           //reassign
// let salary3 = 50000;    

// console.log(salary3); //redeclaration error





//---------------------------------Const--------------------------------

//21. Create a const variable called age with value 25 and print it.
const age4 = 25;

console.log(age4); //25

//22. Create a const variable called salary with value 50000 and print it.
const salary4 = 50000;

console.log(salary4); //5000

//23. Create a const variable called company with "Stackly" and print it.
const company1 = "Stackly";

console.log(company1); //Stackly

//24. Try to reassign a const variable with another value. Observe the result.
const age5 = 25;

// age5 = 30;  

// console.log(age5); //reassign error

//25. Try to redeclare a const variable. Observe the result.
const salary5 = 50000;

// const salary5 = 60000;  // redeclaration Error

// console.log(salary5);

//26. Create a const variable called college and initialize it with your college name.
const college = "ABC College of Engineering";

console.log(college);  //ABC College of Engineering

//27. Create three const variables for name, age, and department. Print them.
const name3 = "Maheshwari";
const age6 = 22;
const department2 = "CSE";

console.log(name3);    //Maheshwari
console.log(age6);     //22  
console.log(department2);    //CSE

//28. Write a program using one var, one let, and one const variable. Print all three.
var name4 = "Maheshwari";
let age7 = 22;
const department3 = "CSE";

console.log(name4);     //Maheshwari
console.log(age7);       //22
console.log(department3);      //CSE





//-------------------Printing Statements-------------------

//29. Print your name using console.log().
console.log("Maheshwari");   //Maheshwari

//30. Create a variable containing your age and print it using console.log().
let myage = 22;

console.log(myage);    //22

//31. Print the number 100 using console.log().
console.log(100); //100

//32. Create three variables and print their values using console.log().
let mname = "Maheshwari";
let mage = 22;
let mcity = "Bangalore";

console.log(mname);          //Maheshwari
console.log(mage);           //22
console.log(mcity);          //Bangalore

//33. Create a variable called message with "Hello JavaScript" and print it.
let message = "Hello JavaScript";

console.log(message);   //Hello JavaScript

//34. Create a variable, print its value, change its value, and print it again.
let number1 = 10;

console.log(number1);           //10

number1 = 20;

console.log(number1);        //20

//35. Print your name, age, and qualification using three separate console.log() statements.
console.log("Maheshwari");              //Maheshwari
console.log(22);                        //22
console.log("B.E. Computer Science");   //B.E. Computer Science





//--------------------alert()-----------------

//36. Display "Welcome to JavaScript" using alert().
alert("Welcome to JavaScript");             //Welcome to JavaScript pop'sup 

//37. Create a variable called userName and display it using alert().
let userName = "Maheshwari";

alert(userName);                   //Maheshwari pop's up

//38. Create a variable called userAge and display it using alert().
let userAge = 22;

alert(userAge);           //22 pop's

//39. Create a variable containing "Welcome Naveen" and show it in a popup.
let message1 = "Welcome Naveen";

alert(message1);      //Welcome Naveen

//40. Create a variable containing your qualification and display it using alert().
let qualification = "B.E. Computer Science";

alert(qualification);       //B.E. Computer Science




//-------------------------Prompt---------------------

//41. Ask the user "What is your name?" using prompt() and print the answer in the console.
let name5 = prompt("What is your name?");
console.log(name5);             //What is your name  pop's up (takes input)

//42. Ask the user "How old are you?" using prompt() and display the answer using alert().
let age8 = prompt("How old are you?");

alert(age8);            //How old are you pop's up(takes input)

//43. Ask the user for their qualification and print the answer in the console.
let qualification1 = prompt("What is your qualification?");

console.log(qualification1); //What is your qualification pop's up(takes input)

//44. Ask the user for their name and show the entered name in a popup.
let userAge1 = prompt("Enter your age");

console.log(userAge1);           //Enter your age  pop's up(takes input)





//----------------confirm() & document.writeln()---------------------

//46. Create a confirmation box asking "Do you know programming?".
confirm("Do you know programming?");   //The popup will have OK and Cancel buttons.

//47. Create a variable containing "Welcome to Batch 41" and display it using document.writeln().
let docmessage = "Welcome to Batch 41";

document.writeln(docmessage);         //Displays on UI- Welcome to Batch 41 

//48. Ask the user "Do you want to continue?" using confirm().
confirm("Do you want to continue?");     //confirm() returns either true or false.

let result = confirm("Do you want to continue?");

console.log(result);                   //Ok-true   Cancel-false

//49. Use console.log(), console.warn(), and console.error() to display three different messages.
console.log("This is a normal message");     //This is a normal message

console.warn("This is a warning message");    //This is a warning message

console.error("This is an error message");    //error message

// 50. Use console.log(), console.warn(), console.error(), and console.clear().
console.log("This is a normal message");      

console.warn("This is a warning message");

console.error("This is an error message");

console.clear();               //clears console 
