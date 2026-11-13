import{r as _a,j as Ml}from"./index-COVHamjh.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xs="187",El=0,Ma=1,Al=2,or=1,yl=2,xi=3,Rn=0,Tt=1,$t=2,ti=0,Si=1,_i=2,Ea=3,Aa=4,bl=5,$n=100,Tl=101,Rl=102,Cl=103,wl=104,Il=200,Pl=201,Ll=202,Dl=203,Mo=204,Eo=205,Nl=206,Ul=207,Ol=208,Fl=209,Bl=210,Hl=211,kl=212,Gl=213,zl=214,ns=0,is=1,rs=2,yi=3,ss=4,as=5,os=6,ls=7,Ao=0,Vl=1,Wl=2,fn=0,yo=1,bo=2,To=3,Ro=4,Co=5,wo=6,Io=7,Po=300,ii=301,bi=302,Rr=303,Cr=304,cs=1e3,hn=1001,us=1002,vt=1003,Xl=1004,Fi=1005,It=1006,wr=1007,yn=1008,Ut=1009,Lo=1010,Do=1011,Ti=1012,Qs=1013,rn=1014,en=1015,sn=1016,Ys=1017,Js=1018,ri=1020,No=35902,Uo=35899,Oo=1021,Fo=1022,tn=1023,Cn=1026,bn=1027,Bo=1028,qs=1029,Fn=1030,Zs=1031,js=1033,lr=33776,cr=33777,ur=33778,dr=33779,ds=35840,hs=35841,fs=35842,ps=35843,ms=36196,gs=37492,xs=37496,vs=37488,Ss=37489,mr=37490,_s=37491,Ms=37808,Es=37809,As=37810,ys=37811,bs=37812,Ts=37813,Rs=37814,Cs=37815,ws=37816,Is=37817,Ps=37818,Ls=37819,Ds=37820,Ns=37821,Us=36492,Os=36494,Fs=36495,Bs=36283,Hs=36284,gr=36285,ks=36286,Ql=3200,Gs=0,Yl=1,An="",Dt="srgb",xr="srgb-linear",vr="linear",qe="srgb",Ir=7680,Jl=519,ql=512,Zl=513,jl=514,Ho=515,Kl=516,$l=517,ko=518,Go=519,ec=35044,ya="300 es",Yt=2e3,Ri=2001;function tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ci(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nc(){const i=Ci("canvas");return i.style.display="block",i}const ba={};function Ta(...i){const e="THREE."+i.shift();console.log(e,...i)}function zo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=zo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=zo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hr(...i){const e=i.join(" ");e in ba||(ba[e]=!0,we(...i))}function ic(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const rc={[ns]:ns,[rs]:os,[ss]:ss,[yi]:as,[is]:is,[os]:rs,[ls]:ls,[as]:yi};class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ra=1234567;const Mi=Math.PI/180,wi=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function Ks(i,e){return(i%e+e)%e}function sc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ac(i,e,t){return i!==e?(t-i)/(e-i):0}function Ei(i,e,t){return(1-t)*i+t*e}function oc(i,e,t,n){return Ei(i,e,1-Math.exp(-t*n))}function lc(i,e=1){return e-Math.abs(Ks(i,e*2)-e)}function cc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hc(i,e){return i+Math.random()*(e-i)}function fc(i){return i*(.5-Math.random())}function pc(i){i!==void 0&&(Ra=i);let e=Ra+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mc(i){return i*Mi}function gc(i){return i*wi}function xc(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function vc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),S=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*S,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*S,o*l);break;case"ZYZ":i.set(c*S,c*p,o*u,o*l);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $s(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wo(i,e){if(e.constructor===Float32Array)return i;const t=$s(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Xo(i,e){if(e.constructor===Float32Array)return i;const t=$s(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const _c={DEG2RAD:Mi,RAD2DEG:wi,generateUUID:oi,clamp:ke,euclideanModulo:Ks,mapLinear:sc,inverseLerp:ac,lerp:Ei,damp:oc,pingpong:lc,smoothstep:cc,smootherstep:uc,randInt:dc,randFloat:hc,randFloatSpread:fc,seededRandom:pc,degToRad:mc,radToDeg:gc,isPowerOfTwo:xc,ceilPowerOfTwo:vc,floorPowerOfTwo:Vo,setQuaternionFromProperEuler:Sc,normalize:Xo,denormalize:Wo},sa=class sa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sa.prototype.isVector2=!0;let Ve=sa;class li{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],d=s[a+0],p=s[a+1],S=s[a+2],A=s[a+3];if(f!==A||c!==d||l!==p||u!==S){let m=c*d+l*p+u*S+f*A;m<0&&(d=-d,p=-p,S=-S,A=-A,m=-m);let h=1-o;if(m<.9995){const M=Math.acos(m),C=Math.sin(M);h=Math.sin(h*M)/C,o=Math.sin(o*M)/C,c=c*h+d*o,l=l*h+p*o,u=u*h+S*o,f=f*h+A*o}else{c=c*h+d*o,l=l*h+p*o,u=u*h+S*o,f=f*h+A*o;const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],p=s[a+2],S=s[a+3];return e[t]=o*S+u*f+c*p-l*d,e[t+1]=c*S+u*d+l*f-o*p,e[t+2]=l*S+u*p+o*d-c*f,e[t+3]=u*S-o*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),S=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*p*S,this._y=l*p*f-d*u*S,this._z=l*u*S+d*p*f,this._w=l*u*f-d*p*S;break;case"YXZ":this._x=d*u*f+l*p*S,this._y=l*p*f-d*u*S,this._z=l*u*S-d*p*f,this._w=l*u*f+d*p*S;break;case"ZXY":this._x=d*u*f-l*p*S,this._y=l*p*f+d*u*S,this._z=l*u*S+d*p*f,this._w=l*u*f-d*p*S;break;case"ZYX":this._x=d*u*f-l*p*S,this._y=l*p*f+d*u*S,this._z=l*u*S-d*p*f,this._w=l*u*f+d*p*S;break;case"YZX":this._x=d*u*f+l*p*S,this._y=l*p*f+d*u*S,this._z=l*u*S-d*p*f,this._w=l*u*f-d*p*S;break;case"XZY":this._x=d*u*f-l*p*S,this._y=l*p*f-d*u*S,this._z=l*u*S+d*p*f,this._w=l*u*f+d*p*S;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const aa=class aa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};aa.prototype.isVector3=!0;let G=aa;const Pr=new G,Ca=new li,oa=class oa{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],S=n[8],A=r[0],m=r[3],h=r[6],M=r[1],C=r[4],y=r[7],T=r[2],b=r[5],g=r[8];return s[0]=a*A+o*M+c*T,s[3]=a*m+o*C+c*b,s[6]=a*h+o*y+c*g,s[1]=l*A+u*M+f*T,s[4]=l*m+u*C+f*b,s[7]=l*h+u*y+f*g,s[2]=d*A+p*M+S*T,s[5]=d*m+p*C+S*b,s[8]=d*h+p*y+S*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,p=l*s-a*c,S=t*f+n*d+r*p;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=f*A,e[1]=(r*l-u*n)*A,e[2]=(o*n-r*a)*A,e[3]=d*A,e[4]=(u*t-r*c)*A,e[5]=(r*s-o*t)*A,e[6]=p*A,e[7]=(n*c-l*t)*A,e[8]=(a*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oa.prototype.isMatrix3=!0;let Le=oa;const Lr=new Le,wa=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ia=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mc(){const i={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===qe&&(r.r=pn(r.r),r.g=pn(r.g),r.b=pn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qe&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===An?vr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xr]:{primaries:e,whitePoint:n,transfer:vr,toXYZ:wa,fromXYZ:Ia,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:wa,fromXYZ:Ia,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}const Ge=Mc();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let kn;class Ec{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kn===void 0&&(kn=Ci("canvas")),kn.width=e.width,kn.height=e.height;const r=kn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=kn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ci("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ac=0;class ea{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dr(r[a].image)):s.push(Dr(r[a]))}else s=Dr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let yc=0;const Nr=new G;class St extends Hn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=hn,r=hn,s=It,a=yn,o=tn,c=Ut,l=St.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=oi(),this.name="",this.source=new ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nr).x}get height(){return this.source.getSize(Nr).y}get depth(){return this.source.getSize(Nr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Po)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Po;St.DEFAULT_ANISOTROPY=1;const la=class la{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],S=c[9],A=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-A)<.01&&Math.abs(S-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+A)<.1&&Math.abs(S+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,y=(p+1)/2,T=(h+1)/2,b=(u+d)/4,g=(f+A)/4,_=(S+m)/4;return C>y&&C>T?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=b/n,s=g/n):y>T?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=b/r,s=_/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=g/s,r=_/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-S)*(m-S)+(f-A)*(f-A)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-S)/M,this.y=(f-A)/M,this.z=(d-u)/M,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};la.prototype.isVector4=!0;let rt=la;class bc extends Hn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new St({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ea(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qo extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tc extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Mr=class Mr{constructor(e,t,n,r,s,a,o,c,l,u,f,d,p,S,A,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,f,d,p,S,A,m)}set(e,t,n,r,s,a,o,c,l,u,f,d,p,S,A,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=S,h[11]=A,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Gn.setFromMatrixColumn(e,0).length(),s=1/Gn.setFromMatrixColumn(e,1).length(),a=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,S=o*u,A=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+S*l,t[5]=d-A*l,t[9]=-o*c,t[2]=A-d*l,t[6]=S+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,S=l*u,A=l*f;t[0]=d+A*o,t[4]=S*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-S,t[6]=A+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,S=l*u,A=l*f;t[0]=d-A*o,t[4]=-a*f,t[8]=S+p*o,t[1]=p+S*o,t[5]=a*u,t[9]=A-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*f,S=o*u,A=o*f;t[0]=c*u,t[4]=S*l-p,t[8]=d*l+A,t[1]=c*f,t[5]=A*l+d,t[9]=p*l-S,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,S=o*c,A=o*l;t[0]=c*u,t[4]=A-d*f,t[8]=S*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+S,t[10]=d-A*f}else if(e.order==="XZY"){const d=a*c,p=a*l,S=o*c,A=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+A,t[5]=a*u,t[9]=p*f-S,t[2]=S*f-p,t[6]=o*u,t[10]=A*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rc,e,Cc)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),xn.crossVectors(n,Pt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),xn.crossVectors(n,Pt)),xn.normalize(),Bi.crossVectors(Pt,xn),r[0]=xn.x,r[4]=Bi.x,r[8]=Pt.x,r[1]=xn.y,r[5]=Bi.y,r[9]=Pt.y,r[2]=xn.z,r[6]=Bi.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],S=n[2],A=n[6],m=n[10],h=n[14],M=n[3],C=n[7],y=n[11],T=n[15],b=r[0],g=r[4],_=r[8],N=r[12],P=r[1],D=r[5],U=r[9],W=r[13],w=r[2],H=r[6],Y=r[10],V=r[14],te=r[3],X=r[7],K=r[11],ee=r[15];return s[0]=a*b+o*P+c*w+l*te,s[4]=a*g+o*D+c*H+l*X,s[8]=a*_+o*U+c*Y+l*K,s[12]=a*N+o*W+c*V+l*ee,s[1]=u*b+f*P+d*w+p*te,s[5]=u*g+f*D+d*H+p*X,s[9]=u*_+f*U+d*Y+p*K,s[13]=u*N+f*W+d*V+p*ee,s[2]=S*b+A*P+m*w+h*te,s[6]=S*g+A*D+m*H+h*X,s[10]=S*_+A*U+m*Y+h*K,s[14]=S*N+A*W+m*V+h*ee,s[3]=M*b+C*P+y*w+T*te,s[7]=M*g+C*D+y*H+T*X,s[11]=M*_+C*U+y*Y+T*K,s[15]=M*N+C*W+y*V+T*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],S=e[3],A=e[7],m=e[11],h=e[15],M=c*p-l*d,C=o*p-l*f,y=o*d-c*f,T=a*p-l*u,b=a*d-c*u,g=a*f-o*u;return t*(A*M-m*C+h*y)-n*(S*M-m*T+h*b)+r*(S*C-A*T+h*g)-s*(S*y-A*b+m*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],S=e[12],A=e[13],m=e[14],h=e[15],M=t*o-n*a,C=t*c-r*a,y=t*l-s*a,T=n*c-r*o,b=n*l-s*o,g=r*l-s*c,_=u*A-f*S,N=u*m-d*S,P=u*h-p*S,D=f*m-d*A,U=f*h-p*A,W=d*h-p*m,w=M*W-C*U+y*D+T*P-b*N+g*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/w;return e[0]=(o*W-c*U+l*D)*H,e[1]=(r*U-n*W-s*D)*H,e[2]=(A*g-m*b+h*T)*H,e[3]=(d*b-f*g-p*T)*H,e[4]=(c*P-a*W-l*N)*H,e[5]=(t*W-r*P+s*N)*H,e[6]=(m*y-S*g-h*C)*H,e[7]=(u*g-d*y+p*C)*H,e[8]=(a*U-o*P+l*_)*H,e[9]=(n*P-t*U-s*_)*H,e[10]=(S*b-A*y+h*M)*H,e[11]=(f*y-u*b-p*M)*H,e[12]=(o*N-a*D-c*_)*H,e[13]=(t*D-n*N+r*_)*H,e[14]=(A*C-S*T-m*M)*H,e[15]=(u*T-f*C+d*M)*H,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,p=s*u,S=s*f,A=a*u,m=a*f,h=o*f,M=c*l,C=c*u,y=c*f,T=n.x,b=n.y,g=n.z;return r[0]=(1-(A+h))*T,r[1]=(p+y)*T,r[2]=(S-C)*T,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(d+h))*b,r[6]=(m+M)*b,r[7]=0,r[8]=(S+C)*g,r[9]=(m-M)*g,r[10]=(1-(d+A))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Gn.set(r[0],r[1],r[2]).length();const o=Gn.set(r[4],r[5],r[6]).length(),c=Gn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Vt.copy(this);const l=1/a,u=1/o,f=1/c;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=f,Vt.elements[9]*=f,Vt.elements[10]*=f,t.setFromRotationMatrix(Vt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Yt,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let S,A;if(c)S=s/(a-s),A=a*s/(a-s);else if(o===Yt)S=-(a+s)/(a-s),A=-2*a*s/(a-s);else if(o===Ri)S=-a/(a-s),A=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=S,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Yt,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let S,A;if(c)S=1/(a-s),A=a/(a-s);else if(o===Yt)S=-2/(a-s),A=-(a+s)/(a-s);else if(o===Ri)S=-1/(a-s),A=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=S,l[14]=A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Mr.prototype.isMatrix4=!0;let tt=Mr;const Gn=new G,Vt=new tt,Rc=new G(0,0,0),Cc=new G(1,1,1),xn=new G,Bi=new G,Pt=new G,Pa=new tt,La=new li;class wn{constructor(e=0,t=0,n=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wc=0;const Da=new G,zn=new li,on=new tt,Hi=new G,hi=new G,Ic=new G,Pc=new li,Na=new G(1,0,0),Ua=new G(0,1,0),Oa=new G(0,0,1),Fa={type:"added"},Lc={type:"removed"},Vn={type:"childadded",child:null},Ur={type:"childremoved",child:null};class Rt extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new G,t=new wn,n=new li,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Le}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.multiply(zn),this}rotateOnWorldAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.premultiply(zn),this}rotateX(e){return this.rotateOnAxis(Na,e)}rotateY(e){return this.rotateOnAxis(Ua,e)}rotateZ(e){return this.rotateOnAxis(Oa,e)}translateOnAxis(e,t){return Da.copy(e).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Na,e)}translateY(e){return this.translateOnAxis(Ua,e)}translateZ(e){return this.translateOnAxis(Oa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(hi,Hi,this.up):on.lookAt(Hi,hi,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),zn.setFromRotationMatrix(on),this.quaternion.premultiply(zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fa),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lc),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fa),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,e,Ic),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,Pc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),S=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),S.length>0&&(n.nodes=S)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new G(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ei extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dc={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const A of e.hand.values()){const m=t.getJointPose(A,n),h=this._getHandJoint(l,A);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,S=.005;l.inputState.pinching&&d>p+S?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-S&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},ki={h:0,s:0,l:0};function Fr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ge.workingColorSpace){if(e=Ks(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fr(a,s,e+1/3),this.g=Fr(a,s,e),this.b=Fr(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Jo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ge.workingToColorSpace(At.copy(this),e),Math.round(ke(At.r*255,0,255))*65536+Math.round(ke(At.g*255,0,255))*256+Math.round(ke(At.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(At.copy(this),t);const n=At.r,r=At.g,s=At.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Dt){Ge.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(ki);const n=Ei(vn.h,ki.h,t),r=Ei(vn.s,ki.s,t),s=Ei(vn.l,ki.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new ze;ze.NAMES=Jo;class ta{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new ta(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nc extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wt=new G,ln=new G,Br=new G,cn=new G,Wn=new G,Xn=new G,Ba=new G,Hr=new G,kr=new G,Gr=new G,zr=new rt,Vr=new rt,Wr=new rt;class Qt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wt.subVectors(r,t),ln.subVectors(n,t),Br.subVectors(e,t);const a=Wt.dot(Wt),o=Wt.dot(ln),c=Wt.dot(Br),l=ln.dot(ln),u=ln.dot(Br),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*u)*d,S=(a*u-o*c)*d;return s.set(1-p-S,S,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,cn.x),c.addScaledVector(a,cn.y),c.addScaledVector(o,cn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return zr.setScalar(0),Vr.setScalar(0),Wr.setScalar(0),zr.fromBufferAttribute(e,t),Vr.fromBufferAttribute(e,n),Wr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(zr,s.x),a.addScaledVector(Vr,s.y),a.addScaledVector(Wr,s.z),a}static isFrontFacing(e,t,n,r){return Wt.subVectors(n,t),ln.subVectors(e,t),Wt.cross(ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Wt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Wn.subVectors(r,n),Xn.subVectors(s,n),Hr.subVectors(e,n);const c=Wn.dot(Hr),l=Xn.dot(Hr);if(c<=0&&l<=0)return t.copy(n);kr.subVectors(e,r);const u=Wn.dot(kr),f=Xn.dot(kr);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(Wn,a);Gr.subVectors(e,s);const p=Wn.dot(Gr),S=Xn.dot(Gr);if(S>=0&&p<=S)return t.copy(s);const A=p*l-c*S;if(A<=0&&l>=0&&S<=0)return o=l/(l-S),t.copy(n).addScaledVector(Xn,o);const m=u*S-p*f;if(m<=0&&f-u>=0&&p-S>=0)return Ba.subVectors(s,r),o=(f-u)/(f-u+(p-S)),t.copy(r).addScaledVector(Ba,o);const h=1/(m+A+d);return a=A*h,o=d*h,t.copy(n).addScaledVector(Wn,a).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pi{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(s,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),zi.subVectors(this.max,fi),Qn.subVectors(e.a,fi),Yn.subVectors(e.b,fi),Jn.subVectors(e.c,fi),Sn.subVectors(Yn,Qn),_n.subVectors(Jn,Yn),Dn.subVectors(Qn,Jn);let t=[0,-Sn.z,Sn.y,0,-_n.z,_n.y,0,-Dn.z,Dn.y,Sn.z,0,-Sn.x,_n.z,0,-_n.x,Dn.z,0,-Dn.x,-Sn.y,Sn.x,0,-_n.y,_n.x,0,-Dn.y,Dn.x,0];return!Xr(t,Qn,Yn,Jn,zi)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,Qn,Yn,Jn,zi))?!1:(Vi.crossVectors(Sn,_n),t=[Vi.x,Vi.y,Vi.z],Xr(t,Qn,Yn,Jn,zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new G,new G,new G,new G,new G,new G,new G,new G],Xt=new G,Gi=new Pi,Qn=new G,Yn=new G,Jn=new G,Sn=new G,_n=new G,Dn=new G,fi=new G,zi=new G,Vi=new G,Nn=new G;function Xr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Nn.fromArray(i,s);const o=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),c=e.dot(Nn),l=t.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ot=new G,Wi=new Ve;let Uc=0;class Tn extends Hn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ec,this.updateRanges=[],this.gpuType=en,this.version=0,this._normalizationScale=e!==void 0?$s(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wo(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xo(e,this.array)}}class qo extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zo extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Oc=new Pi,pi=new G,Qr=new G;class Er{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Oc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pi.subVectors(e,this.center);const t=pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(pi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pi.copy(e.center).add(Qr)),this.expandByPoint(pi.copy(e.center).sub(Qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fc=0;const kt=new tt,Yr=new Rt,qn=new G,Lt=new Pi,mi=new Pi,mt=new G;class Jt extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tc(e)?Zo:qo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];mi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Lt.min,mi.min),Lt.expandByPoint(mt),mt.addVectors(Lt.max,mi.max),Lt.expandByPoint(mt)):(Lt.expandByPoint(mi.min),Lt.expandByPoint(mi.max))}Lt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)mt.fromBufferAttribute(o,l),c&&(qn.fromBufferAttribute(e,l),mt.add(qn)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new G,c[N]=new G;const u=new G,f=new G,d=new G,p=new Ve,S=new Ve,A=new Ve,m=new G,h=new G;function M(N,P,D){l[N]=l[P]=l[D]=1,u.fromBufferAttribute(n,N),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),p.fromBufferAttribute(s,N),S.fromBufferAttribute(s,P),A.fromBufferAttribute(s,D),f.sub(u),d.sub(u),S.sub(p),A.sub(p);const U=1/(S.x*A.y-A.x*S.y);isFinite(U)&&(m.copy(f).multiplyScalar(A.y).addScaledVector(d,-S.y).multiplyScalar(U),h.copy(d).multiplyScalar(S.x).addScaledVector(f,-A.x).multiplyScalar(U),o[N].add(m),o[P].add(m),o[D].add(m),c[N].add(h),c[P].add(h),c[D].add(h))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let N=0,P=C.length;N<P;++N){const D=C[N],U=D.start,W=D.count;for(let w=U,H=U+W;w<H;w+=3)M(e.getX(w+0),e.getX(w+1),e.getX(w+2))}const y=new G,T=new G,b=new G,g=new G;function _(N){b.fromBufferAttribute(r,N),g.copy(b);const P=o[N];y.copy(P),y.sub(b.multiplyScalar(b.dot(P))).normalize(),T.crossVectors(g,P);const U=T.dot(c[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,U)}for(let N=0,P=n.count;N<P;++N)l[N]&&_(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,u=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const S=e.getX(d+0),A=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,A),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let p=0,S=0;for(let A=0,m=c.length;A<m;A++){o.isInterleavedBufferAttribute?p=c[A]*o.data.stride+o.offset:p=c[A]*u;for(let h=0;h<u;h++)d[S++]=l[p++]}return new Tn(d,u,f)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jr=new G,Bc=new G,Hc=new Le;class En{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Jr.subVectors(n,t).cross(Bc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Jr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hc.getNormalMatrix(e),r=this.coplanarPoint(Jr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let kc=0;class ci extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Si,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=Eo,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new En().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dn=new G,qr=new G,Xi=new G,Qi=new G;class jo{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qr.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(qr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Xi),o=Qi.dot(this.direction),c=-Qi.dot(Xi),l=Qi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,S;if(u>0)if(f=a*c-o,d=a*o-c,S=s*u,f>=0)if(d>=-S)if(d<=S){const A=1/u;f*=A,d*=A,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-S?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=S?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qr).addScaledVector(Xi,d),p}intersectSphere(e,t){if(e.radius<0)return null;dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),r=dn.dot(dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,S=t.x-a.x,A=t.y-a.y,m=t.z-a.z,h=n.x-a.x,M=n.y-a.y,C=n.z-a.z,y=Math.abs(c),T=Math.abs(l),b=Math.abs(u);let g,_,N,P,D,U,W,w,H,Y,V,te;if(y>=T&&y>=b?(N=c,U=f,H=S,te=h,c>=0?(g=l,_=u,P=d,D=p,W=A,w=m,Y=M,V=C):(g=u,_=l,P=p,D=d,W=m,w=A,Y=C,V=M)):T>=b?(N=l,U=d,H=A,te=M,l>=0?(g=u,_=c,P=p,D=f,W=m,w=S,Y=C,V=h):(g=c,_=u,P=f,D=p,W=S,w=m,Y=h,V=C)):(N=u,U=p,H=m,te=C,u>=0?(g=c,_=l,P=f,D=d,W=S,w=A,Y=h,V=M):(g=l,_=c,P=d,D=f,W=A,w=S,Y=M,V=h)),N===0)return null;const X=g/N,K=_/N,ee=1/N,_e=P-X*U,re=D-K*U,k=W-X*H,$=w-K*H,ve=Y-X*te,Te=V-K*te,fe=ve*$-Te*k,Ie=_e*Te-re*ve,st=k*re-$*_e;if(r){if(fe<0||Ie<0||st<0)return null}else if((fe<0||Ie<0||st<0)&&(fe>0||Ie>0||st>0))return null;const Ce=fe+Ie+st;if(Ce===0)return null;const Ye=ee*(fe*U+Ie*H+st*te);return(Ce>0?Ye<0:Ye>0)?null:this.at(Ye/Ce,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fr extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ha=new tt,Un=new jo,Yi=new Er,ka=new G,Ji=new G,qi=new G,Zi=new G,Zr=new G,ji=new G,Ga=new G,Ki=new G;class Nt extends Rt{constructor(e=new Jt,t=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ji.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Zr.fromBufferAttribute(f,e),a?ji.addScaledVector(Zr,u):ji.addScaledVector(Zr.sub(t),u))}t.add(ji)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(Yi.containsPoint(Un.origin)===!1&&(Un.intersectSphere(Yi,ka)===null||Un.origin.distanceToSquared(ka)>(e.far-e.near)**2))&&(Ha.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Ha),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,A=d.length;S<A;S++){const m=d[S],h=a[m.materialIndex],M=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,T=C;y<T;y+=3){const b=o.getX(y),g=o.getX(y+1),_=o.getX(y+2);r=$i(this,h,e,n,l,u,f,b,g,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let m=S,h=A;m<h;m+=3){const M=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);r=$i(this,a,e,n,l,u,f,M,C,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,A=d.length;S<A;S++){const m=d[S],h=a[m.materialIndex],M=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,T=C;y<T;y+=3){const b=y,g=y+1,_=y+2;r=$i(this,h,e,n,l,u,f,b,g,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,p.start),A=Math.min(c.count,p.start+p.count);for(let m=S,h=A;m<h;m+=3){const M=m,C=m+1,y=m+2;r=$i(this,a,e,n,l,u,f,M,C,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Gc(i,e,t,n,r,s,a,o){let c;if(e.side===Tt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Rn,o),c===null)return null;Ki.copy(o),Ki.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ki);return l<t.near||l>t.far?null:{distance:l,point:Ki.clone(),object:i}}function $i(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Ji),i.getVertexPosition(c,qi),i.getVertexPosition(l,Zi);const u=Gc(i,e,t,n,Ji,qi,Zi,Ga);if(u){const f=new G;Qt.getBarycoord(Ga,Ji,qi,Zi,f),r&&(u.uv=Qt.getInterpolatedAttribute(r,o,c,l,f,new Ve)),s&&(u.uv1=Qt.getInterpolatedAttribute(s,o,c,l,f,new Ve)),a&&(u.normal=Qt.getInterpolatedAttribute(a,o,c,l,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new G,materialIndex:0};Qt.getNormal(Ji,qi,Zi,d.normal),u.face=d,u.barycoord=f}return u}class zc extends St{constructor(e=null,t=1,n=1,r,s,a,o,c,l=vt,u=vt,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const On=new Er,Vc=new Ve(.5,.5),er=new G;class Ii{constructor(e=new En,t=new En,n=new En,r=new En,s=new En,a=new En){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],p=s[7],S=s[8],A=s[9],m=s[10],h=s[11],M=s[12],C=s[13],y=s[14],T=s[15];if(r[0].setComponents(l-a,p-u,h-S,T-M).normalize(),r[1].setComponents(l+a,p+u,h+S,T+M).normalize(),r[2].setComponents(l+o,p+f,h+A,T+C).normalize(),r[3].setComponents(l-o,p-f,h-A,T-C).normalize(),n)r[4].setComponents(c,d,m,y).normalize(),r[5].setComponents(l-c,p-d,h-m,T-y).normalize();else if(r[4].setComponents(l-c,p-d,h-m,T-y).normalize(),t===Yt)r[5].setComponents(l+c,p+d,h+m,T+y).normalize();else if(t===Ri)r[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){On.center.set(0,0,0);const t=Vc.distanceTo(e.center);return On.radius=.7071067811865476+t,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(er.x=r.normal.x>0?e.max.x:e.min.x,er.y=r.normal.y>0?e.max.y:e.min.y,er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const za=new tt;class na{constructor(){this.coordinateSystem=Yt,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];za.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Ii),n[r].setFromProjectionMatrix(za,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ii),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new na().copy(this)}}class Ko extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Va=new tt,zs=new jo,tr=new Er,nr=new G;class Wc extends Rt{constructor(e=new Jt,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),tr.radius+=s,e.ray.intersectsSphere(tr)===!1)return;Va.copy(r).invert(),zs.copy(e.ray).applyMatrix4(Va);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let S=d,A=p;S<A;S++){const m=l.getX(S);nr.fromBufferAttribute(f,m),Wa(nr,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let S=d,A=p;S<A;S++)nr.fromBufferAttribute(f,S),Wa(nr,S,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wa(i,e,t,n,r,s,a){const o=zs.distanceSqToPoint(i);if(o<t){const c=new G;zs.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $o extends St{constructor(e=[],t=ii,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xc extends St{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si extends St{constructor(e,t,n=rn,r,s,a,o=vt,c=vt,l,u=Cn,f=1){if(u!==Cn&&u!==bn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ea(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class el extends si{constructor(e,t=rn,n=ii,r,s,a=vt,o=vt,c,l=Cn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tl extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Li extends Jt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,p=0;S("z","y","x",-1,-1,n,t,e,a,s,0),S("z","y","x",1,-1,n,t,-e,a,s,1),S("x","z","y",1,1,e,n,t,r,a,2),S("x","z","y",1,-1,e,n,-t,r,a,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function S(A,m,h,M,C,y,T,b,g,_,N){const P=y/g,D=T/_,U=y/2,W=T/2,w=b/2,H=g+1,Y=_+1;let V=0,te=0;const X=new G;for(let K=0;K<Y;K++){const ee=K*D-W;for(let _e=0;_e<H;_e++){const re=_e*P-U;X[A]=re*M,X[m]=ee*C,X[h]=w,l.push(X.x,X.y,X.z),X[A]=0,X[m]=0,X[h]=b>0?1:-1,u.push(X.x,X.y,X.z),f.push(_e/g),f.push(1-K/_),V+=1}}for(let K=0;K<_;K++)for(let ee=0;ee<g;ee++){const _e=d+ee+H*K,re=d+ee+H*(K+1),k=d+(ee+1)+H*(K+1),$=d+(ee+1)+H*K;c.push(_e,re,$),c.push(re,k,$),te+=6}o.addGroup(p,te,N),p+=te,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sr extends Jt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let S=0;const A=[],m=n/2;let h=0;M(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Ct(f,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(p,2));function M(){const y=new G,T=new G;let b=0;const g=(t-e)/n;for(let _=0;_<=s;_++){const N=[],P=_/s,D=P*(t-e)+e;for(let U=0;U<=r;U++){const W=U/r,w=W*c+o,H=Math.sin(w),Y=Math.cos(w);T.x=D*H,T.y=-P*n+m,T.z=D*Y,f.push(T.x,T.y,T.z),y.set(H,g,Y).normalize(),d.push(y.x,y.y,y.z),p.push(W,1-P),N.push(S++)}A.push(N)}for(let _=0;_<r;_++)for(let N=0;N<s;N++){const P=A[N][_],D=A[N+1][_],U=A[N+1][_+1],W=A[N][_+1];(e>0||N!==0)&&(u.push(P,D,W),b+=3),(t>0||N!==s-1)&&(u.push(D,U,W),b+=3)}l.addGroup(h,b,0),h+=b}function C(y){const T=S,b=new Ve,g=new G;let _=0;const N=y===!0?e:t,P=y===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,m*P,0),d.push(0,P,0),p.push(.5,.5),S++;const D=S;for(let U=0;U<=r;U++){const w=U/r*c+o,H=Math.cos(w),Y=Math.sin(w);g.x=N*Y,g.y=m*P,g.z=N*H,f.push(g.x,g.y,g.z),d.push(0,P,0),b.x=H*.5+.5,b.y=Y*.5*P+.5,p.push(b.x,b.y),S++}for(let U=0;U<r;U++){const W=T+U,w=D+U;y===!0?u.push(w,w+1,W):u.push(w+1,w,W),_+=3}l.addGroup(h,_,y===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Di extends Jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,p=[],S=[],A=[],m=[];for(let h=0;h<u;h++){const M=h*d-a;for(let C=0;C<l;C++){const y=C*f-s;S.push(y,-M,0),A.push(0,0,1),m.push(C/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let M=0;M<o;M++){const C=M+l*h,y=M+l*(h+1),T=M+1+l*(h+1),b=M+1+l*h;p.push(C,y,b),p.push(y,T,b)}this.setIndex(p),this.setAttribute("position",new Ct(S,3)),this.setAttribute("normal",new Ct(A,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ai extends Jt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new G,d=new G,p=[],S=[],A=[],m=[];for(let h=0;h<=n;h++){const M=[],C=h/n,y=a+C*o,T=e*Math.cos(y),b=Math.sqrt(e*e-T*T);let g=0;h===0&&a===0?g=.5/t:h===n&&c===Math.PI&&(g=-.5/t);for(let _=0;_<=t;_++){const N=_/t,P=r+N*s;f.x=-b*Math.cos(P),f.y=T,f.z=b*Math.sin(P),S.push(f.x,f.y,f.z),d.copy(f).normalize(),A.push(d.x,d.y,d.z),m.push(N+g,1-C),M.push(l++)}u.push(M)}for(let h=0;h<n;h++)for(let M=0;M<t;M++){const C=u[h][M+1],y=u[h][M],T=u[h+1][M],b=u[h+1][M+1];(h!==0||a>0)&&p.push(C,y,b),(h!==n-1||c<Math.PI)&&p.push(y,T,b)}this.setIndex(p),this.setAttribute("position",new Ct(S,3)),this.setAttribute("normal",new Ct(A,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Xa(r))r.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Xa(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=ai(i[t]);for(const r in n)e[r]=n[r]}return e}function Xa(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Yc={clone:ai,merge:bt};var Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=Qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(r.value);break;case"v3":this.uniforms[n].value=new G().fromArray(r.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(r.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zc extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qa extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jc extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kc extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ya(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ya(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ya(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $c{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const p=l[f],S=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const eu=new $c;class ia{constructor(e){this.manager=e!==void 0?e:eu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}ia.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn=new WeakMap;class tu extends ia{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=jr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Zn.get(a);f===void 0&&(f=[],Zn.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Ci("img");function c(){u(),t&&t(this);const f=Zn.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onLoad&&p.onLoad(this)}Zn.delete(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),jr.remove(`image:${e}`);const d=Zn.get(this)||[];for(let p=0;p<d.length;p++){const S=d[p];S.onError&&S.onError(f)}Zn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),jr.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class nu extends ia{constructor(e){super(e)}load(e,t,n,r){const s=new St,a=new tu(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class il extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Kr=new tt,Ja=new G,qa=new G;class iu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Ut,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ja),qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Kr,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Ri||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ir=new G,rr=new li,Zt=new G;class rl extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Yt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ir,rr,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,rr,Zt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ir,rr,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,rr,Zt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new G,Za=new Ve,ja=new Ve;class Gt extends rl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wi*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Za,ja),t.subVectors(ja,Za)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ru extends iu{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}}class $r extends il{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ru}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class su extends rl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class au extends il{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const jn=-90,Kn=1;class Vs extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(jn,Kn,e,t);r.layers=this.layers,this.add(r);const s=new Gt(jn,Kn,e,t);s.layers=this.layers,this.add(s);const a=new Gt(jn,Kn,e,t);a.layers=this.layers,this.add(a);const o=new Gt(jn,Kn,e,t);o.layers=this.layers,this.add(o);const c=new Gt(jn,Kn,e,t);c.layers=this.layers,this.add(c);const l=new Gt(jn,Kn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Yt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ri)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=A,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class ou extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class lu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,we("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ka(i,e,t,n){const r=cu(n);switch(t){case Oo:return i*e;case Bo:return i*e/r.components*r.byteLength;case qs:return i*e/r.components*r.byteLength;case Fn:return i*e*2/r.components*r.byteLength;case Zs:return i*e*2/r.components*r.byteLength;case Fo:return i*e*3/r.components*r.byteLength;case tn:return i*e*4/r.components*r.byteLength;case js:return i*e*4/r.components*r.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hs:case ps:return Math.max(i,16)*Math.max(e,8)/4;case ds:case fs:return Math.max(i,8)*Math.max(e,8)/2;case ms:case gs:case vs:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xs:case mr:case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Es:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case As:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ys:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ts:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ws:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Is:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ds:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ns:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Us:case Os:case Fs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bs:case Hs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gr:case ks:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cu(i){switch(i){case Ut:case Lo:return{byteLength:1,components:1};case Ti:case Do:case sn:return{byteLength:2,components:1};case Ys:case Js:return{byteLength:2,components:4};case rn:case Qs:case en:return{byteLength:4,components:1};case No:case Uo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xs}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xs);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sl(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function uu(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,S)=>p.start-S.start);let d=0;for(let p=1;p<f.length;p++){const S=f[d],A=f[p];A.start<=S.start+S.count+1?S.count=Math.max(S.count,A.start+A.count-S.start):(++d,f[d]=A)}f.length=d+1;for(let p=0,S=f.length;p<S;p++){const A=f[p];i.bufferSubData(l,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Su=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Au=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Du=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ju=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,td=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ld=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_d=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$d=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,th=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ih=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ch=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fh=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ah=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ih=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ph=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:du,alphahash_pars_fragment:hu,alphamap_fragment:fu,alphamap_pars_fragment:pu,alphatest_fragment:mu,alphatest_pars_fragment:gu,aomap_fragment:xu,aomap_pars_fragment:vu,batching_pars_vertex:Su,batching_vertex:_u,begin_vertex:Mu,beginnormal_vertex:Eu,bsdfs:Au,iridescence_fragment:yu,bumpmap_pars_fragment:bu,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:Cu,clipping_planes_vertex:wu,color_fragment:Iu,color_pars_fragment:Pu,color_pars_vertex:Lu,color_vertex:Du,common:Nu,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Ou,displacementmap_vertex:Fu,emissivemap_fragment:Bu,emissivemap_pars_fragment:Hu,colorspace_fragment:ku,colorspace_pars_fragment:Gu,envmap_fragment:zu,envmap_common_pars_fragment:Vu,envmap_pars_fragment:Wu,envmap_pars_vertex:Xu,envmap_physical_pars_fragment:nd,envmap_vertex:Qu,fog_vertex:Yu,fog_pars_vertex:Ju,fog_fragment:qu,fog_pars_fragment:Zu,gradientmap_pars_fragment:ju,lightmap_pars_fragment:Ku,lights_lambert_fragment:$u,lights_lambert_pars_fragment:ed,lights_pars_begin:td,lights_toon_fragment:id,lights_toon_pars_fragment:rd,lights_phong_fragment:sd,lights_phong_pars_fragment:ad,lights_physical_fragment:od,lights_physical_pars_fragment:ld,lights_fragment_begin:cd,lights_fragment_maps:ud,lights_fragment_end:dd,lightprobes_pars_fragment:hd,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:xd,map_pars_fragment:vd,map_particle_fragment:Sd,map_particle_pars_fragment:_d,metalnessmap_fragment:Md,metalnessmap_pars_fragment:Ed,morphinstance_vertex:Ad,morphcolor_vertex:yd,morphnormal_vertex:bd,morphtarget_pars_vertex:Td,morphtarget_vertex:Rd,normal_fragment_begin:Cd,normal_fragment_maps:wd,normal_pars_fragment:Id,normal_pars_vertex:Pd,normal_vertex:Ld,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Fd,opaque_fragment:Bd,packing:Hd,premultiplied_alpha_fragment:kd,project_vertex:Gd,dithering_fragment:zd,dithering_pars_fragment:Vd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:Jd,shadowmask_pars_fragment:qd,skinbase_vertex:Zd,skinning_pars_vertex:jd,skinning_vertex:Kd,skinnormal_vertex:$d,specularmap_fragment:eh,specularmap_pars_fragment:th,tonemapping_fragment:nh,tonemapping_pars_fragment:ih,transmission_fragment:rh,transmission_pars_fragment:sh,uv_pars_fragment:ah,uv_pars_vertex:oh,uv_vertex:lh,worldpos_vertex:ch,background_vert:uh,background_frag:dh,backgroundCube_vert:hh,backgroundCube_frag:fh,cube_vert:ph,cube_frag:mh,depth_vert:gh,depth_frag:xh,distance_vert:vh,distance_frag:Sh,equirect_vert:_h,equirect_frag:Mh,linedashed_vert:Eh,linedashed_frag:Ah,meshbasic_vert:yh,meshbasic_frag:bh,meshlambert_vert:Th,meshlambert_frag:Rh,meshmatcap_vert:Ch,meshmatcap_frag:wh,meshnormal_vert:Ih,meshnormal_frag:Ph,meshphong_vert:Lh,meshphong_frag:Dh,meshphysical_vert:Nh,meshphysical_frag:Uh,meshtoon_vert:Oh,meshtoon_frag:Fh,points_vert:Bh,points_frag:Hh,shadow_vert:kh,shadow_frag:Gh,sprite_vert:zh,sprite_frag:Vh},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Kt={basic:{uniforms:bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:bt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:bt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:bt([ge.points,ge.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:bt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:bt([ge.common,ge.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:bt([ge.sprite,ge.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:bt([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:bt([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Kt.physical={uniforms:bt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const sr={r:0,b:0,g:0},Wh=new tt,al=new Le;al.set(-1,0,0,0,1,0,0,0,1);function Xh(i,e,t,n,r,s){const a=new ze(0);let o=r===!0?0:1,c,l,u=null,f=0,d=null;function p(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){const y=M.backgroundBlurriness>0;C=e.get(C,y)}return C}function S(M){let C=!1;const y=p(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(M,C){const y=p(C);y&&y.isCubeTexture?(l===void 0&&(l=new Nt(new Li(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ai(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,b,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wh.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(al),l.material.toneMapped=Ge.getTransfer(y.colorSpace)!==qe,(u!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Nt(new Di(2,2),new Bn({name:"BackgroundMaterial",uniforms:ai(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(y.colorSpace)!==qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,C){M.getRGB(sr,nl(i)),t.buffers.color.setClear(sr.r,sr.g,sr.b,C,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:S,addToRenderList:A,dispose:h}}function Qh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(D,U,W,w,H){let Y=!1;const V=f(D,w,W,U);s!==V&&(s=V,l(s.object)),Y=p(D,w,W,H),Y&&S(D,w,W,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(D,U,W,w),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,U,W,w){const H=w.wireframe===!0;let Y=n[U.id];Y===void 0&&(Y={},n[U.id]=Y);const V=D.isInstancedMesh===!0?D.id:0;let te=Y[V];te===void 0&&(te={},Y[V]=te);let X=te[W.id];X===void 0&&(X={},te[W.id]=X);let K=X[H];return K===void 0&&(K=d(c()),X[H]=K),K}function d(D){const U=[],W=[],w=[];for(let H=0;H<t;H++)U[H]=0,W[H]=0,w[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:w,object:D,attributes:{},index:null}}function p(D,U,W,w){const H=s.attributes,Y=U.attributes;let V=0;const te=W.getAttributes();for(const X in te)if(te[X].location>=0){const ee=H[X];let _e=Y[X];if(_e===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),ee===void 0||ee.attribute!==_e||_e&&ee.data!==_e.data)return!0;V++}return s.attributesNum!==V||s.index!==w}function S(D,U,W,w){const H={},Y=U.attributes;let V=0;const te=W.getAttributes();for(const X in te)if(te[X].location>=0){let ee=Y[X];ee===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const _e={};_e.attribute=ee,ee&&ee.data&&(_e.data=ee.data),H[X]=_e,V++}s.attributes=H,s.attributesNum=V,s.index=w}function A(){const D=s.newAttributes;for(let U=0,W=D.length;U<W;U++)D[U]=0}function m(D){h(D,0)}function h(D,U){const W=s.newAttributes,w=s.enabledAttributes,H=s.attributeDivisors;W[D]=1,w[D]===0&&(i.enableVertexAttribArray(D),w[D]=1),H[D]!==U&&(i.vertexAttribDivisor(D,U),H[D]=U)}function M(){const D=s.newAttributes,U=s.enabledAttributes;for(let W=0,w=U.length;W<w;W++)U[W]!==D[W]&&(i.disableVertexAttribArray(W),U[W]=0)}function C(D,U,W,w,H,Y,V){V===!0?i.vertexAttribIPointer(D,U,W,H,Y):i.vertexAttribPointer(D,U,W,w,H,Y)}function y(D,U,W,w){A();const H=w.attributes,Y=W.getAttributes(),V=U.defaultAttributeValues;for(const te in Y){const X=Y[te];if(X.location>=0){let K=H[te];if(K===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const ee=K.normalized,_e=K.itemSize,re=e.get(K);if(re===void 0)continue;const k=re.buffer,$=re.type,ve=re.bytesPerElement,Te=$===i.INT||$===i.UNSIGNED_INT||K.gpuType===Qs;if(K.isInterleavedBufferAttribute){const fe=K.data,Ie=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,st=K.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Ce=0;Ce<X.locationSize;Ce++)h(X.location+Ce,fe.meshPerAttribute);D.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)m(X.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,k);for(let Ce=0;Ce<X.locationSize;Ce++)C(X.location+Ce,_e/X.locationSize,$,ee,Ie*ve,(st+_e/X.locationSize*Ce)*ve,Te)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)h(X.location+fe,K.meshPerAttribute);D.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<X.locationSize;fe++)m(X.location+fe);i.bindBuffer(i.ARRAY_BUFFER,k);for(let fe=0;fe<X.locationSize;fe++)C(X.location+fe,_e/X.locationSize,$,ee,_e*ve,_e/X.locationSize*fe*ve,Te)}}else if(V!==void 0){const ee=V[te];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(X.location,ee);break;case 3:i.vertexAttrib3fv(X.location,ee);break;case 4:i.vertexAttrib4fv(X.location,ee);break;default:i.vertexAttrib1fv(X.location,ee)}}}}M()}function T(){N();for(const D in n){const U=n[D];for(const W in U){const w=U[W];for(const H in w){const Y=w[H];for(const V in Y)u(Y[V].object),delete Y[V];delete w[H]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;const U=n[D.id];for(const W in U){const w=U[W];for(const H in w){const Y=w[H];for(const V in Y)u(Y[V].object),delete Y[V];delete w[H]}}delete n[D.id]}function g(D){for(const U in n){const W=n[U];for(const w in W){const H=W[w];if(H[D.id]===void 0)continue;const Y=H[D.id];for(const V in Y)u(Y[V].object),delete Y[V];delete H[D.id]}}}function _(D){for(const U in n){const W=n[U],w=D.isInstancedMesh===!0?D.id:0,H=W[w];if(H!==void 0){for(const Y in H){const V=H[Y];for(const te in V)u(V[te].object),delete V[te];delete H[Y]}delete W[w],Object.keys(W).length===0&&delete n[U]}}}function N(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:g,initAttributes:A,enableAttribute:m,disableUnusedAttributes:M}}function Yh(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Jh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==tn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const _=g===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Ut&&g!==en&&!_&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(we("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&we("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:S,maxTextureSize:A,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:y,maxSamples:T,samples:b}}function qh(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new En,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const S=f.clippingPlanes,A=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||S===null||S.length===0||s&&!m)s?u(null):l();else{const M=s?0:n,C=M*4;let y=h.clippingState||null;c.value=y,y=u(S,d,C,p);for(let T=0;T!==C;++T)y[T]=t[T];h.clippingState=y,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,S){const A=f!==null?f.length:0;let m=null;if(A!==0){if(m=c.value,S!==!0||m===null){const h=p+A*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<h)&&(m=new Float32Array(h));for(let C=0,y=p;C!==A;++C,y+=4)a.copy(f[C]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,m}}class ra extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $o(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Li(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:ti});s.uniforms.tEquirect.value=t;const a=new Nt(r,s),o=t.minFilter;return t.minFilter===yn&&(t.minFilter=It),new Vs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const $a=256,Zh=3,jh=20,ol=256,ll=16,Kh=3,$h=new G,ef=new ze;class _r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vs(1,10,null),this._boxMesh=new Nt(new Li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=$h}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,S=c.autoClearStencil,A=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,A===null&&(e.background=c.getClearColor(ef));const m=new Vs(n,r,u);return m.position.copy(o),m.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=S,e.background=A,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=no(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=to(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max($a,Vo(e))}_fromTexture(e,t){e.mapping===ii||e.mapping===bi?this._setSize(e.image.length===0?$a:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=eo(e,!1,!1),n=Math.log2(e)-Zh;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=eo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ii||e.mapping===bi?(this._cubemapMaterial===null&&(this._cubemapMaterial=no()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=to()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=tf(),this._integrationMaterial=nf());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/ll);for(let a=0;a<=n;a++){const o=_r.lodToRoughness(a,n);if(a>n-Kh)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(ol*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rf());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function eo(i,e,t){return new ra(i,{minFilter:yn,generateMipmaps:e,type:sn,colorSpace:xr,depthBuffer:t})}function Ni(i,e,t){return new Bn({name:i,uniforms:e,vertexShader:Oe.cube_vert,fragmentShader:t,side:Tt,blending:ti,depthTest:!1,depthWrite:!1})}function tf(){return Ni("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ol}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nf(){return Ni("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ll}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rf(){return Ni("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${jh}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function to(){return Ni("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function no(){return Ni("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sf(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Rr||p===Cr)if(e.has(d)){const S=e.get(d).texture;return o(S,d.mapping)}else{const S=d.image;if(S&&S.height>0){const A=new ra(S.height);return A.fromEquirectangularTexture(i,d),e.set(d,A),d.addEventListener("dispose",l),o(A.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,S=p===Rr||p===Cr,A=p===ii||p===bi;if(S||A){let m=t.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return n===null&&(n=new _r(i)),m=S?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return S&&M&&M.height>0||A&&M&&c(M)?(n===null&&(n=new _r(i)),m=S?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===Rr?d.mapping=ii:p===Cr&&(d.mapping=bi),d}function c(d){let p=0;const S=6;for(let A=0;A<S;A++)d[A]!==void 0&&p++;return p===S}function l(d){const p=d.target;p.removeEventListener("dispose",l);const S=e.get(p);S!==void 0&&(e.delete(p),S.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const S=t.get(p);S!==void 0&&(t.delete(p),S.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function af(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&hr("WebGLRenderer: "+n+" extension not supported."),r}}}function of(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(S=>delete r[S]);function o(S){c(S.target)}function c(S){S.index!==null&&e.remove(S.index);for(const m in S.attributes)e.remove(S.attributes[m]);S.removeEventListener("dispose",o),delete r[S.id],a.unregister(S);const A=s.get(S);A&&(e.remove(A),s.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function l(S,A){return r[A.id]!==void 0||(A.addEventListener("dispose",o),r[A.id]=new WeakRef(A),a.register(A,A.id,A),t.memory.geometries++),A}function u(S){const A=S.attributes;for(const m in A)e.update(A[m],i.ARRAY_BUFFER)}function f(S){const A=S.index,m=S.attributes.position;let h=0;if(m===void 0)return;const M=A!==null?A.array.length:m.array.length/3-1,C=m.count>=65535?Zo:qo,y=new C(Math.ceil(M/3)*6,1),T=y.array;if(A!==null){const g=A.array;h=A.version;for(let _=0,N=0;_<M;_+=3){const P=g[_+0],D=g[_+1],U=g[_+2];T[N++]=P,T[N++]=D,T[N++]=D,T[N++]=U,T[N++]=U,T[N++]=P}}else{h=m.version;for(let g=0,_=0;g<M;g+=3){const N=g+0,P=g+1,D=g+2;T[_++]=N,T[_++]=P,T[_++]=P,T[_++]=D,T[_++]=D,T[_++]=N}}y.version=h;const b=s.get(S);b&&e.remove(b),s.set(S,y)}function d(S){const A=s.get(S);if(A){const m=S.index;m!==null&&A.version<m.version&&f(S)}else f(S);return s.get(S)}function p(){for(const S in r){const A=r[S].deref();A!==void 0&&c(A)}}return{get:l,update:u,getWireframeAttribute:d,dispose:p}}function lf(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}function l(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,f*a,p),t.update(d,n,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let A=0;for(let m=0;m<p;m++)A+=d[m];t.update(A,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function cf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function uf(i,e,t){const n=new WeakMap,r=new rt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let N=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let C=0;p===!0&&(C=1),S===!0&&(C=2),A===!0&&(C=3);let y=o.attributes.position.count*C,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*T*4*f),g=new Qo(b,y,T,f);g.type=en,g.needsUpdate=!0;const _=C*4;for(let P=0;P<f;P++){const D=m[P],U=h[P],W=M[P],w=y*T*4*P;for(let H=0;H<D.count;H++){const Y=H*_;p===!0&&(r.fromBufferAttribute(D,H),b[w+Y+0]=r.x,b[w+Y+1]=r.y,b[w+Y+2]=r.z,b[w+Y+3]=0),S===!0&&(r.fromBufferAttribute(U,H),b[w+Y+4]=r.x,b[w+Y+5]=r.y,b[w+Y+6]=r.z,b[w+Y+7]=0),A===!0&&(r.fromBufferAttribute(W,H),b[w+Y+8]=r.x,b[w+Y+9]=r.y,b[w+Y+10]=r.z,b[w+Y+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:g,size:new Ve(y,T)},n.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let A=0;A<l.length;A++)p+=l[A];const S=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function df(i,e,t,n,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,d=e.get(l,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const hf={[yo]:"LINEAR_TONE_MAPPING",[bo]:"REINHARD_TONE_MAPPING",[To]:"CINEON_TONE_MAPPING",[Ro]:"ACES_FILMIC_TONE_MAPPING",[wo]:"AGX_TONE_MAPPING",[Io]:"NEUTRAL_TONE_MAPPING",[Co]:"CUSTOM_TONE_MAPPING"};function ff(i,e,t,n,r,s){const a=new nn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new Jt;u.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const f=new Zc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Nt(u,f),p=new su(-1,1,1,-1,0,1);let S=null,A=null,m=!1,h,M=null,C=[],y=!1;this.setSize=function(T,b){a.setSize(T,b),o!==null&&o.setSize(T,b),c!==null&&c.setSize(T,b);for(let g=0;g<C.length;g++){const _=C[g];_.setSize&&_.setSize(T,b)}},this.setEffects=function(T){C=T,y=C.length>0&&C[0].isRenderPass===!0;const b=a.width,g=a.height;C.length>0&&o===null&&(o=new nn(b,g,{type:sn,depthBuffer:!1,stencilBuffer:!1}),c=new nn(b,g,{type:sn,depthBuffer:!1,stencilBuffer:!1}));const _=r===!0&&C.some(N=>N.needsDepthTexture===!0);_!==(a.depthTexture!==null)&&(_===!0&&l===null&&(l=new si(b,g),s===!0&&(l.format=bn,l.type=ri)),a.dispose(),a.depthTexture=_?l:null,a.resolveDepthBuffer=_,a.storeMultisampledDepthBuffer=_);for(let N=0;N<C.length;N++){const P=C[N];P.setSize&&P.setSize(b,g),_&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(T,b){if(m||T.toneMapping===fn&&C.length===0)return!1;if(M=b,b!==null){const g=b.width,_=b.height;(a.width!==g||a.height!==_)&&this.setSize(g,_)}return y===!1&&T.setRenderTarget(a),h=T.toneMapping,T.toneMapping=fn,!0},this.hasRenderPass=function(){return y},this.end=function(T,b){T.toneMapping=h,m=!0;let g=a,_=o;for(let N=0;N<C.length;N++){const P=C[N];P.enabled!==!1&&(P.render(T,_,g,b),P.needsSwap!==!1&&(g=_,_=_===o?c:o))}if(S!==T.outputColorSpace||A!==T.toneMapping){S=T.outputColorSpace,A=T.toneMapping,f.defines={},Ge.getTransfer(S)===qe&&(f.defines.SRGB_TRANSFER="");const N=hf[A];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(M),T.render(d,p),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}const cl=new St,ul=new si(1,1),dl=new el(1),hl=new Qo,fl=new Tc,pl=new $o,io=[],ro=[],so=new Float32Array(16),ao=new Float32Array(9),oo=new Float32Array(4);function ui(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=io[r];if(s===void 0&&(s=new Float32Array(r),io[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ar(i,e){let t=ro[e];t===void 0&&(t=new Int32Array(e),ro[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function vf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;oo.set(n),i.uniformMatrix2fv(this.addr,!1,oo),dt(t,n)}}function Sf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;ao.set(n),i.uniformMatrix3fv(this.addr,!1,ao),dt(t,n)}}function _f(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;so.set(n),i.uniformMatrix4fv(this.addr,!1,so),dt(t,n)}}function Mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function yr(i){return i.version===0&&(i.compareFunction=Go,i.needsUpdate=!0),i}function wf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=yr(ul):s=cl,t.setTexture2D(e||s,r)}function If(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||fl,r)}function Pf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=yr(dl):s=pl,t.setTextureCube(e||s,r)}function Lf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hl,r)}function Df(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return xf;case 35674:return vf;case 35675:return Sf;case 35676:return _f;case 5124:case 35670:return Mf;case 35667:case 35671:return Ef;case 35668:case 35672:return Af;case 35669:case 35673:return yf;case 5125:return bf;case 36294:return Tf;case 36295:return Rf;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}function Nf(i,e){i.uniform1fv(this.addr,e)}function Uf(i,e){const t=ui(e,this.size,2);i.uniform2fv(this.addr,t)}function Of(i,e){const t=ui(e,this.size,3);i.uniform3fv(this.addr,t)}function Ff(i,e){const t=ui(e,this.size,4);i.uniform4fv(this.addr,t)}function Bf(i,e){const t=ui(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hf(i,e){const t=ui(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kf(i,e){const t=ui(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gf(i,e){i.uniform1iv(this.addr,e)}function zf(i,e){i.uniform2iv(this.addr,e)}function Vf(i,e){i.uniform3iv(this.addr,e)}function Wf(i,e){i.uniform4iv(this.addr,e)}function Xf(i,e){i.uniform1uiv(this.addr,e)}function Qf(i,e){i.uniform2uiv(this.addr,e)}function Yf(i,e){i.uniform3uiv(this.addr,e)}function Jf(i,e){i.uniform4uiv(this.addr,e)}function qf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=yr(ul):a=cl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Zf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||fl,s[a])}function jf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=yr(dl):a=pl;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Kf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hl,s[a])}function $f(i){switch(i){case 5126:return Nf;case 35664:return Uf;case 35665:return Of;case 35666:return Ff;case 35674:return Bf;case 35675:return Hf;case 35676:return kf;case 5124:case 35670:return Gf;case 35667:case 35671:return zf;case 35668:case 35672:return Vf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return Qf;case 36295:return Yf;case 36296:return Jf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Kf}}class ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Df(t.type)}}class tp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$f(t.type)}}class np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const es=/(\w+)(\])?(\[|\.)?/g;function lo(i,e){i.seq.push(e),i.map[e.id]=e}function ip(i,e,t){const n=i.name,r=n.length;for(es.lastIndex=0;;){const s=es.exec(n),a=es.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){lo(t,l===void 0?new ep(o,i,e):new tp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new np(o),lo(t,f)),t=f}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ip(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function co(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rp=37297;let sp=0;function ap(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const uo=new Le;function op(i){Ge._getMatrix(uo,Ge.workingColorSpace,i);const e=`mat3( ${uo.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case vr:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ho(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ap(i.getShaderSource(e),o)}else return s}function lp(i,e){const t=op(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const cp={[yo]:"Linear",[bo]:"Reinhard",[To]:"Cineon",[Ro]:"ACESFilmic",[wo]:"AgX",[Io]:"Neutral",[Co]:"Custom"};function up(i,e){const t=cp[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ar=new G;function dp(){Ge.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),e=ar.y.toFixed(4),t=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vi).join(`
`)}function fp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function vi(i){return i!==""}function fo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function po(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ws(i){return i.replace(mp,gp)}function gp(i,e){const t=Oe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ws(t)}const xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mo(i){return i.replace(xp,vp)}function vp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function go(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Sp={[or]:"SHADOWMAP_TYPE_PCF",[xi]:"SHADOWMAP_TYPE_VSM"};function _p(i){return Sp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Mp={[bi]:"ENVMAP_MODE_REFRACTION"};function Ep(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Mp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ap={[Ao]:"ENVMAP_BLENDING_MULTIPLY",[Vl]:"ENVMAP_BLENDING_MIX",[Wl]:"ENVMAP_BLENDING_ADD"};function yp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ap[i.combine]||"ENVMAP_BLENDING_NONE"}function bp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=_p(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Ep(t),f=yp(t),d=hp(t),p=fp(s),S=r.createProgram();let A,m,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(vi).join(`
`),A.length>0&&(A+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(vi).join(`
`),m.length>0&&(m+=`
`)):(A=[go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),m=[go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==fn?up("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,lp("linearToOutputTexel",t.outputColorSpace),dp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),a=Ws(a),a=fo(a,t),a=po(a,t),o=Ws(o),o=fo(o,t),o=po(o,t),a=mo(a),o=mo(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,A=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",t.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=h+A+a,C=h+m+o,y=co(r,r.VERTEX_SHADER,M),T=co(r,r.FRAGMENT_SHADER,C);r.attachShader(S,y),r.attachShader(S,T),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function b(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(S)||"",U=r.getShaderInfoLog(y)||"",W=r.getShaderInfoLog(T)||"",w=D.trim(),H=U.trim(),Y=W.trim();let V=!0,te=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,y,T);else{const X=ho(r,y,"vertex"),K=ho(r,T,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+w+`
`+X+`
`+K)}else w!==""?we("WebGLProgram: Program Info Log:",w):(H===""||Y==="")&&(te=!1);te&&(P.diagnostics={runnable:V,programLog:w,vertexShader:{log:H,prefix:A},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(y),r.deleteShader(T),g=new pr(r,S),_=pp(r,S)}let g;this.getUniforms=function(){return g===void 0&&b(this),g};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(S,rp)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=T,this}let Tp=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cp(e),t.set(e,n)),n}}class Cp{constructor(e){this.id=Tp++,this.code=e,this.usedTimes=0}}function wp(i){return i===Fn||i===mr||i===gr}function Ip(i,e,t,n,r,s){const a=new Yo,o=new Rp,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function S(g,_,N,P,D,U){const W=P.fog,w=D.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=e.get(g.envMap||H,Y),te=d[g.type];let X=n.precision;g.precision!==null&&(X=n.getMaxPrecision(g.precision),X!==g.precision&&we("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));const K=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ee=K!==void 0?K.length:0;let _e=0;w.morphAttributes.position!==void 0&&(_e=1),w.morphAttributes.normal!==void 0&&(_e=2),w.morphAttributes.color!==void 0&&(_e=3);let re,k,$,ve;if(te){const me=Kt[te];re=me.vertexShader,k=me.fragmentShader}else{re=g.vertexShader,k=g.fragmentShader;const me=o.getVertexShaderStage(g),Je=o.getFragmentShaderStage(g);o.update(g,me,Je),$=me.id,ve=Je.id}const Te=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,st=D.isBatchedMesh===!0,Ce=!!g.map,Ye=!!g.matcap,Ze=!!V,Fe=Ze&&V.isPMREMTexture===!0,gt=!!g.aoMap,lt=!!g.lightMap,wt=!!g.bumpMap&&g.wireframe===!1,nt=!!g.normalMap,qt=!!g.displacementMap,ht=!!g.emissiveMap,Ot=!!g.metalnessMap,Ft=!!g.roughnessMap,Bt=g.anisotropy>0,L=g.clearcoat>0,Ht=g.diffuseRoughness>0,$e=g.dispersion>0,et=g.retroreflectivity>0,pe=g.iridescence>0,ct=g.sheen>0,Re=g.transmission>0,Pe=Bt&&!!g.anisotropyMap,E=L&&!!g.clearcoatMap,x=L&&!!g.clearcoatNormalMap,F=L&&!!g.clearcoatRoughnessMap,ne=Ht&&!!g.diffuseRoughnessMap,j=pe&&!!g.iridescenceMap,ae=pe&&!!g.iridescenceThicknessMap,de=ct&&!!g.sheenColorMap,J=ct&&!!g.sheenRoughnessMap,q=!!g.specularMap,le=!!g.specularColorMap,R=!!g.specularIntensityMap,Z=Re&&!!g.transmissionMap,Q=Re&&!!g.thicknessMap,ce=!!g.gradientMap,se=!!g.alphaMap,oe=g.alphaTest>0,ye=!!g.alphaHash,Ue=!!g.extensions;let ie=fn;g.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ie=i.toneMapping);const be=Fe?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ne={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:re,fragmentShader:k,defines:g.defines,customVertexShaderID:$,customFragmentShaderID:ve,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:st,batchingColor:st&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:Ye,envMap:Ze,envMapMode:Ze&&V.mapping,envMapPMREM:Fe,envMapMaxLod:Fe?be.length-1:null,envMapSize:Fe?be[0].width:null,aoMap:gt,lightMap:lt,bumpMap:wt,normalMap:nt,displacementMap:qt,emissiveMap:ht,normalMapObjectSpace:nt&&g.normalMapType===Yl,normalMapTangentSpace:nt&&g.normalMapType===Gs,packedNormalMap:nt&&g.normalMapType===Gs&&wp(g.normalMap.format),metalnessMap:Ot,roughnessMap:Ft,anisotropy:Bt,anisotropyMap:Pe,clearcoat:L,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:Ht,diffuseRoughnessMap:ne,dispersion:$e,retroreflection:et,iridescence:pe,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:ct,sheenColorMap:de,sheenRoughnessMap:J,specularMap:q,specularColorMap:le,specularIntensityMap:R,transmission:Re,transmissionMap:Z,thicknessMap:Q,gradientMap:ce,opaque:g.transparent===!1&&g.blending===Si&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:oe,alphaHash:ye,combine:g.combine,mapUv:Ce&&p(g.map.channel),aoMapUv:gt&&p(g.aoMap.channel),lightMapUv:lt&&p(g.lightMap.channel),bumpMapUv:wt&&p(g.bumpMap.channel),normalMapUv:nt&&p(g.normalMap.channel),displacementMapUv:qt&&p(g.displacementMap.channel),emissiveMapUv:ht&&p(g.emissiveMap.channel),metalnessMapUv:Ot&&p(g.metalnessMap.channel),roughnessMapUv:Ft&&p(g.roughnessMap.channel),anisotropyMapUv:Pe&&p(g.anisotropyMap.channel),clearcoatMapUv:E&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(g.sheenRoughnessMap.channel),specularMapUv:q&&p(g.specularMap.channel),specularColorMapUv:le&&p(g.specularColorMap.channel),specularIntensityMapUv:R&&p(g.specularIntensityMap.channel),transmissionMapUv:Z&&p(g.transmissionMap.channel),thicknessMapUv:Q&&p(g.thicknessMap.channel),alphaMapUv:se&&p(g.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(nt||Bt),vertexNormals:!!w.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!w.attributes.uv&&(Ce||se),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||w.attributes.normal===void 0&&nt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:_e,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:U.filter(me=>me.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&Ge.getTransfer(g.map.colorSpace)===qe,decodeVideoTextureEmissive:ht&&g.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(g.emissiveMap.colorSpace)===qe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===$t,flipSided:g.side===Tt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ue&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&g.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function A(g){const _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(const N in g.defines)_.push(N),_.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(m(_,g),h(_,g),_.push(i.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function m(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapPMREM),g.push(_.envMapMaxLod),g.push(_.envMapSize),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.diffuseRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.numSunLights),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numSunLightShadows),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.numLightProbeGrids),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function h(g,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.diffuseRoughness&&a.enable(25),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const _=d[g.type];let N;if(_){const P=Kt[_];N=Yc.clone(P.uniforms)}else N=g.uniforms;return N}function C(g,_){let N=u.get(_);return N!==void 0?++N.usedTimes:(N=new bp(i,_,g,r),l.push(N),u.set(_,N)),N}function y(g){if(--g.usedTimes===0){const _=l.indexOf(g);l[_]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function b(){o.dispose()}return{getParameters:S,getProgramCacheKey:A,getUniforms:M,acquireProgram:C,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:b}}function Pp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Lp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,S,A,m,h){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:p,material:S,materialVariant:a(d),groupOrder:A,renderOrder:d.renderOrder,z:m,group:h},i[e]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=S,M.materialVariant=a(d),M.groupOrder=A,M.renderOrder=d.renderOrder,M.z=m,M.group=h),e++,M}function c(d,p,S,A,m,h,M){M.reversedDepth===!0&&(m=-m);const C=o(d,p,S,A,m,h);S.transmission>0?n.push(C):S.transparent===!0?r.push(C):t.push(C)}function l(d,p,S,A,m,h){const M=o(d,p,S,A,m,h);S.transmission>0?n.unshift(M):S.transparent===!0?r.unshift(M):t.unshift(M)}function u(d,p){t.length>1&&t.sort(d||Lp),n.length>1&&n.sort(p||xo),r.length>1&&r.sort(p||xo)}function f(){for(let d=e,p=i.length;d<p;d++){const S=i[d];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function Dp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new vo,i.set(n,[a])):r>=s.length?(a=new vo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Np(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new ze};break;case"SpotLight":t={position:new G,direction:new G,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Up(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Op=0;function Fp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bp(i){const e=new Np,t=Up(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const r=new G,s=new tt,a=new tt;function o(l){let u=0,f=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,S=0,A=0,m=0,h=0,M=0,C=0,y=0,T=0,b=0,g=0,_=0,N=0,P=0;l.sort(Fp);for(let U=0,W=l.length;U<W;U++){const w=l[U],H=w.color,Y=w.intensity,V=w.distance;let te=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Fn?te=w.shadow.map.texture:te=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=H.r*Y,f+=H.g*Y,d+=H.b*Y;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],Y);P++}else if(w.isSunLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,ee=t.get(w);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[S]=ee,n.sunShadowMap[S]=te;const _e=K.getViewportCount();for(let re=0;re<_e;re++)n.sunShadowMatrix[A+re]=K.getMatrix(re),n.sunShadowCascade[A+re]=K._cascadeData[re];A+=_e,S++}n.sun[p]=X,p++}else if(w.isDirectionalLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,ee=t.get(w);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=w.shadow.matrix,T++}n.directional[m]=X,m++}else if(w.isSpotLight){const X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(H).multiplyScalar(Y),X.distance=V,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[M]=X;const K=w.shadow;if(w.map&&(n.spotLightMap[_]=w.map,_++,K.updateMatrices(w),w.castShadow&&N++),n.spotLightMatrix[M]=K.matrix,w.castShadow){const ee=t.get(w);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=te,g++}M++}else if(w.isRectAreaLight){const X=e.get(w);X.color.copy(H).multiplyScalar(Y),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[C]=X,C++}else if(w.isPointLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const K=w.shadow,ee=t.get(w);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,n.pointShadow[h]=ee,n.pointShadowMap[h]=te,n.pointShadowMatrix[h]=w.shadow.matrix,b++}n.point[h]=X,h++}else if(w.isHemisphereLight){const X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(Y),X.groundColor.copy(w.groundColor).multiplyScalar(Y),n.hemi[y]=X,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==h||D.spotLength!==M||D.rectAreaLength!==C||D.hemiLength!==y||D.numSunShadows!==S||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==g||D.numSpotMaps!==_||D.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=C,n.point.length=h,n.hemi.length=y,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+_-N,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,D.sunLength=p,D.directionalLength=m,D.pointLength=h,D.spotLength=M,D.rectAreaLength=C,D.hemiLength=y,D.numSunShadows=S,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=g,D.numSpotMaps=_,D.numLightProbes=P,n.version=Op++)}function c(l,u){let f=0,d=0,p=0,S=0,A=0,m=0;const h=u.matrixWorldInverse;for(let M=0,C=l.length;M<C;M++){const y=l[M];if(y.isSunLight){const T=n.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),f++}else if(y.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),d++}else if(y.isSpotLight){const T=n.spot[S];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),S++}else if(y.isRectAreaLight){const T=n.rectArea[A];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),a.identity(),s.copy(y.matrixWorld),s.premultiply(h),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),A++}else if(y.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:o,setupView:c,state:n}}function So(i){const e=new Bp(i),t=[],n=[],r=[];function s(f){u.camera=f,t.length=0,n.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):t.push(f)}function o(f){n.push(f)}function c(){e.setup(t),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Hp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new So(i),e.set(r,[o])):s>=a.length?(o=new So(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zp=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Vp=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],_o=new tt,gi=new G,ts=new G;function Wp(i,e,t){let n=new Ii;const r=new Ve,s=new Ve,a=new rt,o=new jc,c=new Kc,l={},u=t.maxTextureSize,f={[Rn]:Tt,[Tt]:Rn,[$t]:$t},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:kp,fragmentShader:Gp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const S=new Jt;S.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Nt(S,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let h=this.type;this.render=function(b,g,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===yl&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=or);const N=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ti),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=h!==this.type;W&&g.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(H=>H.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,H=b.length;w<H;w++){const Y=b[w],V=Y.shadow;if(V===void 0){we("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const te=V.getFrameExtents();r.multiply(te),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,V.mapSize.y=s.y));const X=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===xi){if(Y.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new nn(r.x,r.y,{format:Fn,type:sn,minFilter:It,magFilter:It,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new si(r.x,r.y,en),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=Cn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vt,V.map.depthTexture.magFilter=vt}else Y.isPointLight?(V.map=new ra(r.x),V.map.depthTexture=new el(r.x,rn)):(V.map=new nn(r.x,r.y),V.map.depthTexture=new si(r.x,r.y,rn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=Cn,this.type===or?(V.map.depthTexture.compareFunction=X?ko:Ho,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vt,V.map.depthTexture.magFilter=vt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,_);const ee=V.camera.layers.mask&4294967294?V.camera.layers:_.layers;for(let _e=0;_e<K;_e++){const re=V.getCamera(_e);if(Y.isPointLight){const k=V.camera,$=V.matrix,ve=Y.distance||k.far;ve!==k.far&&(k.far=ve,k.updateProjectionMatrix()),gi.setFromMatrixPosition(Y.matrixWorld),k.position.copy(gi),ts.copy(k.position),ts.add(zp[_e]),k.up.copy(Vp[_e]),k.lookAt(ts),k.updateMatrixWorld(),$.makeTranslation(-gi.x,-gi.y,-gi.z),_o.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V._frustum.setFromProjectionMatrix(_o,k.coordinateSystem,k.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(V.map),i.clear());const k=V.getViewport(_e);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),U.viewport(a)}n=V.getFrustum(_e),y(g,_,re,Y,ee,this.type)}V.isPointLightShadow!==!0&&this.type===xi&&M(V,_),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(N,P,D)};function M(b,g){const _=e.update(A);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new nn(r.x,r.y,{format:Fn,type:sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(g,null,_,d,A,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(g,null,_,p,A,null)}function C(b,g,_,N){let P=null;const D=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const U=P.uuid,W=g.uuid;let w=l[U];w===void 0&&(w={},l[U]=w);let H=w[W];H===void 0&&(H=P.clone(),w[W]=H,g.addEventListener("dispose",T)),P=H}if(P.visible=g.visible,P.wireframe=g.wireframe,N===xi?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:f[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=i.properties.get(P);U.light=_}return P}function y(b,g,_,N,P,D){if(b.visible===!1)return;if(b.layers.test(P)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===xi)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const w=e.update(b),H=b.material;if(Array.isArray(H)){const Y=w.groups;for(let V=0,te=Y.length;V<te;V++){const X=Y[V],K=H[X.materialIndex];if(K&&K.visible){const ee=C(b,K,N,D);b.onBeforeShadow(i,b,g,_,w,ee,X),i.renderBufferDirect(_,null,w,ee,b,X),b.onAfterShadow(i,b,g,_,w,ee,X)}}}else if(H.visible){const Y=C(b,H,N,D);b.onBeforeShadow(i,b,g,_,w,Y,null),i.renderBufferDirect(_,null,w,Y,b,null),b.onAfterShadow(i,b,g,_,w,Y,null)}}const W=b.children;for(let w=0,H=W.length;w<H;w++)y(W[w],g,_,N,P,D)}function T(b){b.target.removeEventListener("dispose",T);for(const _ in l){const N=l[_],P=b.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function Xp(i,e){function t(){let R=!1;const Z=new rt;let Q=null;const ce=new rt(0,0,0,0);return{setMask:function(se){Q!==se&&!R&&(i.colorMask(se,se,se,se),Q=se)},setLocked:function(se){R=se},setClear:function(se,oe,ye,Ue,ie){ie===!0&&(se*=Ue,oe*=Ue,ye*=Ue),Z.set(se,oe,ye,Ue),ce.equals(Z)===!1&&(i.clearColor(se,oe,ye,Ue),ce.copy(Z))},reset:function(){R=!1,Q=null,ce.set(-1,0,0,0)}}}function n(){let R=!1,Z=!1,Q=null,ce=null,se=null;return{setReversed:function(oe){if(Z!==oe){const ye=e.get("EXT_clip_control");oe?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Z=oe;const Ue=se;se=null,this.setClear(Ue)}},getReversed:function(){return Z},setTest:function(oe){oe?fe(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(oe){Q!==oe&&!R&&(i.depthMask(oe),Q=oe)},setFunc:function(oe){if(Z&&(oe=rc[oe]),ce!==oe){switch(oe){case ns:i.depthFunc(i.NEVER);break;case is:i.depthFunc(i.ALWAYS);break;case rs:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case ss:i.depthFunc(i.EQUAL);break;case as:i.depthFunc(i.GEQUAL);break;case os:i.depthFunc(i.GREATER);break;case ls:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=oe}},setLocked:function(oe){R=oe},setClear:function(oe){se!==oe&&(se=oe,Z&&(oe=1-oe),i.clearDepth(oe))},reset:function(){R=!1,Q=null,ce=null,se=null,Z=!1}}}function r(){let R=!1,Z=null,Q=null,ce=null,se=null,oe=null,ye=null,Ue=null,ie=null;return{setTest:function(be){R||(be?fe(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(be){Z!==be&&!R&&(i.stencilMask(be),Z=be)},setFunc:function(be,Ne,me){(Q!==be||ce!==Ne||se!==me)&&(i.stencilFunc(be,Ne,me),Q=be,ce=Ne,se=me)},setOp:function(be,Ne,me){(oe!==be||ye!==Ne||Ue!==me)&&(i.stencilOp(be,Ne,me),oe=be,ye=Ne,Ue=me)},setLocked:function(be){R=be},setClear:function(be){ie!==be&&(i.clearStencil(be),ie=be)},reset:function(){R=!1,Z=null,Q=null,ce=null,se=null,oe=null,ye=null,Ue=null,ie=null}}}const s=new t,a=new n,o=new r;let c={};const l=new WeakMap;let u={},f={},d={},p=new WeakMap,S=[],A=null,m=!1,h=null,M=null,C=null,y=null,T=null,b=null,g=null,_=new ze(0,0,0),N=0,P=!1,D=null,U=null,W=null,w=null,H=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,te=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=te>=2);let K=null,ee={};const _e=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),k=new rt().fromArray(_e),$=new rt().fromArray(re);function ve(R,Z,Q,ce){const se=new Uint8Array(4),oe=i.createTexture();i.bindTexture(R,oe),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<Q;ye++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(Z+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return oe}const Te={};Te[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),a.setFunc(yi),wt(!1),nt(Ma),fe(i.CULL_FACE),gt(ti);function fe(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Ie(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function st(R,Z){return d[R]!==Z?(i.bindFramebuffer(R,Z),d[R]=Z,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Z),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ce(R,Z){let Q=S,ce=!1;if(R){Q=p.get(Z),Q===void 0&&(Q=[],p.set(Z,Q));const se=R.textures;if(Q.length!==se.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,ye=se.length;oe<ye;oe++)Q[oe]=i.COLOR_ATTACHMENT0+oe;Q.length=se.length,ce=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ce=!0);ce&&i.drawBuffers(Q)}function Ye(R){return A!==R?(i.useProgram(R),A=R,!0):!1}const Ze={[$n]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[Rl]:i.FUNC_REVERSE_SUBTRACT};Ze[Cl]=i.MIN,Ze[wl]=i.MAX;const Fe={[Il]:i.ZERO,[Pl]:i.ONE,[Ll]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[Bl]:i.SRC_ALPHA_SATURATE,[Ol]:i.DST_COLOR,[Nl]:i.DST_ALPHA,[Dl]:i.ONE_MINUS_SRC_COLOR,[Eo]:i.ONE_MINUS_SRC_ALPHA,[Fl]:i.ONE_MINUS_DST_COLOR,[Ul]:i.ONE_MINUS_DST_ALPHA,[Hl]:i.CONSTANT_COLOR,[kl]:i.ONE_MINUS_CONSTANT_COLOR,[Gl]:i.CONSTANT_ALPHA,[zl]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(R,Z,Q,ce,se,oe,ye,Ue,ie,be){if(R===ti){m===!0&&(Ie(i.BLEND),m=!1);return}if(m===!1&&(fe(i.BLEND),m=!0),R!==bl){if(R!==h||be!==P){if((M!==$n||T!==$n)&&(i.blendEquation(i.FUNC_ADD),M=$n,T=$n),be)switch(R){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFunc(i.ONE,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",R);break}else switch(R){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ea:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Aa:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",R);break}C=null,y=null,b=null,g=null,_.set(0,0,0),N=0,h=R,P=be}return}se=se||Z,oe=oe||Q,ye=ye||ce,(Z!==M||se!==T)&&(i.blendEquationSeparate(Ze[Z],Ze[se]),M=Z,T=se),(Q!==C||ce!==y||oe!==b||ye!==g)&&(i.blendFuncSeparate(Fe[Q],Fe[ce],Fe[oe],Fe[ye]),C=Q,y=ce,b=oe,g=ye),(Ue.equals(_)===!1||ie!==N)&&(i.blendColor(Ue.r,Ue.g,Ue.b,ie),_.copy(Ue),N=ie),h=R,P=!1}function lt(R,Z){R.side===$t?Ie(i.CULL_FACE):fe(i.CULL_FACE);let Q=R.side===Tt;Z&&(Q=!Q),wt(Q),R.blending===Si&&R.transparent===!1?gt(ti):gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const ce=R.stencilWrite;o.setTest(ce),ce&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ht(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function nt(R){R!==El?(fe(i.CULL_FACE),R!==U&&(R===Ma?i.cullFace(i.BACK):R===Al?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),U=R}function qt(R){R!==W&&(V&&i.lineWidth(R),W=R)}function ht(R,Z,Q){R?(fe(i.POLYGON_OFFSET_FILL),(w!==Z||H!==Q)&&(w=Z,H=Q,a.getReversed()&&(Z=-Z,Q=-Q),i.polygonOffset(Z,Q))):Ie(i.POLYGON_OFFSET_FILL)}function Ot(R){R?fe(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function Ft(R){R===void 0&&(R=i.TEXTURE0+Y-1),K!==R&&(i.activeTexture(R),K=R)}function Bt(R,Z,Q){Q===void 0&&(K===null?Q=i.TEXTURE0+Y-1:Q=K);let ce=ee[Q];ce===void 0&&(ce={type:void 0,texture:void 0},ee[Q]=ce),(ce.type!==R||ce.texture!==Z)&&(K!==Q&&(i.activeTexture(Q),K=Q),i.bindTexture(R,Z||Te[R]),ce.type=R,ce.texture=Z)}function L(){const R=ee[K];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Ht(){try{i.compressedTexImage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function $e(){try{i.compressedTexImage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function et(){try{i.texSubImage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function pe(){try{i.texSubImage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function Pe(){try{i.texStorage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function E(){try{i.texStorage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function F(){try{i.texImage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function ne(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function j(R,Z){f[R]!==Z&&(i.pixelStorei(R,Z),f[R]=Z)}function ae(R){k.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),k.copy(R))}function de(R){$.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),$.copy(R))}function J(R,Z){let Q=l.get(Z);Q===void 0&&(Q=new WeakMap,l.set(Z,Q));let ce=Q.get(R);ce===void 0&&(ce=i.getUniformBlockIndex(Z,R.name),i.uniformBlockBinding(Z,ce,ce),Q.set(R,ce))}function q(R,Z,Q){const se=l.get(Z).get(R);c[se]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,Q),c[se]=Q)}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},K=null,ee={},d={},c={},p=new WeakMap,S=[],A=null,m=!1,h=null,M=null,C=null,y=null,T=null,b=null,g=null,_=new ze(0,0,0),N=0,P=!1,D=null,U=null,W=null,w=null,H=null,k.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:Ie,bindFramebuffer:st,drawBuffers:Ce,useProgram:Ye,setBlending:gt,setMaterial:lt,setFlipSided:wt,setCullFace:nt,setLineWidth:qt,setPolygonOffset:ht,setScissorTest:Ot,activeTexture:Ft,bindTexture:Bt,unbindTexture:L,compressedTexImage2D:Ht,compressedTexImage3D:$e,texImage2D:x,texImage3D:F,pixelStorei:j,getParameter:ne,updateUBOMapping:J,uniformBlockBinding:q,texStorage2D:Pe,texStorage3D:E,texSubImage2D:et,texSubImage3D:pe,compressedTexSubImage2D:ct,compressedTexSubImage3D:Re,scissor:ae,viewport:de,reset:le}}function Qp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,u=new WeakMap,f=new Set;let d;const p=new WeakMap,S=new Set,A=new FinalizationRegistry(E=>S.delete(E));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(E,x){return m?new OffscreenCanvas(E,x):Ci("canvas")}function M(E,x,F){let ne=1;const j=Pe(E);if((j.width>F||j.height>F)&&(ne=F/Math.max(j.width,j.height)),ne<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ae=Math.floor(ne*j.width),de=Math.floor(ne*j.height);d===void 0&&(d=h(ae,de));const J=x?h(ae,de):d;return J.width=ae,J.height=de,J.getContext("2d").drawImage(E,0,0,ae,de),we("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+de+")."),J}else return"data"in E&&we("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function C(E){return E.generateMipmaps}function y(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,x,F,ne,j,ae=!1){if(E!==null){if(i[E]!==void 0)return i[E];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let de;ne&&(de=e.get("EXT_texture_norm16"),de||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8),F===i.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),F===i.SHORT&&de&&(J=de.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),x===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8),F===i.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),F===i.SHORT&&de&&(J=de.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),F===i.SHORT&&de&&(J=de.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const q=ae?vr:Ge.getTransfer(j);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=q===qe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),F===i.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(E,x){let F;return E?x===null||x===rn||x===ri?F=i.DEPTH24_STENCIL8:x===en?F=i.DEPTH32F_STENCIL8:x===Ti&&(F=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===rn||x===ri?F=i.DEPTH_COMPONENT24:x===en?F=i.DEPTH_COMPONENT32F:x===Ti&&(F=i.DEPTH_COMPONENT16),F}function _(E,x){return C(E)===!0||E.isFramebufferTexture&&E.minFilter!==vt&&E.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function N(E){const x=new WeakRef(E);n.get(E).__ref=x,S.add(x),A.register(E,x,x)}function P(E){const x=n.get(E).__ref;x!==void 0&&(S.delete(x),A.unregister(x))}function D(E){W(E.target)}function U(E){w(E.target)}function W(E){E.removeEventListener("dispose",D),P(E),Y(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&f.delete(E)}function w(E){E.removeEventListener("dispose",U),P(E),te(E)}function H(){for(const E of S){const x=E.deref();x!==void 0&&(x.isRenderTarget===!0?w(x):W(x))}S.clear(),f.clear()}function Y(E){const x=n.get(E);if(x.__webglInit===void 0)return;const F=E.source,ne=p.get(F);if(ne){const j=ne[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(E),Object.keys(ne).length===0&&p.delete(F)}n.remove(E)}function V(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const F=E.source,ne=p.get(F);delete ne[x.__cacheKey],a.memory.textures--}function te(E){const x=n.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();const F=E.depthTexture;if(F&&F.renderTarget===E&&W(F),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ae=0;ae<x.__webglFramebuffer[j].length;ae++)i.deleteFramebuffer(x.__webglFramebuffer[j][ae]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const ne=E.textures;for(let j=0,ae=ne.length;j<ae;j++){const de=n.get(ne[j]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(ne[j])}n.remove(E)}let X=0;function K(){X=0}function ee(){return X}function _e(E){X=E}function re(){const E=X;return E>=r.maxTextures&&we("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),X+=1,E}function k(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function $(E,x){const F=n.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const ne=E.image;if(ne===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,E,x);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function ve(E,x){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){lt(F,E,x);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Te(E,x){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){lt(F,E,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function fe(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){wt(F,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const Ie={[cs]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[us]:i.MIRRORED_REPEAT},st={[vt]:i.NEAREST,[Xl]:i.NEAREST_MIPMAP_NEAREST,[Fi]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[wr]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},Ce={[ql]:i.NEVER,[Go]:i.ALWAYS,[Zl]:i.LESS,[Ho]:i.LEQUAL,[jl]:i.EQUAL,[ko]:i.GEQUAL,[Kl]:i.GREATER,[$l]:i.NOTEQUAL};function Ye(E,x){if(x.type===en&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===It||x.magFilter===wr||x.magFilter===Fi||x.magFilter===yn||x.minFilter===It||x.minFilter===wr||x.minFilter===Fi||x.minFilter===yn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ie[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ie[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ie[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,st[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,st[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vt||x.minFilter!==Fi&&x.minFilter!==yn||x.type===en&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",D),N(x));const ne=x.source;let j=p.get(ne);j===void 0&&(j={},p.set(ne,j));const ae=k(x);if(ae!==E.__cacheKey){j[ae]===void 0&&(j[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[ae].usedTimes++;const de=j[E.__cacheKey];de!==void 0&&(j[E.__cacheKey].usedTimes--,de.usedTimes===0&&V(x)),E.__cacheKey=ae,E.__webglTexture=j[ae].texture}return F}function Fe(E,x,F){return Math.floor(Math.floor(E/F)/x)}function gt(E,x,F,ne){const ae=E.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,ne,x.data);else{ae.sort((R,Z)=>R.start-Z.start);let de=0;for(let R=1;R<ae.length;R++){const Z=ae[de],Q=ae[R],ce=Z.start+Z.count,se=Fe(Q.start,x.width,4),oe=Fe(Z.start,x.width,4);Q.start<=ce+1&&se===oe&&Fe(Q.start+Q.count-1,x.width,4)===se?Z.count=Math.max(Z.count,Q.start+Q.count-Z.start):(++de,ae[de]=Q)}ae.length=de+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),q=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,Z=ae.length;R<Z;R++){const Q=ae[R],ce=Math.floor(Q.start/4),se=Math.ceil(Q.count/4),oe=ce%x.width,ye=Math.floor(ce/x.width),Ue=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye),t.texSubImage2D(i.TEXTURE_2D,0,oe,ye,Ue,ie,F,ne,x.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,q),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function lt(E,x,F){let ne=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=i.TEXTURE_3D);const j=Ze(E,x),ae=x.source;t.bindTexture(ne,E.__webglTexture,i.TEXTURE0+F);const de=n.get(ae);if(ae.version!==de.__version||j===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ie=Ge.getPrimaries(Ge.workingColorSpace),be=x.colorSpace===An?null:Ge.getPrimaries(x.colorSpace),Ne=x.colorSpace===An||ie===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let q=M(x.image,!1,r.maxTextureSize);q=Re(x,q);const le=s.convert(x.format,x.colorSpace),R=s.convert(x.type);let Z=b(x.internalFormat,le,R,x.normalized,x.colorSpace,x.isVideoTexture);Ye(ne,x);let Q;const ce=x.mipmaps,se=x.isVideoTexture!==!0,oe=de.__version===void 0||j===!0,ye=ae.dataReady,Ue=_(x,q);if(x.isDepthTexture)Z=g(x.format===bn,x.type),oe&&(se?t.texStorage2D(i.TEXTURE_2D,1,Z,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,Z,q.width,q.height,0,le,R,null));else if(x.isDataTexture)if(ce.length>0){se&&oe&&t.texStorage2D(i.TEXTURE_2D,Ue,Z,ce[0].width,ce[0].height);for(let ie=0,be=ce.length;ie<be;ie++)Q=ce[ie],se?ye&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Q.width,Q.height,le,R,Q.data):t.texImage2D(i.TEXTURE_2D,ie,Z,Q.width,Q.height,0,le,R,Q.data);x.generateMipmaps=!1}else se?(oe&&t.texStorage2D(i.TEXTURE_2D,Ue,Z,q.width,q.height),ye&&gt(x,q,le,R)):t.texImage2D(i.TEXTURE_2D,0,Z,q.width,q.height,0,le,R,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){se&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Z,ce[0].width,ce[0].height,q.depth);for(let ie=0,be=ce.length;ie<be;ie++)if(Q=ce[ie],x.format!==tn)if(le!==null)if(se){if(ye)if(x.layerUpdates.size>0){const Ne=Ka(Q.width,Q.height,x.format,x.type);for(const me of x.layerUpdates){const Je=Q.data.subarray(me*Ne/Q.data.BYTES_PER_ELEMENT,(me+1)*Ne/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,me,Q.width,Q.height,1,le,Je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Q.width,Q.height,q.depth,le,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Z,Q.width,Q.height,q.depth,0,Q.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Q.width,Q.height,q.depth,le,R,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Z,Q.width,Q.height,q.depth,0,le,R,Q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{se&&oe&&t.texStorage2D(i.TEXTURE_2D,Ue,Z,ce[0].width,ce[0].height);for(let ie=0,be=ce.length;ie<be;ie++)Q=ce[ie],x.format!==tn?le!==null?se?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Q.width,Q.height,le,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Z,Q.width,Q.height,0,Q.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?ye&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Q.width,Q.height,le,R,Q.data):t.texImage2D(i.TEXTURE_2D,ie,Z,Q.width,Q.height,0,le,R,Q.data)}else if(x.isDataArrayTexture)if(se){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Z,q.width,q.height,q.depth),ye)if(x.layerUpdates.size>0){const ie=Ka(q.width,q.height,x.format,x.type);for(const be of x.layerUpdates){const Ne=q.data.subarray(be*ie/q.data.BYTES_PER_ELEMENT,(be+1)*ie/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,q.width,q.height,1,le,R,Ne)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,le,R,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,q.width,q.height,q.depth,0,le,R,q.data);else if(x.isData3DTexture)se?(oe&&t.texStorage3D(i.TEXTURE_3D,Ue,Z,q.width,q.height,q.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,le,R,q.data)):t.texImage3D(i.TEXTURE_3D,0,Z,q.width,q.height,q.depth,0,le,R,q.data);else if(x.isFramebufferTexture){if(oe)if(se)t.texStorage2D(i.TEXTURE_2D,Ue,Z,q.width,q.height);else{let ie=q.width,be=q.height;for(let Ne=0;Ne<Ue;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Z,ie,be,0,le,R,null),ie>>=1,be>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),q.parentNode!==ie){ie.appendChild(q),f.add(x),ie.onpaint=be=>{const Ne=be.changedElements;for(const me of f)Ne.includes(me.image)&&(me.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{const Ne=i.RGBA,me=i.RGBA,Je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,me,Je,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ce.length>0){if(se&&oe){const ie=Pe(ce[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Z,ie.width,ie.height)}for(let ie=0,be=ce.length;ie<be;ie++)Q=ce[ie],se?ye&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,le,R,Q):t.texImage2D(i.TEXTURE_2D,ie,Z,le,R,Q);x.generateMipmaps=!1}else if(se){if(oe){const ie=Pe(q);t.texStorage2D(i.TEXTURE_2D,Ue,Z,ie.width,ie.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,R,q)}else t.texImage2D(i.TEXTURE_2D,0,Z,le,R,q);C(x)&&x.mipmapsAutoUpdate===!0&&y(ne),de.__version=ae.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function wt(E,x,F){if(x.image.length!==6)return;const ne=Ze(E,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const ae=n.get(j);if(j.version!==ae.__version||ne===!0){t.activeTexture(i.TEXTURE0+F);const de=Ge.getPrimaries(Ge.workingColorSpace),J=x.colorSpace===An?null:Ge.getPrimaries(x.colorSpace),q=x.colorSpace===An||de===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let me=0;me<6;me++)!le&&!R?Z[me]=M(x.image[me],!0,r.maxCubemapSize):Z[me]=R?x.image[me].image:x.image[me],Z[me]=Re(x,Z[me]);const Q=Z[0],ce=s.convert(x.format,x.colorSpace),se=s.convert(x.type);let oe=b(x.internalFormat,ce,se,x.normalized,x.colorSpace);const ye=x.isVideoTexture!==!0,Ue=ae.__version===void 0||ne===!0,ie=j.dataReady;let be=_(x,Q);Ye(i.TEXTURE_CUBE_MAP,x);let Ne;if(x.isDepthTexture){if(oe=g(x.format===bn,x.type),Ue)if(ye)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,oe,Q.width,Q.height);else for(let me=0;me<6;me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,Q.width,Q.height,0,ce,se,null)}else if(le){ye&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,oe,Q.width,Q.height);for(let me=0;me<6;me++){Ne=Z[me].mipmaps;for(let Je=0;Je<Ne.length;Je++){const ft=Ne[Je];x.format!==tn?ce!==null?ye?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je,0,0,ft.width,ft.height,ce,ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je,oe,ft.width,ft.height,0,ft.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je,0,0,ft.width,ft.height,ce,se,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je,oe,ft.width,ft.height,0,ce,se,ft.data)}}}else{if(Ne=x.mipmaps,ye&&Ue){Ne.length>0&&be++;const me=Pe(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,oe,me.width,me.height)}for(let me=0;me<6;me++)if(R){ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Z[me].width,Z[me].height,ce,se,Z[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,Z[me].width,Z[me].height,0,ce,se,Z[me].data);for(let Je=0;Je<Ne.length;Je++){const mn=Ne[Je].image[me].image;ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je+1,0,0,mn.width,mn.height,ce,se,mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je+1,oe,mn.width,mn.height,0,ce,se,mn.data)}}else{ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ce,se,Z[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,ce,se,Z[me]);for(let Je=0;Je<Ne.length;Je++){const ft=Ne[Je];ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je+1,0,0,ce,se,ft.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Je+1,oe,ce,se,ft.image[me])}}}C(x)&&x.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ae.__version=j.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function nt(E,x,F,ne,j,ae){const de=s.convert(F.format,F.colorSpace),J=s.convert(F.type),q=b(F.internalFormat,de,J,F.normalized,F.colorSpace),le=n.get(x),R=n.get(F);if(R.__renderTarget=x,!le.__hasExternalTextures){const Z=Math.max(1,x.width>>ae),Q=Math.max(1,x.height>>ae);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,q,Z,Q,x.depth,0,de,J,null):t.texImage2D(j,ae,q,Z,Q,0,de,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,R.__webglTexture,0,et(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,R.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(E,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){const ne=x.depthTexture,j=ne&&ne.isDepthTexture?ne.type:null,ae=g(x.stencilBuffer,j),de=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(x),ae,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(x),ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,E)}else{const ne=x.textures;for(let j=0;j<ne.length;j++){const ae=ne[j],de=s.convert(ae.format,ae.colorSpace),J=s.convert(ae.type),q=b(ae.internalFormat,de,J,ae.normalized,ae.colorSpace);pe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(x),q,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(E,x,F){const ne=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(x.depthTexture);j.__renderTarget=x;const ae=ne?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||ae.width!==x.width||ae.height!==x.height)&&(ae.width=x.width,ae.height=x.height,x.depthTexture.needsUpdate=!0),ne?fe(x.depthTexture,0):$(x.depthTexture,0);const de=j.__webglTexture,J=et(x),q=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,le=x.depthTexture.format===bn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Cn)pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,q,de,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,le,q,de,0);else if(x.depthTexture.format===bn)pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,q,de,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,le,q,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(E){const x=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const ne=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ne){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ne.removeEventListener("dispose",j)};ne.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=ne}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let ne=0;ne<6;ne++)ht(x.__webglFramebuffer[ne],E,ne);else E.texture.mipmaps.length>0?ht(x.__webglFramebuffer[0],E,0):ht(x.__webglFramebuffer,E,0);else if(F){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]===void 0)x.__webglDepthbuffer[ne]=i.createRenderbuffer(),qt(x.__webglDepthbuffer[ne],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),qt(x.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(E,x,F){const ne=n.get(E);x!==void 0&&nt(ne.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ot(E)}function Bt(E){const x=E.texture,F=n.get(E),ne=n.get(x);E.addEventListener("dispose",U),N(E);const j=E.textures,ae=E.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=x.version,a.memory.textures++),ae){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let q=0;q<x.mipmaps.length;q++)F.__webglFramebuffer[J][q]=i.createFramebuffer()}else F.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)F.__webglFramebuffer[J]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(de)for(let J=0,q=j.length;J<q;J++){const le=n.get(j[J]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&pe(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){const q=j[J];F.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const le=s.convert(q.format,q.colorSpace),R=s.convert(q.type),Z=b(q.internalFormat,le,R,q.normalized,q.colorSpace,E.isXRRenderTarget===!0),Q=et(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,Z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,F.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)nt(F.__webglFramebuffer[J][q],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,q);else nt(F.__webglFramebuffer[J],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);C(x)?y(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(de){for(let J=0,q=j.length;J<q;J++){const le=j[J],R=n.get(le);let Z=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,R.__webglTexture),Ye(Z,le),nt(F.__webglFramebuffer,E,le,i.COLOR_ATTACHMENT0+J,Z,0),C(le)&&y(Z)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,ne.__webglTexture),Ye(J,x),x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)nt(F.__webglFramebuffer[q],E,x,i.COLOR_ATTACHMENT0,J,q);else nt(F.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,J,0);C(x)?y(J):x.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&Ot(E)}function L(E){const x=E.textures;for(let F=0,ne=x.length;F<ne;F++){const j=x[F];if(C(j)&&j.mipmapsAutoUpdate===!0){const ae=T(E),de=n.get(j).__webglTexture;t.bindTexture(ae,de),y(ae),t.unbindTexture()}}}const Ht=[];function $e(E){if(E.samples>0){if(pe(E)===!1){const x=E.textures,F=E.width,ne=E.height;let j=i.COLOR_BUFFER_BIT;const ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(E),J=x.length>1;if(J)for(let le=0;le<x.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let le=0;le<x.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[le]);const R=n.get(x[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,F,ne,0,0,F,ne,j,i.NEAREST),c===!0&&(Ht.length=0,Ht.push(i.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Ht.push(ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<x.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,de.__webglColorRenderbuffer[le]);const R=n.get(x[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function et(E){return Math.min(r.maxSamples,E.samples)}function pe(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(E){const x=a.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function Re(E,x){const F=E.colorSpace,ne=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==xr&&F!==An&&(Ge.getTransfer(F)===qe?(ne!==tn||j!==Ut)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",F)),x}function Pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=K,this.getTextureUnits=ee,this.setTextureUnits=_e,this.setTexture2D=$,this.setTexture2DArray=ve,this.setTexture3D=Te,this.setTextureCube=fe,this.rebindTextures=Ft,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=pe,this.dispose=H}function Yp(i,e){function t(n,r=An){let s;const a=Ge.getTransfer(r);if(n===Ut)return i.UNSIGNED_BYTE;if(n===Ys)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Js)return i.UNSIGNED_SHORT_5_5_5_1;if(n===No)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lo)return i.BYTE;if(n===Do)return i.SHORT;if(n===Ti)return i.UNSIGNED_SHORT;if(n===Qs)return i.INT;if(n===rn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===Oo)return i.ALPHA;if(n===Fo)return i.RGB;if(n===tn)return i.RGBA;if(n===Cn)return i.DEPTH_COMPONENT;if(n===bn)return i.DEPTH_STENCIL;if(n===Bo)return i.RED;if(n===qs)return i.RED_INTEGER;if(n===Fn)return i.RG;if(n===Zs)return i.RG_INTEGER;if(n===js)return i.RGBA_INTEGER;if(n===lr||n===cr||n===ur||n===dr)if(a===qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ds||n===hs||n===fs||n===ps)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ds)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ps)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ms||n===gs||n===xs||n===vs||n===Ss||n===mr||n===_s)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ms||n===gs)return a===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===vs)return s.COMPRESSED_R11_EAC;if(n===Ss)return s.COMPRESSED_SIGNED_R11_EAC;if(n===mr)return s.COMPRESSED_RG11_EAC;if(n===_s)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ms||n===Es||n===As||n===ys||n===bs||n===Ts||n===Rs||n===Cs||n===ws||n===Is||n===Ps||n===Ls||n===Ds||n===Ns)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ms)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Es)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===As)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ys)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ts)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ws)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Is)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ps)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ls)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ds)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ns)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===Os||n===Fs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Us)return a===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Os)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bs||n===Hs||n===gr||n===ks)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ks)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:Jp,fragmentShader:qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jp extends Hn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,S=null;const A=typeof XRWebGLBinding<"u",m=new Zp,h={},M=t.getContextAttributes();let C=null,y=null;const T=[],b=[],g=new Ve;let _=null,N=null;const P=new Gt;P.viewport=new rt;const D=new Gt;D.viewport=new rt;const U=[P,D],W=new ou;let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=T[k];return $===void 0&&($=new Or,T[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=T[k];return $===void 0&&($=new Or,T[k]=$),$.getGripSpace()},this.getHand=function(k){let $=T[k];return $===void 0&&($=new Or,T[k]=$),$.getHandSpace()};function Y(k){const $=b.indexOf(k.inputSource);if($===-1)return;const ve=T[$];ve!==void 0&&(ve.update(k.inputSource,k.frame,l||a),ve.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",te);for(let k=0;k<T.length;k++){const $=b[k];$!==null&&(b[k]=null,T[k].disconnect($))}w=null,H=null,m.reset();for(const k in h)delete h[k];if(e.setRenderTarget(C),p=null,d=null,f=null,r=null,y=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(g.width,g.height,!1),N!==null){const k=N.camera;k.fov=N.fov,k.zoom=N.zoom,k.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&A&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",V),r.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(g),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Te=null,fe=null;M.depth&&(fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?bn:Cn,Te=M.stencil?ri:rn);const Ie={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new nn(d.textureWidth,d.textureHeight,{format:tn,type:Ut,depthTexture:new si(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new nn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:Ut,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(k){for(let $=0;$<k.removed.length;$++){const ve=k.removed[$],Te=b.indexOf(ve);Te>=0&&(b[Te]=null,T[Te].disconnect(ve))}for(let $=0;$<k.added.length;$++){const ve=k.added[$];let Te=b.indexOf(ve);if(Te===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=b.length){b.push(ve),Te=Ie;break}else if(b[Ie]===null){b[Ie]=ve,Te=Ie;break}if(Te===-1)break}const fe=T[Te];fe&&fe.connect(ve)}}function X(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let $=k.near,ve=k.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),W.near=D.near=P.near=$,W.far=D.far=P.far=ve,(w!==W.near||H!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),w=W.near,H=W.far),W.layers.mask=k.layers.mask|6,P.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;const Te=k.parent,fe=W.cameras;X(W,Te);for(let Ie=0;Ie<fe.length;Ie++)X(fe[Ie],Te);W.projectionMatrix.copy(P.projectionMatrix),W.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&k.isPerspectiveCamera&&(N={camera:k,fov:k.fov,zoom:k.zoom}),K(k,W,Te)};function K(k,$,ve){ve===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(ve.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=wi*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(k){return h[k]};let ee=null;function _e(k,$){if(u=$.getViewerPose(l||a),S=$,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Te=!1;ve.length!==W.cameras.length&&(W.cameras.length=0,Te=!0);for(let Ce=0;Ce<ve.length;Ce++){const Ye=ve[Ce];let Ze=null;if(p!==null)Ze=p.getViewport(Ye);else{const gt=f.getViewSubImage(d,Ye);Ze=gt.viewport,Ce===0&&(e.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(y))}let Fe=U[Ce];Fe===void 0&&(Fe=new Gt,Fe.layers.enable(Ce),Fe.viewport=new rt,U[Ce]=Fe),Fe.matrix.fromArray(Ye.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ye.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ce===0&&(W.matrix.copy(Fe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Te===!0&&W.cameras.push(Fe)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){f=n.getBinding();const Ce=f.getDepthInformation(ve[0]);Ce&&Ce.isValid&&Ce.texture&&m.init(Ce,r.renderState)}if(fe&&fe.includes("camera-access")&&A){e.state.unbindTexture(),f=n.getBinding();for(let Ce=0;Ce<ve.length;Ce++){const Ye=ve[Ce].camera;if(Ye){let Ze=h[Ye];Ze||(Ze=new tl,h[Ye]=Ze);const Fe=f.getCameraImage(Ye);Ze.sourceTexture=Fe}}}}for(let ve=0;ve<T.length;ve++){const Te=b[ve],fe=T[ve];Te!==null&&fe!==void 0&&fe.update(Te,$,l||a)}ee&&ee(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),S=null}const re=new sl;re.setAnimationLoop(_e),this.setAnimationLoop=function(k){ee=k},this.dispose=function(){}}}const Kp=new tt,ml=new Le;ml.set(-1,0,0,0,1,0,0,0,1);function $p(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,nl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,M,C,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),S(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),A(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,M,C):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Tt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Tt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const M=e.get(h),C=M.envMap,y=M.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ml),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,M,C){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*M,m.scale.value=C*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,M){m.ior.value=h.ior,h.diffuseRoughness>0&&(m.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,h){h.matcap&&(m.matcap.value=h.matcap)}function A(m,h){const M=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function em(i,e,t,n){let r={},s={};function a(M,C){const y=C.program;n.uniformBlockBinding(M,y,r[M.id])}function o(M,C){let y=r[M.id];y===void 0&&(S(M),y=c(M),r[M.id]=y,M.addEventListener("dispose",m));const T=C.program;n.updateUBOMapping(M,T);const b=e.render.frame;s[M.id]!==b&&(l(M),s[M.id]=b)}function c(M){const C=i.createBuffer(),y=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),C}function l(M){const C=r[M.id],y=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let b=0,g=y.length;b<g;b++){const _=y[b];if(Array.isArray(_))for(let N=0,P=_.length;N<P;N++)u(_[N],b,N,T);else u(_,b,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,C,y,T){if(d(M,C,y,T)===!0){const b=M.__offset,g=M.value;if(Array.isArray(g)){let _=0;for(let N=0;N<g.length;N++){const P=g[N],D=A(P,!0);f(P,M.__data,_),_+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,M.__data)}}function f(M,C,y){typeof M=="number"||typeof M=="boolean"?C[y]=M:M.isMatrix3?(C[y]=M.elements[0],C[y+1]=M.elements[1],C[y+2]=M.elements[2],C[y+3]=0,C[y+4]=M.elements[3],C[y+5]=M.elements[4],C[y+6]=M.elements[5],C[y+7]=0,C[y+8]=M.elements[6],C[y+9]=M.elements[7],C[y+10]=M.elements[8],C[y+11]=0):ArrayBuffer.isView(M)?C.set(M.subarray(0,C.length-y),y):M.toArray(C,y)}function d(M,C,y,T){const b=M.value,g=C+"_"+y;if(Array.isArray(b)){T[g]===void 0&&(T[g]=[]);const _=T[g];let N=!1;for(let P=0;P<b.length;P++)p(b[P],_,P)===!0&&(N=!0);return N}return p(b,T,g)}function p(M,C,y){if(C[y]===void 0)return typeof M=="number"||typeof M=="boolean"?C[y]=M:ArrayBuffer.isView(M)?C[y]=M.slice():C[y]=M.clone(),!0;{const T=C[y];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return C[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function S(M){const C=M.uniforms;let y=0;const T=16;for(let g=0,_=C.length;g<_;g++){const N=Array.isArray(C[g])?C[g]:[C[g]];for(let P=0,D=N.length;P<D;P++){const U=N[P],W=Array.isArray(U.value)?U.value:[U.value],w=Array.isArray(C[g])||Array.isArray(U.value);let H=y;for(let V=0,te=W.length;V<te;V++){const X=W[V],K=A(X,w),ee=y%T,_e=ee%K.boundary,re=ee+_e;y+=_e,re!==0&&T-re<K.storage&&(y+=T-re),V===0&&(H=y),y+=K.storage}const Y=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Y((y-H)/Float32Array.BYTES_PER_ELEMENT),U.__offset=H}}const b=y%T;return b>0&&(y+=T-b),M.__size=y,M.__cache={},this}function A(M,C){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):we("WebGLRenderer: Unsupported uniform value type.",M),C===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(M){const C=M.target;C.removeEventListener("dispose",m),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function h(){for(const M in r)i.deleteBuffer(r[M]);r={},s={}}return{bind:a,update:o,dispose:h}}const tm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jt=null;function nm(){return jt===null&&(jt=new zc(tm,16,16,Fn,sn),jt.name="DFG_LUT",jt.minFilter=It,jt.magFilter=It,jt.wrapS=hn,jt.wrapT=hn,jt.generateMipmaps=!1,jt.needsUpdate=!0),jt}class im{constructor(e={}){const{canvas:t=nc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Ut}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;const A=p,m=new Set([js,Zs,qs]),h=new Set([Ut,rn,Ti,ri,Ys,Js]),M=new Uint32Array(4),C=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let T=null,b=null;const g=[],_=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,U=null,W=null,w=null,H=null;this._outputColorSpace=Dt;let Y=0,V=0,te=null,X=-1,K=null;const ee=new rt,_e=new rt;let re=null;const k=new ze(0);let $=0,ve=t.width,Te=t.height,fe=1,Ie=null,st=null;const Ce=new rt(0,0,ve,Te),Ye=new rt(0,0,ve,Te);let Ze=!1;const Fe=new Ii,gt=new na;let lt=!1,wt=!1;const nt=new tt,qt=new G,ht=new rt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Bt(){return te===null?fe:1}let L=n;function Ht(v,I){return t.getContext(v,I)}let $e,et,pe,ct,Re,Pe,E,x,F,ne,j,ae,de,J,q,le,R,Z,Q,ce,se,oe,ye;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xs}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",me,!1),L===null){const I="webgl2";if(L=Ht(I,v),L===null)throw Ht(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(v){throw t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Qe("WebGLRenderer: "+v.message),v}function Ue(){$e=new af(L),$e.init(),se=new Yp(L,$e),et=new Jh(L,$e,e,se),pe=new Xp(L,$e),et.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),W=L.createFramebuffer(),w=L.createFramebuffer(),H=L.createFramebuffer(),ct=new cf(L),Re=new Pp,Pe=new Qp(L,$e,pe,Re,et,se,ct),E=new sf(P),x=new uu(L),oe=new Qh(L,x),F=new of(L,x,ct,oe),ne=new df(L,F,x,oe,ct),Z=new uf(L,et,Pe),q=new qh(Re),j=new Ip(P,E,$e,et,oe,q),ae=new $p(P,Re),de=new Dp,J=new Hp($e),R=new Xh(P,E,pe,ne,S,c),le=new Wp(P,ne,et),ye=new em(L,ct,et,pe),Q=new Yh(L,$e,ct),ce=new lf(L,$e,ct),ct.programs=j.programs,P.capabilities=et,P.extensions=$e,P.properties=Re,P.renderLists=de,P.shadowMap=le,P.state=pe,P.info=ct}A!==Ut&&(N=new ff(A,t.width,t.height,o,r,s));const ie=new jp(P,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=$e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=$e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(v){v!==void 0&&(fe=v,this.setSize(ve,Te,!1))},this.getSize=function(v){return v.set(ve,Te)},this.setSize=function(v,I,z=!0){if(ie.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=v,Te=I,t.width=Math.floor(v*fe),t.height=Math.floor(I*fe),z===!0&&(t.style.width=v+"px",t.style.height=I+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(ve*fe,Te*fe).floor()},this.setDrawingBufferSize=function(v,I,z){ve=v,Te=I,fe=z,t.width=Math.floor(v*z),t.height=Math.floor(I*z),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(A===Ut){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(Ce)},this.setViewport=function(v,I,z,O){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,I,z,O),pe.viewport(ee.copy(Ce).multiplyScalar(Bt()).round())},this.getScissor=function(v){return v.copy(Ye)},this.setScissor=function(v,I,z,O){v.isVector4?Ye.set(v.x,v.y,v.z,v.w):Ye.set(v,I,z,O),pe.scissor(_e.copy(Ye).multiplyScalar(Bt()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(v){pe.setScissorTest(Ze=v)},this.setOpaqueSort=function(v){Ie=v},this.setTransparentSort=function(v){st=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,z=!0){let O=0;if(v){let B=!1;if(te!==null){const he=te.texture.format;B=m.has(he)}if(B){const he=te.texture.type,Se=h.has(he),ue=R.getClearColor(),xe=R.getClearAlpha(),Ae=ue.r,De=ue.g,Be=ue.b;Se?(M[0]=Ae,M[1]=De,M[2]=Be,M[3]=xe,L.clearBufferuiv(L.COLOR,0,M)):(C[0]=Ae,C[1]=De,C[2]=Be,C[3]=xe,L.clearBufferiv(L.COLOR,0,C))}else O|=L.COLOR_BUFFER_BIT}I&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",me,!1),R.dispose(),de.dispose(),J.dispose(),Pe.dispose(),Re.dispose(),E.dispose(),ne.dispose(),F.dispose(),oe.dispose(),ye.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ua),ie.removeEventListener("sessionend",da),In.stop()};function be(v){v.preventDefault(),Ta("WebGLRenderer: Context Lost."),D=!0}function Ne(){Ta("WebGLRenderer: Context Restored."),D=!1;const v=ct.autoReset,I=le.enabled,z=le.autoUpdate,O=le.needsUpdate,B=le.type;Ue(),ct.autoReset=v,le.enabled=I,le.autoUpdate=z,le.needsUpdate=O,le.type=B}function me(v){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Je(v){const I=v.target;I.removeEventListener("dispose",Je),ft(I)}function ft(v){mn(v),Re.remove(v)}function mn(v){const I=Re.get(v).programs;I!==void 0&&(I.forEach(function(z){j.releaseProgram(z)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,z,O,B,he){I===null&&(I=Ot);const Se=B.isMesh&&B.matrixWorld.determinantAffine()<0,ue=vl(v,I,z,O,B);pe.setMaterial(O,Se);let xe=z.index,Ae=1;if(O.wireframe===!0){if(xe=F.getWireframeAttribute(z),xe===void 0)return;Ae=2}const De=z.drawRange,Be=z.attributes.position;let Me=De.start*Ae,He=(De.start+De.count)*Ae;he!==null&&(Me=Math.max(Me,he.start*Ae),He=Math.min(He,(he.start+he.count)*Ae)),xe!==null?(Me=Math.max(Me,0),He=Math.min(He,xe.count)):Be!=null&&(Me=Math.max(Me,0),He=Math.min(He,Be.count));const at=He-Me;if(at<0||at===1/0)return;oe.setup(B,O,ue,z,xe);let Ke,je=Q;if(xe!==null&&(Ke=x.get(xe),je=ce,je.setIndex(Ke)),B.isMesh)O.wireframe===!0?(pe.setLineWidth(O.wireframeLinewidth*Bt()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(B.isLine){let _t=O.linewidth;_t===void 0&&(_t=1),pe.setLineWidth(_t*Bt()),B.isLineSegments?je.setMode(L.LINES):B.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else B.isPoints?je.setMode(L.POINTS):B.isSprite&&je.setMode(L.TRIANGLES);if(B.isBatchedMesh)if($e.get("WEBGL_multi_draw"))je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const _t=B._multiDrawStarts,Ee=B._multiDrawCounts,yt=B._multiDrawCount,Xe=xe?x.get(xe).bytesPerElement:1,Pn=Re.get(O).currentProgram.getUniforms();for(let Mt=0;Mt<yt;Mt++)Pn.setValue(L,"_gl_DrawID",Mt),je.render(_t[Mt]/Xe,Ee[Mt])}else if(B.isInstancedMesh)je.renderInstances(Me,at,B.count);else if(z.isInstancedBufferGeometry){const _t=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ee=Math.min(z.instanceCount,_t);je.renderInstances(Me,at,Ee)}else je.render(Me,at)};function ca(v,I,z,O){U!==null&&v.isNodeMaterial&&U.setObject(O,v),lt===!0&&q.setState(v,z,!1),v.transparent===!0&&v.side===$t&&v.forceSinglePass===!1?(v.side=Tt,v.needsUpdate=!0,di(v,I,O),v.side=Rn,v.needsUpdate=!0,di(v,I,O),v.side=$t):di(v,I,O)}this.compile=function(v,I,z=null){z===null&&(z=v),U!==null&&U.renderStart(v,I,z),b=J.get(z),b.init(I),_.push(b),z.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),v!==z&&v.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),wt=this.localClippingEnabled,lt=q.init(this.clippingPlanes,wt),lt===!0&&q.setGlobalState(this.clippingPlanes,I),U!==null&&le.render(b.state.shadowsArray,z,I);const O=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const he=B.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const ue=he[Se];ca(ue,z,I,B),O.add(ue)}else ca(he,z,I,B),O.add(he)}),b=_.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(v,I,z=null){const O=this.compile(v,I,z);return new Promise(B=>{function he(){if(O.forEach(function(Se){const xe=Re.get(Se).currentProgram;(xe===void 0||xe.isReady())&&O.delete(Se)}),O.size===0){B(v);return}setTimeout(he,10)}$e.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let br=null;function gl(v){br&&br(v)}function ua(){In.stop()}function da(){In.start()}const In=new sl;In.setAnimationLoop(gl),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(v){br=v,ie.setAnimationLoop(v),v===null?In.stop():In.start()},ie.addEventListener("sessionstart",ua),ie.addEventListener("sessionend",da),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(v,I);const z=ie.enabled===!0&&ie.isPresenting===!0,O=N!==null&&(te===null||z)&&N.begin(P,te);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,I,te),b=J.get(v,_.length),b.init(I),b.state.textureUnits=Pe.getTextureUnits(),_.push(b),nt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?gt.setFromArrayCamera(I):Fe.setFromProjectionMatrix(nt,Yt,I.reversedDepth),wt=this.localClippingEnabled,lt=q.init(this.clippingPlanes,wt),T=de.get(v,g.length),T.init(),g.push(T),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&Tr(Se,I,-1/0,P.sortObjects)}Tr(v,I,0,P.sortObjects),T.finish(),U!==null&&U.updateLights(b.state.lightsArray),P.sortObjects===!0&&T.sort(Ie,st),Ft=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ft&&R.addToRenderList(T,v),this.info.autoReset===!0&&this.info.reset(),lt===!0&&q.beginShadows();const B=b.state.shadowsArray;if(le.render(B,v,I),lt===!0&&q.endShadows(),(O&&N.hasRenderPass())===!1){const Se=T.opaque,ue=T.transmissive;if(b.setupLights(),I.isArrayCamera){const xe=I.cameras;if(ue.length>0)for(let Ae=0,De=xe.length;Ae<De;Ae++){const Be=xe[Ae];fa(Se,ue,v,Be)}Ft&&R.render(v);for(let Ae=0,De=xe.length;Ae<De;Ae++){const Be=xe[Ae];ha(T,v,Be,Be.viewport)}}else ue.length>0&&fa(Se,ue,v,I),Ft&&R.render(v),ha(T,v,I)}te!==null&&V===0&&(Pe.updateMultisampleRenderTarget(te),Pe.updateRenderTargetMipmap(te)),O&&N.end(P),v.isScene===!0&&v.onAfterRender(P,v,I),oe.resetDefaultState(),X=-1,K=null,_.pop(),_.length>0?(b=_[_.length-1],Pe.setTextureUnits(b.state.textureUnits),lt===!0&&q.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,U!==null&&U.renderEnd()};function Tr(v,I,z,O){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){const Se=I.isArrayCamera?gt:Fe;if(!v.frustumCulled||v.intersectsFrustum(Se)){O&&ht.setFromMatrixPosition(v.matrixWorld).applyMatrix4(nt);const ue=ne.update(v),xe=v.material;xe.visible&&T.push(v,ue,xe,z,ht.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){const Se=I.isArrayCamera?gt:Fe;if(!v.frustumCulled||v.intersectsFrustum(Se)){const ue=ne.update(v),xe=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ht.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),ht.copy(ue.boundingSphere.center)),ht.applyMatrix4(v.matrixWorld).applyMatrix4(nt)),Array.isArray(xe)){const Ae=ue.groups;for(let De=0,Be=Ae.length;De<Be;De++){const Me=Ae[De],He=xe[Me.materialIndex];He&&He.visible&&T.push(v,ue,He,z,ht.z,Me,I)}}else xe.visible&&T.push(v,ue,xe,z,ht.z,null,I)}}}const he=v.children;for(let Se=0,ue=he.length;Se<ue;Se++)Tr(he[Se],I,z,O)}function ha(v,I,z,O){const{opaque:B,transmissive:he,transparent:Se}=v;b.setupLightsView(z),lt===!0&&q.setGlobalState(P.clippingPlanes,z),O&&pe.viewport(ee.copy(O)),B.length>0&&Ui(B,I,z),he.length>0&&Ui(he,I,z),Se.length>0&&Ui(Se,I,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function fa(v,I,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){const Me=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new nn(1,1,{generateMipmaps:!0,type:Me?sn:Ut,minFilter:yn,samples:Math.max(4,et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const he=b.state.transmissionRenderTarget[O.id],Se=O.viewport||ee;he.setSize(Se.z*P.transmissionResolutionScale,Se.w*P.transmissionResolutionScale);const ue=P.getRenderTarget(),xe=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(he),P.getClearColor(k),$=P.getClearAlpha(),$<1&&P.setClearColor(16777215,.5),P.clear(),Ft&&R.render(z);const De=P.toneMapping;P.toneMapping=fn;const Be=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),lt===!0&&q.setGlobalState(P.clippingPlanes,O),Ui(v,z,O),Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let He=0,at=I.length;He<at;He++){const Ke=I[He],{object:je,geometry:_t,material:Ee,group:yt}=Ke;if(Ee.side===$t&&je.layers.test(O.layers)){const Xe=Ee.side;Ee.side=Tt,Ee.needsUpdate=!0,pa(je,z,O,_t,Ee,yt),Ee.side=Xe,Ee.needsUpdate=!0,Me=!0}}Me===!0&&(Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he))}P.setRenderTarget(ue,xe,Ae),P.setClearColor(k,$),Be!==void 0&&(O.viewport=Be),P.toneMapping=De}function Ui(v,I,z){const O=I.isScene===!0?I.overrideMaterial:null;for(let B=0,he=v.length;B<he;B++){const Se=v[B],{object:ue,geometry:xe,group:Ae}=Se;let De=Se.material;De.allowOverride===!0&&O!==null&&(De=O),ue.layers.test(z.layers)&&pa(ue,I,z,xe,De,Ae)}}function pa(v,I,z,O,B,he){U!==null&&B.isNodeMaterial&&U.setObject(v,B),v.onBeforeRender(P,I,z,O,B,he),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(P,I,z,O,v,he),B.transparent===!0&&B.side===$t&&B.forceSinglePass===!1?(B.side=Tt,B.needsUpdate=!0,P.renderBufferDirect(z,I,O,B,v,he),B.side=Rn,B.needsUpdate=!0,P.renderBufferDirect(z,I,O,B,v,he),B.side=$t):P.renderBufferDirect(z,I,O,B,v,he),v.onAfterRender(P,I,z,O,B,he)}function ma(v){let I=0;for(const z of v)z.texture!==null&&I++;return I}function di(v,I,z){I.isScene!==!0&&(I=Ot);const O=Re.get(v),B=b.state.lights,he=b.state.shadowsArray,Se=B.state.version,ue=j.getParameters(v,B.state,he,I,z,b.state.lightProbeGridArray),xe=j.getProgramCacheKey(ue);let Ae=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const De=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=E.get(v.envMap||O.environment,De),O.envMapRotation=O.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ae===void 0&&(v.addEventListener("dispose",Je),Ae=new Map,O.programs=Ae,O.programVariants=new Map);let Be=Ae.get(xe);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===Se)return xa(v,ue),Be}else ue.uniforms=j.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,z,ue),v.onBeforeCompile(ue,P),Be=j.acquireProgram(ue,xe),Ae.set(xe,Be),O.uniforms=ue.uniforms;const Me=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Me.clippingPlanes=q.uniform),xa(v,ue),O.needsLights=_l(v),O.lightsStateVersion=Se,O.needsLights&&(Me.ambientLightColor.value=B.state.ambient,Me.lightProbe.value=B.state.probe,Me.sunLights.value=B.state.sun,Me.sunLightShadows.value=B.state.sunShadow,Me.directionalLights.value=B.state.directional,Me.directionalLightShadows.value=B.state.directionalShadow,Me.spotLights.value=B.state.spot,Me.spotLightShadows.value=B.state.spotShadow,Me.rectAreaLights.value=B.state.rectArea,Me.ltc_1.value=B.state.rectAreaLTC1,Me.ltc_2.value=B.state.rectAreaLTC2,Me.pointLights.value=B.state.point,Me.pointLightShadows.value=B.state.pointShadow,Me.hemisphereLights.value=B.state.hemi,Me.sunShadowMatrix.value=B.state.sunShadowMatrix,Me.sunShadowCascade.value=B.state.sunShadowCascade,Me.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Me.spotLightMatrix.value=B.state.spotLightMatrix,Me.spotLightMap.value=B.state.spotLightMap,Me.pointShadowMatrix.value=B.state.pointShadowMatrix),O.numLightProbeGrids=ma(b.state.lightProbeGridArray),O.currentProgram=Be,O.uniformsList=null,Be}function xl(v,I,z,O,B){const he=Re.get(v),Se=he.currentProgram.id+","+O+","+B;let ue=he.programVariants.get(Se);return ue===void 0?(ue=di(v,I,z),he.programVariants.set(Se,ue)):(he.currentProgram=ue,he.uniformsList=null,he.outputColorSpace=O,he.toneMapping=B),ue}function ga(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=pr.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function xa(v,I){const z=Re.get(v);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function vl(v,I,z,O,B){I.isScene!==!0&&(I=Ot),Pe.resetTextureUnits();const he=I.fog,Se=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ue=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ge.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ae=E.get(O.envMap||Se,xe),De=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Me=!!z.morphAttributes.position,He=!!z.morphAttributes.normal,at=!!z.morphAttributes.color;let Ke=fn;O.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ke=P.toneMapping);const je=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_t=je!==void 0?je.length:0,Ee=Re.get(O),yt=b.state.lights;if(lt===!0&&(wt===!0||v!==K)){const it=v===K&&O.id===X;q.setState(O,v,it)}let Xe=!1,Pn=!1;O.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==yt.state.version||B.isBatchedMesh&&Ee.batching===!1||!B.isBatchedMesh&&Ee.batching===!0||B.isBatchedMesh&&Ee.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Ee.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Ee.instancing===!1||!B.isInstancedMesh&&Ee.instancing===!0||B.isSkinnedMesh&&Ee.skinning===!1||!B.isSkinnedMesh&&Ee.skinning===!0||B.isInstancedMesh&&Ee.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ee.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ee.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ee.instancingMorph===!1&&B.morphTexture!==null||Ee.envMap!==Ae||O.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==q.numPlanes||Ee.numIntersection!==q.numIntersection)||Ee.vertexAlphas!==De||Ee.vertexTangents!==Be||Ee.morphTargets!==Me||Ee.morphNormals!==He||Ee.morphColors!==at||Ee.morphTargetsCount!==_t||Ee.numLightProbeGrids!==ma(b.state.lightProbeGridArray)?Xe=!0:(Ee.outputColorSpace!==ue||Ee.toneMapping!==Ke)&&(Pn=!0):(Xe=!0,Ee.__version=O.version);let Mt=Ee.currentProgram;(Xe===!0||Pn===!0)&&(Mt=Pn===!0?xl(O,I,B,ue,Ke):di(O,I,B),U&&O.isNodeMaterial&&U.onUpdateProgram(O,Mt,Ee));let Oi=!1,gn=!1,Ln=!1;const We=Mt.getUniforms(),xt=Ee.uniforms;if(pe.useProgram(Mt.program)&&(Oi=!0,gn=!0,Ln=!0),O.id!==X&&(X=O.id,gn=!0),Oi||K!==v){pe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),We.setValue(L,"projectionMatrix",v.projectionMatrix),We.setValue(L,"viewMatrix",v.matrixWorldInverse);const pt=We.map.cameraPosition;pt!==void 0&&pt.setValue(L,qt.setFromMatrixPosition(v.matrixWorld)),et.logarithmicDepthBuffer&&We.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&We.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),K!==v&&(K=v,gn=!0,Ln=!0)}if(Ee.needsLights&&(yt.state.sunShadowMap.length>0&&We.setValue(L,"sunShadowMap",yt.state.sunShadowMap,Pe),yt.state.directionalShadowMap.length>0&&We.setValue(L,"directionalShadowMap",yt.state.directionalShadowMap,Pe),yt.state.spotShadowMap.length>0&&We.setValue(L,"spotShadowMap",yt.state.spotShadowMap,Pe),yt.state.pointShadowMap.length>0&&We.setValue(L,"pointShadowMap",yt.state.pointShadowMap,Pe)),B.isSkinnedMesh){We.setOptional(L,B,"bindMatrix"),We.setOptional(L,B,"bindMatrixInverse");const it=B.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),We.setValue(L,"boneTexture",it.boneTexture,Pe))}B.isBatchedMesh&&(We.setOptional(L,B,"batchingTexture"),We.setValue(L,"batchingTexture",B._matricesTexture,Pe),We.setOptional(L,B,"batchingIdTexture"),We.setValue(L,"batchingIdTexture",B._indirectTexture,Pe),We.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&We.setValue(L,"batchingColorTexture",B._colorsTexture,Pe));const zt=z.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&Z.update(B,z,Mt),(gn||Ee.receiveShadow!==B.receiveShadow)&&(Ee.receiveShadow=B.receiveShadow,We.setValue(L,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(xt.envMapIntensity.value=I.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=nm()),gn){if(We.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&Sl(xt,Ln),he&&O.fog===!0&&ae.refreshFogUniforms(xt,he),ae.refreshMaterialUniforms(xt,O,fe,Te,b.state.transmissionRenderTarget[v.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const it=y;let pt=0;for(const an of b.state.lightProbeGridArray)an.texture!==null&&(it.textures[pt]=an.texture,it.min[pt]=an.boundingBox.min,it.max[pt]=an.boundingBox.max,it.resolution[pt]=an.resolution,pt++);for(const an in it)it[an].length=pt;xt.probesSH.value=it.textures,xt.probesMin.value=it.min,xt.probesMax.value=it.max,xt.probesResolution.value=it.resolution}pr.upload(L,ga(Ee),xt,Pe)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(pr.upload(L,ga(Ee),xt,Pe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&We.setValue(L,"center",B.center),We.setValue(L,"modelViewMatrix",B.modelViewMatrix),We.setValue(L,"normalMatrix",B.normalMatrix),We.setValue(L,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const it=O.uniformsGroups;for(let pt=0,an=it.length;pt<an;pt++){const Sa=it[pt];ye.update(Sa,Mt),ye.bind(Sa,Mt)}}return Mt}function Sl(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function _l(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(v,I,z){const O=Re.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Re.get(v.texture).__webglTexture=I,Re.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:z,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const z=Re.get(v);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,z=0){te=v,Y=I,V=z;let O=null,B=!1,he=!1;if(v){const ue=Re.get(v);if(ue.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),ee.copy(v.viewport),_e.copy(v.scissor),re=v.scissorTest,pe.viewport(ee),pe.scissor(_e),pe.setScissorTest(re),X=-1;return}else if(ue.__webglFramebuffer===void 0)Pe.setupRenderTarget(v);else if(ue.__hasExternalTextures)Pe.rebindTextures(v,Re.get(v.texture).__webglTexture,Re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const De=v.depthTexture;if(ue.__boundDepthTexture!==De){if(De!==null&&Re.has(De)&&(v.width!==De.image.width||v.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(v)}}const xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const Ae=Re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?O=Ae[I][z]:O=Ae[I],B=!0):v.samples>0&&Pe.useMultisampledRTT(v)===!1?O=Re.get(v).__webglMultisampledFramebuffer:Array.isArray(Ae)?O=Ae[z]:O=Ae,ee.copy(v.viewport),_e.copy(v.scissor),re=v.scissorTest}else ee.copy(Ce).multiplyScalar(fe).floor(),_e.copy(Ye).multiplyScalar(fe).floor(),re=Ze;if(z!==0&&(O=W),pe.bindFramebuffer(L.FRAMEBUFFER,O)&&pe.drawBuffers(v,O),pe.viewport(ee),pe.scissor(_e),pe.setScissorTest(re),B){const ue=Re.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,z)}else if(he){const ue=I;for(let xe=0;xe<v.textures.length;xe++){const Ae=Re.get(v.textures[xe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xe,Ae.__webglTexture,z,ue)}}else if(v!==null&&z!==0){const ue=Re.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,z)}X=-1};function va(v){const I=Re.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=et.textureFormatReadable(v.format),I.__typeReadable=et.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,z,O,B,he,Se,ue=0){if(!(v&&v.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe){pe.bindFramebuffer(L.FRAMEBUFFER,xe);try{const Ae=v.textures[ue],De=Ae.format,Be=Ae.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue);const Me=va(Ae);if(Me.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-O&&z>=0&&z<=v.height-B&&L.readPixels(I,z,O,B,se.convert(De),se.convert(Be),he)}finally{const Ae=te!==null?Re.get(te).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(v,I,z,O,B,he,Se,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe)if(I>=0&&I<=v.width-O&&z>=0&&z<=v.height-B){pe.bindFramebuffer(L.FRAMEBUFFER,xe);const Ae=v.textures[ue],De=Ae.format,Be=Ae.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue);const Me=va(Ae);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(I,z,O,B,se.convert(De),se.convert(Be),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const at=te!==null?Re.get(te).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,at);const Ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ic(L,Ke,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(He),L.deleteSync(Ke),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,z=0){const O=Math.pow(2,-z),B=Math.floor(v.image.width*O),he=Math.floor(v.image.height*O),Se=I!==null?I.x:0,ue=I!==null?I.y:0;Pe.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,Se,ue,B,he),pe.unbindTexture()},this.copyTextureToTexture=function(v,I,z=null,O=null,B=0,he=0){let Se,ue,xe,Ae,De,Be,Me,He,at;const Ke=v.isCompressedTexture?v.mipmaps[he]:v.image;if(z!==null)Se=z.max.x-z.min.x,ue=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,De=z.min.y,Be=z.isBox3?z.min.z:0;else{const We=Math.pow(2,-B);Se=Math.floor(Ke.width*We),ue=Math.floor(Ke.height*We),v.isDataArrayTexture?xe=Ke.depth:v.isData3DTexture?xe=Math.floor(Ke.depth*We):xe=1,Ae=0,De=0,Be=0}O!==null?(Me=O.x,He=O.y,at=O.z):(Me=0,He=0,at=0);const je=se.convert(I.format),_t=se.convert(I.type);let Ee;I.isData3DTexture?(Pe.setTexture3D(I,0),Ee=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Pe.setTexture2DArray(I,0),Ee=L.TEXTURE_2D_ARRAY):(Pe.setTexture2D(I,0),Ee=L.TEXTURE_2D),pe.activeTexture(L.TEXTURE0),pe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),pe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pe.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const yt=pe.getParameter(L.UNPACK_ROW_LENGTH),Xe=pe.getParameter(L.UNPACK_IMAGE_HEIGHT),Pn=pe.getParameter(L.UNPACK_SKIP_PIXELS),Mt=pe.getParameter(L.UNPACK_SKIP_ROWS),Oi=pe.getParameter(L.UNPACK_SKIP_IMAGES);pe.pixelStorei(L.UNPACK_ROW_LENGTH,Ke.width),pe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke.height),pe.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),pe.pixelStorei(L.UNPACK_SKIP_ROWS,De),pe.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const gn=v.isDataArrayTexture||v.isData3DTexture,Ln=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const We=Re.get(v),xt=Re.get(I),zt=Re.get(We.__renderTarget),it=Re.get(xt.__renderTarget);pe.bindFramebuffer(L.READ_FRAMEBUFFER,zt.__webglFramebuffer),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let pt=0;pt<xe;pt++)gn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(v).__webglTexture,B,Be+pt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(I).__webglTexture,he,at+pt)),L.blitFramebuffer(Ae,De,Ae+Se,De+ue,Me,He,Me+Se,He+ue,L.DEPTH_BUFFER_BIT,L.NEAREST);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||Re.has(v)){const We=Re.get(v),xt=Re.get(I);pe.bindFramebuffer(L.READ_FRAMEBUFFER,w),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let zt=0;zt<xe;zt++)gn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,We.__webglTexture,B,Be+zt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,We.__webglTexture,B),Ln?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.__webglTexture,he,at+zt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xt.__webglTexture,he),B!==0?L.blitFramebuffer(Ae,De,Ae+Se,De+ue,Me,He,Me+Se,He+ue,L.COLOR_BUFFER_BIT,L.NEAREST):Ln?L.copyTexSubImage3D(Ee,he,Me,He,at+zt,Ae,De,Se,ue):L.copyTexSubImage2D(Ee,he,Me,He,Ae,De,Se,ue);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ln?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Ee,he,Me,He,at,Se,ue,xe,je,_t,Ke.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,he,Me,He,at,Se,ue,xe,je,Ke.data):L.texSubImage3D(Ee,he,Me,He,at,Se,ue,xe,je,_t,Ke):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,Me,He,Se,ue,je,_t,Ke.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,Me,He,Ke.width,Ke.height,je,Ke.data):L.texSubImage2D(L.TEXTURE_2D,he,Me,He,Se,ue,je,_t,Ke);pe.pixelStorei(L.UNPACK_ROW_LENGTH,yt),pe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),pe.pixelStorei(L.UNPACK_SKIP_PIXELS,Pn),pe.pixelStorei(L.UNPACK_SKIP_ROWS,Mt),pe.pixelStorei(L.UNPACK_SKIP_IMAGES,Oi),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&L.generateMipmap(Ee),pe.unbindTexture()},this.initRenderTarget=function(v){Re.get(v).__webglFramebuffer===void 0&&Pe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Pe.setTextureCube(v,0):v.isData3DTexture?Pe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Pe.setTexture2DArray(v,0):Pe.setTexture2D(v,0),pe.unbindTexture()},this.resetState=function(){Y=0,V=0,te=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const rm="data:image/jpeg;base64,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";function am(){const i=_a.useRef(null);return _a.useEffect(()=>{const e=i.current;if(!e)return;const t=e.parentElement;if(!t)return;let n;try{n=new im({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}const r=window.innerWidth<768,s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;n.setPixelRatio(Math.min(window.devicePixelRatio||1,r?1.5:2));const a=new Nc;a.fog=new ta(329735,.045);const o=new Gt(58,t.clientWidth/Math.max(t.clientHeight,1),.1,100);o.position.set(0,0,9),a.add(new au(16777215,.35));const c=new $r(16777215,40,25,1.6);c.position.set(4,3,6),a.add(c);const l=new $r(65416,25,15,1.8);l.position.set(-5,0,3),a.add(l);const u=new ei;a.add(u);const f=new ei,d=r?{x:0,y:.3,z:-.5,s:.95}:{x:2.1,y:.15,z:0,s:1};f.position.set(d.x,d.y,d.z),f.scale.setScalar(d.s),u.add(f);const p=new Qa({color:855822,roughness:.85,metalness:.1}),S=new Nt(new Ai(1.85,48,32),p);S.scale.set(1,1.12,.85),f.add(S);const A=new fr({color:65416,transparent:!0,opacity:.2,blending:_i,side:Tt,depthWrite:!1}),m=new Nt(new Ai(1.85,48,32),A);m.scale.set(1.04,1.16,.88),f.add(m);const h=new Nt(new Sr(.85,1.05,1.4,24),p);h.position.y=-2.3,f.add(h);const M=new nu().load(rm);M.colorSpace=Dt,M.anisotropy=4,M.repeat.set(.52,.48),M.offset.set(.24,.25);const C=new Nt(new Sr(1.95,1.85,2.7,48,1,!0,-1,2),new Qa({map:M,emissive:16777215,emissiveMap:M,emissiveIntensity:.3,roughness:.6,metalness:.05,side:Rn}));f.add(C);const y=new fr({color:65416}),T=[];for(const re of[-1,1]){const k=new Nt(new Ai(.08,16,12),y);k.position.set(re*.8,.5,1.72),f.add(k),T.push(k)}const b=new $r(65416,6,6,1.8);b.position.set(0,.5,3.2),f.add(b);const g=r?700:1400,_=new Float32Array(g*3);for(let re=0;re<g;re++)if(Math.random()<.7){const k=3.2+Math.random()*5.5,$=Math.random()*Math.PI*2,ve=Math.acos(2*Math.random()-1);_[re*3]=k*Math.sin(ve)*Math.cos($),_[re*3+1]=k*Math.sin(ve)*Math.sin($)*.7,_[re*3+2]=k*Math.cos(ve)}else{const k=2+Math.random()*6,$=Math.random()*Math.PI*2;_[re*3]=Math.cos($)*k,_[re*3+1]=(Math.random()-.5)*.9,_[re*3+2]=Math.sin($)*k}const N=new Jt;N.setAttribute("position",new Tn(_,3));const P=new Wc(N,new Ko({color:65416,size:.04,transparent:!0,opacity:.55,blending:_i,depthWrite:!1,sizeAttenuation:!0}));u.add(P);const D=re=>{const k=document.createElement("canvas");k.width=1024,k.height=256;const $=k.getContext("2d");$.clearRect(0,0,1024,256),$.font='700 150px "JetBrains Mono", monospace',$.textAlign="center",$.textBaseline="middle",$.shadowColor="#00ff88",$.shadowBlur=34,$.fillStyle="rgba(0, 255, 136, 0.95)",$.fillText(re,512,128),$.font='500 44px "JetBrains Mono", monospace',$.shadowBlur=14,$.fillStyle="rgba(125, 255, 196, 0.8)",$.fillText("· · · 01000111 01001000 01001111 01010011 · · ·",512,224);const ve=new Xc(k);return ve.anisotropy=4,ve},U=[];for(const re of[{text:"GHOST",x:0,y:3.3,z:-2.5,s:.9},{text:"0777",x:0,y:-3.3,z:-3,s:.5}]){const k=new Nt(new Di(4.4*re.s,1.1*re.s),new fr({map:D(re.text),transparent:!0,opacity:.7,blending:_i,depthWrite:!1,side:$t}));k.position.set(re.x,re.y,re.z),u.add(k),U.push(k)}const W=()=>{const re=t.clientWidth,k=t.clientHeight;n.setSize(re,k,!1),o.aspect=re/Math.max(k,1),o.updateProjectionMatrix()};W();const w=new ResizeObserver(W);w.observe(t);const H={x:0,y:0,tx:0,ty:0},Y=re=>{H.tx=re.clientX/window.innerWidth*2-1,H.ty=re.clientY/window.innerHeight*2-1};window.addEventListener("pointermove",Y,{passive:!0});let V=!0;const te=new IntersectionObserver(([re])=>V=re.isIntersecting,{threshold:0});te.observe(e);const X=new lu;let K=0;const ee=9,_e=()=>{if(K=requestAnimationFrame(_e),!V||document.hidden)return;const re=X.getElapsedTime(),k=t.getBoundingClientRect(),$=_c.clamp(-k.top/Math.max(k.height*.9,1),0,1);H.x+=(H.tx-H.x)*.04,H.y+=(H.ty-H.y)*.04,o.position.z=ee-$*3.6,o.position.x=H.x*.55,o.position.y=-H.y*.35+$*.4,o.lookAt(0,0,0),u.rotation.y=$*1.9+re*.02,u.rotation.x=$*.35;const ve=s?0:1;f.rotation.y=Math.sin(re*.22)*.08+$*.85+H.x*.38,f.rotation.x=H.y*.1+Math.sin(re*.33)*.03,f.position.y=d.y+Math.sin(re*.8)*.06,f.scale.setScalar(d.s*(1+Math.sin(re*.8)*.012));const Te=1+Math.sin(re*2.4)*.15;T.forEach(fe=>fe.scale.setScalar(Te)),A.opacity=.16+Math.sin(re*1.3)*.06,b.intensity=5+Math.sin(re*2.4)*2,P.rotation.y=re*.018*ve,P.rotation.x=Math.sin(re*.05)*.08,U.forEach((fe,Ie)=>{fe.position.y+=Math.sin(re*.9+Ie*2.1)*.0012,fe.lookAt(o.position)}),n.render(a,o)};return K=requestAnimationFrame(_e),()=>{cancelAnimationFrame(K),w.disconnect(),te.disconnect(),window.removeEventListener("pointermove",Y),M.dispose(),a.traverse(re=>{re.geometry&&re.geometry.dispose(),re.material&&(Array.isArray(re.material)?re.material:[re.material]).forEach($=>{$.map&&$.map!==M&&$.map.dispose(),$.dispose()})}),n.dispose()}},[]),Ml.jsx("canvas",{ref:i,className:"hero-canvas","aria-hidden":"true"})}export{am as default};
