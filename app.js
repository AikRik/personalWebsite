const express = require("express")
const app = express()


// app.get('/', function (request, response) {  
// 	response.send('your very first server. good work!');
// });

app.use(express.static('./', {
    index: 'wolf.html'
}));

// // app.get('/page2', function (request, response) {  
// // 	response.send('your very first server. good work!');
// // });

app.listen(3003, function(){
	console.log("Server is listening at port 3003")
})

// app.use(express.static("./"))


