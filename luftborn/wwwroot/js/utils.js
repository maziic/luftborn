const utils = {
    // Define your utility functions here
    formatDate: function (date) {
        // Format the given date into a human-readable string
        return date.toDateString();
    },
    capitalize: function (str) {
        // Capitalize the first letter of the given string
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};