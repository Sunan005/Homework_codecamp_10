# CodeCamp #10
## Sunan thurapha
1. แบบฝึกหัด
   1.  ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร

    let animal = {
      jumps: null
    };

    let rabbit = {
      __proto__: animal,
      jumps: true
    };
    
    alert( rabbit.jumps ); // ? (1)

    delete rabbit.jumps;

    alert( rabbit.jumps ); // ? (2)

    delete animal.jumps;

    alert( rabbit.jumps ); // ? (3)
   
   2. ใช้ __proto__ ในการกำหนด prototype object ดังนี้ 
		pockets → bed → table → head.
  
   3.  การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป

    let animal = {
      eat() {
        this.full = true;
      }
    };

    let rabbit = {
      __proto__: animal
    };

    rabbit.eat();

    4. การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี 
    let hamster = {
      stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
    };

    let speedy = {
      __proto__: hamster
    };

    let lazy = {
      __proto__: hamster
    };




