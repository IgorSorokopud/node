var user = require('./user');

var vasya = new user.User('вася');
var petya = new user.User('петя');

vasya.hello(petya);