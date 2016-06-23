var user = require('./user.js');

var vasya = new user.User('вася');
var petya = new user.User('петя');

vasya.hello(petya);