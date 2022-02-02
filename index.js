const Http = require("http")
const fs = require("fs")

// const onRequest = (request, response) => {
//     response.writeHead(200, {"Content-Type": "text/html"})
//     fs.readFile("./index.html", null, (err, data) => {
//      if (err) {
//         response.writeHead(400)
//         response.write("File not found")
//     } else{
//         response.data()
//     }
//     response.end()
// }

// const PORT = 7777

// console.log(`Server is running in port: ${PORT}`)
// Http.createServer(onRequest).listen(PORT)

console.log('Server will listen at :  127.0.0.1:3000 ');
Http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': "text/html"});
    fs.readFile("./index.html", null, (err, data) => {
        if (err) {
            res.writeHead(400)
            res.write("File not found")
        } else{
            res.write(data)
        }
        res.end()
    })
	// let json_response = {
	// 	status : 200 , 
	// 	message : 'Sukses' , 
	// 	result : [ 'Senin' , 'Selasa' , 'Rabu' , 'Kamis' ] , 
	// 	code : 2000
	// }
	// console.log('Server Running');
	// res.end( JSON.stringify(json_response) ); 
}).listen(3000);
