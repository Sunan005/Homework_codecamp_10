### CodeCamp #10
1. Sunan Thurapha
2. แบบฝึกหัด
  2.1  จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา
        function f() {
          alert( this ); // ?
        }
        let user = {
          g: f.bind(null)
        };
        user.g();
  2.2  ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
       let obj2 = new obj.constructor();
      
         