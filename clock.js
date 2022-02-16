function shyam(){
  var date=new Date();
  var min =date.getMinutes();
  var hou=date.getHours();
  var sec=date.getSeconds();
  // var x=document.write(hou+": "+min+": "+sec+":")
  document.getElementById('cl').innerHTML=hou+": "+min+": "+sec;

}
setInterval(shyam,1000)
shyam()