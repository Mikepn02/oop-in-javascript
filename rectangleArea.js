class Rectangle {
    constructor(width,length){
        this.length = length;
        this.width = width;
    }
    calculateArea(){
        return this.width * this.length;

    }
    calculateCircumfrence(){
        return 2*(this.width+this.length);
    }
}
const rectangle = new Rectangle(7,10);
console.log("the area of rectangle is: ",rectangle.calculateArea());
console.log("the perimeter of rectangle is: ",rectangle.calculateCircumfrence())