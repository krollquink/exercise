

var fs = require('fs')
var path = require('path')
var ext = "." + process.argv[3]

fs.readdir(process.argv[2], function pwd(err,data){
	if(err)  return console.log(err)
//	console.log(data)
	var check = "." + process.argv[3]
//	console.log(check)
//	data.forEach(function(err,files)){
//		if(err)return console.log("error")	
	for(var i=0;i<data.length;i++){
		if(path.extname(data[i]) == ext)
			 console.log(data[i])
	}

	
});

