var http = require("http");

http.get('http://nodejs.org/dist/index.json',function showHeader(res){
//	console.log(res);
	const contentType = res.headers['content-type'];
	console.log(res.statusCode);
	const { statusCode } = res;
	let error 
	if( statusCode !== 200 )	{
		
	}

	res.setEncoding('utf8');
  	let rawData = '';
	  res.on('data', (chunk) => { rawData += chunk; });
	  res.on('end', () => {
	    try {
	      const parsedData = JSON.parse(rawData);
	      console.log(parsedData);
	    } catch (e) {
	      console.error(e.message);
	    }
	  });
	}).on('error', (e) => {
	  console.error(`Got error: ${e.message}`);


	
});
