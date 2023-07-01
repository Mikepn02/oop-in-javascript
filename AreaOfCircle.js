class Circle {
    constructor(radius){
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI * Math.pow(this.radius,2)// r^2;

    }
    calculateCircumfrence(){
        return 2*Math.PI * this.radius;
    }
}
const circle = new Circle(7);
console.log("the area of circle is: ",circle.calculateArea());
console.log("the circumfrence of circle is: ",circle.calculateCircumfrence())