document.addEventListener('DOMContentLoaded', function(){
    updateTotalPrice();
    const quantitiesInput = document.getElementById('quant');
    quantitiesInput.addEventListener('change', updateTotalPrice);
})

function updatePrices(){
    const quantitiesInput = document.getElementById('quant');
    quantitiesInput.addEventListener('change', updateTotalPrice);
}
function updateTotalPrice(){
    const quantitiesInput = document.getElementById('quant');
    const unitPriceProduct = document.getElementById('unitPrice');
    const totalPriceProduct = document.getElementById('totalPrice');
    totalPriceProduct.innerHTML = Number.parseFloat(quantitiesInput.value) * Number.parseFloat(unitPriceProduct.value);
}