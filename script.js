// Define an Angular module named "myShoppingList"
var app = angular.module("myShoppingList", []); 

// Create a controller named "myCtrl" and inject the $scope service
app.controller("myCtrl", function($scope) {

    // Initialize the products array with some default items
    $scope.products = ["Milk", "Bread", "Cheese"];

    // Function to add an item to the list
    $scope.addItem = function () {
        $scope.errortext = "";

        // Check if the input field is empty
        if (!$scope.addMe) {
            $scope.errortext = "Please enter an item.";
            $scope.errorColor = "red"; // Set error color to red
            return;
        }

        // Check if the item is already in the list
        if ($scope.products.indexOf($scope.addMe) == -1) {
            // Add the item to the list and clear the input field
            $scope.products.push($scope.addMe);
            $scope.addMe = "";
        } else {
            $scope.errortext = "The item is already in your shopping list.";
            $scope.errorColor = "red"; // Set error color to red
        }
    }

    // Function to remove an item from the list with confirmation
    $scope.removeItem = function (x) {
        $scope.errortext = "";

        // Ask for user confirmation before removing the item
        if (confirm("Are you sure you want to remove this item?")) {
            $scope.products.splice(x, 1);
        }
    }

    // Watch for changes in the 'search' input for filtering
    $scope.$watch('search', function(newVal, oldVal) {
        if (newVal !== oldVal) {
            // Check if the search term is empty
            if (!newVal) {
                $scope.errortext = "Please enter a search term.";
                $scope.errorColor = "red"; // Set error color to red
            } else {
                $scope.errortext = "";
                $scope.errorColor = ""; // Reset error color
                // Filter the products based on the search term
                $scope.filteredProducts = $scope.products.filter(function(product) {
                    return product.toLowerCase().includes(newVal.toLowerCase());
                });
            }
        }
    });

    // Initialize the filtered list with the initial list of products
    $scope.filteredProducts = $scope.products;
});
