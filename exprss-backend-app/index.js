const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());


const USERS = [];

const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];


const SUBMISSION = [

]  

app.post('/signup', (req, res) => {
  // Your signup logic here
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

  // Your signup logic here
  const {email, password}= req.body;

  // const existingUser = USERS.find(user => user.email === email);
  
  // if (!existingUser) {
  //   USERS.push({ email, password });
  // }
  console.log(req.body);

  res.send(200);
  
  
});

// app.post('/login', function(req, res) {
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same


  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client


//   res.send('Hello World from route 2!')
// })

// app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  // res.send("Hello World from route 3!")
// })

// app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  // res.send("Hello World from route 4!")
// });


// app.post("/submissions", function(req, res) {
   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  // res.send("Hello World from route 4!")
// });

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
});