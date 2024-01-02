(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./week-1/index");
(0, index_1.default)();

},{"./week-1/index":12}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfArray3 = exports.sumOfArray2 = exports.sumOfArray = void 0;
/**
 * Returns the sum of the array
 *
 * @param {Array} arr Is an array of numbers
 * @returns {Number} The sum of the array
 */
function sumOfArray(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    }, 0);
}
exports.sumOfArray = sumOfArray;
/**
 * Returns the sum of the array
 *
 * @param {Array} arr Is an array of numbers
 * @returns {Number} The sum of the array
 */
function sumOfArray2(arr) {
    var sum = 0;
    for (var counter = 0; counter < arr.length; counter++) {
        sum += arr[counter];
    }
    return sum;
}
exports.sumOfArray2 = sumOfArray2;
/**
 * Returns the sum of the array
 *
 * @param {Array} arr Is an array of numbers
 * @returns {Number} The sum of the array
 */
function sumOfArray3(arr) {
    var sum = 0;
    arr.forEach(function (item) {
        sum += item;
    });
    return sum;
}
exports.sumOfArray3 = sumOfArray3;
exports.default = {
    sumOfArray: sumOfArray,
    sumOfArray2: sumOfArray2,
    sumOfArray3: sumOfArray3
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.printPerson = void 0;
function printPerson(person) {
    document.writeln("Name: " + person.name + "<br />Age: " + person.age + "<br />Email: " + person.email);
}
exports.printPerson = printPerson;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getFirstItem = function getFirstItem(items) {
  return items.length > 0 ? items[0] : null;
};
exports.default = getFirstItem;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.printColour = exports.Colours = void 0;
var Colours;
(function (Colours) {
    Colours["RED"] = "red";
    Colours["GREEN"] = "green";
    Colours["BLUE"] = "blue";
})(Colours || (exports.Colours = Colours = {}));
var printColour = function printColour(colour) {
    document.writeln("Color name: " + colour);
};
exports.printColour = printColour;

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Rectangle = function () {
    function Rectangle(width, height) {
        _classCallCheck(this, Rectangle);

        this.width = width;
        this.height = height;
    }

    _createClass(Rectangle, [{
        key: "getArea",
        value: function getArea() {
            return this.width * this.height;
        }
    }]);

    return Rectangle;
}();

exports.default = Rectangle;

},{}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
function logMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        document.writeln("Method " + key + " is called with arguments: " + JSON.stringify(args) + "<br />");
        var result = originalMethod.apply(this, args);
        document.writeln("Method " + key + " returns: " + JSON.stringify(result) + "<br />");
        return result;
    };
    return descriptor;
}

var MyExampleClass = function () {
    function MyExampleClass() {
        _classCallCheck(this, MyExampleClass);
    }

    _createClass(MyExampleClass, [{
        key: "addNumbers",
        value: function addNumbers(a, b) {
            return a + b;
        }
    }, {
        key: "greet",
        value: function greet(name) {
            return "Hello, " + name + "!";
        }
    }]);

    return MyExampleClass;
}();

