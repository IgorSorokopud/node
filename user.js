function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log('hello ' + who.name);
};

exports.User = User;