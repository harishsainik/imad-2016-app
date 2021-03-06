var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
	'article-one':{
	title:'article -one || Harish saini\'s app',
	referrer:`<a href="/article-two">Next page<a><br>
		 <a href="/article-three">last page<a><br>`,
	date:' 1st october,2016',
	heading: 'Article-one (modified)',
	content:`<p>
					A text editor is a type of program used for editing plain text files.
					Such programs are sometimes known as "notepad" software, following the Microsoft Notepad.
					Text editors are provided with operating systems and software development packages,
					and can be used to change configuration files,
					documentation files and programming language source code.
				</p>	
				<p>
				
					Word processors were developed to allow formatting of text for presentation on a printed page, 
					while text produced by text editors is generally used for other purposes, 
					such as input data for a computer program.
				</p>`
},
	'article-two':{
	title:'article -two || Harish saini\'s app',
	referrer:`<a href="/article-three">Next page<a><br>
		 <a href="/article-one">previous page<a><br>`,
	date:' 1st october,2016',
	heading: 'Article-two (modified)',
	content:`<p>
					A text editor is a type of program used for editing plain text files.
					Such programs are sometimes known as "notepad" software, following the Microsoft Notepad.
					Text editors are provided with operating systems and software development packages,
					and can be used to change configuration files,
					documentation files and programming language source code.
				</p>	
				<p>
				
					Word processors were developed to allow formatting of text for presentation on a printed page, 
					while text produced by text editors is generally used for other purposes, 
					such as input data for a computer program.
				</p>`
},
	'article-three':{
	title:'article -one || Harish saini\'s app',
	referrer:`<a href="/article-one">First page<a><br>
		 <a href="/article-two">previous page<a><br>`,
	date:' 1st october,2016',
	heading: 'Article-three (modified)',
	content:`<p>
					A text editor is a type of program used for editing plain text files.
					Such programs are sometimes known as "notepad" software, following the Microsoft Notepad.
					Text editors are provided with operating systems and software development packages,
					and can be used to change configuration files,
					documentation files and programming language source code.
				</p>	
				<p>
				
					Word processors were developed to allow formatting of text for presentation on a printed page, 
					while text produced by text editors is generally used for other purposes, 
					such as input data for a computer program.
				</p>`
}};
function createTemplate(data){
	var title=data.title;
	var ref=data.referrer;
	var date=data.date;
	var heading=data.heading;
	var content=data.content;
	var htmlTemplate=`
<html>
	<head>
		<title>
		${title}
		</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link href="/ui/style.css" rel="stylesheet"/>
	</head>
	<body>
		<div class="article">
			<div>
				<a href="/">Home<a><br>
				${ref}
			</div>
			<hr/>
			<h4> ${date} </h4>
			<h2> ${heading}</h2>
			<div>
				${content};
			</div>
		</div>
	</body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName',function(req,res){
	articleName=req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
