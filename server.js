var User = require('./user');

function run() {
    var vasya = new User('вася');
    var petya = new User('петя');

    vasya.hello(petya);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}

