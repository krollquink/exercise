//console.log(process.argv)


var fs = require ('fs');
//
//fs.readFile(process.argv[2],'utf-8',function showfile(err,data){
//	if(err) console.log("my error is your");
//	console.log(data.split('\n').length - 1);
//});  

myfile = fs.readFileSync(process.argv[2],'utf-8');
console.log(myfile.split('\n').length - 1);



//var sum=0
//for(var i=2;i<process.argv.length;i++)
//{
//	sum = sum + parseInt(process.argv[i]);
//}{PPk}
//console.log(sum)
