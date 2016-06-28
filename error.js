var util = require('util');
var formatUtil = require('format-util');
var db = require('db');
db.connect();

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError)
}

util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function makePhrase(url) {
    if (url != 'index.html') {
        throw new HttpError(404, 'Нет такой страници');
    }
    return formatUtil("%s, %s!", db.getPhrase("Hello"), db.getPhrase("world"));
}

try {
    var page = makePhrase('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack);
    }
}




