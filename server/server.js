const express = require('express');
const path = require('path');
const { NodeSSH } = require('node-ssh');
const app = express();
const port = 3000;

// Middleware để parse JSON
app.use(express.json());

// Phục vụ các file static từ thư mục build của React
app.use(express.static(path.join(__dirname, '..', 'login', 'build')));

// API đăng nhập
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  // Dữ liệu mẫu để xác thực (nên thay thế bằng cơ sở dữ liệu thật)
  const validUser = 'admin';
  const validPassword = '123456';

  if (username === validUser && password === validPassword) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
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
  res.sendFile(path.join(__dirname, '..', 'login', 'build',  'index.html'));
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
