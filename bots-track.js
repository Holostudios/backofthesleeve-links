/* Back of the Sleeve analytics: GoatCounter, cookieless, no personal data. Events are sent as name@/page. window.botsTrack("name"). Add ?bots_test=1 to label hits as tests. */
(function(){var d=document,w=window,L=location,s=d.currentScript,E=(s&&s.dataset.gc)||"https://backofthesleeve.goatcounter.com/count",
T=/[?&]bots_test=1/.test(L.search)?"bots-test:":"",done={};
if(navigator.webdriver||/bot|crawl|spider|headless/i.test(navigator.userAgent)||L.protocol=="file:"||/^(localhost|127\.)/.test(L.hostname))return;
try{if(localStorage.getItem("skipgc")=="t")return}catch(e){}
function hit(p,ev){var o={p:T+p,r:ev?"":d.referrer,t:ev?L.pathname:d.title,e:ev?1:"",s:screen.width,q:ev?"":L.search,rnd:Math.random().toString(36).slice(2,7)},a=[],k;
for(k in o)if(o[k]!=="")a.push(k+"="+encodeURIComponent(o[k]));var u=E+"?"+a.join("&");
if(!(navigator.sendBeacon&&navigator.sendBeacon(u)))(new Image).src=u}
function ev(n,once){n=String(n).slice(0,120);if(once){if(done[n])return;done[n]=1}hit(n+"@"+L.pathname,1)}
w.botsTrack=ev;hit(L.pathname||"/",0);
var th=[25,50,75,100];
addEventListener("scroll",function(){var h=d.documentElement,p=100*(h.scrollTop+h.clientHeight)/Math.max(1,h.scrollHeight);
th.forEach(function(t){if(p>=(t==100?98:t))ev("scroll_"+t,1)})},{passive:true});
d.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("[data-track]");if(a&&a.tagName!="FORM"&&a.dataset.track!="signup")ev(a.dataset.track)},true);
d.addEventListener("change",function(e){var a=e.target;if(a.dataset&&a.dataset.track&&/SELECT|INPUT/.test(a.tagName))ev(a.dataset.track)},true);
d.addEventListener("submit",function(e){var f=e.target,v=f.dataset&&f.dataset.track;if(v)ev(v=="signup"?"newsletter_signup":v)},true);
d.addEventListener("click",function(e){var p=e.target.closest&&e.target.closest(".vplayer[data-vid]");if(p&&e.target.closest(".play"))ev(p.classList.contains("docked")?"floating_player_play":"watch_click:"+p.dataset.vid)},true);
d.addEventListener("play",function(e){if(e.target.closest&&e.target.closest("[data-track=floating_player_play],.floating-player,#floating-player,[data-floating-player]"))ev("floating_player_play",1)},true);
})();