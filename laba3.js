var TypeDocument;
(function (TypeDocument) {
    TypeDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    TypeDocument["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    TypeDocument["Insurance"] = "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430";
})(TypeDocument || (TypeDocument = {}));
var OwnerClass = /** @class */ (function () {
    function OwnerClass(lastName, firstName, middleName, birthDate, typeDocument, documentSeries, documentNumber) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._typeDocument = typeDocument;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    Object.defineProperty(OwnerClass.prototype, "lastName", {
        get: function () { return this._lastName; },
        set: function (value) { this._lastName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "firstName", {
        get: function () { return this._firstName; },
        set: function (value) { this._firstName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "middleName", {
        get: function () { return this._middleName; },
        set: function (value) { this._middleName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "birthDate", {
        get: function () { return this._birthDate; },
        set: function (value) { this._birthDate = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "typeDocument", {
        get: function () { return this._typeDocument; },
        set: function (value) { this._typeDocument = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentSeries", {
        get: function () { return this._documentSeries; },
        set: function (value) { this._documentSeries = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentNumber", {
        get: function () { return this._documentNumber; },
        set: function (value) { this._documentNumber = value; },
        enumerable: false,
        configurable: true
    });
    OwnerClass.prototype.printOwnerInfo = function () {
        console.log("Информация про владельца: " +
            "\nФамилия: " + this._lastName +
            "\nИмя: " + this._firstName +
            "\nОтчество: " + this._middleName +
            "\nДата рождения: " + this._birthDate.toDateString() +
            "\nТип документа: " + this._typeDocument +
            "\nСерия: " + this._documentSeries +
            "\nНомер: " + this._documentNumber);
    };
    return OwnerClass;
}());
var VehicleClass = /** @class */ (function () {
    function VehicleClass(brand, model, year, vin, registrationNumber, owner) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    Object.defineProperty(VehicleClass.prototype, "brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    VehicleClass.prototype.printVehicleInfo = function () {
        console.log("Информация об траснпортном средстве: " +
            " Марка: " + this._brand +
            " Модель:  " + this._model +
            " Год: " + this._year +
            " VIN номер: " + this._vin +
            " Регистрационный номер:" + this._registrationNumber);
    };
    return VehicleClass;
}());
//2 
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Compact"] = "\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439";
    CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
})(CarClass || (CarClass = {}));
var CarClassImpl = /** @class */ (function () {
    function CarClassImpl(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    Object.defineProperty(CarClassImpl.prototype, "brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "bodyType", {
        get: function () { return this._bodyType; },
        set: function (value) { this._bodyType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "carClass", {
        get: function () { return this._carClass; },
        set: function (value) { this._carClass = value; },
        enumerable: false,
        configurable: true
    });
    CarClassImpl.prototype.printVehicleInfo = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
        console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this._vin));
        console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._registrationNumber));
        console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._bodyType));
        console.log("\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this._carClass));
    };
    return CarClassImpl;
}());
var MotorbikeClassImpl = /** @class */ (function () {
    function MotorbikeClassImpl(brand, model, year, vin, registrationNumber, owner, frameType, isForSport) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isForSport = isForSport;
    }
    Object.defineProperty(MotorbikeClassImpl.prototype, "brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "frameType", {
        get: function () { return this._frameType; },
        set: function (value) { this._frameType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "isForSport", {
        get: function () { return this._isForSport; },
        set: function (value) { this._isForSport = value; },
        enumerable: false,
        configurable: true
    });
    MotorbikeClassImpl.prototype.printVehicleInfo = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
        console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this._vin));
        console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._registrationNumber));
        console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._frameType));
        console.log("\u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: ".concat(this._isForSport ? "Да" : "Нет"));
    };
    return MotorbikeClassImpl;
}());
var VehicleStorageImpl = /** @class */ (function () {
    function VehicleStorageImpl(creationDate, vehicles) {
        this._creationDate = creationDate;
        this._vehicles = vehicles;
    }
    Object.defineProperty(VehicleStorageImpl.prototype, "creationDate", {
        get: function () { return this._creationDate; },
        set: function (value) { this._creationDate = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleStorageImpl.prototype, "vehicles", {
        get: function () { return this._vehicles; },
        set: function (value) { this._vehicles = value; },
        enumerable: false,
        configurable: true
    });
    VehicleStorageImpl.prototype.getAllVehicles = function () {
        return this._vehicles;
    };
    return VehicleStorageImpl;
}());
//  1 test
var ownerVehicle = new OwnerClass("Пертов", "Петя", "Петрович", new Date(1999, 10, 5), TypeDocument.Passport, "1337", "123456");
var vehicle = new VehicleClass("AUDI", "RS6", 2022, "1SAH3DFJSDFSOK653", "С777КР", ownerVehicle);
ownerVehicle.printOwnerInfo();
console.log();
vehicle.printVehicleInfo();
console.log();
console.log("------------------------------------------");
// 2
var ownerVehicles = new OwnerClass("Пертов", "Петя", "Петрович", new Date(1999, 10, 5), TypeDocument.Passport, "1337", "123456");
var car = new CarClassImpl("AUDI", "RS6", 2022, "1SAH3DFJSDFSOK653", "С777КР", ownerVehicle, BodyType.Sedan, CarClass.Luxury);
var motorbike = new MotorbikeClassImpl("Mercedes", "G63AMG", 2022, "JH2SC4513KK123456", "В66ОР", ownerVehicles, "Треугольная", true);
car.printVehicleInfo();
console.log();
motorbike.printVehicleInfo();
console.log();
console.log("----------------------------------");
// 3
var ownerAllVehicles = new OwnerClass("Пертов", "Петя", "Петрович", new Date(1999, 10, 5), TypeDocument.Passport, "1337", "123456");
var car1 = new CarClassImpl("AUDI", "RS6", 2022, "1SAH3DFJSDFSOK653", "С777КР", ownerVehicle, BodyType.Sedan, CarClass.Luxury);
var car2 = new CarClassImpl("Mercedes", "G63AMG", 2022, "JH2SC4513KK123456", "В66ОР", ownerAllVehicles, BodyType.Hatchback, CarClass.Luxury);
var motorbike1 = new MotorbikeClassImpl("Honda", "CBR600RR", 2019, "JH2SC4513KK123456", "M123AB", ownerAllVehicles, "Треугольная", true);
var motorbike2 = new MotorbikeClassImpl("Yamaha", "YZF-R1", 2021, "JY1MS4513KK654321", "M789EF", ownerAllVehicles, "Монокок", false);
var carStorage = new VehicleStorageImpl(new Date(), [car1, car2]);
var motorbikeStorage = new VehicleStorageImpl(new Date(), [motorbike1, motorbike2]);
console.log("Автомобили в хранилище:");
carStorage.getAllVehicles().forEach(function (car) { return car.printVehicleInfo(); });
console.log();
console.log("Мотоциклы в хранилище:");
motorbikeStorage.getAllVehicles().forEach(function (motorbike) { return motorbike.printVehicleInfo(); });
