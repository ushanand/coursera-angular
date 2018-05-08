(function (){
'use strict';

    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){

        var tobuyController = this;

        tobuyController.itemToBuy = ShoppingListCheckOffService.getItemsToBuy();

        tobuyController.removeItems = function(index){
            ShoppingListCheckOffService.removeItems(index);
        }

    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){

        var alreadyBoughtController = this;

        alreadyBoughtController.itemBought = ShoppingListCheckOffService.getItemsBought();

    }


    function ShoppingListCheckOffService(){

        var service = this;

        var itemToBuy = [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "200"
            },
            {
                name: "Cookies",
                quantity: "300"
            },
            {
                name: "Chocolate",
                quantity: "50"
            }
        ];
        var itemBought = [];

        service.getItemsToBuy = function(){

            return itemToBuy;
        }

        service.getItemsBought = function(){

            return itemBought;
        }
        service.removeItems = function(index){
            itemBought.push(itemToBuy[index]);
            itemToBuy.splice(index,1);
        }
 
    }


})();