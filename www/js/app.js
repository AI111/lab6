
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
            name:'Borislav',
            lastname:'Mitrifanov',
            pasport:'BM7854',
            phone:'6578459',
            account:[
                {
                    id:456,
                    sum:19.2
                }
            ]
        }
    ];
    $scope.user=null;
    $scope.add = function () {
        console.log("ADD User")
        switch (pages.selected){
            case 0:
                $scope.user={ name:'',lastname:'', pasport:'', phone:'',account:[]};
                pages.selected = 1;
                break;
            case 1:
                if($scope.user.account.length<3){
                    console.log(JSON.stringify($scope.user.account));
                    $scope.user.account.push({ id:0, sum:1.0});
                }
                break;
        }

    };
    $scope.getSum= function () {
        if($scope.user.account.length==1)return $scope.user.account[0].sum;
        return $scope.user.account.reduce(function(a, b) {
            return a.sum + b.sum;
        });
    }
    $scope.openUserEditPage= function(i){
        pages.selected = 1;
        console.log(i);
        $scope.user=$scope.users[i];
        console.log(JSON.stringify($scope.user));
    };
    $scope.home=function(){
        pages.selected = 0;
    };//

});