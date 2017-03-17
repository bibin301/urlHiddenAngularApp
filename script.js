angular.module('app', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state("home", {
        url: "",
        templateUrl:"page1.html"
        //template: "<a ui-sref='next'>Next page</a>"
      })
      .state("next", {
        templateUrl:"page2.html"
      //  template: "<a ui-sref='home'>Back</a>"
      });
  });
//http://plnkr.co/edit/iBl4n5A3bkS7ge9o3NWC?p=preview -plunker link
