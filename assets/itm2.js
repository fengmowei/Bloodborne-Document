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
  type=geturl("type");
  lines=geturl("lines");
  title=unescape(geturl("title").replace(/\\/g,"%").replace(/\//g,"%"));
  document.title="血源"+[title];
  var xmlhttp=new window.XMLHttpRequest();
  xmlhttp.open("get","text/chn"+"/"+[type]+"_name.xml",false);
  xmlhttp.send(null);
  xmlDoc=xmlhttp.responseXML;
  var namec=xmlDoc.getElementsByTagName("text");
  xmlhttp.open("get","text/chn"+"/"+[type]+"_desc.xml",false);
  xmlhttp.send(null);
  xmlDoc=xmlhttp.responseXML;
  var descc=xmlDoc.getElementsByTagName("text");
  xmlhttp.open("get","text/jap"+"/"+[type]+"_name.xml",false);
  xmlhttp.send(null);
  xmlDoc=xmlhttp.responseXML;
  var namej=xmlDoc.getElementsByTagName("text");
  xmlhttp.open("get","text/jap"+"/"+[type]+"_desc.xml",false);
  xmlhttp.send(null);
  xmlDoc=xmlhttp.responseXML;
  var descj=xmlDoc.getElementsByTagName("text");
  xmlhttp.open("get","text/eng"+"/"+[type]+"_name.xml",false);
  xmlhttp.send(null);
  xmlDoc=xmlhttp.responseXML;
  var namee=xmlDoc.getElementsByTagName("text");
  xmlhttp.open("get","text/eng"+"/"+[type]+"_desc.xml",false);
  xmlhttp.send(null);
  xmlDoc=xmlhttp.responseXML;
  vardesce=xmlDoc.getElementsByTagName("text");
  xmlhttp.open("get","text/chno"+"/"+[type]+"_name.xml",false);
  xmlhttp.send(null);
  xmlDoc=xmlhttp.responseXML;
  var nameco=xmlDoc.getElementsByTagName("text");
  xmlhttp.open("get","text/chno"+"/"+[type]+"_desc.xml",false);
  xmlhttp.send(null);
  xmlDoc=xmlhttp.responseXML;
  var descco=xmlDoc.getElementsByTagName("text");
  frm=document.getElementsByClassName("frame")[0];
  for(var i=0;i<[lines];i++){
    document.getElementById("content").appendChild(frm.cloneNode(true));
    document.getElementsByClassName("icon")[i].firstChild.src="icons/"+[type]+"/"+[i]+".png";
    document.getElementsByClassName("chn")[i].childNodes[0].innerHTML=namec[i].childNodes[0].nodeValue.replace(/##/,"<i>未采用</i>");
    document.getElementsByClassName("chn")[i].childNodes[1].firstChild.innerHTML="<p>"+descc[i].childNodes[0].nodeValue.replace(/\n/g,"</p><p>")+"</p>";
    document.getElementsByClassName("jap")[i].childNodes[0].innerHTML=namej[i].childNodes[0].nodeValue.replace(/##/,"<i>未使用</i>");
    document.getElementsByClassName("jap")[i].childNodes[1].firstChild.innerHTML="<p>"+descj[i].childNodes[0].nodeValue.replace(/\n/g,"</p><p>")+"</p>";
    document.getElementsByClassName("eng")[i].childNodes[0].innerHTML=namee[i].childNodes[0].nodeValue.replace(/##/,"<i>UNUSED</i>");
    document.getElementsByClassName("eng")[i].childNodes[1].firstChild.innerHTML="<p>"+desce[i].childNodes[0].nodeValue.replace(/\n/g, "</p><p>") + "</p>";
    document.getElementsByClassName("chno")[i].childNodes[0].innerHTML=nameco[i].childNodes[0].nodeValue.replace(/##/, "<i>未采用</i>");
    document.getElementsByClassName("chno")[i].childNodes[1].firstChild.innerHTML="<p>"+descco[i].childNodes[0].nodeValue.replace(/\n/g,"</p><p>")+"</p>";
  }
  document.getElementById("content").removeChild(document.getElementsByClassName("frame")[i]);
  document.getElementById([type]).setAttribute("class","mainitm");
  document.getElementById("content").setAttribute("class","content"+" game");
}