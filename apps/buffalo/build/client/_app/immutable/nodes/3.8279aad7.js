import{s as fe,e as de,f as $e,c as Q,n as X}from"../chunks/scheduler.aefdcbfb.js";import{S as ue,i as me,g as C,m as P,s as k,h as E,j as D,n as A,f as m,c as O,k as p,l as _e,a as h,x as S,o as re,d as I,p as ae,b as oe,t as T,y as ee,r as W,u as z,v as V,w as M,e as U,E as Z}from"../chunks/index.98882bb9.js";import{e as q}from"../chunks/each.e59479a4.js";import{P as He}from"../chunks/Prose.dd7540ad.js";import{B as ne}from"../chunks/Button.30e794e4.js";import{C as K}from"../chunks/Container.65622672.js";import{C as he}from"../chunks/Card.837af60c.js";import"../chunks/sha256.c24f45e2.js";import{p as be}from"../chunks/projects.6e1f3dde.js";function ve(c,e,s){const t=c.slice();return t[7]=e[s][0],t[8]=e[s][1].href,t[9]=e[s][1].highlight,t}function De(c){let e=c[7]+"",s,t;return{c(){s=P(e),t=k()},l(l){s=A(l,e),t=O(l)},m(l,o){h(l,s,o),h(l,t,o)},p(l,o){o&16&&e!==(e=l[7]+"")&&re(s,e)},d(l){l&&(m(s),m(t))}}}function we(c){let e,s;return e=new ne({props:{class:"w-full",highlight:c[9],href:c[8],$$slots:{default:[De]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const o={};l&16&&(o.highlight=t[9]),l&16&&(o.href=t[8]),l&4112&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Be(c){let e,s,t,l,o,i,a,f,n,r,u,y,$,j=q(Object.entries(c[4])),d=[];for(let v=0;v<j.length;v+=1)d[v]=we(ve(c,j,v));const w=v=>T(d[v],1,1,()=>{d[v]=null});return{c(){e=C("section"),s=C("div"),t=C("div"),l=C("h1"),o=P(c[1]),i=k(),a=C("h5"),f=P(c[2]),n=k(),r=C("div");for(let v=0;v<d.length;v+=1)d[v].c();this.h()},l(v){e=E(v,"SECTION",{class:!0,style:!0});var _=D(e);s=E(_,"DIV",{class:!0});var x=D(s);t=E(x,"DIV",{class:!0});var B=D(t);l=E(B,"H1",{class:!0,style:!0});var G=D(l);o=A(G,c[1]),G.forEach(m),i=O(B),a=E(B,"H5",{class:!0,style:!0});var R=D(a);f=A(R,c[2]),R.forEach(m),B.forEach(m),n=O(x),r=E(x,"DIV",{class:!0});var L=D(r);for(let g=0;g<d.length;g+=1)d[g].l(L);L.forEach(m),x.forEach(m),_.forEach(m),this.h()},h(){p(l,"class",""),_e(l,"margin","0px"),p(a,"class","max-w-6xl"),_e(a,"margin","0px"),p(t,"class","flex flex-col items-center gap-4"),p(r,"class",u="grid grid-cols-"+Object.entries(c[4]).length+" gap-4 md:gap-6 place-items-center w-fit"),p(s,"class","flex flex-col items-center "+c[5]()+" my-auto gap-12 mx-2 sm:mx-4 md:mx-6"),p(e,"class",y="h-screen "+c[0]+" bg-center bg-cover w-full grid "+c[3]+" place-items-center"),p(e,"style","")},m(v,_){h(v,e,_),S(e,s),S(s,t),S(t,l),S(l,o),S(t,i),S(t,a),S(a,f),S(s,n),S(s,r);for(let x=0;x<d.length;x+=1)d[x]&&d[x].m(r,null);$=!0},p(v,[_]){if((!$||_&2)&&re(o,v[1]),(!$||_&4)&&re(f,v[2]),_&16){j=q(Object.entries(v[4]));let x;for(x=0;x<j.length;x+=1){const B=ve(v,j,x);d[x]?(d[x].p(B,_),I(d[x],1)):(d[x]=we(B),d[x].c(),I(d[x],1),d[x].m(r,null))}for(ae(),x=j.length;x<d.length;x+=1)w(x);oe()}(!$||_&16&&u!==(u="grid grid-cols-"+Object.entries(v[4]).length+" gap-4 md:gap-6 place-items-center w-fit"))&&p(r,"class",u),(!$||_&9&&y!==(y="h-screen "+v[0]+" bg-center bg-cover w-full grid "+v[3]+" place-items-center"))&&p(e,"class",y)},i(v){if(!$){for(let _=0;_<j.length;_+=1)I(d[_]);$=!0}},o(v){d=d.filter(Boolean);for(let _=0;_<d.length;_+=1)T(d[_]);$=!1},d(v){v&&m(e),ee(d,v)}}}function We(c,e,s){let{bgImg:t="/favicon.png"}=e,{title:l="This is a great title for Company Name"}=e,{subtitle:o="This is an even better piece of text. Specifically, this is a subtitle"}=e,{typography:i=""}=e,{CTAButtons:a={"CTA ONE":{href:"/",highlight:!0},"CTA TWO":{href:"/",highlight:!1}}}=e,{justified:f="center"}=e,n=()=>{switch(f){case"left":return"items-start text-left";case"right":return"items-end text-right";case"center":return"items-center text-center"}};return c.$$set=r=>{"bgImg"in r&&s(0,t=r.bgImg),"title"in r&&s(1,l=r.title),"subtitle"in r&&s(2,o=r.subtitle),"typography"in r&&s(3,i=r.typography),"CTAButtons"in r&&s(4,a=r.CTAButtons),"justified"in r&&s(6,f=r.justified)},[t,l,o,i,a,n,f]}class ze extends ue{constructor(e){super(),me(this,e,We,Be,fe,{bgImg:0,title:1,subtitle:2,typography:3,CTAButtons:4,justified:6})}}function Ve(c){let e,s,t,l,o;return{c(){e=C("p"),s=P(c[0]),t=k(),l=C("h1"),o=P(c[1]),this.h()},l(i){e=E(i,"P",{class:!0});var a=D(e);s=A(a,c[0]),a.forEach(m),t=O(i),l=E(i,"H1",{class:!0});var f=D(l);o=A(f,c[1]),f.forEach(m),this.h()},h(){p(e,"class","col-start-2 col-span-2 m-0 sm:m-0 pb-4 xl:pb-6 2xl:pb-12 pt-6"),p(l,"class","m-0 sm:m-0 uppercase whitespace-nowrap self-end")},m(i,a){h(i,e,a),S(e,s),h(i,t,a),h(i,l,a),S(l,o)},p(i,a){a&1&&re(s,i[0]),a&2&&re(o,i[1])},d(i){i&&(m(e),m(t),m(l))}}}function Me(c){let e,s;return e=new he({props:{class:c[2].class+" col-span-2 grid grid-cols-3 w-full bg-surface/10",size:"max-w-none h-full ",border:"border border-surface-on",$$slots:{default:[Ve]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,[l]){const o={};l&4&&(o.class=t[2].class+" col-span-2 grid grid-cols-3 w-full bg-surface/10"),l&11&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Ne(c,e,s){let{body:t}=e,{label:l}=e;return c.$$set=o=>{s(2,e=de(de({},e),$e(o))),"body"in o&&s(0,t=o.body),"label"in o&&s(1,l=o.label)},e=$e(e),[t,l,e]}class ie extends ue{constructor(e){super(),me(this,e,Ne,Me,fe,{body:0,label:1})}}function xe(c,e,s){const t=c.slice();return t[5]=e[s][0],t[6]=e[s][1],t[8]=s,t}function ye(c,e,s){const t=c.slice();return t[9]=e[s],t}function Ce(c,e,s){const t=c.slice();return t[5]=e[s][0],t[12]=e[s][1].href,t[13]=e[s][1].img,t[14]=e[s][1].types,t[8]=s,t}function Ee(c,e,s){const t=c.slice();return t[16]=e[s][0],t[17]=e[s][1].body,t[12]=e[s][1].href,t[8]=s,t}function je(c,e,s){const t=c.slice();return t[5]=e[s][0],t[19]=e[s][1].finalValue,t[20]=e[s][1].startValue,t[21]=e[s][1].increment,t[8]=s,t}function Ge(c){let e,s=c[19]+"",t,l,o,i=c[5]+"",a,f;return{c(){e=C("h1"),t=P(s),l=k(),o=C("h6"),a=P(i),f=k(),this.h()},l(n){e=E(n,"H1",{class:!0});var r=D(e);t=A(r,s),r.forEach(m),l=O(n),o=E(n,"H6",{class:!0});var u=D(o);a=A(u,i),u.forEach(m),f=O(n),this.h()},h(){p(e,"class","m-0 text-tertiary sm:m-0"),p(o,"class","m-0 sm:m-0 text-primary-on font-light")},m(n,r){h(n,e,r),S(e,t),h(n,l,r),h(n,o,r),S(o,a),h(n,f,r)},p:X,d(n){n&&(m(e),m(l),m(o),m(f))}}}function Ie(c){let e,s;return e=new K({props:{class:"text-center p-4 w-full",radius:"",border:c[8]==1?"border-x border-surface-on/50":"",$$slots:{default:[Ge]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const o={};l&8388608&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Pe(c){let e,s,t=q(Object.entries(c[1])),l=[];for(let i=0;i<t.length;i+=1)l[i]=Ie(je(c,t,i));const o=i=>T(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=U()},l(i){for(let a=0;a<l.length;a+=1)l[a].l(i);e=U()},m(i,a){for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(i,a);h(i,e,a),s=!0},p(i,a){if(a&2){t=q(Object.entries(i[1]));let f;for(f=0;f<t.length;f+=1){const n=je(i,t,f);l[f]?(l[f].p(n,a),I(l[f],1)):(l[f]=Ie(n),l[f].c(),I(l[f],1),l[f].m(e.parentNode,e))}for(ae(),f=t.length;f<l.length;f+=1)o(f);oe()}},i(i){if(!s){for(let a=0;a<t.length;a+=1)I(l[a]);s=!0}},o(i){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)T(l[a]);s=!1},d(i){i&&m(e),ee(l,i)}}}function Ae(c){let e,s=c[16]+"",t,l,o,i=c[17]+"",a,f;return{c(){e=C("h2"),t=P(s),l=k(),o=C("p"),a=P(i),f=k(),this.h()},l(n){e=E(n,"H2",{class:!0});var r=D(e);t=A(r,s),r.forEach(m),l=O(n),o=E(n,"P",{class:!0});var u=D(o);a=A(u,i),u.forEach(m),f=O(n),this.h()},h(){p(e,"class","text-surface-on uppercase m-0 sm:m-0 font-black"),p(o,"class","text-surface-on m-0 sm:m-0")},m(n,r){h(n,e,r),S(e,t),h(n,l,r),h(n,o,r),S(o,a),h(n,f,r)},p:X,d(n){n&&(m(e),m(l),m(o),m(f))}}}function ke(c){let e,s;return e=new he({props:{size:"max-w-lg h-fit w-full",border:"border border-surface-on/90",padding:"py-14 px-6",class:"bg-surface/10  flex flex-col gap-6 items-center text-center mt-["+c[8]*75+"px]",$$slots:{default:[Ae]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const o={};l&8388608&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Re(c){let e,s="audience",t,l,o,i=q(Object.entries(c[2])),a=[];for(let n=0;n<i.length;n+=1)a[n]=ke(Ee(c,i,n));const f=n=>T(a[n],1,1,()=>{a[n]=null});return{c(){e=C("h6"),e.textContent=s,t=k();for(let n=0;n<a.length;n+=1)a[n].c();l=U(),this.h()},l(n){e=E(n,"H6",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-10nj7gd"&&(e.textContent=s),t=O(n);for(let r=0;r<a.length;r+=1)a[r].l(n);l=U(),this.h()},h(){p(e,"class","uppercase text-tertiary col-span-full justify-self-start self-end my-4")},m(n,r){h(n,e,r),h(n,t,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(n,r);h(n,l,r),o=!0},p(n,r){if(r&4){i=q(Object.entries(n[2]));let u;for(u=0;u<i.length;u+=1){const y=Ee(n,i,u);a[u]?(a[u].p(y,r),I(a[u],1)):(a[u]=ke(y),a[u].c(),I(a[u],1),a[u].m(l.parentNode,l))}for(ae(),u=i.length;u<a.length;u+=1)f(u);oe()}},i(n){if(!o){for(let r=0;r<i.length;r+=1)I(a[r]);o=!0}},o(n){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)T(a[r]);o=!1},d(n){n&&(m(e),m(t),m(l)),ee(a,n)}}}function qe(c){let e,s="Services",t,l,o,i,a,f,n,r,u,y,$,j,d,w,v,_,x,B,G,R,L;return l=new ie({props:{label:"design",body:c[3].Design.body}}),n=new ie({props:{class:"md:col-start-2 xl:col-start-auto",label:"Install",body:c[3].Install.body}}),j=new ie({props:{label:"DIY Repair",body:c[3]["DIY Repair"].body}}),R=new ie({props:{class:"xl:col-span-3",label:"Maintenance",body:c[3].Maintenance.body}}),{c(){e=C("h6"),e.textContent=s,t=k(),W(l.$$.fragment),o=k(),i=C("img"),f=k(),W(n.$$.fragment),r=k(),u=C("img"),$=k(),W(j.$$.fragment),d=k(),w=C("img"),_=k(),x=C("img"),G=k(),W(R.$$.fragment),this.h()},l(g){e=E(g,"H6",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1rv7rce"&&(e.textContent=s),t=O(g),z(l.$$.fragment,g),o=O(g),i=E(g,"IMG",{src:!0,alt:!0,class:!0}),f=O(g),z(n.$$.fragment,g),r=O(g),u=E(g,"IMG",{src:!0,alt:!0,class:!0}),$=O(g),z(j.$$.fragment,g),d=O(g),w=E(g,"IMG",{src:!0,alt:!0,class:!0}),_=O(g),x=E(g,"IMG",{src:!0,alt:!0,class:!0}),G=O(g),z(R.$$.fragment,g),this.h()},h(){p(e,"class","uppercase text-tertiary col-span-full place-self-end -my-2"),Q(i.src,a="/images/Dragon_F.jpeg")||p(i,"src",a),p(i,"alt",""),p(i,"class","h-full hidden md:flex xl:col-span-2 object-cover not-prose rounded-md"),Q(u.src,y="/images/Sun_Hung_Kai_Riva_swing_gates.jpg")||p(u,"src",y),p(u,"alt",""),p(u,"class","h-full hidden md:flex row-start-2 xl:col-span-2 xl:row-start-auto col-start-1 xl:col-start-auto object-cover not-prose rounded-md"),Q(w.src,v="/images/146_Waterloo.jpg")||p(w,"src",v),p(w,"alt",""),p(w,"class","w-full h-full hidden md:flex xl:col-span-2 object-cover not-prose rounded-md"),Q(x.src,B="/images/DB_Phase_17_B.jpg")||p(x,"src",B),p(x,"alt",""),p(x,"class","w-full h-full xl:col-span-3 hidden md:flex object-cover not-prose rounded-md")},m(g,N){h(g,e,N),h(g,t,N),V(l,g,N),h(g,o,N),h(g,i,N),h(g,f,N),V(n,g,N),h(g,r,N),h(g,u,N),h(g,$,N),V(j,g,N),h(g,d,N),h(g,w,N),h(g,_,N),h(g,x,N),h(g,G,N),V(R,g,N),L=!0},p:X,i(g){L||(I(l.$$.fragment,g),I(n.$$.fragment,g),I(j.$$.fragment,g),I(R.$$.fragment,g),L=!0)},o(g){T(l.$$.fragment,g),T(n.$$.fragment,g),T(j.$$.fragment,g),T(R.$$.fragment,g),L=!1},d(g){g&&(m(e),m(t),m(o),m(i),m(f),m(r),m(u),m($),m(d),m(w),m(_),m(x),m(G)),M(l,g),M(n,g),M(j,g),M(R,g)}}}function Le(c){let e,s,t=c[5]+"",l,o,i,a=c[14]+"",f,n,r,u,y;return{c(){e=C("div"),s=C("h2"),l=P(t),o=k(),i=C("p"),f=P(a),n=k(),r=C("img"),y=k(),this.h()},l($){e=E($,"DIV",{class:!0});var j=D(e);s=E(j,"H2",{class:!0});var d=D(s);l=A(d,t),d.forEach(m),o=O(j),i=E(j,"P",{class:!0});var w=D(i);f=A(w,a),w.forEach(m),j.forEach(m),n=O($),r=E($,"IMG",{src:!0,alt:!0,class:!0}),y=O($),this.h()},h(){p(s,"class","m-0 sm:m-0 uppercase text-surface-on"),p(i,"class","m-0 sm:m-0 text-surface-on/70 font-light"),p(e,"class","my-8 text-left flex flex-col gap-2"),Q(r.src,u=c[13])||p(r,"src",u),p(r,"alt",""),p(r,"class","ml-auto md:flex h-24 sm:h-28 aspect-[1.5] my-2 object-cover not-prose")},m($,j){h($,e,j),S(e,s),S(s,l),S(e,o),S(e,i),S(i,f),h($,n,j),h($,r,j),h($,y,j)},p:X,d($){$&&(m(e),m(n),m(r),m(y))}}}function Oe(c){let e,s;return e=new K({props:{href:c[12],class:"group hover:bg-surface/50 transition-all duration-300 items-center",border:"border-y border-surface-on/50 flex",sizes:"max-w-none w-full",$$slots:{default:[Le]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const o={};l&8388608&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Ye(c){let e,s="Products",t,l,o,i=q(Object.entries(c[4])),a=[];for(let n=0;n<i.length;n+=1)a[n]=Oe(Ce(c,i,n));const f=n=>T(a[n],1,1,()=>{a[n]=null});return{c(){e=C("h6"),e.textContent=s,t=k();for(let n=0;n<a.length;n+=1)a[n].c();l=U(),this.h()},l(n){e=E(n,"H6",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1grrhuy"&&(e.textContent=s),t=O(n);for(let r=0;r<a.length;r+=1)a[r].l(n);l=U(),this.h()},h(){p(e,"class","uppercase text-tertiary col-span-full justify-self-start my-4 mx-4 md:mx-6")},m(n,r){h(n,e,r),h(n,t,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(n,r);h(n,l,r),o=!0},p(n,r){if(r&16){i=q(Object.entries(n[4]));let u;for(u=0;u<i.length;u+=1){const y=Ce(n,i,u);a[u]?(a[u].p(y,r),I(a[u],1)):(a[u]=Oe(y),a[u].c(),I(a[u],1),a[u].m(l.parentNode,l))}for(ae(),u=i.length;u<a.length;u+=1)f(u);oe()}},i(n){if(!o){for(let r=0;r<i.length;r+=1)I(a[r]);o=!0}},o(n){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)T(a[r]);o=!1},d(n){n&&(m(e),m(t),m(l)),ee(a,n)}}}function Fe(c){let e,s="See all";return{c(){e=C("p"),e.textContent=s,this.h()},l(t){e=E(t,"P",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-19fosqh"&&(e.textContent=s),this.h()},h(){p(e,"class","m-0 sm:m-0 text-background")},m(t,l){h(t,e,l)},p:X,d(t){t&&m(e)}}}function Ke(c){let e,s;return e=new he({props:{class:"flex flex-col group h-full",padding:"px-0 py-2",$$slots:{default:[Ue]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const o={};l&8388608&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Se(c){let e,s,t=c[9]+"",l;return{c(){e=C("li"),s=C("p"),l=P(t),this.h()},l(o){e=E(o,"LI",{class:!0});var i=D(e);s=E(i,"P",{class:!0});var a=D(s);l=A(a,t),a.forEach(m),i.forEach(m),this.h()},h(){p(s,"class","m-0 sm:m-0 prose-sm"),p(e,"class","m-0 sm:m-0")},m(o,i){h(o,e,i),S(e,s),S(s,l)},p:X,d(o){o&&m(e)}}}function Ue(c){let e,s=c[6].date+"",t,l,o,i,a,f,n,r=c[6].name+"",u,y,$,j=q(c[6].description),d=[];for(let w=0;w<j.length;w+=1)d[w]=Se(ye(c,j,w));return{c(){e=C("h6"),t=P(s),l=k(),o=C("img"),a=k(),f=C("div"),n=C("h4"),u=P(r),y=k(),$=C("ul");for(let w=0;w<d.length;w+=1)d[w].c();this.h()},l(w){e=E(w,"H6",{class:!0});var v=D(e);t=A(v,s),v.forEach(m),l=O(w),o=E(w,"IMG",{src:!0,alt:!0,class:!0}),a=O(w),f=E(w,"DIV",{class:!0});var _=D(f);n=E(_,"H4",{class:!0});var x=D(n);u=A(x,r),x.forEach(m),y=O(_),$=E(_,"UL",{class:!0});var B=D($);for(let G=0;G<d.length;G+=1)d[G].l(B);B.forEach(m),_.forEach(m),this.h()},h(){p(e,"class","m-0 sm:m-0 uppercase text-surface-on/70"),Q(o.src,i=c[6].thumbnail)||p(o,"src",i),p(o,"alt",""),p(o,"class","object-cover h-72 w-full not-prose md:brightness-95 group-hover: brightness-100"),p(n,"class","m-0 sm:m-0 pt-4 uppercase"),p($,"class","m-0 sm:m-0"),p(f,"class","flex flex-wrap place-items-center gap-4")},m(w,v){h(w,e,v),S(e,t),h(w,l,v),h(w,o,v),h(w,a,v),h(w,f,v),S(f,n),S(n,u),S(f,y),S(f,$);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m($,null)},p(w,v){if(v&0){j=q(w[6].description);let _;for(_=0;_<j.length;_+=1){const x=ye(w,j,_);d[_]?d[_].p(x,v):(d[_]=Se(x),d[_].c(),d[_].m($,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=j.length}},d(w){w&&(m(e),m(l),m(o),m(a),m(f)),ee(d,w)}}}function Te(c){let e,s,t=c[8]<6&&Ke(c);return{c(){t&&t.c(),e=U()},l(l){t&&t.l(l),e=U()},m(l,o){t&&t.m(l,o),h(l,e,o),s=!0},p(l,o){l[8]<6&&t.p(l,o)},i(l){s||(I(t),s=!0)},o(l){T(t),s=!1},d(l){l&&m(e),t&&t.d(l)}}}function Je(c){let e,s="See all";return{c(){e=C("p"),e.textContent=s,this.h()},l(t){e=E(t,"P",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-19fosqh"&&(e.textContent=s),this.h()},h(){p(e,"class","m-0 sm:m-0 text-background")},m(t,l){h(t,e,l)},p:X,d(t){t&&m(e)}}}function Qe(c){let e,s="Our Recent Work",t,l,o,i,a=q(Object.entries(be)),f=[];for(let r=0;r<a.length;r+=1)f[r]=Te(xe(c,a,r));const n=r=>T(f[r],1,1,()=>{f[r]=null});return o=new ne({props:{href:"/our-work",class:"bg-surface-highlight m-4 my-12 col-span-full justify-self-center",arrow:!0,$$slots:{default:[Je]},$$scope:{ctx:c}}}),{c(){e=C("h6"),e.textContent=s,t=k();for(let r=0;r<f.length;r+=1)f[r].c();l=k(),W(o.$$.fragment),this.h()},l(r){e=E(r,"H6",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1rtnq8c"&&(e.textContent=s),t=O(r);for(let u=0;u<f.length;u+=1)f[u].l(r);l=O(r),z(o.$$.fragment,r),this.h()},h(){p(e,"class","uppercase text-tertiary col-span-full justify-self-end my-4 m-0 sm:m-0")},m(r,u){h(r,e,u),h(r,t,u);for(let y=0;y<f.length;y+=1)f[y]&&f[y].m(r,u);h(r,l,u),V(o,r,u),i=!0},p(r,u){if(u&0){a=q(Object.entries(be));let $;for($=0;$<a.length;$+=1){const j=xe(r,a,$);f[$]?(f[$].p(j,u),I(f[$],1)):(f[$]=Te(j),f[$].c(),I(f[$],1),f[$].m(l.parentNode,l))}for(ae(),$=a.length;$<f.length;$+=1)n($);oe()}const y={};u&8388608&&(y.$$scope={dirty:u,ctx:r}),o.$set(y)},i(r){if(!i){for(let u=0;u<a.length;u+=1)I(f[u]);I(o.$$.fragment,r),i=!0}},o(r){f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)T(f[u]);T(o.$$.fragment,r),i=!1},d(r){r&&(m(e),m(t),m(l)),ee(f,r),M(o,r)}}}function Xe(c){let e;return{c(){e=P("Request Consultation")},l(s){e=A(s,"Request Consultation")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function Ze(c){let e;return{c(){e=P("Learn More")},l(s){e=A(s,"Learn More")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function et(c){let e,s='Let&#39;s Get the Ball <br/><span class="text-tertiary text-7xl sm:text-9xl md:text-[10rem] font-bold">Rolling</span>',t,l,o,i,a,f;return o=new ne({props:{highlight:!0,class:"w-full",href:"/contact",$$slots:{default:[Xe]},$$scope:{ctx:c}}}),a=new ne({props:{class:"w-full",href:"/about",arrow:!0,$$slots:{default:[Ze]},$$scope:{ctx:c}}}),{c(){e=C("h1"),e.innerHTML=s,t=k(),l=C("div"),W(o.$$.fragment),i=k(),W(a.$$.fragment),this.h()},l(n){e=E(n,"H1",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-rbmusf"&&(e.innerHTML=s),t=O(n),l=E(n,"DIV",{class:!0});var r=D(l);z(o.$$.fragment,r),i=O(r),z(a.$$.fragment,r),r.forEach(m),this.h()},h(){p(e,"class","text-center font-normal uppercase text-3xl sm:text-4xl md:text-4xl not-prose z-0"),p(l,"class","grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 place-items-center w-fit z-0")},m(n,r){h(n,e,r),h(n,t,r),h(n,l,r),V(o,l,null),S(l,i),V(a,l,null),f=!0},p(n,r){const u={};r&8388608&&(u.$$scope={dirty:r,ctx:n}),o.$set(u);const y={};r&8388608&&(y.$$scope={dirty:r,ctx:n}),a.$set(y)},i(n){f||(I(o.$$.fragment,n),I(a.$$.fragment,n),f=!0)},o(n){T(o.$$.fragment,n),T(a.$$.fragment,n),f=!1},d(n){n&&(m(e),m(t),m(l)),M(o),M(a)}}}function tt(c){let e,s,t,l,o,i,a,f,n,r,u,y,$,j,d,w,v,_,x,B,G,R,L,g,N,F,ce;return e=new ze({props:{CTAButtons:c[0],title:"Hong Kong's Leading Gate & Garage Firm.",subtitle:"Serving homeowners and business owners with premium services & products since 1998.",justified:"center",bgImg:"/bg-landing"}}),l=new K({props:{class:"grid grid-cols-3 w-full rounded-md ",sizes:"max-w-screen",$$slots:{default:[Pe]},$$scope:{ctx:c}}}),a=new K({props:{class:"grid grid-cols-1 lg:grid-cols-3 gap-x-12",sizes:"max-w-none",$$slots:{default:[Re]},$$scope:{ctx:c}}}),r=new K({props:{class:"grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6 place-items-center",sizes:"max-w-none",$$slots:{default:[qe]},$$scope:{ctx:c}}}),$=new K({props:{sizes:"max-w-none w-full",padding:"",$$slots:{default:[Ye]},$$scope:{ctx:c}}}),d=new ne({props:{class:"bg-surface-highlight m-4 my-12",arrow:!0,href:"/products",$$slots:{default:[Fe]},$$scope:{ctx:c}}}),_=new K({props:{class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center",sizes:"max-w-none",$$slots:{default:[Qe]},$$scope:{ctx:c}}}),F=new K({props:{class:"grid place-items-center gap-12",sizes:"max-w-none w-full h-fit",margin:"my-0",padding:"py-32",$$slots:{default:[et]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment),s=k(),t=C("section"),W(l.$$.fragment),o=k(),i=C("section"),W(a.$$.fragment),f=k(),n=C("section"),W(r.$$.fragment),u=k(),y=C("section"),W($.$$.fragment),j=k(),W(d.$$.fragment),w=k(),v=C("section"),W(_.$$.fragment),x=k(),B=C("section"),G=C("img"),L=k(),g=C("div"),N=k(),W(F.$$.fragment),this.h()},l(b){z(e.$$.fragment,b),s=O(b),t=E(b,"SECTION",{class:!0});var H=D(t);z(l.$$.fragment,H),H.forEach(m),o=O(b),i=E(b,"SECTION",{class:!0});var te=D(i);z(a.$$.fragment,te),te.forEach(m),f=O(b),n=E(b,"SECTION",{class:!0,id:!0});var le=D(n);z(r.$$.fragment,le),le.forEach(m),u=O(b),y=E(b,"SECTION",{class:!0});var J=D(y);z($.$$.fragment,J),j=O(J),z(d.$$.fragment,J),J.forEach(m),w=O(b),v=E(b,"SECTION",{class:!0});var se=D(v);z(_.$$.fragment,se),se.forEach(m),x=O(b),B=E(b,"SECTION",{class:!0});var Y=D(B);G=E(Y,"IMG",{src:!0,alt:!0,class:!0}),L=O(Y),g=E(Y,"DIV",{class:!0}),D(g).forEach(m),N=O(Y),z(F.$$.fragment,Y),Y.forEach(m),this.h()},h(){p(t,"class","grid place-items-center py-24"),p(i,"class","grid place-items-center py-24"),p(n,"class","grid place-items-center py-24"),p(n,"id","services"),p(y,"class","grid place-items-center py-24"),p(v,"class","grid place-items-center py-24"),Q(G.src,R="/Wonderlee-Crew.jpg")||p(G,"src",R),p(G,"alt","crew"),p(G,"class","bg-no-repeat object-cover w-full h-full z-0 absolute"),p(g,"class","bg-black/80 z-0 absolute h-full w-full"),p(B,"class","grid place-items-center relative")},m(b,H){V(e,b,H),h(b,s,H),h(b,t,H),V(l,t,null),h(b,o,H),h(b,i,H),V(a,i,null),h(b,f,H),h(b,n,H),V(r,n,null),h(b,u,H),h(b,y,H),V($,y,null),S(y,j),V(d,y,null),h(b,w,H),h(b,v,H),V(_,v,null),h(b,x,H),h(b,B,H),S(B,G),S(B,L),S(B,g),S(B,N),V(F,B,null),ce=!0},p(b,H){const te={};H&8388608&&(te.$$scope={dirty:H,ctx:b}),l.$set(te);const le={};H&8388608&&(le.$$scope={dirty:H,ctx:b}),a.$set(le);const J={};H&8388608&&(J.$$scope={dirty:H,ctx:b}),r.$set(J);const se={};H&8388608&&(se.$$scope={dirty:H,ctx:b}),$.$set(se);const Y={};H&8388608&&(Y.$$scope={dirty:H,ctx:b}),d.$set(Y);const ge={};H&8388608&&(ge.$$scope={dirty:H,ctx:b}),_.$set(ge);const pe={};H&8388608&&(pe.$$scope={dirty:H,ctx:b}),F.$set(pe)},i(b){ce||(I(e.$$.fragment,b),I(l.$$.fragment,b),I(a.$$.fragment,b),I(r.$$.fragment,b),I($.$$.fragment,b),I(d.$$.fragment,b),I(_.$$.fragment,b),I(F.$$.fragment,b),ce=!0)},o(b){T(e.$$.fragment,b),T(l.$$.fragment,b),T(a.$$.fragment,b),T(r.$$.fragment,b),T($.$$.fragment,b),T(d.$$.fragment,b),T(_.$$.fragment,b),T(F.$$.fragment,b),ce=!1},d(b){b&&(m(s),m(t),m(o),m(i),m(f),m(n),m(u),m(y),m(w),m(v),m(x),m(B)),M(e,b),M(l),M(a),M(r),M($),M(d),M(_),M(F)}}}function lt(c){let e,s;return e=new He({props:{$$slots:{default:[tt]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,[l]){const o={};l&8388608&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function st(c){return[{"Our work":{href:"/our-work",highlight:!0},"Contact us":{href:"/contact",highlight:!1}},{"Custom gates built":{finalValue:999,startValue:0,increment:10},"Custom garages built":{finalValue:999,startValue:0,increment:10},"Years of Experience":{finalValue:25,startValue:0,increment:10}},{Commercial:{body:`
Wonderlee caters to commercial needs with precision.
We specialize in high-quality gates, garage doors, and repair services. 
Whether you're a business owner, property manager, or organization seeking efficient garage solutions, 
we deliver professionalism and security.`,href:"/"},"Home Owners":{body:`
Wonderlee transforms houses into homes. Our premium gates
and garage doors elevate aesthetics and security. Our expert team
blends personal style with functionality and durability, making your dream home a reality.
`,href:"/"},Professionals:{body:`
Wonderlee is the choice for architectural and design professionals. 
We collaborate closely to seamlessly integrate our products into your projects,
enhancing elegance and functionality with top craftsmanship standards.
`,href:"/"}},{Design:{body:"Our design services are the foundation of remarkable gates and garage doors. Our expert designers collaborate closely with you to bring your vision to life, ensuring your property shines with exceptional aesthetics."},Install:{body:"When it comes to installation, Wonderlee sets the standard. Our skilled technicians guarantee flawless installation, ensuring your gates and garage doors are durable and functional. We handle every detail for your peace of mind."},"DIY Repair":{body:"Wonderlee offers DIY repair solutions for those who prefer hands-on approaches. We provide guidance, tools, and parts to help you efficiently address common repair issues, restoring your gates and garage doors."},Maintenance:{body:"At Wonderlee, our maintenance services ensure peace of mind. We provide 24-hour technical support via telephone. Under our maintenance contract, inspections and maintenance every 6 months by our experienced team."}},{"Garage Door":{href:"/products#garage-doors",img:"/animations/sectional_garage.gif",types:"Canopy door, Sectional door, Canopy door"},"Residential Gate":{href:"/products/#residential-gates",img:"/animations/fold_gate_button.gif",types:"Folding gate, Slide gate, Swing gate"},"Commercial Doors":{href:"/products#commercial-doors",img:"/products/commercial-doors/re2.gif",types:"Slide door, Swing door, Revolving door"},"Secret Doors":{href:"/products#secret-doors",img:"/products/secret-doors/secret_door2.gif",types:""}}]}class ht extends ue{constructor(e){super(),me(this,e,st,lt,fe,{})}}export{ht as component};
