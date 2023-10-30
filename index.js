const billTotalInput = document.getElementById("billTotalId");
//const  = document.getElementById(" ");
const tipInput = document.getElementById("tipId");
const tipPercentageValue = document.getElementById("tipPercentageId");
const  tipAmountValue = document.getElementById("tipAmountId");
const  totalBillValue = document.getElementById("totalBillId");
const billContainerForm= document.getElementById("billContainerFormId")

tipInput.addEventListener("input", updateValues)
billTotalInput.addEventListener("input",updateValues)

function updateValues(){
    tipPercentageValue.value = tipInput.value + "%";
    const tipAmount = (parseFloat(billTotalInput.value) || 0)* (parseFloat( tipPercentageValue.value) || 0)/100;
    tipAmountValue.value = tipAmount.toFixed(2);
    const totalBill = (parseFloat(billTotalInput.value) || 0)+(parseFloat(tipAmountValue.value) || 0);
    totalBillValue.value = totalBill.toFixed(2);

}

function validateInput(totalBillInput){

    let regEx = /^\d*\.?\d{0,2}$/;
    const billTotal = totalBillInput.value;
    if(!regEx.test(billTotal)){
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent="Please enter a valid number with up to 2 decimal places.";
        totalBillInput.style.borderColor = "red";
    }
    else{
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent=" ";
        totalBillInput.style.borderColor = "";
    }

}
    
window.addEventListener("load", ()=>{
    billContainerForm.reset();
})
