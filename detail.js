var buttons = document.getElementById('buttonscon');
var htmlcon = document.getElementById('htmlcon');
var csscon = document.getElementById('csscon');
var resultcon = document.getElementById('center');

let getparam = (a,e) => { return e||(e=window.location.href),new URL(e).searchParams.get(a)};

var btnjson = WebScrapper.fetchjson('https://api.cssbuttons.io/buttons/').buttons[getparam('id')];
let username = btnjson.username;
let friendlyId = btnjson.friendlyId;
  var limit = 20;
  let html = btnjson.html;
  let cls = `p${btnjson.username}-${btnjson.friendlyId}`;
  let css = WebScrapper.fetchjson('https://api.cssbuttons.io/buttons/detail/'+username+'/'+friendlyId+'').css;



htmlcon.innerText = html;
csscon.innerText = css;
resultcon.classList.add(cls);
resultcon.innerHTML = html+'<style>'+css+'</style>';

