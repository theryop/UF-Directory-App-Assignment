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
    $scope.deleteListing = function(listing) {
      for (var i = 0; i <$scope.listings.length; i++)
      {
        if ($scope.listings[i].code == listing.code)
        $scope.listings.splice(i, 1);
      }

    };
    $scope.showDetails = function(listing) {
      $scope.detailedInfo = listing;
    };
  }
]);