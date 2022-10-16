document.addEventListener('DOMContentLoaded',function(){
    const quantityProd = document.getElementsByClassName('quantity');
    quantityProd.addEventListener('change', calcPrice());
})
function calcPrice(){
    const quantityProd = document.getElementsByClassName('quantity');
    const unitPrice = document.getElementsByClassName('unit-price');
    const totalPrice = document.getElementsByClassName('total-price');
    for (let i = 0; i < unitPrice.length; i++){
        totalPrice[i].innerHTML = Number.parseFloat(unitPrice[i].innerHTML) * quantityProd[i].value;
    }

}