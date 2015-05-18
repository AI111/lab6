
var phonecatApp = angular.module('MyApp', ['starter.controllers']);

phonecatApp.controller('ListCtrl', function ($scope) {
    var vm = this;
    $scope.Total = 0;
    $scope.selected=0;
    var pages = document.getElementById('core-pages');

    $scope.users=[
        {
            name:'Sasha',
            lastname:'Andreev',
            pasport:'kd98746',
            phone:'9875461',
            account:[
                {
                    id:14658,
                    sum:19.2
                },
                {
                    id:8645,
                    sum:17.2
                }
            ]
        },
        {
            name:'Birislav',
            lastname:'Mitrifanov',
            pasport:'BM7854',
            phone:'6578459',
            account:[
                {
                    id:456,
                    sum:19.2
                },
                {
                    id:53545,
                    sum:17.2
                }
            ]
        }
    ];
    $scope.user=null;
    $scope.addUser = function () {
        pages.selected = 2;
    };
    $scope.openUserEditPage= function(i){
        pages.selected = 1;
        console.log(i);
        $scope.user=$scope.users[i];
        console.log(JSON.stringify($scope.user));
    };
    $scope.home=function(){
        pages.selected = 0;
    };
});