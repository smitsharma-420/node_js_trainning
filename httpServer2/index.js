const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    // Make an internal request to the /userApi endpoint
    http
      .get("http://localhost:8000/userApi", (apiRes) => {
        let data = "";
        // Collect the data from the API
        apiRes.on("data", (chunk) => {
          data += chunk;
        });
        // Once all data is received, process it
        apiRes.on("end", () => {
          // Parse the JSON data from the API
          const employees = JSON.parse(data).Employees; // Generate HTML content with employee cards
          let employeeCards = `<html><body><h1>Employee List</h1><div style="display: flex; flex-wrap: wrap;">`;
          employees.forEach((employee) => {
            employeeCards += ` <div style="border: 1px solid #ccc; padding: 20px; margin: 10px; width: 250px; border-radius: 5px;"> <h2>${employee.preferredFullName}</h2> <p><strong>Job Title:</strong> ${employee.jobTitleName}</p> <p><strong>Email:</strong> ${employee.emailAddress}</p> <p><strong>Phone:</strong> ${employee.phoneNumber}</p> <p><strong>Region:</strong> ${employee.region}</p> </div>`;
          });``
          employeeCards += `</div></body></html>`;
          // Send the generated HTML response to the home page
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(employeeCards);
        });
      })
      .on("error", (err) => {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Internal Server Error: Could not fetch data</h1>");
      });
  } else if (req.url == "/about") {
    res.end("Hello from the AboutUS Side");
  } else if (req.url == "/contact") {
    res.end("Hello from the ContactUS Side");
  } else if (req.url == "/userApi") {
    fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log(data);
      res.end(data);
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 error pages. Page Not Found </h1>");
  }
});

server.listen(8000, () => {
  console.log("Listening to the  port  no 8000");
});
