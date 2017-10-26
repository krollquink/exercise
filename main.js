
var myRead = require("./fileReader.js")


myRead(process.argv[2],process.argv[3],function(err,data){
	if(err) {
		console.log("module fileReader failed")
	} 
	for (i=0;i<data.length;i++){
	console.log(data[i]);
	}	
	

});
