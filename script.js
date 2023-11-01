// 1. class movie to hold the requirements given

class Movie {
    constructor(title, studio, rating="PG") {
        this.mvTitle = title;
        this.mvStudio = studio;
        this.mvRating = rating;
    }
    get PG() {
        if (this.mvRating === "PG") {
            return `${this.mvTitle} ${this.mvStudio} ${this.mvRating}`
        }
    }
}

const instance = new Movie("Casino Royale", "Eon productions", "PG13");
const instance1 = new Movie("Royale", "Eon");
const instance2 = new Movie("Casino", "productions", "PG17");
console.log(instance.PG,instance1.PG,instance2.PG);

// 2. class circle - convert uml to typescript class

class Circle{
    constructor(radius,color) {
        this.radius = radius;
        this._color = color;
    }
    get radiusCircle() {
        return this.radius
    }
    set radiusCircle(r) {
        this.radius = r;
    }
    get color() {
        return this._color
    }
    set color(c) {
        this._color = c;
    }
    get tostring() {
        return `"Circle[radius=${this.radius}, color=${this._color}]"`
    }
    get area() {
        return Math.PI * Math.pow(this.radius,2)
    }
    get circumference() {
        return 2 * Math.PI * this.radius
    }

}

const cir = new Circle(2.2, "red");
console.log(cir.radiusCircle);
console.log(cir.color);
console.log(cir.tostring);
console.log(cir.area);
console.log(cir.circumference);

// 3. write a person class to hold all the details

class Person {
    constructor(name,age,gender,maritalStatus) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }
}

const obj = new Person("Kuzhali", 26, "Female", "Married");
console.log(obj.name, obj.age, obj.gender, obj.maritalStatus, "'write a person class to hold all the details'");

// 4. write a class to calculate the uber price.

class Uber {
    constructor(km) {
        this.km = km;
        this._price = 25;
    }
    get price() {
        return this.km * this._price;
    }
}

const cus = new Uber(4);
console.log(cus.price);
const cus1 = new Uber(10);
console.log(cus1.price);