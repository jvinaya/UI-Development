"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        var users = {
            name: 'Vinaya',
            "class": 9,
            place: 'Kannur',
            getNumber: function () {
                return this.place;
            }
        };
        users.name = "Vins";
        console.warn("Test Function working fine");
        console.warn(users.getNumber());
    };
    return App;
}());
var a = new App();
a.test();
