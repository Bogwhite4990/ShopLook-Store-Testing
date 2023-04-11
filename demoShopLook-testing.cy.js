describe("Testing ShopLook Store", () => {
    it("Loading website test", () => {
        cy.visit("http://j2store.net/demo/");

        // Check if the page loads
        cy.get('a > span').should('exist');
        
    })

    it("Add to cart functionality", () => {
        cy.visit("http://j2store.net/demo/");

        // Add an item to cart
        cy.get('#add-to-cart-26 > .j2store-cart-button').click();

        // Verify that the item is in the cart
        cy.get('.j2store-cart-info-link > span').should('contain', '1 item(s)');

    })

    it("Currency EUR should work", () => {
        cy.visit("http://j2store.net/demo/");

         // Add an item to cart
         cy.get('#add-to-cart-26 > .j2store-cart-button').click();

         // Wait time

         cy.wait(1000);

         // Change to EUR
         cy.get('[title="EUR"]').click(); 

         // Verify that the item is in the cart has the price in EUR
         cy.get('.j2store-cart-info-link > span').should('contain', '€');
    })

    it("Search functionality work", () => {
        cy.visit("http://j2store.net/demo/");

        // Use search
        cy.get('#mod-search-searchword').type('shirt').type('{enter}');

        // Compare the result for first item
        cy.get('.search-results > :nth-child(1)').should('contain', 'T-Shirts');

    })

    it("Checkout functionality", () => {
        cy.visit("http://j2store.net/demo/");

        // Add an item to cart
        cy.get('#add-to-cart-26 > .j2store-cart-button').click();

        // Click checkout button
        cy.get('#j2store-addtocart-form-26 > .cart-action-complete > .text-success > .j2store-checkout-link').click();

        // Proceed to checkout
        cy.get('.cart-checkout-button > .btn').click();

        // Verify that new customer appear on the screen
        cy.get('.left > h2').should('contain', 'New Customer');
    })

    it("Delete an item from the cart", () => {
        cy.visit("http://j2store.net/demo/");

        // Add an item to cart
        cy.get('#add-to-cart-26 > .j2store-cart-button').click();

        // Click checkout button
        cy.get('#j2store-addtocart-form-26 > .cart-action-complete > .text-success > .j2store-checkout-link').click();

        // Click on delete button
        cy.get('tr > :nth-child(2) > .btn').click();

        // Verify no items are in the cart
        cy.get('.cart-no-items').should('exist');
    })

})