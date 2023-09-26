const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());


const USERS = [];

const QUESTIONS = [
  {
    id:1,
    difficulty:"easy",
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
},

{
  id:2,
  title: "SAAAA states",
  difficulty:"easy",
  description: "Given an array , return the maximum of the array?",
  testCases: [{
    
      input: "[1,2,3,4,5]",
      output: "5"
  }]
}


];


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

  var existingUser = USERS.find(user => user.email === email);
  
  if (!existingUser) {
    USERS.push({ email, password });
  }
  console.log(USERS);

  res.send(200);
  
  
});

app.post('/login', function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  const {email, password}= req.body;
  if(email && password){
    var existingUser = USERS.find(user => user.email === email)
    if(existingUser){
      if(existingUser.password === password){
        
        var token = Date.now()
        res.status(200).json({ message: 'Login successful', token });
        console.log("Login successful");
      }
      else {
        console.log("incorrect password");
        return res.status(401).json({ message: 'Incorrect password' });
        
      }
    }
    else{
      console.log("User not found");
    return res.status(401).json({ message: 'User not found' });

    }
  }
  else {
    console.log("Enter Details");
    return res.status(401).json({ message: 'Details not provided' });
  }
 
})

app.get('/questions', function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

  // return the user all the questions in the QUESTIONS array
  return res.json(QUESTIONS);
})
app.get('/questions/:id', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");


  const id = parseInt(req.params.id);
  console.log(id);
  const question = QUESTIONS.find(q => q.id === id);

  if (!question) {
    return res.status(404).json({ error: 'Question not found' });
  }

  res.json(question);
});


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
