

var fs = require('fs')
var path = require('path')
function read(callback){
fs.readdir(process.argv[2], function pwd(err,data){
	if(err)  return console.log(err)
//	console.log(data)
	var check = "." + process.argv[3]
//	console.log(check)
	for(var i = 0;i<data.length;i++){
		if(path.extname(data[i]) == check)
			 console.log(data[i])

	}
});
};
function fileExtension(){
	//fs.path.posix
	console.log(process.argv[3])
};

read(fileExtension);
