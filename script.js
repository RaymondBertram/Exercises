'use strict';

/* I need an feature that shows undeath the calculator the executed sentence with the current age and the full name and a LoginQuery which shows when you last visited this website for example: First visit = This is your first time on your page, second visit = Your last call on this website was on DD.MM.YYYY and this is your second time on this page! and so on.....

Maybe an if-statement with special condtions ?











The next feature should calculate the age and execute the full name after we typed in our values.

Maybe a function?
*/

var firstName = new 
var lastName = new

const calculateAge = function (birthYear) {
    var currentYear = new Date().getFullYear();

    return currentYear - birthYear
}
document.write(`${firstName} ${lastName} is `)
