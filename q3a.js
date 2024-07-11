function createNetPriceCalculator(taxRate){
    return function(price){
        return price + (price * taxRate/100);
    }
}

document.getElementById("calculate").addEventListener("click",()=>{
    let price = parseFloat(document.getElementById("price").value);
    let taxRate = parseFloat(document.getElementById("tax").value);

    let calculateNetPrice = createNetPriceCalculator(taxRate);
    let netPrice = calculateNetPrice(price);

    document.getElementById("output").innerText = `Net Price is : ${netPrice.toFixed(2)}`;
})