var buttons = document.getElementById('buttonscon');
var btnjson = WebScrapper.fetchjson('https://api.cssbuttons.io/buttons/').buttons;
var btnhtml = '';
for (let i = 0; i < btnjson.length; i++) {
  btnhtml = `
  
  <div class="col-sm-6">
  <div class="card p${btnjson[i].username}-${btnjson[i].friendlyId}" style="width: 18rem;">
  
  <div class="card-body">
    ${btnjson[i].html}<style>${btnjson[i].scopedCss}</style>
  </div>
</div>
</div>

  `;
  buttons.insertAdjacentHTML('beforeend',btnhtml);
}


