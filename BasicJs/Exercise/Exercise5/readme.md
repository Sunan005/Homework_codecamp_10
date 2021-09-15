# CodeCamp #10
## Sunan thurapha
1.  "Exercise ตัวดำเนินการแบบตรรกะ
    -  คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
        alert( null || 2 || undefined ); <br/>
        alert( alert(1) || 2 || alert(3) );<br/>
        alert( 1 && null && 2 );<br/>
        alert( alert(1) && alert(2) );<br/>
        alert( null || 2 && 3 || 4 );<br/>
    - เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60
    - เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60
    - คำสั่ง alert ไหนที่จะถูกรันบ้าง
    if (-1 || 0) alert( 'first' );
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 0) alert( 'third' );
    - ให้เขียนระบบ login
        - ให้ใช้ prompt ในการถามใครเป็นคน login
        - ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
        - วิธีเช็ค Password
        - ถ้า string นั้นเป็น “codecamp#5” ให้ alert “ยินดีต้อนรับ”
        - ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”
        - ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”
        - ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”
        - ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”
        "