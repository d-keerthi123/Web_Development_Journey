//factory function
// function person(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hello , my name is ${this.name} `);
//         },
//     };
//     return person;
// }
// let p1=person("keerthi",20);

//Constructors -- doesn't return anything and start with Capital letter
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.talk=function(){
//     console.log(`Hello , my name is ${this.name} `);
// }
// let p1=new Person("keerthi",20);

//classes
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi , my name is ${this.name}`);
    }
}
let p1=new Person("keerthi",20);

//Inheritance
class Student extends Person{
    constructor(name,age,marks){
        super(name,age);//parent class constructor is being called
        this.marks=marks;
    }
    greet(){
        console.log("Hello");
    }
}
let s1=new Student("keerthi",20,100);