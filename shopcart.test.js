//import the javasript functions exported from shopping cart js
const { initShoppingCart, addProductShoppingCart } = require("./shopcart");


//Test 1 as described in the question: Exptectd Total Quantity = 5 and Expected Total Shopping cart prie = $249.95
describe('Step 1: Add products to the shopping cart',()=>{
    test("The user adds 5 Shower Gels to the shopping cart", () => {

                                        initShoppingCart(); //to  make shopping cart  empty
                                        const productName = "Shower Gel";
                                        const unitPrice = 49.99;
                                        const quantity = 5;

                                        const shoppingCart = addProductShoppingCart(productName,unitPrice,quantity) ;
                                       // console.log(shoppingCart);
                                        expect(shoppingCart.cartTotalItems).toBe(5);
                                        expect(shoppingCart.cartTotalPrice).toBe(249.95);

                                        }

    );
    
});


//Test 2 as described in the question: Exptectd Total Quantity = 8 and Expected Total Shopping cart prie = $399.92
describe('Step 2: Add additional products of the same type to the shopping cart',()=>{
    test("The user adds 5 Shower Gel to the shopping cart.And then adds another 3 Shower Gel to the shopping cart", () => {

                                        initShoppingCart(); //to  make shopping cart  empty
                                        const productName = "Shower Gel";
                                        const unitPrice = 49.99;
                                        let quantity = 5; //add 5 shower  gel first
                                        let shoppingCart = addProductShoppingCart(productName,unitPrice,quantity) ;
                                        
                                        quantity = 3; //add 2 more shower gel
                                        shoppingCart = addProductShoppingCart(productName,unitPrice,quantity) ;
                                        
                                       // console.log(shoppingCart);
                                        expect(shoppingCart.cartTotalItems).toBe(8);
                                        expect(shoppingCart.cartTotalPrice).toBe(399.92);

                                    }

                                    );
                                    
});


//Test 2 as described in the question: Exptectd Total Quantity = 4 and Expected Total Shopping cart prie = $337.46 and Total Sales Tax = $37.5
describe('Step 3: Calculate the tax rate of the shopping cart with multiple items',()=>{
    test("The user adds 2 Shower Gels to the shopping cart. And then adds 2 Deodorant to the shopping cart", () => {
                                        initShoppingCart();  //to  make shopping cart  empty
                                        let productName = "Shower Gel";
                                        let unitPrice = 49.99;
                                        let quantity = 2; //add 2 shower  gel first
                                        const salesTaxRate = 12.5;
                                        let shoppingCart = addProductShoppingCart(productName,unitPrice,quantity,salesTaxRate) ;
                                        
                                        productName = "Deodorant";
                                        unitPrice = 99.99;
                                        quantity = 2; //Deodrants
                                        shoppingCart = addProductShoppingCart(productName,unitPrice,quantity,salesTaxRate) ;
                                        
                                        //console.log(shoppingCart);
                                        expect(shoppingCart.cartTotalItems).toBe(4);
                                        expect(shoppingCart.shoppingCartItems[0].quantity).toBe(2);
                                        expect(shoppingCart.shoppingCartItems[1].quantity).toBe(2);
                                        expect(shoppingCart.cartTotalSalesTax).toBe(37.5);
                                        expect(shoppingCart.cartTotalPrice).toBe(337.46);
                                        }

    );
});
