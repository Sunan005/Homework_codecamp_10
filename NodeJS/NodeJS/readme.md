### CodeCamp #10
1. Sunan Thurapha
2. แบบฝึกหัด
  2.1 Lab 1
	ให้สร้าง web server โดยเมื่อรับ request ที่ path
    - / ให้ render <h1>Welcome To My Website</h1>
    - /home ให้ render <h1>This is home page</h1>
    - หาก path ไม่ตรงข้อ 1, 2 ให้ render <h1>Page Not Found</h1> โดยใช้
    - response status code ให้ถูกต้องตามหลักการ

  2.2 Lab 2
	จาก lab 1 ให้ เขียน html code ที่จะ render แบบแยกไฟล์ เช่น path / ให้ render ไฟล์ index.html, path /home ให้ render ไฟล์ home.html หากไม่เจอ path ให้ render ไฟล์ notfound.html
  
  2.3 Lab 3
	ให้สร้าง web server โดยเมื่อรับ request ที่ path
    - / ให้ render <a>login</a> และ  <a>register</a>
    - เมื่อ click login ให้ redirect ไปที่ path /login, click register ไปที่ path /register
    - หน้า login ให้สร้าง form login หน้า register ให้ สร้าง form register เมื่อ submit form ให้  redirect ไปที่ path /submit-login และ /submit-register ตามลำดับ โดย method ใน form ให้ส่งแบบ post โดยให้ response ให้ redirect ไปที่ path /
    - method และ path ต้องถูกต้องหากไม่ถูก ให้ render <h1>Not Found</h1>

  2.4 Lab 4
	ให้สร้าง web server โดยเมื่อรับ request ที่ path ต่าง ๆ ดังนี้
    - /login method POST, /register method POST, /user method GET, /user method PUT
    /user method DELETE
    - ให้ response ส่งข้อมูลกลับไปในรูปแบบ json
    response ส่งข้อมูลอยู่ในรูปแบบ { path: 'login', method: 'POST' } โดย path และ method มีค่าตามข้อมูลในข้อ 1
    - หาก path และ method ไม่ตรงในข้อ 1 ให้ response ส่ง ข้อมูล { message: 'path not found on this server' } และส่ง status code 404
