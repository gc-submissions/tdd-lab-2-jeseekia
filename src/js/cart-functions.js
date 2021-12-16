//calculateChange()
function calculateChange(total, payment) {
    return payment - total;
}
//isSufficientPayment()
function isSufficientPayment(total, payment) {
    return payment >= total;
}
//calculateTotal()
function calculateTotal(itemsArray) {
    let total = 0;
    //look at each item in the array
    for(let i=0; i<itemsArray.length; i++){
        //add up the price property
        total += itemsArray[i].price;
        //total = total + itemsArray[i].price;
    }
       
    return total;
}
//addItem()
function addItem(itemsArray, name, price) {
    itemsArray.push({"name": name, "price": price});
    // return itemsArray;
}
//removeItem()

module.exports = {
    calculateChange: calculateChange,
    isSufficientPayment: isSufficientPayment,
    calculateTotal: calculateTotal,
    addItem: addItem
}