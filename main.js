/*var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
   $scope.myData = [{name: "Moroni", age: 50},
                    {name: "Tiancum", age: 43},
                    {name: "Jacob", age: 27},
                    {name: "Nephi", age: 29},
                    {name: "Enos", age: 34}];
    $scope.gridOptions = { 
        data: 'myData',
        rowTemplate: '<div style="height: 100%" ng-class="{green: row.getProperty(\'age\') < 29}"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div></div>',
		//rowTemplate: '<div ng-dblclick="onDblClickRow(row)" ng-style="{ \’cursor\’: row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div>',
		  enableCellSelection: true,
      enableCellEdit: true,
      enableRowSelection: false,
    };
}); 

*/

var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
   $scope.myData = [{name: "Moroni", age: 50},
                    {name: "Tiancum", age: 43},
                    {name: "Jacob", age: 27},
                    {name: "Nephi", age: 29},
                    {name: "Enos", age: 34}];
    $scope.gridOptions = { 
        data: 'myData',
        rowTemplate: '<div style="height: 100%" ng-class="{green: row.getProperty(\'age\') < 29}"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div></div>',
  //rowTemplate: '<div ng-dblclick="onDblClickRow(row)" ng-style="{ \’cursor\’: row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div>',
    enableCellSelection: true,
      enableCellEdit: true,
      enableRowSelection: false,
    };
 
 
 $scope.$on('ngGridEventEndCellEdit', function (data) {
     alert(data.targetScope.row.entity.age);
   
   if(data.targetScope.row.entity.age<27)
   alert("enter right age");
});

});
