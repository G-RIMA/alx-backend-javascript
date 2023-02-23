const http = require('http');
const fs = require('fs');


const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const app = http.createServer( async(req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const { url } = req;
  
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
      } catch(error){
        res.end(error.message);
      }
    };
  
  res.statusCode = 404;
  res.end('Not found');
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
