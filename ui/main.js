console.log('Loaded!');
//changing the text
var element=document.getElementById('id1');
element.innerHTML="<h1> Hii there the text has been changed by javascript</h1>";
var img=document.getElementById('img-id');
var pos=-600;
function shiftRight(){
  pos+=2;
  img.style.marginLeft=pos+'px';
  if(pos>600)
  {
      pos=-600;
  }
}
img.onclick=function(){
var interval=setInterval(shiftRight,50);
};