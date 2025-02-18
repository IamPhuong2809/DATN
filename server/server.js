const express = require('express');
const jwt = require("jsonwebtoken");
const path = require('path');
//const { NodeSSH } = require('node-ssh');
const app = express();
const port = 3000;

// Middleware để parse JSON
app.use(express.json());

// Tìm file trong thư mục public trước
app.use(express.static(path.join(__dirname, 'public')));

// Nếu không tìm thấy trong public, sẽ tìm trong thư mục build
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Thêm SECRET_KEY
const SECRET_KEY = "28092003"; // Nên đặt trong biến môi trường

// API đăng nhập
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  const validUser = 'mphuong';
  const validPassword = '2809';

  if (username === validUser && password === validPassword) {
    // Tạo payload với nhiều thông tin hơn
    const userPayload = {
      username: username,
      name: "Phuong",
      email: "nminhphuong2809@gmail.com",
      avatar: "/images/Logo_ACIS.png"
    };
    
    const token = jwt.sign(userPayload, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ 
      success: true, 
      token,
      user: userPayload 
    });
  } else {
    res.status(401).json({ 
      success: false, 
    });
  }
});

// app.post('/api/login', async (req, res) => {
//     const { command } = req.body;
//     const ssh = new NodeSSH();

//     try {
//         await ssh.connect({
//             host: '192.168.100.220', // IP thiết bị nhúng
//             username: 'haotran',
//             password: '300503',
//         });

//         const result = await ssh.execCommand(command);
//         console.log('Output:', result.stdout);

//         ssh.dispose();
//         res.json({ success: true, output: result.stdout });
//     } catch (error) {
//         console.error('SSH Error:', error);
//         res.json({ success: false, error: error.message });
//     }
// });

// Xử lý tất cả các route khác và trả về index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
