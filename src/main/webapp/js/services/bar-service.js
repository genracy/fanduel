app.service('barService', function() {

    var selectedBar = {};

    var selectBar = function(bar){
        selectedBar = bar;
    }

    var getSelectedBar = function(){
        return selectedBar;
    }

    return {
        selectBar: selectBar,
        getSelectedBar: getSelectedBar
    };

});