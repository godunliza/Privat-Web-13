/***********************************************/
function Animal() {
  
   this.eat=function(){
     console.log("Mmmm")
   }
   this.sleep=function(){
    console.log("Zzzz...")

  }
}

/***********************************************/
function WildAnimal() {
  Animal.apply(this, arguments);
   this.stillChicken=function(){

    console.log("Chicken was stollen!")
   }
  }
  
   function Pet() {
    Animal.apply(this, arguments);
    this.stillSausage=function(){
     console.log("Sausage was stollen!")
    }
   }
/***********************************************/

   function Wolf() {
    WildAnimal.apply(this, arguments);
    this.hawlAtTheMoon=function(){
     console.log("Mooon!")
    }
   }
/***********************************************/

   function Fox() {
    WildAnimal.apply(this, arguments);
    this.EatColoboc=function(){
     console.log("Coloboc was eaten!")
    }
   }
/***********************************************/

   function Cat() {
    Pet.apply(this, arguments);
    this.SleeponKeyboard=function(){
     console.log("ZZZZzzzzz.......skjvbdjvbffhbeuio")
    }


   }
   function Dog() {
    Pet.apply(this, arguments);
    this.Bark=function(){
     console.log("Woof!");
    }
  }
/***********************************************/

  var YourckshireTerrier=new Dog();
  YourckshireTerrier.Bark();
  YourckshireTerrier.stillSausage();
  YourckshireTerrier.eat();



/*Полифил функции bind */



//!!!!В названии  к полифилам добавлена 1 ,чтобы проверить их работоспособность

/***********************************************************************************************/

if (!Function.prototype.bind1) {

  Function.prototype.bind1=function(thisArg){
/*Полифил для функции every.*/
  var func=
  return this;
}
}





this.x = 9;

var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81
var getX = module.getX;
getX(); // 9, поскольку в этом случае this ссылается на глобальный объект

// создаём новую функцию с this, привязанным к module
var boundGetX = getX.bind1(module);
console.log(boundGetX); // 81

