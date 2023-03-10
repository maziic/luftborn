const data = {
    // Define your data models here
    Product: class {
        constructor(name, price, description) {
            this.name = name;
            this.price = price;
            this.description = description;
        }
    },

    // Define your data functions here
    getProducts: function () {
        // Retrieve products from the API or local storage
    },

    addProduct: function (product) {
        // Add the given product to the API or local storage
    },

    updateProduct: function (productId, updates) {
        // Update the product with the given ID with the given updates
    },

    deleteProduct: function (productId) {
        // Delete the product with the given ID
    }
};