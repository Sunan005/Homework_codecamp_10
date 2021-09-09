### CodeCamp #10
1. Sunan Thurapha
2. แบบฝึกหัด
  2.1 มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs
ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma
  2.2 สร้าง object rabbit ด้วย new keyword
  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
     alert(this.name);
  };

  let rabbit = new Rabbit("Rabbit");

  คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่
    rabbit.sayHi();
    Rabbit.prototype.sayHi();
    Object.getPrototypeOf(rabbit).sayHi();
    rabbit.__proto__.sayHi();