var buttons = document.getElementById('buttonscon');
var btnjson = WebScrapper.fetchjson('https://api.cssbuttons.io/buttons/').buttons;
var limit = btnjson.length;

for (let i = 0; i < limit; i++) {
  let html = btnjson[i].html;
  let cls = `p${btnjson[i].username}-${btnjson[i].friendlyId}`;
  let css = btnjson[i].scopedCss;

  let btnhtml = `
  <div class="center ">
   <div class="card ${cls}">
   <center>
      <div class="card-body text-center">
      
        <p class="card-text"></p>
        <div class="playground card__button-container">
        ${html}
        <style>${css}</style>
        </div>
        
        
      </div>
      <div class="card-footer">
      <a href="detail.html?id=${i}" class="btn btn-primary">Get</a>
      </div>
    </center>
    </div>
  </div>
  `;
  buttons.insertAdjacentHTML('beforeend',btnhtml);
}

let getparam = (a,e) => { return e||(e=window.location.href),new URL(e).searchParams.get(a)};
