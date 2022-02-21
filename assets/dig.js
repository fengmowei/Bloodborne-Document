document.onscroll=function(){
  document.getElementById("pagel").style.width=(window.pageYOffset/(document.body.scrollHeight-window.innerHeight))*100+"%";
}
window.onload=function(){
  function geturl(urlid){
    var reg=new RegExp("(^|&)"+urlid+"=([^&]*)(&|$)","i");
    var r=window.location.search.substr(1).match(reg);
    return unescape(r[2]);
  }
  game=geturl("game");
  npc=geturl("npc");
  lines=geturl("lines");
  title=unescape(geturl("title").replace(/\\/g,"%").replace(/\//g,"%"));
  document.title="血源"+"对话";
  document.getElementsByClassName("icon")[0].firstChild.setAttribute("src","icons/dialogue"+"/"+npc+".jpg");
  document.getElementsByClassName("title")[0].firstChild.innerHTML=title;
  var xmlhttp=new window.XMLHttpRequest();
  xmlhttp.open("get","text/chn"+"/dialogue/"+[npc]+".xml",false);
  xmlhttp.send(null);
  xmlc=xmlhttp.responseXML;
  xmlhttp.open("get","text/jap"+"/dialogue/"+[npc]+".xml",false);
  xmlhttp.send(null);
  xmlj=xmlhttp.responseXML;
  xmlhttp.open("get","text/eng"+"/dialogue/"+[npc]+".xml",false);
  xmlhttp.send(null);
  xmle=xmlhttp.responseXML;
  xmlhttp.open("get","text/chno"+"/dialogue/"+[npc]+".xml",false);
  xmlhttp.send(null);
  xmlco=xmlhttp.responseXML;
  var nline=document.createElement("p");
  for(var i=0;i<[lines];i++){
  var bmsgc=xmlc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
  var descc=bmsgc.replace(/\n/g,"<br>").replace(/##/,"");
  var printc=document.getElementsByClassName("chn")[0].firstChild.appendChild(nline.cloneNode(true));
  if(bmsgc.indexOf("##")!==-1){printc.setAttribute("class","uud")}
  printc.innerHTML=descc;
  var bmsgj=xmlj.getElementsByTagName("text")[i].childNodes[0].nodeValue;
  var descj=bmsgj.replace(/\n/g,"<br>").replace(/##/,"");
  var printj=document.getElementsByClassName("jap")[0].firstChild.appendChild(nline.cloneNode(true));
  if(bmsgj.indexOf("##")!==-1){printj.setAttribute("class","uud")}
  printj.innerHTML=descj;
  var bmsge=xmle.getElementsByTagName("text")[i].childNodes[0].nodeValue;
  var desce=bmsge.replace(/\n/g,"<br>").replace(/##/,"");
  var printe=document.getElementsByClassName("eng")[0].firstChild.appendChild(nline.cloneNode(true));
  if(bmsge.indexOf("##")!==-1){printe.setAttribute("class","uud")}
  printe.innerHTML=desce;
  var bmsgco=xmlco.getElementsByTagName("text")[i].childNodes[0].nodeValue;
  var descco=bmsgco.replace(/\n/g,"<br>").replace(/##/,"");
  var printe=document.getElementsByClassName("chno")[0].firstChild.appendChild(nline.cloneNode(true));
  if(bmsge.indexOf("##")!==-1){printe.setAttribute("class","uud")}
  printe.innerHTML=descco;
  }
  document.getElementById("dialogue").setAttribute("class","mainitm");
}