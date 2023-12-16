const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/image') {
    const imagePath = '/Users/hebronmelles/Desktop/wap/wap/images/IMG_4773.jpg';

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data);
      }
    });
  }
  if (req.url === '/pdf'){
    const pdfPath = '/Users/hebronmelles/Desktop/wap/wap/lab11/pdf/lesson11-1NodeJsIntro.pdf';
    fs.readFile(pdfPath, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'pdf' });
        res.end(data);
      }
    });
  }
  else if (req.url === '/home') {
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to my website');
  } 


});

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