__decorate([logMethod, __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Number]), __metadata("design:returntype", Number)], MyExampleClass.prototype, "addNumbers", null);
__decorate([logMethod, __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", String)], MyExampleClass.prototype, "greet", null);
function runApp6() {
    var exampleInstance = new MyExampleClass();
    document.writeln("exampleInstance.addNumbers(7, 9)<br />");
    exampleInstance.addNumbers(7, 9);
    document.writeln("exampleInstance.greet('Jim')<br />");
    exampleInstance.greet('Jim');
}
exports.default = runApp6;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var callApi = function callApi(url) {
    return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            resolve(data);
        }).catch(function (error) {
            reject(error);
        });
    });
};
function runApp7() {
    var result = document.createElement('p');
    callApi(new URL('https://api.country.is')).then(function (data) {
        result.innerHTML = 'API result: ' + JSON.stringify(data);
    }).catch(function (error) {
        result.innerHTML = 'API error: ' + JSON.stringify(error);
    });
    document.body.append(result);
}
exports.default = runApp7;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.kiemTraSoNguyenTo = exports.giaiThua = void 0;
var giaiThua = function giaiThua(n) {
    if (n < 2) {
        return 1;
    }
    return n * giaiThua(n - 1);
};
exports.giaiThua = giaiThua;
var kiemTraSoNguyenTo = function kiemTraSoNguyenTo(n) {
    if (n < 2) {
        return true;
    }
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
};
exports.kiemTraSoNguyenTo = kiemTraSoNguyenTo;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MathLibs = require("./ex-8.modules");
function runApp8() {
    document.writeln('giaiThua(10) is: ' + MathLibs.giaiThua(10) + '<br />');
    document.writeln('kiemTraSoNguyenTo(113) is: ' + MathLibs.kiemTraSoNguyenTo(113) + '<br />');
}
exports.default = runApp8;

},{"./ex-8.modules":9}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getPriceTotal = function getPriceTotal(products) {
    return products.reduce(function (total, product) {
        return total + product.price * product.id;
    }, 0);
};
var getProductByPriceGT100 = function getProductByPriceGT100(products) {
    return products.filter(function (product) {
        return product.price > 100;
    });
};
var getProductInfo = function getProductInfo(products) {
    return products.map(function (product) {
        return "S\u1EA3n ph\u1EA9m " + product.name + " c\xF3 gi\xE1 " + product.price + " \u0111\u1ED3ng v\xE0 c\xF2n " + product.quantity + " s\u1EA3n ph\u1EA9m.";
    });
};
var getProductByPriceLT100 = function getProductByPriceLT100(products) {
    return products.reduce(function (total, product) {
        return product.price < 100 ? total + product.price : total;
    }, 0);
};
var getDiscountedProducts = function getDiscountedProducts(products, discountPercent) {
    return products.map(function (product) {
        product.price = product.price - product.price * discountPercent / 100;
        return product;
    });
};
function runApp9() {
    var productsList = [{
        id: 1,
        name: 'Trà đá',
        price: 200,
        quantity: 50
    }, {
        id: 2,
        name: 'Cafe',
        price: 2000,
        quantity: 25
    }, {
        id: 3,
        name: 'Nước dừa tươi',
        price: 150,
        quantity: 100
    }, {
        id: 4,
        name: 'Nước dừa lon',
        price: 90,
        quantity: 210
    }, {
        id: 5,
        name: 'Nước ép hoa quả',
        price: 350,
        quantity: 10
    }, {
        id: 6,
        name: 'Nước lọc',
        price: 50,
        quantity: 1000
    }];
    document.writeln("<br /><br />Product info: <br />");
    document.writeln(getProductInfo(productsList).join('<br />'));
    document.writeln('<br />Total Quantity: ' + getPriceTotal(productsList));
    document.writeln('<br /><br />Total product (price > 100): ' + getProductInfo(getProductByPriceGT100(productsList)).join('<br />'));
    document.writeln('<br />Total product (price < 100): ' + getProductByPriceLT100(productsList));
    document.writeln('<br /><br />Discound product info: ' + getProductInfo(getDiscountedProducts(productsList, 50)).join('<br />'));
}
exports.default = runApp9;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Ex1 = require("./ex-1");
var ex_2_1 = require("./ex-2");
var ex_3_1 = require("./ex-3");
var ex_4_1 = require("./ex-4");
var ex_5_1 = require("./ex-5");
var ex_6_1 = require("./ex-6");
var ex_7_1 = require("./ex-7");
var ex_8_1 = require("./ex-8");
var ex_9_1 = require("./ex-9");
function runApp1() {
    var ex1 = document.createElement('p');
    ex1.innerHTML = 'Ex1.sumOfArray([1, 2, 3, 4, 5]) Is: ' + Ex1.sumOfArray([1, 2, 3, 4, 5]);
    document.body.append(ex1);
    var Jim = {
        name: 'Jim',
        age: 30,
        email: 'jim@arrowhitech.com'
    };
    (0, ex_2_1.printPerson)(Jim);
    var ex3 = document.createElement('p');
    ex3.innerHTML = 'First item in [1, 2, 3, 4, 5] is: ' + (0, ex_3_1.default)([1, 2, 3, 4, 5]);
    document.body.append(ex3);
    (0, ex_4_1.printColour)(ex_4_1.Colours.RED);
    var ex5 = document.createElement('p');
    var rectangle = new ex_5_1.default(9, 9);
    ex5.innerHTML = 'Rectangle Area of 9 x 9 is: ' + rectangle.getArea();
    document.body.append(ex5);
    (0, ex_6_1.default)();
    (0, ex_7_1.default)();
    (0, ex_8_1.default)();
    (0, ex_9_1.default)();
}
exports.default = runApp1;

},{"./ex-1":2,"./ex-2":3,"./ex-3":4,"./ex-4":5,"./ex-5":6,"./ex-6":7,"./ex-7":8,"./ex-8":10,"./ex-9":11}]},{},[1])

//# sourceMappingURL=bundle.js.map
