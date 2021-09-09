### CodeCamp #10
1. Sunan Thurapha
2. แบบฝึกหัด
  2.1 Lab 1
	ให้สร้าง web server โดยใช้ express โดยสร้างตาม lab ในบทเรียนเรื่อง Node.js
  
  2.2 Lab 2
	ให้สร้าง API โดยใช้ express เพื่อจัดการ resource product ทั้งหมด
    - สร้าง, ลบ, แก้ไข, อ่านค่า product โดยให้ response return ออกมาเป็น JSON
    ในรูปแบบ { message: 'Create Product', method: '...' } โดย method ต้องถูกต้องตาม http request method

  2.3 Lab 3
    จาก lab 2 ให้สร้างไฟล์เก็บจำนวนครั้งที่มีการ request ไป และเวลาที่เรียกใช้แต่ละ endpoint  โดยใน response ให้ส่งข้อมูลจำนวนครั้งออกมาด้วย
  
  
  2.4 Lab 4
    จงเขียน code เพื่อจัดการ path และ method ที่ไม่เจอบน server โดยให้ return response เป็น { message: 'Page not found on this server' }

  2.5 Lab 5
    จากผลลัพธ์ใน lab 3 ให้ refactor code โดยใช้ Router-level middleware

  2.6 Lab 6
      ให้สร้าง server เพื่อรับ request path: /dog method: get แล้วให้ return ค่า random dog ออกมา 1 รูป โดยทำตามเงื่อนไขดังนี้
    - ดึงข้อมูลจาก dog api โดยใช้ axios
    - สร้าง Error-handling middleware เพื่อจัดการ error ที่อาจเกิดขึ้น

  


