// Define an Angular module named "myShoppingList"
var app = angular.module("myShoppingList", []); 

// Create a controller named "myCtrl" and inject the $scope and $http services
app.controller("myCtrl", function($scope, $http) {

    // Initialize the products array with some default items
    $scope.products = [];

    // Fetch the initial shopping list from the server
    $http.get('/api/shoppingList')
        .then(function (response) {
            $scope.products = response.data;
        })
        .catch(function (error) {
            console.error(error);
            // Handle error fetching initial list
        });

    // Function to add an item to the list
    $scope.addItem = function() {
        $scope.errortext = "";

        // Check if the input field is empty
        if (!$scope.addMe) {
            $scope.errortext = "Please enter an item.";
            return;
        }

        // Make an HTTP request to add the item to the shopping list
        $http.post('/api/shoppingList', { item: $scope.addMe })
            .then(function(response) {
                // Success
                $scope.products.push({ id: response.data.id, item: $scope.addMe });
                $scope.addMe = "";
            })
            .catch(function(error) {
                // Error
                console.error(error);
                $scope.errortext = "Error adding item.";
            });
    };

    // Function to remove an item from the list
    $scope.removeItem = function(x) {
        $scope.errortext = "";

        // Ask for user confirmation before removing the item
        if (confirm("Are you sure you want to remove this item?")) {
            // Make an HTTP request to remove the item from the shopping list
            $http.delete('/api/shoppingList/' + $scope.products[x].id)
                .then(function(response) {
                    // Success
                    $scope.products.splice(x, 1);
                })
                .catch(function(error) {
                    // Error
                    console.error(error);
                    $scope.errortext = "Error removing item.";
                });
        }
    };
});
