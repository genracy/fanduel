app.filter('searchFilter', function() {
    return function(arr, searchString) {

        if(!searchString) {
            return arr;
        }

        searchString = searchString.toLowerCase();

        var result = [];

        angular.forEach(arr, function(el){
            if(el.name.toLowerCase().indexOf(searchString) != -1) {
                result.push(el);
            }
        });

        return result;
    };
});