/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  console.log("new withdraw amount " + typeof newWithdrawAmount);

  const previousWithdrawTotal = parseInt(getTextElementValueById("withdraw-total"));
  console.log("previous withdraw total " + typeof(previousWithdrawTotal));

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  console.log('new withdraw total ' +newWithdrawTotal);

  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = parseInt(getTextElementValueById("balance-total"));
  console.log('previous balance total ' +typeof(previousBalanceTotal));
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
