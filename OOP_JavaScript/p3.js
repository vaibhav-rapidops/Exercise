class Rectangle{ 
  constructor(width,length)
  {   this.width=width;
      this.length=length;
  } 
  area(){
    let result=(this.width)*(this.length);
    return result;
  }
  static shape(){//  static method call by only class
      return "this is a Rectangle";
  }
}
Rectangle.prototype.perimeter=function(){// perimeter method added to rectange class using Rectangle.prototype 
return 2*(this.width + this.length);
}
class Square extends Rectangle{ //class Inheritnace
 constructor(length){
          super();
          this.length=length;
}      
 area(){  //method overriding          
      return this.length**2;
  }
 perimeter(){
      return 4*this.length;
  }

  static shape(){
      return "this is a square";
  }
 }

 class Volume{  // apply concept of overloading
constructor(){} // defualt constructor if not defined then autometaclity created
volume(length){  // 1 parameter but method name same in this class
return length**3;
}
volume(length,width,height) {  // 3 parameter
return length*width*height;    
    }
 }
// we cannot achive the method overloading in the javscript 
let a=new Rectangle(4,5);
let b=new Square(5);
let c=new Volume();
console.log(Rectangle.shape());
console.log("Area of Rectangle :"+a.area());
console.log("Perimeter of Rectangle :"+a.perimeter());
console.log(Square.shape());
console.log("Area of Square :"+b.area());
console.log("Perimeter Square :"+b.perimeter());
console.log("Volume of shape using method overloading");
console.log("volume of Square :"+c.volume(5));
console.log("volume of Rectangle :"+c.volume(4,5,6));
