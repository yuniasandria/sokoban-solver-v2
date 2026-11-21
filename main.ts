import{readFileSync as a,writeFileSync as b,mkdirSync as c}from"node:fs";
const{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env,U="udlr";
const S=(w,A,G,B,p)=>{
let n=A.length,f=new Int32Array(n),e=new Int8Array(n),D=[-w,w,-1,1],T=[B],Q=[p],V=[""],M=new Set([B+","+p]);
for(let h=0;h<T.length;h++){
let B2=T[h],s0=Q[h];
f.fill(-1);let Z=[s0];f[s0]=s0;
for(let i=0;i<Z.length;i++)for(let k=0;k<4;k++){let z=Z[i]+D[k];if(!A[z]&&!B2.includes(z)&&f[z]<0){f[z]=Z[i];e[z]=k;Z.push(z)}}
for(let j=0;j<B2.length;j++){let q=B2[j];
for(let k=0;k<4;k++){let d=D[k],t=q+d;
if(f[q-d]<0||A[t]||B2.includes(t)||(A[t-w]||A[t+w])&&(A[t-1]||A[t+1])&&!G.includes(t))continue;
let N=B2.slice();N[j]=t;N.sort((x,y)=>x-y);
let kk=N+","+q;
if(M.has(kk))continue;M.add(kk);
let s="",z=q-d;for(;z!=s0;z=f[z])s=U[e[z]]+s;
let m2=V[h]+s+U[k];
if(N+""==G+"")return[m2,q];
T.push(N);Q.push(q);V.push(m2)}}}
return null};
const Y=t=>{
let w=t.indexOf("\n"),s=t.replace(/\n/g,""),A=[...s].map(x=>+(x=="#")),G=[...s.matchAll(/[.+*]/g)].map(x=>x.index),B=[...s.matchAll(/[$*]/g)].map(x=>x.index),p=s.search(/[@+]/),K=x=>(x%w/7|0)*2+((x/w|0)>8),R=[[],[],[],[]],J=[[],[],[],[]];
for(let b of B)R[K(b)].push(b);
for(let g of G)J[K(g)].push(g);
let m="",pp=p;
for(let r=0;r<4;r++){if(!R[r].length)continue;
let A2=A.slice();for(let r2=0;r2<4;r2++)if(r2!=r)for(let b of r2<r?J[r2]:R[r2])A2[b]=1;
let x=S(w,A2,J[r],R[r],pp);if(!x)return null;m+=x[0];pp=x[1]}
return m};
for(let i=1;i<6;i++){let d="i00"+i,x=Y(a(I+"/"+d+"/level.txt","utf8"));c(O+"/"+d,{recursive:true});b(O+"/"+d+"/solution.txt",(x||"")+"\n")}
