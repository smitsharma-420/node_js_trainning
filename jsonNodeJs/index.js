const fs = require("fs");

const biodata = {
  name: "Smit",
  surname: "Sharma",
  age: 21,
  bloodgroup: "O+",
};

// create Json data
const jsonData = JSON.stringify(biodata);

// push in the new file
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("Done ✅");
});

// read the data of another file
fs.readFile("json1.json", "utf-8", (err, data) => {
  // Make it original data
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});
