import{n as e}from"./rolldown-runtime.WkwZ5CU-.js";import{t}from"./react.CmU_e8vp.js";import{c as n,i as r}from"./site.BoAGQqev.js";var i=e(t(),1),a=n(),o={aurora:{style:`streak`,colors:[`#f4efe9`,`#e9c2b8`,`#c2433f`,`#2a1e2a`,`#22395e`,`#6f97c2`,`#e5edf4`],scale:.7,warp:1.4,angle:-.62,gloss:.18,veins:0},ember:{style:`marble`,colors:[`#07090c`,`#16252c`,`#3d5f68`,`#1a1416`,`#a3201a`,`#ef4a2b`,`#ff8a5c`],scale:.62,warp:3.2,angle:-.5,gloss:.55,veins:.6},dusk:{style:`marble`,colors:[`#120c18`,`#3e2850`,`#8f6c9c`,`#2b1a24`,`#b3502f`,`#eab08a`,`#fbe7d2`],scale:.75,warp:3.6,angle:.8,gloss:.5,veins:.5},glacier:{style:`streak`,colors:[`#f7f8fa`,`#d9e2ea`,`#9fb4c7`,`#e8edf2`,`#bccbd8`,`#ffffff`],scale:.7,warp:1.6,angle:.35,gloss:.25,veins:0},verdant:{style:`marble`,colors:[`#070b08`,`#173024`,`#4f7a5a`,`#141812`,`#a7843a`,`#e9cf87`,`#fbf3d6`],scale:.7,warp:3.4,angle:2.1,gloss:.5,veins:.5}};function s(e){let t=e.trim().replace(/^#/,``);t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);let n=/^[0-9a-f]{6}$/i.test(t)?parseInt(t,16):8421504;return[n>>16&255,n>>8&255,n&255]}function c(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function l(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}function u(e){let t=c(e),n=new Uint8Array(512),r=new Float32Array(512),i=[];for(let e=0;e<256;e++)i.push(e);for(let e=255;e>0;e--){let n=Math.floor(t()*(e+1)),r=i[e];i[e]=i[n],i[n]=r}for(let e=0;e<512;e++)n[e]=i[e&255];for(let e=0;e<256;e++){let n=t()*Math.PI*2;r[e*2]=Math.cos(n),r[e*2+1]=Math.sin(n)}let a=(e,t)=>{let i=Math.floor(e),a=Math.floor(t),o=e-i,s=t-a,c=i&255,l=a&255,u=n[c+n[l]]*2,d=n[c+1+n[l]]*2,f=n[c+n[l+1]]*2,p=n[c+1+n[l+1]]*2,m=r[u]*o+r[u+1]*s,h=r[d]*(o-1)+r[d+1]*s,g=r[f]*o+r[f+1]*(s-1),_=r[p]*(o-1)+r[p+1]*(s-1),v=o*o*o*(o*(o*6-15)+10),y=s*s*s*(s*(s*6-15)+10);return m+v*(h-m)+y*(g-m+v*(_-g-h+m))};return(e,t,n)=>{let r=0,i=.5;for(let o=0;o<n;o++){r+=i*a(e,t);let n=1.6*e+1.2*t+7.1;t=-1.2*e+1.6*t+3.3,e=n,i*=.5}return r}}function d(e,t,n,r){let i=Math.max(1,Math.round(e)),a=Math.max(1,Math.round(t)),o=n.colors.length>=2?n.colors:[`#111111`,`#eeeeee`],l=o.map((e,t)=>({t:t/(o.length-1),c:s(e)})),d=n.scale??.7,f=n.warp??3,p=n.gloss??.4,m=n.veins??0,h=n.style===`streak`,g=u(r*977+13),_=c(r+1),v=_()*50,y=_()*50,b=(n.angle??0)+(_()-.5)*.5,x=Math.cos(b),S=Math.sin(b),C=Math.min(i,a),w=Math.ceil(i/2)+3,T=Math.ceil(a/2)+3,E=new Float32Array(w*T),D=new Float32Array(w*T),O=new Float32Array(i*a),k=new Float32Array(i*a),A=new Uint8ClampedArray(i*a*4),j=0,M=e=>{for(let t=0;t<w;t++){let n=((t-1)*2-i/2)/C,r=((e-1)*2-a/2)/C,o=(n*x-r*S)*d,s=(n*S+r*x)*d;h&&(o*=.14,s*=2.2),o+=v,s+=y;let c=g(o,s,3),l=g(o+5.2,s+1.3,3),u=g(o+f*c+1.7,s+f*l+9.2,3),p=g(o+f*c+8.3,s+f*l+2.8,3);E[e*w+t]=g(o+f*u,s+f*p,4),D[e*w+t]=Math.sqrt(c*c+l*l)}},N=()=>{let e=(e,t,n,r)=>(-e+9*t+9*n-r)/16,t=new Float32Array(i*T);for(let n=0;n<T;n++){let r=n*w;for(let a=0;a<i;a++){let o=(a>>1)+1;t[n*i+a]=a&1?e(E[r+o-1],E[r+o],E[r+o+1],E[r+o+2]):E[r+o]}}for(let n=0;n<a;n++){let r=(n>>1)+1;for(let a=0;a<i;a++){O[n*i+a]=n&1?e(t[(r-1)*i+a],t[r*i+a],t[(r+1)*i+a],t[(r+2)*i+a]):t[r*i+a];let o=(a>>1)+1,s=D[r*w+o],c=a&1?(s+D[r*w+o+1])/2:s,l=n&1?a&1?(D[(r+1)*w+o]+D[(r+1)*w+o+1])/2:D[(r+1)*w+o]:c;k[n*i+a]=(c+l)/2}}},P=()=>{let e=[],t=Math.max(1,Math.floor(O.length/4096));for(let n=0;n<O.length;n+=t)e.push(O[n]);e.sort((e,t)=>e-t);let n=e[Math.floor(e.length*.02)],r=1/(e[Math.floor(e.length*.98)]-n||1),o=r*C*.012;for(let e=0;e<a;e++)for(let t=0;t<i;t++){let s=e*i+t,c=(O[s]-n)*r;c=c<0?0:c>1?1:c;let u=1;for(;u<l.length-1&&l[u].t<c;)u++;let d=l[u-1],f=l[u],h=(c-d.t)/(f.t-d.t||1);h=h<0?0:h>1?1:h,h=h*h*(3-2*h);let g=(O[t<i-1?s+1:s]-O[t>0?s-1:s])*o,_=(O[e<a-1?s+i:s]-O[e>0?s-i:s])*o,v=(-g*-.55-_*-.65+.52)/Math.sqrt(g*g+_*_+1),y=(v>0?v:0)**24*p*255,b=1+.035*Math.sin(c*150+k[s]*24),x=m*Math.max(0,1-Math.abs(k[s]-.42)*14)*.6,S=(.82+.28*v)*b*(1-x);A[s*4]=(d.c[0]+(f.c[0]-d.c[0])*h)*S+y,A[s*4+1]=(d.c[1]+(f.c[1]-d.c[1])*h)*S+y,A[s*4+2]=(d.c[2]+(f.c[2]-d.c[2])*h)*S+y,A[s*4+3]=255}};return{width:i,height:a,pixels:A,step:e=>{if(j>=T)return!0;let t=Math.min(T,j+Math.max(1,e));for(;j<t;)M(j++);return j<T?!1:(N(),P(),!0)}}}function f(e,t){return t<=1?0:e/(t-1)*2-1}var p=e=>typeof e==`string`?o[e]:e,m=new Map,h=[],g=!1;function _(){if(g)return;g=!0;let e=()=>{let t=performance.now()+7;for(;h.length&&performance.now()<t;){let e=h[0];if(e.job.step(4)){h.shift();let t=document.createElement(`canvas`);t.width=e.job.width,t.height=e.job.height,t.getContext(`2d`)?.putImageData(new ImageData(e.job.pixels,t.width,t.height),0,0),e.done(t)}}h.length?requestAnimationFrame(e):g=!1};requestAnimationFrame(e)}function v(e,t,n,r,i){let a=JSON.stringify([e,t,n,r]),o=m.get(a);return o||(o=new Promise(a=>{let o=h.length;for(;o>1&&h[o-1].priority>i;)o--;h.splice(o,0,{job:d(n,r,e,t),priority:i,done:a}),_()}),m.set(a,o)),o}function y({art:e,seed:t,w:n,h:r,density:o,priority:s,className:c}){let l=i.useRef(null),[u,d]=i.useState(!1),f=p(e),m=JSON.stringify(f),h=Math.round(n*o),g=Math.round(r*o);return i.useEffect(()=>{let e=!0;return d(!1),v(JSON.parse(m),t,h,g,s).then(t=>{let n=l.current;e&&n&&(n.width=t.width,n.height=t.height,n.getContext(`2d`)?.drawImage(t,0,0),d(!0))}),()=>{e=!1}},[m,t,h,g,s]),(0,a.jsx)(`canvas`,{ref:l,"aria-hidden":`true`,className:c,"data-ready":u||void 0,style:{width:n,height:r,maxWidth:`none`}})}var b=340,x=54,S=272,C=184,w=`M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z`,T=`M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z`,E=4,D=[{name:`Cover — final`,meta:`PNG · 4.8 MB`,art:`ember`},{name:`Moodboard`,meta:`24 images`,art:`dusk`},{name:`Brief.pdf`,meta:`PDF · 1.2 MB`}];function O({label:e=`My Files`,meta:t,tone:n=`light`,art:r=`aurora`,seed:o=3,image:s,fabricClass:u,files:d=D,action:p=`add`,onAdd:m,onFilesChange:h,menu:g=[],labelPlacement:_=`bottom-left`,open:v,defaultOpen:O=!1,filesInteractive:A=!1,onOpenChange:j,onFileSelect:M,width:N=340,appear:P=!0,appearDelay:ee=0,className:F,style:te}){let I=i.useId().replace(/:/g,``),L=i.useRef(null),R=i.useRef(null),z=i.useRef(null),B=i.useRef(null),V=i.useRef(null),[H,ne]=i.useState(d),U=i.useRef(d.map((e,t)=>t)),re=i.useRef(d.length),[W,ie]=i.useState(null),[G,ae]=i.useState(0),[oe,se]=i.useState(O),K=v??oe,q=i.useCallback(e=>{v===void 0&&se(e),j?.(e)},[v,j]),[J,Y]=i.useState(!1),[ce,le]=i.useState(!P),X=N/b,ue=Math.min(1.5,Math.max(1,typeof window>`u`?1:window.devicePixelRatio||1))*X;i.useEffect(()=>{if(!P)return;let e=L.current;if(!e||typeof IntersectionObserver>`u`){le(!0);return}let t=0,n=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(n.disconnect(),t=window.setTimeout(()=>le(!0),ee))},{threshold:.25});return n.observe(e),()=>{n.disconnect(),window.clearTimeout(t)}},[P,ee]),i.useEffect(()=>{let e=L.current;if(!e)return;let t=0,n=0,r=0,i=()=>{t=0,e.style.setProperty(`--gf-px`,n.toFixed(3)),e.style.setProperty(`--gf-py`,r.toFixed(3))},a=a=>{if(a.pointerType===`touch`)return;let o=e.getBoundingClientRect();n=(a.clientX-o.left)/o.width*2-1,r=(a.clientY-o.top)/o.height*2-1,t||=requestAnimationFrame(i)},o=()=>{n=0,r=0,t||=requestAnimationFrame(i)};return e.addEventListener(`pointermove`,a),e.addEventListener(`pointerleave`,o),()=>{e.removeEventListener(`pointermove`,a),e.removeEventListener(`pointerleave`,o),cancelAnimationFrame(t)}},[]),i.useEffect(()=>{R.current?.toggleAttribute(`inert`,!K&&!A)},[K,A]),i.useEffect(()=>{if(!K&&!J)return;let e=e=>{e.key===`Escape`&&(J?(Y(!1),B.current?.focus()):(q(!1),z.current?.focus()))},t=e=>{let t=e.target;J&&!V.current?.contains(t)&&!B.current?.contains(t)&&Y(!1),K&&!J&&!L.current?.contains(t)&&q(!1)};return document.addEventListener(`keydown`,e),document.addEventListener(`pointerdown`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`pointerdown`,t)}},[K,J,q]),i.useEffect(()=>{J&&V.current?.querySelector(`[role=menuitem]`)?.focus()},[J]);let de=()=>{let e=m?.(H)||{name:`Untitled `+(H.length+1),meta:`Just now`},t=[...H,e],n=re.current++;U.current=[...U.current,n],ne(t),ie(n),ae(e=>e+1),h?.(t)},fe=[{label:K?`Close folder`:`Open folder`,onSelect:()=>q(!K)},...g],pe=e=>{let t=Array.from(V.current?.querySelectorAll(`[role=menuitem]`)??[]),n=t.indexOf(document.activeElement),r=n=>{e.preventDefault(),t[(n+t.length)%t.length]?.focus()};e.key===`ArrowDown`?r(n+1):e.key===`ArrowUp`?r(n-1):e.key===`Home`?r(0):e.key===`End`?r(t.length-1):e.key===`Tab`&&Y(!1)},Z=Math.max(0,H.length-E),Q=H.slice(Z),$=H.length,me=t??$+($===1?` item`:` itens`);return(0,a.jsxs)(`div`,{ref:L,className:`gf-root`+(F?` `+F:``),"data-tone":n,"data-open":K||void 0,"data-entered":ce||void 0,"data-place":_,style:{width:N,height:326*X,...te},children:[(0,a.jsx)(`style`,{children:k}),(0,a.jsx)(`div`,{className:`gf-stage`,style:{transform:`translateY(`+x*X+`px) scale(`+X+`)`},children:(0,a.jsxs)(`div`,{className:`gf-tilt`,children:[(0,a.jsx)(`div`,{className:`gf-shadow`,"aria-hidden":`true`}),(0,a.jsxs)(`div`,{className:`gf-back`,style:{clipPath:`path('`+w+`')`},"aria-hidden":`true`,children:[u?(0,a.jsx)(`div`,{className:`gf-fabric `+u}):s?(0,a.jsx)(`img`,{className:`gf-art`,src:s,alt:``,width:364,height:296,draggable:!1}):r===`none`?null:(0,a.jsx)(y,{className:`gf-art`,art:r,seed:o,w:364,h:296,density:ue,priority:0}),(0,a.jsx)(`div`,{className:`gf-back-sheen`})]}),(0,a.jsx)(`svg`,{className:`gf-rim gf-back-rim`,viewBox:`0 0 340 272`,"aria-hidden":`true`,children:(0,a.jsx)(`path`,{d:w})}),(0,a.jsxs)(`div`,{className:`gf-front`+(G?` gf-front--bump`:``),style:{clipPath:`path('`+T+`')`},children:[(0,a.jsx)(`div`,{className:`gf-tint`,"aria-hidden":`true`}),(0,a.jsx)(`div`,{className:`gf-spec`,"aria-hidden":`true`}),(0,a.jsxs)(`svg`,{className:`gf-rim gf-front-rim`,viewBox:`0 0 340 198`,"aria-hidden":`true`,children:[(0,a.jsx)(`defs`,{children:(0,a.jsxs)(`linearGradient`,{id:`gf-rim-`+I,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,a.jsx)(`stop`,{offset:`0`,stopColor:`#fff`,stopOpacity:`0.95`}),(0,a.jsx)(`stop`,{offset:`0.35`,stopColor:`#fff`,stopOpacity:`0.35`}),(0,a.jsx)(`stop`,{offset:`1`,stopColor:`#fff`,stopOpacity:`0.12`})]})}),(0,a.jsx)(`path`,{d:T,stroke:`url(#gf-rim-`+I+`)`})]}),(0,a.jsx)(`button`,{ref:z,type:`button`,className:`gf-hit`,"aria-expanded":K,"aria-label":(K?`Fechar `:`Abrir `)+e+`, `+$+($===1?` item`:` itens`),onClick:()=>{Y(!1),q(!K)}}),(0,a.jsxs)(`div`,{className:`gf-label`,children:[(0,a.jsx)(`span`,{className:`gf-title`,children:e}),(0,a.jsx)(`span`,{className:`gf-meta`,children:me},me)]})]},G),(0,a.jsx)(`div`,{ref:R,className:`gf-files`,role:`list`,"aria-label":e+` — conteúdo`,children:Q.map((e,t)=>{let n=U.current[Z+t],r=f(t,Q.length),i=c(l(e.name)+n),o=!!(e.art||e.image),s=(0,a.jsxs)(a.Fragment,{children:[o?e.image?(0,a.jsx)(`img`,{className:`gf-sheet-art`,src:e.image,alt:``,width:S,height:C,draggable:!1}):(0,a.jsx)(y,{className:`gf-sheet-art`,art:e.art,seed:l(e.name)%997,w:S,h:C,density:Math.min(ue,1.25),priority:1}):(0,a.jsxs)(`span`,{className:`gf-lines`,"aria-hidden":`true`,children:[(0,a.jsx)(`i`,{style:{width:`86%`}}),(0,a.jsx)(`i`,{style:{width:`92%`}}),(0,a.jsx)(`i`,{style:{width:`64%`}}),(0,a.jsx)(`i`,{style:{width:`88%`}}),(0,a.jsx)(`i`,{style:{width:`42%`}})]}),(0,a.jsxs)(`span`,{className:`gf-sheet-head`,children:[(0,a.jsx)(`span`,{className:`gf-sheet-name`,children:e.name}),e.meta?(0,a.jsx)(`span`,{className:`gf-sheet-meta`,children:e.meta}):null]})]}),u={className:`gf-sheet`+(o?` gf-sheet--art`:``)+(n===W?` gf-sheet--drop`:``),style:{"--gf-slot":r,"--gf-depth":Q.length-1-t,"--gf-jx":((i()-.5)*10).toFixed(2)+`px`,"--gf-jr":((i()-.5)*3.2).toFixed(2)+`deg`,zIndex:t+1},onAnimationEnd:n===W?()=>ie(null):void 0};return(0,a.jsx)(`div`,{role:`listitem`,className:`gf-sheet-slot`,children:e.href?(0,a.jsx)(`a`,{...u,href:e.href,onClick:()=>M?.(e,Z+t),children:s}):(0,a.jsx)(`button`,{...u,type:`button`,onClick:()=>M?.(e,Z+t),children:s})},n)})}),p===`none`?null:(0,a.jsx)(`button`,{ref:B,type:`button`,className:`gf-key gf-key--`+p,"aria-label":p===`add`?`Add a file to `+e:`More options for `+e,"aria-haspopup":p===`more`?`menu`:void 0,"aria-expanded":p===`more`?J:void 0,"aria-controls":p===`more`?`gf-menu-`+I:void 0,onClick:()=>p===`add`?de():Y(e=>!e),children:p===`add`?(0,a.jsx)(`svg`,{className:`gf-glyph gf-glyph--plus`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,a.jsx)(`path`,{d:`M12 4.5v15M4.5 12h15`})},G):(0,a.jsxs)(`svg`,{className:`gf-glyph gf-glyph--more`,viewBox:`0 0 30 12`,"aria-hidden":`true`,children:[(0,a.jsx)(`rect`,{x:`1`,y:`1.5`,width:`8`,height:`9`,rx:`3.4`}),(0,a.jsx)(`rect`,{x:`11`,y:`1.5`,width:`8`,height:`9`,rx:`3.4`}),(0,a.jsx)(`rect`,{x:`21`,y:`1.5`,width:`8`,height:`9`,rx:`3.4`})]})}),p===`more`?(0,a.jsx)(`div`,{ref:V,id:`gf-menu-`+I,role:`menu`,"aria-label":e+` options`,className:`gf-menu`,"data-open":J||void 0,onKeyDown:pe,children:fe.map((e,t)=>(0,a.jsx)(`button`,{type:`button`,role:`menuitem`,tabIndex:J?-1:void 0,disabled:!J,className:`gf-menu-item`+(e.danger?` gf-menu-item--danger`:``),onClick:()=>{Y(!1),B.current?.focus(),e.onSelect?.()},children:e.label},e.label+t))}):null]})})]})}var k=`
.gf-root {
  --gf-px: 0;
  --gf-py: 0;
  --gf-ease: cubic-bezier(.2, .8, .2, 1);
  --gf-spring: cubic-bezier(.34, 1.36, .5, 1);
  --gf-hinge: 0deg;
  --gf-lift: 42px;
  --gf-spread: 0px;
  --gf-fan: 0deg;
  --gf-stack: 15px;
  --gf-ink: #27170e;
  --gf-ink-soft: rgba(39, 23, 14, .6);
  position: relative;
  display: inline-block;
  flex: none;
  vertical-align: top;
  font-family: var(--font, ui-sans-serif, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  isolation: isolate;
}
.gf-root[data-tone="dark"] { --gf-ink: #f5f2f0; --gf-ink-soft: rgba(239, 235, 233, .65); }
/* Ao passar o mouse as folhas sobem o bastante para ler e clicar em cada título */
.gf-root:hover, .gf-root:focus-within { --gf-hinge: -16deg; --gf-lift: -62px; --gf-spread: 10px; --gf-fan: 1.2deg; --gf-stack: 31px; }
.gf-root[data-open] { --gf-hinge: -24deg; --gf-lift: -96px; --gf-spread: 40px; --gf-fan: 5deg; --gf-stack: 30px; }

.gf-stage { position: absolute; left: 0; top: 0; width: 340px; height: 272px; transform-origin: 0 0; }
.gf-tilt {
  position: absolute; inset: 0;
  transform: perspective(1400px) rotateX(calc(var(--gf-py) * -3deg)) rotateY(calc(var(--gf-px) * 4deg));
  transition: transform .9s var(--gf-ease);
}

.gf-shadow {
  position: absolute; left: 18px; right: 18px; bottom: -6px; height: 60px; border-radius: 40px;
  background: rgba(16, 18, 24, .34); filter: blur(22px);
  transform: translateX(calc(var(--gf-px) * -8px));
  transition: transform .9s var(--gf-ease), opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-shadow { background: rgba(0, 0, 0, .62); }

.gf-back { position: absolute; inset: 0; overflow: hidden; background: linear-gradient(180deg, #f3f3f4 0%, #e3e3e6 100%); }
.gf-root[data-tone="dark"] .gf-back { background: linear-gradient(180deg, #2a2a2e 0%, #121214 100%); }
/* Bespoke: tecido no painel de trás, com leve parallax */
.gf-fabric {
  position: absolute; inset: -12px;
  transform: translate(calc(var(--gf-px) * -7px), calc(var(--gf-py) * -6px));
  transition: transform 1.1s var(--gf-ease);
}
.gf-art {
  position: absolute; left: -12px; top: -12px; max-width: none; object-fit: cover;
  transform: translate(calc(var(--gf-px) * -7px), calc(var(--gf-py) * -6px)) scale(1.02);
  transition: transform 1.1s var(--gf-ease), opacity 1.2s var(--gf-ease), filter 1.2s var(--gf-ease);
}
canvas.gf-art { opacity: 0; filter: blur(14px) saturate(.6); }
canvas.gf-art[data-ready] { opacity: 1; filter: none; }
.gf-back-sheen {
  position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .22) 0%, rgba(255, 255, 255, 0) 22%),
    radial-gradient(120% 80% at 80% 0%, rgba(255, 255, 255, .16), rgba(255, 255, 255, 0) 60%);
  pointer-events: none;
}

.gf-rim { position: absolute; left: 0; top: 0; max-width: none; overflow: visible; pointer-events: none; fill: none; }
.gf-back-rim { width: 340px; height: 272px; }
.gf-back-rim path { stroke: rgba(255, 255, 255, .45); stroke-width: 1; }
.gf-root[data-tone="dark"] .gf-back-rim path { stroke: rgba(255, 255, 255, .16); }

.gf-files { position: absolute; inset: 0; z-index: 5; pointer-events: none; clip-path: inset(-400px -400px 10px -400px); }
.gf-sheet-slot { display: contents; }
.gf-sheet {
  all: unset; box-sizing: border-box; position: absolute; left: 34px; top: 96px; width: 272px; height: 184px;
  border-radius: 16px; overflow: hidden; cursor: pointer; pointer-events: auto;
  background: linear-gradient(180deg, #ffffff 0%, #f4f0ec 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .1), 0 10px 26px -8px rgba(10, 12, 20, .28);
  transform-origin: 50% 100%;
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1))
    rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));
  transition:
    transform .75s var(--gf-spring) calc(var(--gf-depth) * 40ms),
    box-shadow .4s var(--gf-ease),
    translate .9s var(--gf-ease),
    opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-sheet { background: linear-gradient(180deg, #2c2c30 0%, #1c1c1f 100%); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .14), 0 0 0 .5px rgba(255, 255, 255, .08), 0 12px 28px -8px rgba(0, 0, 0, .7); }
.gf-sheet--art { background: #1a1a1d; }
.gf-root:hover .gf-sheet:hover,
.gf-root[data-open] .gf-sheet:hover,
.gf-root .gf-sheet:focus-visible {
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 18px))
    rotate(calc(var(--gf-slot) * var(--gf-fan) * .6));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .1), 0 22px 40px -12px rgba(10, 12, 20, .42);
  transition-delay: 0s;
}
.gf-sheet:focus-visible { outline: 2px solid #a8854a; outline-offset: 2px; }
.gf-sheet-art { position: absolute; left: 0; top: 0; width: 272px; height: 184px; max-width: none; object-fit: cover; transition: opacity .9s var(--gf-ease), filter .9s var(--gf-ease); }
canvas.gf-sheet-art { opacity: 0; filter: blur(10px); }
canvas.gf-sheet-art[data-ready] { opacity: 1; filter: none; }
.gf-sheet--art::after {
  content: ""; position: absolute; inset: 0; border-radius: inherit;
  background: linear-gradient(180deg, rgba(0, 0, 0, .42) 0%, rgba(0, 0, 0, 0) 34%);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2); pointer-events: none;
}
.gf-sheet-head {
  position: absolute; left: 14px; right: 14px; top: 17px; z-index: 1;
  display: flex; align-items: baseline; justify-content: space-between; gap: 10px; white-space: nowrap;
}
.gf-sheet-name { overflow: hidden; text-overflow: ellipsis; font-size: 12.5px; font-weight: 600; letter-spacing: -.005em; color: #27170e; }
.gf-sheet-meta { flex: none; font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace; font-size: 10px; letter-spacing: .02em; color: rgba(39, 23, 14, .5); }
.gf-root[data-tone="dark"] .gf-sheet-name, .gf-sheet--art .gf-sheet-name { color: #fafafa; }
.gf-root[data-tone="dark"] .gf-sheet-meta, .gf-sheet--art .gf-sheet-meta { color: rgba(250, 250, 250, .66); }
.gf-lines { position: absolute; left: 14px; right: 14px; top: 46px; display: flex; flex-direction: column; gap: 9px; }
.gf-lines i { display: block; height: 5px; border-radius: 3px; background: rgba(24, 24, 27, .08); }
.gf-lines i:first-child { height: 9px; margin-bottom: 4px; background: rgba(24, 24, 27, .14); }
.gf-root[data-tone="dark"] .gf-lines i { background: rgba(255, 255, 255, .08); }
.gf-root[data-tone="dark"] .gf-lines i:first-child { background: rgba(255, 255, 255, .16); }

.gf-sheet--drop { animation: gf-drop .85s var(--gf-ease) both; }
@keyframes gf-drop {
  0% { translate: 0 -190px; rotate: -9deg; opacity: 0; }
  35% { opacity: 1; }
  72% { translate: 0 10px; rotate: 1deg; }
  100% { translate: 0 0; rotate: 0deg; opacity: 1; }
}

.gf-front {
  position: absolute; left: 0; top: 74px; width: 340px; height: 198px; z-index: 10;
  -webkit-backdrop-filter: blur(22px) saturate(1.5);
  backdrop-filter: blur(22px) saturate(1.5);
  transform-origin: 50% 100%;
  transform: perspective(760px) rotateX(var(--gf-hinge));
  transition: transform .8s var(--gf-spring), translate 1s var(--gf-ease), opacity 1s var(--gf-ease);
}
.gf-front--bump { animation: gf-bump .7s var(--gf-ease) .38s both; }
@keyframes gf-bump {
  0% { scale: 1; }
  35% { scale: 1.018 .975; }
  70% { scale: .996 1.006; }
  100% { scale: 1; }
}
.gf-tint { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .5) 42%, rgba(252, 252, 252, .93) 100%); }
.gf-root[data-tone="dark"] .gf-tint { background: linear-gradient(180deg, rgba(18, 18, 20, .18) 0%, rgba(14, 14, 16, .62) 46%, rgba(8, 8, 10, .94) 100%); }
.gf-spec {
  position: absolute; inset: 0;
  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .5), rgba(255, 255, 255, 0) 70%);
  mix-blend-mode: soft-light; opacity: .9; transition: background-position .6s var(--gf-ease); pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-spec { mix-blend-mode: screen; opacity: .16; }
.gf-front-rim { width: 340px; height: 198px; }
.gf-front-rim path { stroke-width: 2.4; transition: stroke-width .3s var(--gf-ease); }
.gf-root[data-tone="dark"] .gf-front-rim { opacity: .55; }

.gf-hit { all: unset; position: absolute; inset: 0; z-index: 1; cursor: pointer; }
.gf-hit:focus-visible ~ .gf-label .gf-title { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
.gf-front:has(.gf-hit:focus-visible) .gf-front-rim path { stroke-width: 5; }

.gf-label { position: absolute; z-index: 2; display: flex; flex-direction: column; gap: 4px; max-width: 280px; pointer-events: none; color: var(--gf-ink); }
.gf-root[data-place="bottom-left"] .gf-label { left: 28px; bottom: 32px; }
.gf-root[data-place="top-left"] .gf-label { left: 28px; top: 34px; }
.gf-root[data-place="top-right"] .gf-label { right: 32px; top: 52px; align-items: flex-start; }
.gf-title { font-size: 18px; font-weight: 600; line-height: 1.2; letter-spacing: -.01em; white-space: normal; }
.gf-meta {
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px; letter-spacing: .03em; color: var(--gf-ink-soft); white-space: nowrap;
  animation: gf-roll .5s var(--gf-ease) both;
}
@keyframes gf-roll {
  from { opacity: 0; translate: 0 7px; filter: blur(3px); }
  to { opacity: 1; translate: 0 0; filter: blur(0); }
}

.gf-key {
  all: unset; box-sizing: border-box; position: absolute; right: 22px; bottom: 22px; z-index: 12;
  width: 58px; height: 58px; border-radius: 18px; display: grid; place-items: center; cursor: pointer;
  transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), background .35s var(--gf-ease);
}
.gf-key:hover { transform: translateY(-2px); }
.gf-key:active { transform: translateY(0) scale(.93); transition-duration: .12s; }
.gf-key:focus-visible { outline: 2px solid #a8854a; outline-offset: 3px; }
.gf-key--add {
  color: #fff;
  background: radial-gradient(120% 90% at 50% 0%, #3a3a3f 0%, #121214 55%, #050506 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .22), inset 0 -3px 8px rgba(0, 0, 0, .7), 0 0 0 1px rgba(0, 0, 0, .75), 0 14px 22px -8px rgba(0, 0, 0, .55), 0 3px 6px -2px rgba(0, 0, 0, .35);
}
.gf-root[data-tone="dark"] .gf-key--add {
  color: #111113;
  background: radial-gradient(120% 90% at 50% 0%, #ffffff 0%, #ececee 55%, #d2d2d6 100%);
  box-shadow: inset 0 1px 0 #fff, inset 0 -3px 8px rgba(0, 0, 0, .14), 0 0 0 1px rgba(0, 0, 0, .4), 0 14px 22px -8px rgba(0, 0, 0, .7);
}
.gf-key--more {
  color: #111113;
  background: linear-gradient(180deg, rgba(255, 255, 255, .92) 0%, rgba(226, 226, 230, .82) 100%);
  -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  box-shadow: inset 0 1px 0 #fff, inset 0 -2px 4px rgba(0, 0, 0, .06), 0 0 0 1px rgba(0, 0, 0, .16), 0 10px 18px -8px rgba(0, 0, 0, .3);
}
.gf-root[data-tone="dark"] .gf-key--more {
  color: #f5f5f7;
  background: linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .06) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .22), 0 0 0 1px rgba(255, 255, 255, .1), 0 10px 18px -8px rgba(0, 0, 0, .6);
}
.gf-key--more[aria-expanded="true"] { transform: scale(.96); }
.gf-glyph { display: block; max-width: none; fill: none; stroke: currentColor; stroke-linecap: round; }
.gf-glyph--plus { width: 26px; height: 26px; stroke-width: 1.6; animation: gf-turn .6s var(--gf-spring); }
.gf-glyph--more { width: 30px; height: 12px; stroke-width: 1.7; }
@keyframes gf-turn { from { rotate: -90deg; } to { rotate: 0deg; } }

.gf-menu {
  position: absolute; right: 22px; bottom: 90px; z-index: 20; min-width: 176px; padding: 6px; border-radius: 16px;
  display: flex; flex-direction: column;
  background: rgba(252, 252, 253, .72);
  -webkit-backdrop-filter: blur(24px) saturate(1.6); backdrop-filter: blur(24px) saturate(1.6);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .14), 0 24px 48px -16px rgba(10, 12, 20, .4);
  transform-origin: 100% 100%; opacity: 0; visibility: hidden; transform: translateY(6px) scale(.94);
  transition: opacity .2s var(--gf-ease), transform .32s var(--gf-spring), visibility 0s .32s;
}
.gf-menu[data-open] { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }
.gf-root[data-tone="dark"] .gf-menu { background: rgba(30, 30, 34, .72); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 0 0 .5px rgba(255, 255, 255, .1), 0 24px 48px -16px rgba(0, 0, 0, .8); }
.gf-menu-item { all: unset; box-sizing: border-box; padding: 9px 12px; border-radius: 10px; font-size: 13.5px; font-weight: 450; color: #18181b; cursor: pointer; }
.gf-root[data-tone="dark"] .gf-menu-item { color: #f4f4f5; }
.gf-menu-item:hover, .gf-menu-item:focus-visible { background: rgba(24, 24, 27, .07); }
.gf-root[data-tone="dark"] .gf-menu-item:hover, .gf-root[data-tone="dark"] .gf-menu-item:focus-visible { background: rgba(255, 255, 255, .09); }
.gf-menu-item--danger { color: #d92d20; }
.gf-root[data-tone="dark"] .gf-menu-item--danger { color: #ff6b5e; }

.gf-root:not([data-entered]) .gf-back,
.gf-root:not([data-entered]) .gf-back-rim { translate: 0 22px; opacity: 0; }
.gf-root:not([data-entered]) .gf-sheet { translate: 0 -120px; opacity: 0; }
.gf-root:not([data-entered]) .gf-front { translate: 0 46px; opacity: 0; }
.gf-root:not([data-entered]) .gf-key { opacity: 0; scale: .6; }
.gf-root:not([data-entered]) .gf-shadow { opacity: 0; }
.gf-back, .gf-back-rim { transition: translate 1s var(--gf-ease), opacity .9s var(--gf-ease); }
.gf-root[data-entered] .gf-sheet { transition-delay: calc(var(--gf-depth) * 40ms), 0s, calc(.18s + var(--gf-depth) * 90ms), calc(.18s + var(--gf-depth) * 90ms); }
.gf-root[data-entered] .gf-front { transition-delay: 0s, .42s, .42s; }
.gf-key { transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), opacity .6s var(--gf-ease) .7s, scale .7s var(--gf-spring) .7s; }

@media (prefers-reduced-motion: reduce) {
  .gf-root *, .gf-root *::before, .gf-root *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .gf-tilt { transform: none; }
}
`,A=520,j=950;function M({items:e}){let[t,n]=i.useState(null),o=i.useRef(null),[s,c]=i.useState(340);i.useEffect(()=>{let e=o.current;if(!e)return;let t=()=>{let t=getComputedStyle(e),n=t.gridTemplateColumns.split(` `).filter(Boolean).length||1,r=parseFloat(t.columnGap)||0,i=(e.clientWidth-r*(n-1))/n;c(Math.max(200,Math.min(340,Math.floor(i))))};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let l=(e,r,i)=>{if(t)return;let a=new URL(i,location.href),o=a.pathname===location.pathname,s=matchMedia(`(prefers-reduced-motion: reduce)`).matches;if(o){let t=document.getElementById(a.hash.slice(1));if(!t){location.href=i;return}n(e.slug),history.replaceState(null,``,a.hash),window.setTimeout(()=>{t.scrollIntoView({behavior:s?`auto`:`smooth`,block:`start`}),window.setTimeout(()=>n(null),900)},s?0:A)}else if(s)location.href=i;else{n(e.slug);try{sessionStorage.setItem(`gf-enter`,`1`)}catch{}window.setTimeout(()=>{let t=[...r.querySelectorAll(`.gf-sheet`)].sort((e,t)=>e.getBoundingClientRect().top-t.getBoundingClientRect().top)[0];if(!t){location.href=i;return}let n=t.getBoundingClientRect(),a=document.createElement(`div`);a.className=`gf-page`,a.setAttribute(`aria-hidden`,`true`),a.innerHTML=`<div class="gf-page__in"><span class="gf-page__eyebrow">Serviços</span><strong class="gf-page__title"></strong><i></i><i></i><i></i><i class="short"></i></div>`,a.querySelector(`.gf-page__title`).textContent=e.nome,Object.assign(a.style,{left:n.left+`px`,top:n.top+`px`,width:n.width+`px`,height:n.height+`px`}),document.body.appendChild(a),t.style.visibility=`hidden`,document.documentElement.classList.add(`gf-leaving`);let o=Math.max(0,n.top-90);a.animate([{left:n.left+`px`,top:n.top+`px`,width:n.width+`px`,height:n.height+`px`,borderRadius:`10px`,transform:`rotate(-2deg)`},{left:n.left-10+`px`,top:o+`px`,width:n.width+20+`px`,height:n.height*1.25+`px`,borderRadius:`10px`,transform:`rotate(0deg)`,offset:.3},{left:`0px`,top:`0px`,width:innerWidth+`px`,height:innerHeight+`px`,borderRadius:`0px`,transform:`rotate(0deg)`}],{duration:j,easing:`cubic-bezier(.65,0,.25,1)`,fill:`forwards`}).onfinish=()=>{location.href=i}},A)}};return i.useEffect(()=>{let e=e=>{e.persisted&&(document.documentElement.classList.remove(`gf-leaving`),document.querySelectorAll(`.gf-page`).forEach(e=>e.remove()),document.querySelectorAll(`.gf-sheet`).forEach(e=>e.style.visibility=``),n(null))};return addEventListener(`pageshow`,e),()=>removeEventListener(`pageshow`,e)},[]),(0,a.jsx)(`div`,{className:`folders`,ref:o,children:e.map((e,n)=>(0,a.jsx)(`div`,{className:`folder-link`,"data-opening":t===e.slug||void 0,onClickCapture:t=>{if(t.metaKey||t.ctrlKey||t.shiftKey||t.button!==0)return;let n=t.target.closest(`a.gf-sheet`);t.preventDefault(),t.stopPropagation(),l(e,t.currentTarget,n?.getAttribute(`href`)||`/servicos#`+e.slug)},children:(0,a.jsx)(O,{label:e.nome,tone:`light`,fabricClass:e.fabric,action:`none`,labelPlacement:`bottom-left`,filesInteractive:!0,appearDelay:n*120,width:s,open:t===e.slug||void 0,files:[...e.itens.slice(0,3).map(t=>({name:t,href:`/servicos#`+r(e.slug,t)})),{name:`Ver a frente completa →`,href:`/servicos#`+e.slug}],meta:e.itens.length+` entregas`})},e.slug))})}export{M as default};