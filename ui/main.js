console.log('Loaded!');
//changing the text
var element=document.getElementById('id1');
element.innerHTML="<h1> Hii there the text has been changed by javascript</h1>";
var img=document.getElementById('img-id');
var pos=-1000;
function shiftRight(){
  pos+=2;
  img.style.marginLeft=pos+'px';
  if(pos>1000)
  {
      pos=-1000;
  }
}
var mouseover=0;
img.onmouseover=function()
{
    if(mouseover%5===0)
  alert('click the image to move and stop');  
};
var count=0;
var interval;
img.onclick=function(){
count+=1;
if(count%2===1)
    interval=setInterval(shiftRight,50);
else
    clearInterval(interval);
};