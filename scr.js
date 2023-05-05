class Animal{
    constructor(name,age){
      this._name=name;
      this._age=age;
    }
  
    getAge(){
      return this._age;
    }
  
    getInfo(){
      return `Name: ${this._name}, Age: ${this._age}`;
    }
}
  
class Dog extends Animal{
    static legsCount=4;  
    constructor(name,age){
      super(name,age);
    }
    bark(){
      return "Woof!";
    }
    getInfo(){
      return `${super.getInfo()}, Legs: ${Dog.legsCount}`;
    }
}
class GuideDog extends Dog{
    #isTrained;
    constructor(name,age,isTrained){
      super(name,age);
      this.#isTrained=isTrained;
    }
  
    leadBlind(){
      return "Following the guide dog";
    }
  
    getInfo(){
      return `${super.getInfo()}, Legs: ${Dog.legsCount}, Trained: ${this.#isTrained}`;
    }
}
const myGuideDog=new GuideDog("Buddy",5,true);
console.log(myGuideDog.getInfo());
console.log(Dog.legsCount);
console.log(myGuideDog.bark());