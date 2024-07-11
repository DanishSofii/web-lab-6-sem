let monthNumber = window.prompt("Enter the month Number");

if(monthNumber < 1 || monthNumber > 12 || isNaN(monthNumber)){
    alert("Bad Number");
}
else{
    monthNumber = Math.floor(monthNumber);
const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const month = monthNames[monthNumber - 1];
alert(month);

const container = document.getElementById('monthName');
container.innerHTML = month;
}

