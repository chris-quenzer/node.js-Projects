/**
 * Created by Chris Q on 4/2/2017.
 */

//-----Hello World!-----
console.log("Hello World!");

//-----Example of parallel function calling using 'async' core module-----
var async = require("async"); //load async module

async.parallel([
    function (callback) {
        console.log("one");
        callback();
    },
    function (callback) {
        console.log("two");
        callback();
    }
    ],
    function (err, result) {
        console.log("finished");
    })

//-----Handling multiple requests-----
function place_order(order_number) {
    console.log("Customer order: ", order_number);
    cook_and_deliver_food(function(){
        console.log("Delivered food order: ", order_number);
    })
}

function cook_and_deliver_food(callback) {
    setTimeout(callback, 5000);
}
//simulate user's web request
for(var i = 0; i < 5; i++){
    place_order(i + 1);
}

//-----Everything is a reference in node-----
var person_1 = {
    fav_food: "Burgers",
    fav_movie: "Interstellar"
};

var person_2 = {
    fav_food: "Pizza",
    fav_movie: "Empire Strikes Back"
};

person_2 = person_1;

person_2.fav_food = "Ham"; //Will overwrite person_1.fav_food because person_2 is a reference to person_1

console.log(person_1.fav_food);

//-----Diff between '==' and '==='-----
console.log(19 == '19'); //true -> compares VALUE
console.log(19 === '19'); //false -> compares TYPE

//-----Prototyping-----
function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var player1 = new User();
var player2 = new User();
player1.name = "Chris";
player2.name = "Bob";

player1.giveLife(player2);
console.log("Player 1 (" + player1.name + ") life: " + player1.life);
console.log("Player 2 (" + player2.name + ") life: " + player2.life);

//add the 'uppercut' function to object type 'User'
User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercut " + targetPlayer.name);
};

player2.uppercut(player1);
console.log("Player 1 (" + player1.name + ") life: " + player1.life);
console.log("Player 2 (" + player2.name + ") life: " + player2.life);

User.prototype.magic = 80; //add the property 'magic' to object type 'User'
console.log("Player 1 (" + player1.name + ") magic: " + player1.magic);
console.log("Player 2 (" + player2.name + ") magic: " + player2.magic);

//-----Modules-----
var testModule = require('./testModule');
testModule.about();
console.log(testModule.simpleAdd(2, 2));
console.log(testModule.testNum);