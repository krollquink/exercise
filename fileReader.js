

var fs = require('fs');
var path = require('path');


var myRead= function(directory,fileType,callback){

	fs.readdir(directory, function pwd(err,data){
	if(err) return  callback(err);

	var check = "." + fileType;
	var fileList = [];
	for(var i = 0;i<data.length;i++){
		if(path.extname(data[i]) == check)
		//fileList.push(data[i]);		
		fileList.push(data[i]);

	}
	callback(null,fileList);
})
};


//function fileExtension(){
//	//fs.path.posix
//	console.log(process.argv[3])
//};

module.exports = myRead;
