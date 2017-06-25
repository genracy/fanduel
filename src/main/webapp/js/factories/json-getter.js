app.factory('jsonGetter', function ($http) {
        return {
            getBars: function () {
                return $http.get('/data/bars.json');
            },
             getDrinksForBar: function (barId) {
                var drinks = $http.get('/data/drinks.json');
                //TODO mock the search and table join
                 return drinks;
             }
        }
   });