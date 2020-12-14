'use strict';

const server = require('http').createServer((req, res) => {
  req.socket.ref();
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.write(`<!DOCTYPE html><html><head><title>ztest-set-of-services-client</title></head><body><h1>ztest-set-of-services-client</h1></body></html>`);
  res.end(() => req.socket.unref());
});
server.on('connection', (socket) => socket.unref());
server.listen(80);
process.stdout.write('ztest-set-of-services-client is listening\n');
const terminate = () => {
  process.stdout.write('ztest-set-of-services-client is terminating\n');
  server.close(process.exit)
};
process.on('SIGINT', terminate);
process.on('SIGTERM', terminate);
