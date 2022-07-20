const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    response.end("<html><body><h1>Welcome to the World Wide Web!</h1></body></html>");
  });
}

/* Se va in listening poi il test non fa uscire da "jest"
createApp().listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
*/

module.exports = createApp;