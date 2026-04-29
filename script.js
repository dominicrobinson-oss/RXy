const NAV_ITEMS=[{slug:'trending',label:'Trending'},{slug:'protein',label:'Protein'},{slug:'supplements',label:'Supplements'},{slug:'vitamins',label:'Vitamins'},{slug:'snacks',label:'Bars, Snacks & Foods'},{slug:'accessories',label:'Accessories'},{slug:'collabs',label:'Collabs'},{slug:'clearance',label:'Clearance'}];

const SUBCATS={
trending:['best-sellers','new-in','limited-edition','seasonal'],
protein:['whey','clear-whey','casein','vegan','blends','bars','snacks','bundles'],
supplements:['creatine','pre-workout','amino-acids','collagen','weight-management','daily-health','performance'],
vitamins:['multivitamins','immunity','omega-3','hair-skin-nails','joint-support','sleep-relaxation'],
snacks:['bars','cookies','crisps','nut-butters','meals','baking'],
accessories:['shakers','bottles','gym-bags','training','yoga-recovery'],
collabs:['holly-b','influencers','limited-edition'],
clearance:['protein','clothing','snacks','seasonal','last-chance']
};

const PAGE_PRODUCTS={
base:['Impact Whey Protein Powder','Clear Whey Isolate','Impact Creatine','Origin Pre-Workout','Collagen Protein Powder','Multivitamin Complex','Protein Cookie','Omega-3 Softgels']
};

function titleCase(slug){return slug.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' ')}
function formatPrice(i){const p=[23.99,24.49,14.99,17.49,19.99,12.99,8.49,15.49][i%8];return p.toFixed(2)}
function formatWas(i){const p=[27.99,28.99,18.99,22.99,24.99,15.99,11.99,19.99][i%8];return p.toFixed(2)}

function getPathMeta(){
  const parts=location.pathname.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
  const cat=parts[0]||'trending';
  const sub=parts[1]||null;
  const catLabel=(NAV_ITEMS.find(n=>n.slug===cat)||{label:titleCase(cat)}).label;
  const pageTitle=sub?`${titleCase(sub)} ${catLabel}`:`${catLabel}`;
  const breadcrumbs=[{label:'Home',href:'/'},{label:catLabel,href:`/${cat}/index.html`}];
  if(sub)breadcrumbs.push({label:titleCase(sub),href:`/${cat}/${sub}/index.html`});
  return{cat,sub,catLabel,pageTitle,breadcrumbs};
}

function renderNav(activeCat){
  const nav=document.getElementById('nav-links');
  nav.innerHTML=NAV_ITEMS.map(n=>`<a class="nav-link" href="/${n.slug}/index.html" ${n.slug===activeCat?'style="text-decoration:underline"':''}>${n.label}</a>`).join('');
}

function renderBreadcrumbs(items){
  const el=document.getElementById('breadcrumbs');
  el.innerHTML=items.map((b,i)=>`${i?'<span>/</span>':''}<a href="${b.href}">${b.label}</a>`).join('');
}

function renderSubcats(cat,sub){
  const wrap=document.getElementById('subcats');
  const list=SUBCATS[cat]||[];
  wrap.innerHTML=list.map(s=>`<a class="subcat-link" href="/${cat}/${s}/index.html" ${sub===s?'style="border-color:#0b4b59;color:#0b4b59"':''}>${titleCase(s)}</a>`).join('');
}

function renderProducts(meta){
  const grid=document.getElementById('product-grid');
  const tag=meta.sub?titleCase(meta.sub):meta.catLabel;
  grid.innerHTML=PAGE_PRODUCTS.base.map((name,i)=>`<article class="card"><div class="card-img">${tag} Product ${i+1}</div><div class="card-body"><h3 class="card-name">${name}</h3><p class="card-meta">${tag} • Placeholder SKU ${1000+i}</p><p class="price">£${formatPrice(i)}</p><p class="was">Was £${formatWas(i)}</p><p class="save">Save £${(parseFloat(formatWas(i))-parseFloat(formatPrice(i))).toFixed(2)}</p><button class="quick">QUICK BUY</button><p class="campaign">UP TO 70% OFF PAYDAY SALE | USE CODE ‘PAYDAY’</p></div></article>`).join('');
}

function renderSeo(meta){
  const h=document.getElementById('seo-title');
  const p=document.getElementById('seo-text');
  h.textContent=`Shop ${meta.pageTitle} at RXy+`;
  p.textContent=`Browse our ${meta.pageTitle.toLowerCase()} range inspired by RXy+-style category navigation. Use filters for flavour, diet and goals, then compare best sellers and latest arrivals.`;
}

