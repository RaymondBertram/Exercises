'use strict';

function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var userinput1 = document.getElementById("US").value;
    var dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        document.getElementById("message").innerHTML = "Choose a date please!";
        return false;
    } else {
        //calculate month difference from current date in time
        var month_diff = Date.now() - dob.getTime();
        //convert the calculated difference in date format
        var age_dt = new Date(month_diff);
        //extract year from date    
        var year = age_dt.getUTCFullYear();
        //now calculate the age of the user
        var age = Math.abs(year - 1970);
        //display the calculated age
        return document.getElementById("result").innerHTML =
            `${userinput1}'s Age is:  ${age} years. `;
    }
}