function createMonthConverter() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return function(monthNumber) {
        if (monthNumber < 1 || monthNumber > 12 || isNaN(monthNumber)) {
            return "Bad Number";
        }
        monthNumber = Math.floor(monthNumber);
        return monthNames[monthNumber - 1];
    };
}

document.getElementById("convertButton").addEventListener("click", () => {
    let monthNumber = parseFloat(document.getElementById("monthInput").value);
    let convertMonth = createMonthConverter();
    let monthName = convertMonth(monthNumber);

    document.getElementById("monthName").innerText = monthName;
});