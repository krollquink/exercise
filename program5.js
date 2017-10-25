

var fs = require('fs')
var path = require('path')
function read(callback){
fs.readdir(process.argv[2], function pwd(err,data){
	if(err)  return console.log(err)
	console.log(data)

});
};
function fileExtension(){
	//fs.path.posix
	console.log(process.argv[3])
};

read(fileExtension);