function startCountdown(){
  let t=60*60*22+60*18+47;
  const boxes=[...document.querySelectorAll('.count-box b')];
  setInterval(()=>{if(t<0)t=60*60*22+60*18+47;const d=Math.floor(t/86400);const h=Math.floor((t%86400)/3600);const m=Math.floor((t%3600)/60);const s=t%60;[d,h,m,s].forEach((v,i)=>boxes[i]&&(boxes[i].textContent=String(v).padStart(2,'0')));t--;},1000);
}

function ensureLayout(){
  if(document.getElementById('breadcrumbs')) return;
  document.body.innerHTML=`
  <div class="promo"><div class="container"><p>Free standard delivery on £50 spend</p><p>Extra 15% off via App</p></div></div>
  <header class="main-header">
    <div class="container head-top">
      <div class="logo">RXy+</div>
      <div class="tabs"><span class="tab active">NUTRITION</span><span class="tab">CLOTHING</span><span class="tab">BRANDS</span></div>
      <div class="search-icons"><div class="search">Search <small>AI Assistant</small></div><span>👤</span><span>🧺</span></div>
    </div>
    <nav class="nav-strip"><div class="container" id="nav-links"></div></nav>
    <section class="countdown"><div class="container"><p class="countdown-text">24 HOUR EXTENSION | UP TO 70% OFF PAYDAY SALE + EXTRA 20% OFF SUMMER ESSENTIAL SUPPLEMENTS | ENDS IN...</p><div class="count-boxes"><div class="count-box"><b>00</b><span>Days</span></div><div class="count-box"><b>18</b><span>Hours</span></div><div class="count-box"><b>18</b><span>Minutes</span></div><div class="count-box"><b>47</b><span>Seconds</span></div></div></div></section>
  </header>
  <main class="container">
    <nav class="breadcrumbs" id="breadcrumbs"></nav>
    <section class="page-header"><h1 id="page-title"></h1><div class="subcats" id="subcats"></div></section>
    <section class="filter-bar"><select><option>Sort</option><option>Best Sellers</option><option>Price Low-High</option><option>Price High-Low</option></select><select><option>Flavour</option><option>Chocolate</option><option>Vanilla</option><option>Unflavoured</option></select><select><option>Diet</option><option>Vegan</option><option>Vegetarian</option><option>Gluten Free</option></select><button class="filter-btn">More Filters</button></section>
    <section class="grid" id="product-grid"></section>
    <section class="pagination"><button class="page-btn">Prev</button><button class="page-btn active">1</button><button class="page-btn">2</button><button class="page-btn">3</button><button class="page-btn">Next</button></section>
    <section class="seo"><h2 id="seo-title"></h2><p id="seo-text"></p></section>
    <section class="signup"><div><h3>Join 100k+ customers</h3><p>Get 20% off your first order + category specific drops.</p></div><form><input type="email" placeholder="Enter email" /><button type="button">Subscribe</button></form></section>
  </main>
  <footer class="footer"><div class="container"><div class="f-grid"><div class="f-col"><h4 class="f-title">Help & Information</h4><a href="#">Contact us</a><a href="#">Returns</a><a href="#">Delivery</a><a href="#">Track my order</a></div><div class="f-col"><h4 class="f-title">Products</h4><a href="#">Protein</a><a href="#">Activewear</a><a href="#">Snacks</a><a href="#">Nutrition</a><a href="#">Vitamins</a></div><div class="f-col"><h4 class="f-title">Company Information</h4><a href="#">About us</a><a href="#">Sustainability</a><a href="#">Careers</a><a href="#">Accessibility</a></div><div class="f-col"><h4 class="f-title">Loyalty & Rewards</h4><a href="#">Refer a friend</a><a href="#">Earn £15</a><a href="#">Student discounts</a><a href="#">Key worker discounts</a></div></div><div class="f-bottom"><p>© 2026 RXy+ Ltd</p><p>Cookie Settings • EN</p></div></div></footer>`;
}

(function init(){
  ensureLayout();
  const meta=getPathMeta();
  renderNav(meta.cat);
  renderBreadcrumbs(meta.breadcrumbs);
  document.getElementById('page-title').textContent=meta.pageTitle;
  renderSubcats(meta.cat,meta.sub);
  renderProducts(meta);
  renderSeo(meta);
  startCountdown();
})();
