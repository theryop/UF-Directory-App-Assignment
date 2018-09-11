angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.barFilter = function(curRow) {
      return function(curRow)
      {
        if (typeof $scope.inputText == 'undefined') {
          return curRow;
        }
        if (curRow.name.includes($scope.inputText) || curRow.code.includes($scope.inputText)) {
          return curRow;
        }
      }
    };


    $scope.addListing = function() {
      $scope.listings.push({
        "code": $scope.newCode,
        "name": $scope.newName,
        "coordinates": {
                "latitude": $scope.newLat, 
                "longitude": $scope.newLong
            }, 
            "address": $scope.newAdd
      });
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);