console.log('Loaded!');
//changing the text
var element=document.getElementById('id1');
element.innerHTML="<h1> Hii there the text has been changed by javascript</h1>";
var img=document.getElementById('img-id');
img.onclick=function()
{
  img.leftMargin="100px";  
};