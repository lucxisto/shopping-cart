document.addEventListener('DOMContentLoaded',function(){
    const quantityProd = document.getElementsByClassName('quantity');
    for (let i = 0; i < quantityProd.length; i++){
        quantityProd[i].addEventListener('change', calcPrice);
    }
})
function calcPrice(event){
    const quantityProd = document.getElementsByClassName('quantity');
    const unitPrice = document.getElementsByClassName('unit-price');
    const totalPrice = document.getElementsByClassName('total-price');
    let totalCart = document.getElementById('cart-total');
    controlNumber = 0;
    for (let i = 0; i < unitPrice.length; i++){
        totalPrice[i].innerHTML = Number.parseFloat(unitPrice[i].innerHTML) * quantityProd[i].value;
        controlNumber += Number.parseFloat(totalPrice[i].innerHTML);
    }
    totalCart.innerHTML = controlNumber;
}