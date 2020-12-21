//set up the shopping Cart Object:
let shoppingCart = {
    cartTotalItems:0,
    cartTotalPrice:0,
    cartTotalSalesTax:0,
    cartTotalSalesTaxRate:0,
    shoppingCartItems: [] //array with json object fo each cart item
};



//empty or initialize the shopping cart with defualt values
const initShoppingCart = () => {

    shoppingCart = {
        cartTotalItems:0,
        cartTotalPrice:0,
        cartTotalSalesTax:0,
        cartTotalSalesTaxRate:0,
        shoppingCartItems: [] //array with json object fo each cart item
    };

}

//add to shopping cart javascript function:
const addProductShoppingCart = (productName, unitPrice,quantity ,salesTaxRate=0) => {

    let matchFlag = false; 
    const itemPrice = quantity * unitPrice ;
    const itemSalesTax = itemPrice * salesTaxRate /100
    const itemTotalPrice = itemPrice + itemSalesTax ;

    let newItemObj = {
      "productName": productName,
      "unitPrice": unitPrice,
      "quantity": quantity,
      "itemTotalPrice": round(itemTotalPrice,2),
      "itemTotalSalesTax": round(itemSalesTax,2),
    };

    //check if the product being added is already present in the cart
    shoppingCart.shoppingCartItems.forEach(item => {        
        if ( item.productName == newItemObj.productName ) {  
                // add the quantity of the new obj to the old one
                item.quantity += newItemObj.quantity;  
                item.itemTotalPrice += newItemObj.itemTotalPrice;
                item.itemTotalSalesTax += newItemObj.itemTotalSalesTax;
                // if two items are matched, set a flag
                matchFlag = true;
            }

      });


    // if no match happened, just add the item as new item in the object as normally
    if ( !matchFlag ) {
        shoppingCart.shoppingCartItems.push( newItemObj );
    }


    //calculate the cart level total price , quantity and sales tax:
    shoppingCart.cartTotalItems += newItemObj.quantity;
    shoppingCart.cartTotalSalesTax =  round(shoppingCart.cartTotalSalesTax + itemSalesTax, 2);
    shoppingCart.cartTotalPrice =  round(shoppingCart.cartTotalPrice + itemTotalPrice,2)
    
    return shoppingCart;

}



//below round functions is implemented to round up/down the values
const round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
   }   



module.exports = {initShoppingCart, addProductShoppingCart};
