var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.sayHello = function (name) {
        console.log("Hello ".concat(name));
    };
    return Hello;
}());
var hello = new Hello();
hello.sayHello("World!");
