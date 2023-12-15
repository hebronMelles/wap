const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '';

  switch (req.url) {
    case '/image':
      filePath = path.join(__dirname, '../wap');
      sendFileResponse(filePath, 'image/jpeg', res);
      break;

    case '/pdf':
      filePath = path.join(__dirname, 'path/to/your/document.pdf');
      sendFileResponse(filePath, 'application/pdf', res);
      break;

    case '/home':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to my website');
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
  }
});

function sendFileResponse(filePath, contentType, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
