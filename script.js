window.addEventListener('load',function(){setTimeout(function(){document.getElementById('pre').classList.add('off');document.getElementById('pic').classList.add('show')},500)});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-w]').forEach(function(b){b.style.width=b.dataset.w+'%'})}})},{threshold:.2});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
var links=document.querySelectorAll('.menu a');
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px',threshold:0});
document.querySelectorAll('section').forEach(function(s){so.observe(s)});
document.querySelectorAll('[data-copy]').forEach(function(b){b.addEventListener('click',function(){
 var t=b.dataset.copy,done=function(){var x=document.getElementById('toast');x.classList.add('on');setTimeout(function(){x.classList.remove('on')},1500)};
 try{navigator.clipboard.writeText(t).then(done,done)}catch(e){done()}})});
var bt=document.getElementById('burger'),nv=document.getElementById('nav'),sc=document.getElementById('scrim');
function tg(o){nv.classList.toggle('open',o);bt.classList.toggle('x',o);sc.classList.toggle('on',o);bt.setAttribute('aria-expanded',o)}
bt.addEventListener('click',function(){tg(!nv.classList.contains('open'))});
sc.addEventListener('click',function(){tg(false)});
addEventListener('keydown',function(e){if(e.key==='Escape')tg(false)});
document.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',function(){tg(false)})});
/* typewriter */
(function(){var w=['Web Developer'],i=0,j=0,d=false,el=document.getElementById('typed');
function t(){var s=w[i];el.textContent=s.slice(0,j);if(!d&&j===s.length){d=true;return setTimeout(t,1600)}
if(d&&j===0){d=false;i=(i+1)%w.length}j+=d?-1:1;setTimeout(t,d?40:85)}t()})();
/* neon background */
(function(){var c=document.getElementById('bg'),x=c.getContext('2d'),W,H,P=[],m={x:-999,y:-999},k=['255,255,255','255,255,255','255,255,255'],T=0,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;var n=Math.min(85,Math.floor(W*H/17000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,c:k[i%3]})}
addEventListener('resize',function(){if(innerWidth!==W||Math.abs(innerHeight-H)>150)rs()});addEventListener('pointermove',function(e){m.x=e.clientX;m.y=e.clientY},{passive:true});rs();
function fr(){T+=.012;x.clearRect(0,0,W,H);
/* sweeping neon beams */
for(var b=0;b<3;b++){var by=H*(.2+.25*b)+Math.sin(T*1.4+b*2)*H*.08,g=x.createLinearGradient(0,0,W,0),cl=k[b];g.addColorStop(0,'rgba('+cl+',0)');g.addColorStop(.5,'rgba('+cl+',.16)');g.addColorStop(1,'rgba('+cl+',0)');x.strokeStyle=g;x.lineWidth=1.5;x.beginPath();x.moveTo(0,by);for(var q=0;q<=W;q+=40)x.lineTo(q,by+Math.sin(q*.006+T*2+b)*22);x.stroke()}
/* particle network */
for(var a=0;a<P.length;a++){var p=P[a];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
var dx=m.x-p.x,dy=m.y-p.y,dm=Math.hypot(dx,dy);if(dm<160){x.strokeStyle='rgba('+p.c+','+(.5*(1-dm/160))+')';x.lineWidth=1;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(m.x,m.y);x.stroke()}
for(var z=a+1;z<P.length;z++){var o=P[z],d=Math.hypot(p.x-o.x,p.y-o.y);if(d<130){x.strokeStyle='rgba('+p.c+','+(.28*(1-d/130))+')';x.lineWidth=1;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(o.x,o.y);x.stroke()}}
x.fillStyle='rgba('+p.c+',.12)';x.beginPath();x.arc(p.x,p.y,7,0,6.283);x.fill();x.fillStyle='rgba('+p.c+',.95)';x.beginPath();x.arc(p.x,p.y,1.8,0,6.283);x.fill()}
if(!still)requestAnimationFrame(fr)}
fr();})();
