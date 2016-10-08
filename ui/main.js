console.log('Loaded!');
//changing the text
var element=document.getElementById('id1');
element.innerHTML="<h1> Hii there the text has been changed by javascript</h1>";
var img=document.getElementById('img-id');
var pos=0;
function shiftRight(){
  pos+=2;
  img.style.marginLeft=pos+'px';
}
img.onclick=function(){
var interval=img.setInterval(shiftRight,50);
};