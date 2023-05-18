const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const engine = require('express-handlebars');

// ! this below code ensures that this project uses all the files inside static, in other words it joins the static folder the express js server
// ? path.join() : join() is a method which joins the (/ or \) to the path folder/file regardless of any operating system
// ? app.use() : use() is a middleware(a layer of code that sits between the server and the application's logic. It intercepts and processes incoming requests and outgoing responses, allowing for additional functionality and processing. It is commonly used for tasks such as authentication, request parsing, logging, and error handling.)
app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, "routes/blog.js")));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// app.get('/', (req,res)=> {
//     res.sendFile();
// })

app.listen(port, () => {
    console.log("server listening on port 3000");
})