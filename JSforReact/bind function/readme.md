# CodeCamp #10
## Sunan thurapha
1. แบบฝึกหัด
  1. lab  this มีค่าเป็นอะไร
    function f() {
        alert( this ); // ?
    }
    let user = {
        g: f.bind(null)
    };
    user.g();
     
   2. lab  ผลลัพธ์ที่ได้คืออะไร
      function f() {
        alert(this.name);
      }
    
      f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
    
      f();
    
   3. lab  ค่าของ value ในฟังก์ชันจะเปลี่ยนไปไหมหลังจาก bind
      function sayHi() {
        alert( this.name );
      }
      sayHi.test = 5;
  
      let bound = sayHi.bind({
        name: "John"
      });
  
      alert( bound.test );