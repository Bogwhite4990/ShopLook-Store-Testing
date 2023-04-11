# ShopLook-Store-Testing

This is a series of tests using Cypress for testing the functionality of the ShopLook Store website. The tests cover various scenarios, including loading the website, adding items to the cart, changing currency, searching for products, checking out, and deleting items from the cart.

## Prerequisites
Install Cypress: You can install Cypress using npm or yarn by running the following command in your project directory:

**npm install cypress**

## How to Run the Tests
1. Clone the repository and navigate to the project directory.
2. Run the following command to open Cypress:

**npx cypress open**

3. Click on the desired test file (shoplook-store.spec.js) from the Cypress GUI.
4. The tests will run automatically and you can view the results in the Cypress GUI.

## Tests

1. "Loading website test": This test checks if the website at "http://j2store.net/demo/" loads successfully by verifying the existence of a particular element on the page.

2. "Add to cart functionality": This test adds an item to the cart by clicking on an "Add to Cart" button, and then verifies that the item has been added to the cart by checking the cart's item count.

3. "Currency EUR should work": This test adds an item to the cart, waits for 1 second, changes the currency to EUR, and then verifies that the item in the cart now shows the price in Euros.

4. "Search functionality work": This test uses the search functionality by typing "shirt" in a search input field and pressing Enter, and then verifies that the search results contain the expected text "T-Shirts".

5. "Checkout functionality": This test adds an item to the cart, clicks on a "Checkout" button, proceeds to the checkout page, and then verifies that the page displays "New Customer" as expected.

6. "Delete an item from the cart": This test adds an item to the cart, clicks on a "Checkout" button, and then clicks on a "Delete" button to remove the item from the cart. It then verifies that the cart displays a message indicating that there are no items in the cart.
