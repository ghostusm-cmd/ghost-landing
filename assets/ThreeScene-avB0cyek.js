import{r as ma,j as pl}from"./index-DF0UDJUz.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ks="187",ml=0,ga=1,gl=2,rr=1,xl=2,vi=3,On=0,Ct=1,Wt=2,ii=0,_i=1,ti=2,xa=3,va=4,vl=5,ei=100,Sl=101,_l=102,Ml=103,El=104,Al=200,bl=201,yl=202,Tl=203,mo=204,go=205,Rl=206,Cl=207,wl=208,Il=209,Pl=210,Ll=211,Dl=212,Nl=213,Ul=214,Kr=0,$r=1,es=2,Ai=3,ts=4,ns=5,is=6,rs=7,xo=0,Ol=1,Fl=2,dn=0,vo=1,So=2,_o=3,Mo=4,Eo=5,Ao=6,bo=7,yo=300,si=301,bi=302,yr=303,Tr=304,ss=1e3,un=1001,as=1002,vt=1003,Bl=1004,Ni=1005,Rt=1006,Rr=1007,bn=1008,Bt=1009,To=1010,Ro=1011,yi=1012,Gs=1013,tn=1014,jt=1015,nn=1016,zs=1017,Vs=1018,ai=1020,Co=35902,wo=35899,Io=1021,Po=1022,Kt=1023,Rn=1026,yn=1027,Lo=1028,Ws=1029,Fn=1030,Xs=1031,Qs=1033,sr=33776,ar=33777,or=33778,lr=33779,os=35840,ls=35841,cs=35842,us=35843,ds=36196,fs=37492,hs=37496,ps=37488,ms=37489,fr=37490,gs=37491,xs=37808,vs=37809,Ss=37810,_s=37811,Ms=37812,Es=37813,As=37814,bs=37815,ys=37816,Ts=37817,Rs=37818,Cs=37819,ws=37820,Is=37821,Ps=36492,Ls=36494,Ds=36495,Ns=36283,Us=36284,hr=36285,Os=36286,Hl=3200,Sa=0,kl=1,An="",Lt="srgb",pr="srgb-linear",mr="linear",qe="srgb",Cr=7680,Gl=519,zl=512,Vl=513,Wl=514,Do=515,Xl=516,Ql=517,No=518,Uo=519,Yl=35044,_a="300 es",Qt=2e3,gr=2001;function Jl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ti(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ql(){const i=Ti("canvas");return i.style.display="block",i}const Ma={};function Ea(...i){const e="THREE."+i.shift();console.log(e,...i)}function Oo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=Oo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=Oo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cr(...i){const e=i.join(" ");e in Ma||(Ma[e]=!0,Ce(...i))}function Zl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const jl={[Kr]:Kr,[es]:is,[ts]:ts,[Ai]:ns,[$r]:$r,[is]:es,[rs]:rs,[ns]:Ai};class kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const Mi=Math.PI/180,Ri=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function Ys(i,e){return(i%e+e)%e}function Kl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function $l(i,e,t){return i!==e?(t-i)/(e-i):0}function Ei(i,e,t){return(1-t)*i+t*e}function ec(i,e,t,n){return Ei(i,e,1-Math.exp(-t*n))}function tc(i,e=1){return e-Math.abs(Ys(i,e*2)-e)}function nc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ic(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sc(i,e){return i+Math.random()*(e-i)}function ac(i){return i*(.5-Math.random())}function oc(i){i!==void 0&&(Aa=i);let e=Aa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lc(i){return i*Mi}function cc(i){return i*Ri}function uc(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function dc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),p=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),S=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*p,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*p,o*l);break;case"ZXZ":i.set(c*p,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*S,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*S,o*l);break;case"ZYZ":i.set(c*S,c*m,o*u,o*l);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Js(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bo(i,e){if(e.constructor===Float32Array)return i;const t=Js(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ho(i,e){if(e.constructor===Float32Array)return i;const t=Js(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const hc={DEG2RAD:Mi,RAD2DEG:Ri,generateUUID:ci,clamp:ke,euclideanModulo:Ys,mapLinear:Kl,inverseLerp:$l,lerp:Ei,damp:ec,pingpong:tc,smoothstep:nc,smootherstep:ic,randInt:rc,randFloat:sc,randFloatSpread:ac,seededRandom:oc,degToRad:lc,radToDeg:cc,isPowerOfTwo:uc,ceilPowerOfTwo:dc,floorPowerOfTwo:Fo,setQuaternionFromProperEuler:fc,normalize:Ho,denormalize:Bo},ea=class ea{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ea.prototype.isVector2=!0;let Qe=ea;class ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],p=n[r+3],d=s[a+0],m=s[a+1],S=s[a+2],A=s[a+3];if(p!==A||c!==d||l!==m||u!==S){let h=c*d+l*m+u*S+p*A;h<0&&(d=-d,m=-m,S=-S,A=-A,h=-h);let f=1-o;if(h<.9995){const E=Math.acos(h),R=Math.sin(E);f=Math.sin(f*E)/R,o=Math.sin(o*E)/R,c=c*f+d*o,l=l*f+m*o,u=u*f+S*o,p=p*f+A*o}else{c=c*f+d*o,l=l*f+m*o,u=u*f+S*o,p=p*f+A*o;const E=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=E,l*=E,u*=E,p*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],p=s[a],d=s[a+1],m=s[a+2],S=s[a+3];return e[t]=o*S+u*p+c*m-l*d,e[t+1]=c*S+u*d+l*p-o*m,e[t+2]=l*S+u*m+o*d-c*p,e[t+3]=u*S-o*p-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),p=o(s/2),d=c(n/2),m=c(r/2),S=c(s/2);switch(a){case"XYZ":this._x=d*u*p+l*m*S,this._y=l*m*p-d*u*S,this._z=l*u*S+d*m*p,this._w=l*u*p-d*m*S;break;case"YXZ":this._x=d*u*p+l*m*S,this._y=l*m*p-d*u*S,this._z=l*u*S-d*m*p,this._w=l*u*p+d*m*S;break;case"ZXY":this._x=d*u*p-l*m*S,this._y=l*m*p+d*u*S,this._z=l*u*S+d*m*p,this._w=l*u*p-d*m*S;break;case"ZYX":this._x=d*u*p-l*m*S,this._y=l*m*p+d*u*S,this._z=l*u*S-d*m*p,this._w=l*u*p+d*m*S;break;case"YZX":this._x=d*u*p+l*m*S,this._y=l*m*p+d*u*S,this._z=l*u*S-d*m*p,this._w=l*u*p-d*m*S;break;case"XZY":this._x=d*u*p-l*m*S,this._y=l*m*p-d*u*S,this._z=l*u*S+d*m*p,this._w=l*u*p+d*m*S;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],d=n+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ta=class ta{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*l+a*p-o*u,this.y=n+c*u+o*l-s*p,this.z=r+c*p+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ta.prototype.isVector3=!0;let z=ta;const wr=new z,ba=new ui,na=class na{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],d=n[2],m=n[5],S=n[8],A=r[0],h=r[3],f=r[6],E=r[1],R=r[4],b=r[7],C=r[2],y=r[5],g=r[8];return s[0]=a*A+o*E+c*C,s[3]=a*h+o*R+c*y,s[6]=a*f+o*b+c*g,s[1]=l*A+u*E+p*C,s[4]=l*h+u*R+p*y,s[7]=l*f+u*b+p*g,s[2]=d*A+m*E+S*C,s[5]=d*h+m*R+S*y,s[8]=d*f+m*b+S*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*a-o*l,d=o*c-u*s,m=l*s-a*c,S=t*p+n*d+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=p*A,e[1]=(r*l-u*n)*A,e[2]=(o*n-r*a)*A,e[3]=d*A,e[4]=(u*t-r*c)*A,e[5]=(r*s-o*t)*A,e[6]=m*A,e[7]=(n*c-l*t)*A,e[8]=(a*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ir.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ir.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};na.prototype.isMatrix3=!0;let Pe=na;const Ir=new Pe,ya=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ta=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pc(){const i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===qe&&(r.r=fn(r.r),r.g=fn(r.g),r.b=fn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qe&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===An?mr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:e,whitePoint:n,transfer:mr,toXYZ:ya,fromXYZ:Ta,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:ya,fromXYZ:Ta,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}const Ge=pc();function fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class mc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gn===void 0&&(Gn=Ti("canvas")),Gn.width=e.width,Gn.height=e.height;const r=Gn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Gn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ti("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fn(t[n]/255)*255):t[n]=fn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gc=0;class qs{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pr(r[a].image)):s.push(Pr(r[a]))}else s=Pr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let xc=0;const Lr=new z;class St extends kn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=un,r=un,s=Rt,a=bn,o=Kt,c=Bt,l=St.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=ci(),this.name="",this.source=new qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Lr).x}get height(){return this.source.getSize(Lr).y}get depth(){return this.source.getSize(Lr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=yo;St.DEFAULT_ANISOTROPY=1;const ia=class ia{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],p=c[8],d=c[1],m=c[5],S=c[9],A=c[2],h=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(p-A)<.01&&Math.abs(S-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+A)<.1&&Math.abs(S+h)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,b=(m+1)/2,C=(f+1)/2,y=(u+d)/4,g=(p+A)/4,M=(S+h)/4;return R>b&&R>C?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=y/n,s=g/n):b>C?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=y/r,s=M/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=g/s,r=M/s),this.set(n,r,s,t),this}let E=Math.sqrt((h-S)*(h-S)+(p-A)*(p-A)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(h-S)/E,this.y=(p-A)/E,this.z=(d-u)/E,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ia.prototype.isVector4=!0;let it=ia;class vc extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new St({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new qs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $t extends vc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ko extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sc extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Sr=class Sr{constructor(e,t,n,r,s,a,o,c,l,u,p,d,m,S,A,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,p,d,m,S,A,h)}set(e,t,n,r,s,a,o,c,l,u,p,d,m,S,A,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=d,f[3]=m,f[7]=S,f[11]=A,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/zn.setFromMatrixColumn(e,0).length(),s=1/zn.setFromMatrixColumn(e,1).length(),a=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*p,S=o*u,A=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=m+S*l,t[5]=d-A*l,t[9]=-o*c,t[2]=A-d*l,t[6]=S+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*p,S=l*u,A=l*p;t[0]=d+A*o,t[4]=S*o-m,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=m*o-S,t[6]=A+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*p,S=l*u,A=l*p;t[0]=d-A*o,t[4]=-a*p,t[8]=S+m*o,t[1]=m+S*o,t[5]=a*u,t[9]=A-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*p,S=o*u,A=o*p;t[0]=c*u,t[4]=S*l-m,t[8]=d*l+A,t[1]=c*p,t[5]=A*l+d,t[9]=m*l-S,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,S=o*c,A=o*l;t[0]=c*u,t[4]=A-d*p,t[8]=S*p+m,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*p+S,t[10]=d-A*p}else if(e.order==="XZY"){const d=a*c,m=a*l,S=o*c,A=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=d*p+A,t[5]=a*u,t[9]=m*p-S,t[2]=S*p-m,t[6]=o*u,t[10]=A*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_c,e,Mc)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),xn.crossVectors(n,It),xn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),xn.crossVectors(n,It)),xn.normalize(),Ui.crossVectors(It,xn),r[0]=xn.x,r[4]=Ui.x,r[8]=It.x,r[1]=xn.y,r[5]=Ui.y,r[9]=It.y,r[2]=xn.z,r[6]=Ui.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],d=n[9],m=n[13],S=n[2],A=n[6],h=n[10],f=n[14],E=n[3],R=n[7],b=n[11],C=n[15],y=r[0],g=r[4],M=r[8],F=r[12],P=r[1],D=r[5],H=r[9],Y=r[13],I=r[2],X=r[6],Z=r[10],G=r[14],W=r[3],B=r[7],V=r[11],ee=r[15];return s[0]=a*y+o*P+c*I+l*W,s[4]=a*g+o*D+c*X+l*B,s[8]=a*M+o*H+c*Z+l*V,s[12]=a*F+o*Y+c*G+l*ee,s[1]=u*y+p*P+d*I+m*W,s[5]=u*g+p*D+d*X+m*B,s[9]=u*M+p*H+d*Z+m*V,s[13]=u*F+p*Y+d*G+m*ee,s[2]=S*y+A*P+h*I+f*W,s[6]=S*g+A*D+h*X+f*B,s[10]=S*M+A*H+h*Z+f*V,s[14]=S*F+A*Y+h*G+f*ee,s[3]=E*y+R*P+b*I+C*W,s[7]=E*g+R*D+b*X+C*B,s[11]=E*M+R*H+b*Z+C*V,s[15]=E*F+R*Y+b*G+C*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],d=e[10],m=e[14],S=e[3],A=e[7],h=e[11],f=e[15],E=c*m-l*d,R=o*m-l*p,b=o*d-c*p,C=a*m-l*u,y=a*d-c*u,g=a*p-o*u;return t*(A*E-h*R+f*b)-n*(S*E-h*C+f*y)+r*(S*R-A*C+f*g)-s*(S*b-A*y+h*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],d=e[10],m=e[11],S=e[12],A=e[13],h=e[14],f=e[15],E=t*o-n*a,R=t*c-r*a,b=t*l-s*a,C=n*c-r*o,y=n*l-s*o,g=r*l-s*c,M=u*A-p*S,F=u*h-d*S,P=u*f-m*S,D=p*h-d*A,H=p*f-m*A,Y=d*f-m*h,I=E*Y-R*H+b*D+C*P-y*F+g*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/I;return e[0]=(o*Y-c*H+l*D)*X,e[1]=(r*H-n*Y-s*D)*X,e[2]=(A*g-h*y+f*C)*X,e[3]=(d*y-p*g-m*C)*X,e[4]=(c*P-a*Y-l*F)*X,e[5]=(t*Y-r*P+s*F)*X,e[6]=(h*b-S*g-f*R)*X,e[7]=(u*g-d*b+m*R)*X,e[8]=(a*H-o*P+l*M)*X,e[9]=(n*P-t*H-s*M)*X,e[10]=(S*y-A*b+f*E)*X,e[11]=(p*b-u*y-m*E)*X,e[12]=(o*F-a*D-c*M)*X,e[13]=(t*D-n*F+r*M)*X,e[14]=(A*R-S*C-h*E)*X,e[15]=(u*C-p*R+d*E)*X,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,p=o+o,d=s*l,m=s*u,S=s*p,A=a*u,h=a*p,f=o*p,E=c*l,R=c*u,b=c*p,C=n.x,y=n.y,g=n.z;return r[0]=(1-(A+f))*C,r[1]=(m+b)*C,r[2]=(S-R)*C,r[3]=0,r[4]=(m-b)*y,r[5]=(1-(d+f))*y,r[6]=(h+E)*y,r[7]=0,r[8]=(S+R)*g,r[9]=(h-E)*g,r[10]=(1-(d+A))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=zn.set(r[0],r[1],r[2]).length();const o=zn.set(r[4],r[5],r[6]).length(),c=zn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kt.copy(this);const l=1/a,u=1/o,p=1/c;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=p,kt.elements[9]*=p,kt.elements[10]*=p,t.setFromRotationMatrix(kt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Qt,c=!1){const l=this.elements,u=2*s/(t-e),p=2*s/(n-r),d=(t+e)/(t-e),m=(n+r)/(n-r);let S,A;if(c)S=s/(a-s),A=a*s/(a-s);else if(o===Qt)S=-(a+s)/(a-s),A=-2*a*s/(a-s);else if(o===gr)S=-a/(a-s),A=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=S,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Qt,c=!1){const l=this.elements,u=2/(t-e),p=2/(n-r),d=-(t+e)/(t-e),m=-(n+r)/(n-r);let S,A;if(c)S=1/(a-s),A=a/(a-s);else if(o===Qt)S=-2/(a-s),A=-(a+s)/(a-s);else if(o===gr)S=-1/(a-s),A=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=S,l[14]=A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Sr.prototype.isMatrix4=!0;let rt=Sr;const zn=new z,kt=new rt,_c=new z(0,0,0),Mc=new z(1,1,1),xn=new z,Ui=new z,It=new z,Ra=new rt,Ca=new ui;class Bn{constructor(e=0,t=0,n=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],p=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ra.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ra,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ca.setFromEuler(this),this.setFromQuaternion(Ca,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ec=0;const wa=new z,Vn=new ui,sn=new rt,Oi=new z,hi=new z,Ac=new z,bc=new ui,Ia=new z(1,0,0),Pa=new z(0,1,0),La=new z(0,0,1),Da={type:"added"},yc={type:"removed"},Wn={type:"childadded",child:null},Dr={type:"childremoved",child:null};class wt extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new z,t=new Bn,n=new ui,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Pe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(Pa,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return wa.copy(e).applyQuaternion(this.quaternion),this.position.add(wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(Pa,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(hi,Oi,this.up):sn.lookAt(Oi,hi,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),Vn.setFromRotationMatrix(sn),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Da),Wn.child=e,this.dispatchEvent(Wn),Wn.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yc),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Da),Wn.child=e,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,e,Ac),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,bc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),S=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wt.DEFAULT_UP=new z(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ni extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tc={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const A of e.hand.values()){const h=t.getJointPose(A,n),f=this._getHandJoint(l,A);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,S=.005;l.inputState.pinching&&d>m+S?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-S&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Fi={h:0,s:0,l:0};function Ur(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ge.workingColorSpace){if(e=Ys(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ur(a,s,e+1/3),this.g=Ur(a,s,e),this.b=Ur(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=zo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ge.workingToColorSpace(At.copy(this),e),Math.round(ke(At.r*255,0,255))*65536+Math.round(ke(At.g*255,0,255))*256+Math.round(ke(At.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(At.copy(this),t);const n=At.r,r=At.g,s=At.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Lt){Ge.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(Fi);const n=Ei(vn.h,Fi.h,t),r=Ei(vn.s,Fi.s,t),s=Ei(vn.l,Fi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ve;Ve.NAMES=zo;class Zs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new Zs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rc extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gt=new z,an=new z,Or=new z,on=new z,Xn=new z,Qn=new z,Na=new z,Fr=new z,Br=new z,Hr=new z,kr=new it,Gr=new it,zr=new it;class Xt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),an.subVectors(n,t),Or.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(an),c=Gt.dot(Or),l=an.dot(an),u=an.dot(Or),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(l*c-o*u)*d,S=(a*u-o*c)*d;return s.set(1-m-S,S,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,on.x),c.addScaledVector(a,on.y),c.addScaledVector(o,on.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return kr.setScalar(0),Gr.setScalar(0),zr.setScalar(0),kr.fromBufferAttribute(e,t),Gr.fromBufferAttribute(e,n),zr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(kr,s.x),a.addScaledVector(Gr,s.y),a.addScaledVector(zr,s.z),a}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),an.subVectors(e,t),Gt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Gt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Xn.subVectors(r,n),Qn.subVectors(s,n),Fr.subVectors(e,n);const c=Xn.dot(Fr),l=Qn.dot(Fr);if(c<=0&&l<=0)return t.copy(n);Br.subVectors(e,r);const u=Xn.dot(Br),p=Qn.dot(Br);if(u>=0&&p<=u)return t.copy(r);const d=c*p-u*l;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(Xn,a);Hr.subVectors(e,s);const m=Xn.dot(Hr),S=Qn.dot(Hr);if(S>=0&&m<=S)return t.copy(s);const A=m*l-c*S;if(A<=0&&l>=0&&S<=0)return o=l/(l-S),t.copy(n).addScaledVector(Qn,o);const h=u*S-m*p;if(h<=0&&p-u>=0&&m-S>=0)return Na.subVectors(s,r),o=(p-u)/(p-u+(m-S)),t.copy(r).addScaledVector(Na,o);const f=1/(h+A+d);return a=A*f,o=d*f,t.copy(n).addScaledVector(Xn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ci{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(s,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(e.matrixWorld),this.union(Bi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pi),Hi.subVectors(this.max,pi),Yn.subVectors(e.a,pi),Jn.subVectors(e.b,pi),qn.subVectors(e.c,pi),Sn.subVectors(Jn,Yn),_n.subVectors(qn,Jn),Pn.subVectors(Yn,qn);let t=[0,-Sn.z,Sn.y,0,-_n.z,_n.y,0,-Pn.z,Pn.y,Sn.z,0,-Sn.x,_n.z,0,-_n.x,Pn.z,0,-Pn.x,-Sn.y,Sn.x,0,-_n.y,_n.x,0,-Pn.y,Pn.x,0];return!Vr(t,Yn,Jn,qn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Vr(t,Yn,Jn,qn,Hi))?!1:(ki.crossVectors(Sn,_n),t=[ki.x,ki.y,ki.z],Vr(t,Yn,Jn,qn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new z,new z,new z,new z,new z,new z,new z,new z],zt=new z,Bi=new Ci,Yn=new z,Jn=new z,qn=new z,Sn=new z,_n=new z,Pn=new z,pi=new z,Hi=new z,ki=new z,Ln=new z;function Vr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ln.fromArray(i,s);const o=r.x*Math.abs(Ln.x)+r.y*Math.abs(Ln.y)+r.z*Math.abs(Ln.z),c=e.dot(Ln),l=t.dot(Ln),u=n.dot(Ln);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ot=new z,Gi=new Qe;let Cc=0;class Tn extends kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yl,this.updateRanges=[],this.gpuType=jt,this.version=0,this._normalizationScale=e!==void 0?Js(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bo(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ho(e,this.array)}}class Vo extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wo extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hn extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const wc=new Ci,mi=new z,Wr=new z;class _r{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mi.subVectors(e,this.center);const t=mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(mi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mi.copy(e.center).add(Wr)),this.expandByPoint(mi.copy(e.center).sub(Wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ic=0;const Ft=new rt,Xr=new wt,Zn=new z,Pt=new Ci,gi=new Ci,mt=new z;class pn extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?Wo:Vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Pt.min,gi.min),Pt.expandByPoint(mt),mt.addVectors(Pt.max,gi.max),Pt.expandByPoint(mt)):(Pt.expandByPoint(gi.min),Pt.expandByPoint(gi.max))}Pt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)mt.fromBufferAttribute(o,l),c&&(Zn.fromBufferAttribute(e,l),mt.add(Zn)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new z,c[F]=new z;const u=new z,p=new z,d=new z,m=new Qe,S=new Qe,A=new Qe,h=new z,f=new z;function E(F,P,D){l[F]=l[P]=l[D]=1,u.fromBufferAttribute(n,F),p.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),m.fromBufferAttribute(s,F),S.fromBufferAttribute(s,P),A.fromBufferAttribute(s,D),p.sub(u),d.sub(u),S.sub(m),A.sub(m);const H=1/(S.x*A.y-A.x*S.y);isFinite(H)&&(h.copy(p).multiplyScalar(A.y).addScaledVector(d,-S.y).multiplyScalar(H),f.copy(d).multiplyScalar(S.x).addScaledVector(p,-A.x).multiplyScalar(H),o[F].add(h),o[P].add(h),o[D].add(h),c[F].add(f),c[P].add(f),c[D].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,P=R.length;F<P;++F){const D=R[F],H=D.start,Y=D.count;for(let I=H,X=H+Y;I<X;I+=3)E(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const b=new z,C=new z,y=new z,g=new z;function M(F){y.fromBufferAttribute(r,F),g.copy(y);const P=o[F];b.copy(P),b.sub(y.multiplyScalar(y.dot(P))).normalize(),C.crossVectors(g,P);const H=C.dot(c[F])<0?-1:1;a.setXYZW(F,b.x,b.y,b.z,H)}for(let F=0,P=n.count;F<P;++F)l[F]&&M(F);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,u=new z,p=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const S=e.getX(d+0),A=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,A),a.fromBufferAttribute(t,h),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,h),o.add(u),c.add(u),l.add(u),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,p=o.normalized,d=new l.constructor(c.length*u);let m=0,S=0;for(let A=0,h=c.length;A<h;A++){o.isInterleavedBufferAttribute?m=c[A]*o.data.stride+o.offset:m=c[A]*u;for(let f=0;f<u;f++)d[S++]=l[m++]}return new Tn(d,u,p)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,p=l.length;u<p;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,d=l.length;p<d;p++){const m=l[p];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],p=s[l];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qr=new z,Pc=new z,Lc=new Pe;class En{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Qr.subVectors(n,t).cross(Pc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Qr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lc.getNormalMatrix(e),r=this.coplanarPoint(Qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Dc=0;class wi extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=_i,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new En().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cn=new z,Yr=new z,zi=new z,Vi=new z;class Xo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yr.copy(e).add(t).multiplyScalar(.5),zi.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Yr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zi),o=Vi.dot(this.direction),c=-Vi.dot(zi),l=Vi.lengthSq(),u=Math.abs(1-a*a);let p,d,m,S;if(u>0)if(p=a*c-o,d=a*o-c,S=s*u,p>=0)if(d>=-S)if(d<=S){const A=1/u;p*=A,d*=A,m=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+l;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+l;else d<=-S?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+l):d<=S?(p=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+l);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Yr).addScaledVector(zi,d),m}intersectSphere(e,t){if(e.radius<0)return null;cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),r=cn.dot(cn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=e.x-a.x,d=e.y-a.y,m=e.z-a.z,S=t.x-a.x,A=t.y-a.y,h=t.z-a.z,f=n.x-a.x,E=n.y-a.y,R=n.z-a.z,b=Math.abs(c),C=Math.abs(l),y=Math.abs(u);let g,M,F,P,D,H,Y,I,X,Z,G,W;if(b>=C&&b>=y?(F=c,H=p,X=S,W=f,c>=0?(g=l,M=u,P=d,D=m,Y=A,I=h,Z=E,G=R):(g=u,M=l,P=m,D=d,Y=h,I=A,Z=R,G=E)):C>=y?(F=l,H=d,X=A,W=E,l>=0?(g=u,M=c,P=m,D=p,Y=h,I=S,Z=R,G=f):(g=c,M=u,P=p,D=m,Y=S,I=h,Z=f,G=R)):(F=u,H=m,X=h,W=R,u>=0?(g=c,M=l,P=p,D=d,Y=S,I=A,Z=f,G=E):(g=l,M=c,P=d,D=p,Y=A,I=S,Z=E,G=f)),F===0)return null;const B=g/F,V=M/F,ee=1/F,ve=P-B*H,we=D-V*H,j=Y-B*X,pe=I-V*X,Se=Z-B*W,ye=G-V*W,me=Se*pe-ye*j,De=ve*ye-we*Se,st=j*we-pe*ve;if(r){if(me<0||De<0||st<0)return null}else if((me<0||De<0||st<0)&&(me>0||De>0||st>0))return null;const Re=me+De+st;if(Re===0)return null;const Ye=ee*(me*H+De*X+st*W);return(Re>0?Ye<0:Ye>0)?null:this.at(Ye/Re,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ur extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ua=new rt,Dn=new Xo,Wi=new _r,Oa=new z,Xi=new z,Qi=new z,Yi=new z,Jr=new z,Ji=new z,Fa=new z,qi=new z;class en extends wt{constructor(e=new pn,t=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ji.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],p=s[c];u!==0&&(Jr.fromBufferAttribute(p,e),a?Ji.addScaledVector(Jr,u):Ji.addScaledVector(Jr.sub(t),u))}t.add(Ji)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(s),Dn.copy(e.ray).recast(e.near),!(Wi.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(Wi,Oa)===null||Dn.origin.distanceToSquared(Oa)>(e.far-e.near)**2))&&(Ua.copy(s).invert(),Dn.copy(e.ray).applyMatrix4(Ua),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,A=d.length;S<A;S++){const h=d[S],f=a[h.materialIndex],E=Math.max(h.start,m.start),R=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let b=E,C=R;b<C;b+=3){const y=o.getX(b),g=o.getX(b+1),M=o.getX(b+2);r=Zi(this,f,e,n,l,u,p,y,g,M),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const S=Math.max(0,m.start),A=Math.min(o.count,m.start+m.count);for(let h=S,f=A;h<f;h+=3){const E=o.getX(h),R=o.getX(h+1),b=o.getX(h+2);r=Zi(this,a,e,n,l,u,p,E,R,b),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,A=d.length;S<A;S++){const h=d[S],f=a[h.materialIndex],E=Math.max(h.start,m.start),R=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let b=E,C=R;b<C;b+=3){const y=b,g=b+1,M=b+2;r=Zi(this,f,e,n,l,u,p,y,g,M),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const S=Math.max(0,m.start),A=Math.min(c.count,m.start+m.count);for(let h=S,f=A;h<f;h+=3){const E=h,R=h+1,b=h+2;r=Zi(this,a,e,n,l,u,p,E,R,b),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Nc(i,e,t,n,r,s,a,o){let c;if(e.side===Ct?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===On,o),c===null)return null;qi.copy(o),qi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qi);return l<t.near||l>t.far?null:{distance:l,point:qi.clone(),object:i}}function Zi(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Xi),i.getVertexPosition(c,Qi),i.getVertexPosition(l,Yi);const u=Nc(i,e,t,n,Xi,Qi,Yi,Fa);if(u){const p=new z;Xt.getBarycoord(Fa,Xi,Qi,Yi,p),r&&(u.uv=Xt.getInterpolatedAttribute(r,o,c,l,p,new Qe)),s&&(u.uv1=Xt.getInterpolatedAttribute(s,o,c,l,p,new Qe)),a&&(u.normal=Xt.getInterpolatedAttribute(a,o,c,l,p,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new z,materialIndex:0};Xt.getNormal(Xi,Qi,Yi,d.normal),u.face=d,u.barycoord=p}return u}class Uc extends St{constructor(e=null,t=1,n=1,r,s,a,o,c,l=vt,u=vt,p,d){super(null,a,o,c,l,u,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nn=new _r,Oc=new Qe(.5,.5),ji=new z;class xr{constructor(e=new En,t=new En,n=new En,r=new En,s=new En,a=new En){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],p=s[5],d=s[6],m=s[7],S=s[8],A=s[9],h=s[10],f=s[11],E=s[12],R=s[13],b=s[14],C=s[15];if(r[0].setComponents(l-a,m-u,f-S,C-E).normalize(),r[1].setComponents(l+a,m+u,f+S,C+E).normalize(),r[2].setComponents(l+o,m+p,f+A,C+R).normalize(),r[3].setComponents(l-o,m-p,f-A,C-R).normalize(),n)r[4].setComponents(c,d,h,b).normalize(),r[5].setComponents(l-c,m-d,f-h,C-b).normalize();else if(r[4].setComponents(l-c,m-d,f-h,C-b).normalize(),t===Qt)r[5].setComponents(l+c,m+d,f+h,C+b).normalize();else if(t===gr)r[5].setComponents(c,d,h,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);const t=Oc.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ji.x=r.normal.x>0?e.max.x:e.min.x,ji.y=r.normal.y>0?e.max.y:e.min.y,ji.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ji)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ba=new rt;class js{constructor(){this.coordinateSystem=Qt,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Ba.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new xr),n[r].setFromProjectionMatrix(Ba,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new xr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new js().copy(this)}}class Qo extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ha=new rt,Fs=new Xo,Ki=new _r,$i=new z;class Fc extends wt{constructor(e=new pn,t=new Qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Ki.radius+=s,e.ray.intersectsSphere(Ki)===!1)return;Ha.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Ha);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let S=d,A=m;S<A;S++){const h=l.getX(S);$i.fromBufferAttribute(p,h),ka($i,h,c,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let S=d,A=m;S<A;S++)$i.fromBufferAttribute(p,S),ka($i,S,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ka(i,e,t,n,r,s,a){const o=Fs.distanceSqToPoint(i);if(o<t){const c=new z;Fs.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Yo extends St{constructor(e=[],t=si,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ga extends St{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oi extends St{constructor(e,t,n=tn,r,s,a,o=vt,c=vt,l,u=Rn,p=1){if(u!==Rn&&u!==yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Jo extends oi{constructor(e,t=tn,n=si,r,s,a=vt,o=vt,c,l=Rn){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qo extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ii extends pn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],p=[];let d=0,m=0;S("z","y","x",-1,-1,n,t,e,a,s,0),S("z","y","x",1,-1,n,t,-e,a,s,1),S("x","z","y",1,1,e,n,t,r,a,2),S("x","z","y",1,-1,e,n,-t,r,a,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new hn(l,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(p,2));function S(A,h,f,E,R,b,C,y,g,M,F){const P=b/g,D=C/M,H=b/2,Y=C/2,I=y/2,X=g+1,Z=M+1;let G=0,W=0;const B=new z;for(let V=0;V<Z;V++){const ee=V*D-Y;for(let ve=0;ve<X;ve++){const we=ve*P-H;B[A]=we*E,B[h]=ee*R,B[f]=I,l.push(B.x,B.y,B.z),B[A]=0,B[h]=0,B[f]=y>0?1:-1,u.push(B.x,B.y,B.z),p.push(ve/g),p.push(1-V/M),G+=1}}for(let V=0;V<M;V++)for(let ee=0;ee<g;ee++){const ve=d+ee+X*V,we=d+ee+X*(V+1),j=d+(ee+1)+X*(V+1),pe=d+(ee+1)+X*V;c.push(ve,we,pe),c.push(we,j,pe),W+=6}o.addGroup(m,W,F),m+=W,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Un extends pn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,p=e/o,d=t/c,m=[],S=[],A=[],h=[];for(let f=0;f<u;f++){const E=f*d-a;for(let R=0;R<l;R++){const b=R*p-s;S.push(b,-E,0),A.push(0,0,1),h.push(R/o),h.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const R=E+l*f,b=E+l*(f+1),C=E+1+l*(f+1),y=E+1+l*f;m.push(R,b,y),m.push(b,C,y)}this.setIndex(m),this.setAttribute("position",new hn(S,3)),this.setAttribute("normal",new hn(A,3)),this.setAttribute("uv",new hn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}function li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(za(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(za(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=li(i[t]);for(const r in n)e[r]=n[r]}return e}function za(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Hc={clone:li,merge:yt};var kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=Bc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(r.value);break;case"v2":this.uniforms[n].value=new Qe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new it().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class zc extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vc extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wc extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Va(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Va(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Va(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Xc{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){const p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=l.length;p<d;p+=2){const m=l[p],S=l[p+1];if(m.global&&(m.lastIndex=0),m.test(u))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Qc=new Xc;class Ks{constructor(e){this.manager=e!==void 0?e:Qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn=new WeakMap;class Yc extends Ks{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let p=jn.get(a);p===void 0&&(p=[],jn.set(a,p)),p.push({onLoad:t,onError:r})}return a}const o=Ti("img");function c(){u(),t&&t(this);const p=jn.get(this)||[];for(let d=0;d<p.length;d++){const m=p[d];m.onLoad&&m.onLoad(this)}jn.delete(this),s.manager.itemEnd(e)}function l(p){u(),r&&r(p),qr.remove(`image:${e}`);const d=jn.get(this)||[];for(let m=0;m<d.length;m++){const S=d[m];S.onError&&S.onError(p)}jn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),qr.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class Jc extends Ks{constructor(e){super(e)}load(e,t,n,r){const s=new St,a=new Yc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}const er=new z,tr=new ui,Jt=new z;class jo extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(er,tr,Jt),Jt.x===1&&Jt.y===1&&Jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,tr,Jt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(er,tr,Jt),Jt.x===1&&Jt.y===1&&Jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,tr,Jt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new z,Wa=new Qe,Xa=new Qe;class Vt extends jo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ri*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Wa,Xa),t.subVectors(Xa,Wa)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qc extends jo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kn=-90,$n=1;class Bs extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Kn,$n,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Kn,$n,e,t);s.layers=this.layers,this.add(s);const a=new Vt(Kn,$n,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Kn,$n,e,t);o.layers=this.layers,this.add(o);const c=new Vt(Kn,$n,e,t);c.layers=this.layers,this.add(c);const l=new Vt(Kn,$n,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=A,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,m),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Zc extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class jc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qa(i,e,t,n){const r=Kc(n);switch(t){case Io:return i*e;case Lo:return i*e/r.components*r.byteLength;case Ws:return i*e/r.components*r.byteLength;case Fn:return i*e*2/r.components*r.byteLength;case Xs:return i*e*2/r.components*r.byteLength;case Po:return i*e*3/r.components*r.byteLength;case Kt:return i*e*4/r.components*r.byteLength;case Qs:return i*e*4/r.components*r.byteLength;case sr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ls:case us:return Math.max(i,16)*Math.max(e,8)/4;case os:case cs:return Math.max(i,8)*Math.max(e,8)/2;case ds:case fs:case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hs:case fr:case gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ss:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _s:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Es:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case As:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ys:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ts:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ws:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Is:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ps:case Ls:case Ds:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ns:case Us:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hr:case Os:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kc(i){switch(i){case Bt:case To:return{byteLength:1,components:1};case yi:case Ro:case nn:return{byteLength:2,components:1};case zs:case Vs:return{byteLength:2,components:4};case tn:case Gs:case jt:return{byteLength:4,components:1};case Co:case wo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ks}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ks);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ko(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function $c(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((m,S)=>m.start-S.start);let d=0;for(let m=1;m<p.length;m++){const S=p[d],A=p[m];A.start<=S.start+S.count+1?S.count=Math.max(S.count,A.start+A.count-S.start):(++d,p[d]=A)}p.length=d+1;for(let m=0,S=p.length;m<S;m++){const A=p[m];i.bufferSubData(l,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tu=`#ifdef USE_ALPHAHASH
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
#endif`,nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,au=`#ifdef USE_AOMAP
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
#endif`,ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lu=`#ifdef USE_BATCHING
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
#endif`,cu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hu=`#ifdef USE_IRIDESCENCE
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
#endif`,pu=`#ifdef USE_BUMPMAP
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
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Au=`#define PI 3.141592653589793
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
} // validated`,bu=`vec3 transformedNormal = objectNormal;
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
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
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
}`,Gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xu=`#ifdef USE_ENVMAP
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
#endif`,Qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
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
#endif`,ju=`uniform sampler2D dfgLUT;
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
}`,Ku=`
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hd=`#if defined( USE_MORPHCOLORS )
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
#endif`,pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`#ifdef USE_MORPHTARGETS
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
#endif`,gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
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
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bd=`float getShadowMask() {
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
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yd=`#ifdef USE_TRANSMISSION
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
#endif`,Jd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`uniform float backgroundBlurriness;
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`#include <common>
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
}`,of=`#if DEPTH_PACKING == 3200
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
}`,lf=`#define DISTANCE
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
}`,cf=`#define DISTANCE
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
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
}`,hf=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,mf=`uniform vec3 diffuse;
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
}`,gf=`#define LAMBERT
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
}`,xf=`#define LAMBERT
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
}`,vf=`#define MATCAP
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
}`,Sf=`#define MATCAP
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
}`,_f=`#define NORMAL
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
}`,Mf=`#define NORMAL
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
}`,Ef=`#define PHONG
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
}`,Af=`#define PHONG
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
}`,bf=`#define STANDARD
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
}`,yf=`#define STANDARD
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
}`,Tf=`#define TOON
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
}`,Rf=`#define TOON
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
}`,Cf=`uniform float size;
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
}`,wf=`uniform vec3 diffuse;
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
}`,If=`#include <common>
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
}`,Pf=`uniform vec3 color;
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
}`,Lf=`uniform float rotation;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:eu,alphahash_pars_fragment:tu,alphamap_fragment:nu,alphamap_pars_fragment:iu,alphatest_fragment:ru,alphatest_pars_fragment:su,aomap_fragment:au,aomap_pars_fragment:ou,batching_pars_vertex:lu,batching_vertex:cu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:hu,bumpmap_pars_fragment:pu,clipping_planes_fragment:mu,clipping_planes_pars_fragment:gu,clipping_planes_pars_vertex:xu,clipping_planes_vertex:vu,color_fragment:Su,color_pars_fragment:_u,color_pars_vertex:Mu,color_vertex:Eu,common:Au,defaultnormal_vertex:bu,displacementmap_pars_vertex:yu,displacementmap_vertex:Tu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Cu,colorspace_fragment:wu,colorspace_pars_fragment:Iu,envmap_fragment:Pu,envmap_common_pars_fragment:Lu,envmap_pars_fragment:Du,envmap_pars_vertex:Nu,envmap_physical_pars_fragment:Xu,envmap_vertex:Uu,fog_vertex:Ou,fog_pars_vertex:Fu,fog_fragment:Bu,fog_pars_fragment:Hu,gradientmap_pars_fragment:ku,lightmap_pars_fragment:Gu,lights_lambert_fragment:zu,lights_lambert_pars_fragment:Vu,lights_pars_begin:Wu,lights_toon_fragment:Qu,lights_toon_pars_fragment:Yu,lights_phong_fragment:Ju,lights_phong_pars_fragment:qu,lights_physical_fragment:Zu,lights_physical_pars_fragment:ju,lights_fragment_begin:Ku,lights_fragment_maps:$u,lights_fragment_end:ed,lightprobes_pars_fragment:td,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:id,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:sd,map_fragment:ad,map_pars_fragment:od,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:fd,morphcolor_vertex:hd,morphnormal_vertex:pd,morphtarget_pars_vertex:md,morphtarget_vertex:gd,normal_fragment_begin:xd,normal_fragment_maps:vd,normal_pars_fragment:Sd,normal_pars_vertex:_d,normal_vertex:Md,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:yd,iridescence_pars_fragment:Td,opaque_fragment:Rd,packing:Cd,premultiplied_alpha_fragment:wd,project_vertex:Id,dithering_fragment:Pd,dithering_pars_fragment:Ld,roughnessmap_fragment:Dd,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Od,shadowmap_vertex:Fd,shadowmask_pars_fragment:Bd,skinbase_vertex:Hd,skinning_pars_vertex:kd,skinning_vertex:Gd,skinnormal_vertex:zd,specularmap_fragment:Vd,specularmap_pars_fragment:Wd,tonemapping_fragment:Xd,tonemapping_pars_fragment:Qd,transmission_fragment:Yd,transmission_pars_fragment:Jd,uv_pars_fragment:qd,uv_pars_vertex:Zd,uv_vertex:jd,worldpos_vertex:Kd,background_vert:$d,background_frag:ef,backgroundCube_vert:tf,backgroundCube_frag:nf,cube_vert:rf,cube_frag:sf,depth_vert:af,depth_frag:of,distance_vert:lf,distance_frag:cf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:hf,meshbasic_vert:pf,meshbasic_frag:mf,meshlambert_vert:gf,meshlambert_frag:xf,meshmatcap_vert:vf,meshmatcap_frag:Sf,meshnormal_vert:_f,meshnormal_frag:Mf,meshphong_vert:Ef,meshphong_frag:Af,meshphysical_vert:bf,meshphysical_frag:yf,meshtoon_vert:Tf,meshtoon_frag:Rf,points_vert:Cf,points_frag:wf,shadow_vert:If,shadow_frag:Pf,sprite_vert:Lf,sprite_frag:Df},he={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Zt={basic:{uniforms:yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:yt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:yt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:yt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:yt([he.common,he.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:yt([he.lights,he.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Zt.physical={uniforms:yt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const nr={r:0,b:0,g:0},Nf=new rt,$o=new Pe;$o.set(-1,0,0,0,1,0,0,0,1);function Uf(i,e,t,n,r,s){const a=new Ve(0);let o=r===!0?0:1,c,l,u=null,p=0,d=null;function m(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){const b=E.backgroundBlurriness>0;R=e.get(R,b)}return R}function S(E){let R=!1;const b=m(E);b===null?h(a,o):b&&b.isColor&&(h(b,1),R=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(E,R){const b=m(R);b&&b.isCubeTexture?(l===void 0&&(l=new en(new Ii(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:li(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,y,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Nf.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($o),l.material.toneMapped=Ge.getTransfer(b.colorSpace)!==qe,(u!==b||p!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,p=b.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new en(new Un(2,2),new Hn({name:"BackgroundMaterial",uniforms:li(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(b.colorSpace)!==qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,R){E.getRGB(nr,Zo(i)),t.buffers.color.setClear(nr.r,nr.g,nr.b,R,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,R=1){a.set(E),o=R,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,h(a,o)},render:S,addToRenderList:A,dispose:f}}function Of(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(D,H,Y,I,X){let Z=!1;const G=p(D,I,Y,H);s!==G&&(s=G,l(s.object)),Z=m(D,I,Y,X),Z&&S(D,I,Y,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(D,H,Y,I),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function p(D,H,Y,I){const X=I.wireframe===!0;let Z=n[H.id];Z===void 0&&(Z={},n[H.id]=Z);const G=D.isInstancedMesh===!0?D.id:0;let W=Z[G];W===void 0&&(W={},Z[G]=W);let B=W[Y.id];B===void 0&&(B={},W[Y.id]=B);let V=B[X];return V===void 0&&(V=d(c()),B[X]=V),V}function d(D){const H=[],Y=[],I=[];for(let X=0;X<t;X++)H[X]=0,Y[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:I,object:D,attributes:{},index:null}}function m(D,H,Y,I){const X=s.attributes,Z=H.attributes;let G=0;const W=Y.getAttributes();for(const B in W)if(W[B].location>=0){const ee=X[B];let ve=Z[B];if(ve===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),ee===void 0||ee.attribute!==ve||ve&&ee.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==I}function S(D,H,Y,I){const X={},Z=H.attributes;let G=0;const W=Y.getAttributes();for(const B in W)if(W[B].location>=0){let ee=Z[B];ee===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const ve={};ve.attribute=ee,ee&&ee.data&&(ve.data=ee.data),X[B]=ve,G++}s.attributes=X,s.attributesNum=G,s.index=I}function A(){const D=s.newAttributes;for(let H=0,Y=D.length;H<Y;H++)D[H]=0}function h(D){f(D,0)}function f(D,H){const Y=s.newAttributes,I=s.enabledAttributes,X=s.attributeDivisors;Y[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),X[D]!==H&&(i.vertexAttribDivisor(D,H),X[D]=H)}function E(){const D=s.newAttributes,H=s.enabledAttributes;for(let Y=0,I=H.length;Y<I;Y++)H[Y]!==D[Y]&&(i.disableVertexAttribArray(Y),H[Y]=0)}function R(D,H,Y,I,X,Z,G){G===!0?i.vertexAttribIPointer(D,H,Y,X,Z):i.vertexAttribPointer(D,H,Y,I,X,Z)}function b(D,H,Y,I){A();const X=I.attributes,Z=Y.getAttributes(),G=H.defaultAttributeValues;for(const W in Z){const B=Z[W];if(B.location>=0){let V=X[W];if(V===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const ee=V.normalized,ve=V.itemSize,we=e.get(V);if(we===void 0)continue;const j=we.buffer,pe=we.type,Se=we.bytesPerElement,ye=pe===i.INT||pe===i.UNSIGNED_INT||V.gpuType===Gs;if(V.isInterleavedBufferAttribute){const me=V.data,De=me.isInterleavedBuffer===!0?me.stride:me.itemSize,st=V.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Re=0;Re<B.locationSize;Re++)f(B.location+Re,me.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Re=0;Re<B.locationSize;Re++)h(B.location+Re);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Re=0;Re<B.locationSize;Re++)R(B.location+Re,ve/B.locationSize,pe,ee,De*Se,(st+ve/B.locationSize*Re)*Se,ye)}else{if(V.isInstancedBufferAttribute){for(let me=0;me<B.locationSize;me++)f(B.location+me,V.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let me=0;me<B.locationSize;me++)h(B.location+me);i.bindBuffer(i.ARRAY_BUFFER,j);for(let me=0;me<B.locationSize;me++)R(B.location+me,ve/B.locationSize,pe,ee,ve*Se,ve/B.locationSize*me*Se,ye)}}else if(G!==void 0){const ee=G[W];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(B.location,ee);break;case 3:i.vertexAttrib3fv(B.location,ee);break;case 4:i.vertexAttrib4fv(B.location,ee);break;default:i.vertexAttrib1fv(B.location,ee)}}}}E()}function C(){F();for(const D in n){const H=n[D];for(const Y in H){const I=H[Y];for(const X in I){const Z=I[X];for(const G in Z)u(Z[G].object),delete Z[G];delete I[X]}}delete n[D]}}function y(D){if(n[D.id]===void 0)return;const H=n[D.id];for(const Y in H){const I=H[Y];for(const X in I){const Z=I[X];for(const G in Z)u(Z[G].object),delete Z[G];delete I[X]}}delete n[D.id]}function g(D){for(const H in n){const Y=n[H];for(const I in Y){const X=Y[I];if(X[D.id]===void 0)continue;const Z=X[D.id];for(const G in Z)u(Z[G].object),delete Z[G];delete X[D.id]}}}function M(D){for(const H in n){const Y=n[H],I=D.isInstancedMesh===!0?D.id:0,X=Y[I];if(X!==void 0){for(const Z in X){const G=X[Z];for(const W in G)u(G[W].object),delete G[W];delete X[Z]}delete Y[I],Object.keys(Y).length===0&&delete n[H]}}}function F(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:A,enableAttribute:h,disableUnusedAttributes:E}}function Ff(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let m=0;m<u;m++)d+=l[m];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Bf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==Kt&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const M=g===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Bt&&g!==jt&&!M&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ce("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Ce("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:S,maxTextureSize:A,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:b,maxSamples:C,samples:y}}function Hf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new En,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||n!==0||r;return r=d,n=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,m){const S=p.clippingPlanes,A=p.clipIntersection,h=p.clipShadows,f=i.get(p);if(!r||S===null||S.length===0||s&&!h)s?u(null):l();else{const E=s?0:n,R=E*4;let b=f.clippingState||null;c.value=b,b=u(S,d,R,m);for(let C=0;C!==R;++C)b[C]=t[C];f.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,d,m,S){const A=p!==null?p.length:0;let h=null;if(A!==0){if(h=c.value,S!==!0||h===null){const f=m+A*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(h===null||h.length<f)&&(h=new Float32Array(f));for(let R=0,b=m;R!==A;++R,b+=4)a.copy(p[R]).applyMatrix4(E,o),a.normal.toArray(h,b),h[b+3]=a.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,h}}class $s extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:ii});s.uniforms.tEquirect.value=t;const a=new en(r,s),o=t.minFilter;return t.minFilter===bn&&(t.minFilter=Rt),new Bs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ya=256,kf=3,Gf=20,el=256,tl=16,zf=3,Vf=new z,Wf=new Ve;class vr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bs(1,10,null),this._boxMesh=new en(new Ii(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Vf}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const p=c.autoClear,d=c.autoClearColor,m=c.autoClearDepth,S=c.autoClearStencil,A=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,A===null&&(e.background=c.getClearColor(Wf));const h=new Bs(n,r,u);return h.position.copy(o),h.update(c,e),c.autoClear=p,c.autoClearColor=d,c.autoClearDepth=m,c.autoClearStencil=S,e.background=A,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ya,Fo(e))}_fromTexture(e,t){e.mapping===si||e.mapping===bi?this._setSize(e.image.length===0?Ya:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Ja(e,!1,!1),n=Math.log2(e)-kf;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ja(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===si||e.mapping===bi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qa()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Xf(),this._integrationMaterial=Qf());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/tl);for(let a=0;a<=n;a++){const o=vr.lodToRoughness(a,n);if(a>n-zf)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(el*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Yf());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function Ja(i,e,t){return new $s(i,{minFilter:bn,generateMipmaps:e,type:nn,colorSpace:pr,depthBuffer:t})}function Pi(i,e,t){return new Hn({name:i,uniforms:e,vertexShader:Oe.cube_vert,fragmentShader:t,side:Ct,blending:ii,depthTest:!1,depthWrite:!1})}function Xf(){return Pi("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${el}u

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
	`)}function Qf(){return Pi("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:tl}},`

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
	`)}function Yf(){return Pi("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gf}
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
	`)}function qa(){return Pi("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Za(){return Pi("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jf(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===yr||m===Tr)if(e.has(d)){const S=e.get(d).texture;return o(S,d.mapping)}else{const S=d.image;if(S&&S.height>0){const A=new $s(S.height);return A.fromEquirectangularTexture(i,d),e.set(d,A),d.addEventListener("dispose",l),o(A.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const m=d.mapping,S=m===yr||m===Tr,A=m===si||m===bi;if(S||A){let h=t.get(d);const f=h!==void 0?h.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new vr(i)),h=S?n.fromEquirectangular(d,h):n.fromCubemap(d,h),h.texture.pmremVersion=d.pmremVersion,t.set(d,h),h.texture;if(h!==void 0)return h.texture;{const E=d.image;return S&&E&&E.height>0||A&&E&&c(E)?(n===null&&(n=new vr(i)),h=S?n.fromEquirectangular(d):n.fromCubemap(d),h.texture.pmremVersion=d.pmremVersion,t.set(d,h),d.addEventListener("dispose",u),h.texture):null}}}return d}function o(d,m){return m===yr?d.mapping=si:m===Tr&&(d.mapping=bi),d}function c(d){let m=0;const S=6;for(let A=0;A<S;A++)d[A]!==void 0&&m++;return m===S}function l(d){const m=d.target;m.removeEventListener("dispose",l);const S=e.get(m);S!==void 0&&(e.delete(m),S.dispose())}function u(d){const m=d.target;m.removeEventListener("dispose",u);const S=t.get(m);S!==void 0&&(t.delete(m),S.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function qf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&cr("WebGLRenderer: "+n+" extension not supported."),r}}}function Zf(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(S=>delete r[S]);function o(S){c(S.target)}function c(S){S.index!==null&&e.remove(S.index);for(const h in S.attributes)e.remove(S.attributes[h]);S.removeEventListener("dispose",o),delete r[S.id],a.unregister(S);const A=s.get(S);A&&(e.remove(A),s.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function l(S,A){return r[A.id]!==void 0||(A.addEventListener("dispose",o),r[A.id]=new WeakRef(A),a.register(A,A.id,A),t.memory.geometries++),A}function u(S){const A=S.attributes;for(const h in A)e.update(A[h],i.ARRAY_BUFFER)}function p(S){const A=S.index,h=S.attributes.position;let f=0;if(h===void 0)return;const E=A!==null?A.array.length:h.array.length/3-1,R=h.count>=65535?Wo:Vo,b=new R(Math.ceil(E/3)*6,1),C=b.array;if(A!==null){const g=A.array;f=A.version;for(let M=0,F=0;M<E;M+=3){const P=g[M+0],D=g[M+1],H=g[M+2];C[F++]=P,C[F++]=D,C[F++]=D,C[F++]=H,C[F++]=H,C[F++]=P}}else{f=h.version;for(let g=0,M=0;g<E;g+=3){const F=g+0,P=g+1,D=g+2;C[M++]=F,C[M++]=P,C[M++]=P,C[M++]=D,C[M++]=D,C[M++]=F}}b.version=f;const y=s.get(S);y&&e.remove(y),s.set(S,b)}function d(S){const A=s.get(S);if(A){const h=S.index;h!==null&&A.version<h.version&&p(S)}else p(S);return s.get(S)}function m(){for(const S in r){const A=r[S].deref();A!==void 0&&c(A)}}return{get:l,update:u,getWireframeAttribute:d,dispose:m}}function jf(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,d){i.drawElements(n,d,s,p*a),t.update(d,n,1)}function l(p,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,p*a,m),t.update(d,n,m))}function u(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,m);let A=0;for(let h=0;h<m;h++)A+=d[h];t.update(A,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Kf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $f(i,e,t){const n=new WeakMap,r=new it;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let F=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),S===!0&&(R=2),A===!0&&(R=3);let b=o.attributes.position.count*R,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const y=new Float32Array(b*C*4*p),g=new ko(y,b,C,p);g.type=jt,g.needsUpdate=!0;const M=R*4;for(let P=0;P<p;P++){const D=h[P],H=f[P],Y=E[P],I=b*C*4*P;for(let X=0;X<D.count;X++){const Z=X*M;m===!0&&(r.fromBufferAttribute(D,X),y[I+Z+0]=r.x,y[I+Z+1]=r.y,y[I+Z+2]=r.z,y[I+Z+3]=0),S===!0&&(r.fromBufferAttribute(H,X),y[I+Z+4]=r.x,y[I+Z+5]=r.y,y[I+Z+6]=r.z,y[I+Z+7]=0),A===!0&&(r.fromBufferAttribute(Y,X),y[I+Z+8]=r.x,y[I+Z+9]=r.y,y[I+Z+10]=r.z,y[I+Z+11]=Y.itemSize===4?r.w:1)}}d={count:p,texture:g,size:new Qe(b,C)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let A=0;A<l.length;A++)m+=l[A];const S=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function eh(i,e,t,n,r){let s=new WeakMap;function a(l){const u=r.render.frame,p=l.geometry,d=e.get(l,p);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const th={[vo]:"LINEAR_TONE_MAPPING",[So]:"REINHARD_TONE_MAPPING",[_o]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[Ao]:"AGX_TONE_MAPPING",[bo]:"NEUTRAL_TONE_MAPPING",[Eo]:"CUSTOM_TONE_MAPPING"};function nh(i,e,t,n,r,s){const a=new $t(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new pn;u.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new hn([0,2,0,0,2,0],2));const p=new zc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new en(u,p),m=new qc(-1,1,1,-1,0,1);let S=null,A=null,h=!1,f,E=null,R=[],b=!1;this.setSize=function(C,y){a.setSize(C,y),o!==null&&o.setSize(C,y),c!==null&&c.setSize(C,y);for(let g=0;g<R.length;g++){const M=R[g];M.setSize&&M.setSize(C,y)}},this.setEffects=function(C){R=C,b=R.length>0&&R[0].isRenderPass===!0;const y=a.width,g=a.height;R.length>0&&o===null&&(o=new $t(y,g,{type:nn,depthBuffer:!1,stencilBuffer:!1}),c=new $t(y,g,{type:nn,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&R.some(F=>F.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new oi(y,g),s===!0&&(l.format=yn,l.type=ai)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let F=0;F<R.length;F++){const P=R[F];P.setSize&&P.setSize(y,g),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(C,y){if(h||C.toneMapping===dn&&R.length===0)return!1;if(E=y,y!==null){const g=y.width,M=y.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return b===!1&&C.setRenderTarget(a),f=C.toneMapping,C.toneMapping=dn,!0},this.hasRenderPass=function(){return b},this.end=function(C,y){C.toneMapping=f,h=!0;let g=a,M=o;for(let F=0;F<R.length;F++){const P=R[F];P.enabled!==!1&&(P.render(C,M,g,y),P.needsSwap!==!1&&(g=M,M=M===o?c:o))}if(S!==C.outputColorSpace||A!==C.toneMapping){S=C.outputColorSpace,A=C.toneMapping,p.defines={},Ge.getTransfer(S)===qe&&(p.defines.SRGB_TRANSFER="");const F=th[A];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(E),C.render(d,m),E=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),p.dispose()}}const nl=new St,il=new oi(1,1),rl=new Jo(1),sl=new ko,al=new Sc,ol=new Yo,ja=[],Ka=[],$a=new Float32Array(16),eo=new Float32Array(9),to=new Float32Array(4);function di(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ja[r];if(s===void 0&&(s=new Float32Array(r),ja[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mr(i,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ih(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function sh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function ah(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function oh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;to.set(n),i.uniformMatrix2fv(this.addr,!1,to),dt(t,n)}}function lh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;eo.set(n),i.uniformMatrix3fv(this.addr,!1,eo),dt(t,n)}}function ch(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;$a.set(n),i.uniformMatrix4fv(this.addr,!1,$a),dt(t,n)}}function uh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function fh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function hh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function ph(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function gh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function Er(i){return i.version===0&&(i.compareFunction=Uo,i.needsUpdate=!0),i}function vh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Er(il):s=nl,t.setTexture2D(e||s,r)}function Sh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||al,r)}function _h(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Er(rl):s=ol,t.setTextureCube(e||s,r)}function Mh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||sl,r)}function Eh(i){switch(i){case 5126:return ih;case 35664:return rh;case 35665:return sh;case 35666:return ah;case 35674:return oh;case 35675:return lh;case 35676:return ch;case 5124:case 35670:return uh;case 35667:case 35671:return dh;case 35668:case 35672:return fh;case 35669:case 35673:return hh;case 5125:return ph;case 36294:return mh;case 36295:return gh;case 36296:return xh;case 35678:case 36198:case 36298:case 36306:case 35682:return vh;case 35679:case 36299:case 36307:return Sh;case 35680:case 36300:case 36308:case 36293:return _h;case 36289:case 36303:case 36311:case 36292:return Mh}}function Ah(i,e){i.uniform1fv(this.addr,e)}function bh(i,e){const t=di(e,this.size,2);i.uniform2fv(this.addr,t)}function yh(i,e){const t=di(e,this.size,3);i.uniform3fv(this.addr,t)}function Th(i,e){const t=di(e,this.size,4);i.uniform4fv(this.addr,t)}function Rh(i,e){const t=di(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ch(i,e){const t=di(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wh(i,e){const t=di(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ih(i,e){i.uniform1iv(this.addr,e)}function Ph(i,e){i.uniform2iv(this.addr,e)}function Lh(i,e){i.uniform3iv(this.addr,e)}function Dh(i,e){i.uniform4iv(this.addr,e)}function Nh(i,e){i.uniform1uiv(this.addr,e)}function Uh(i,e){i.uniform2uiv(this.addr,e)}function Oh(i,e){i.uniform3uiv(this.addr,e)}function Fh(i,e){i.uniform4uiv(this.addr,e)}function Bh(i,e,t){const n=this.cache,r=e.length,s=Mr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Er(il):a=nl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Hh(i,e,t){const n=this.cache,r=e.length,s=Mr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||al,s[a])}function kh(i,e,t){const n=this.cache,r=e.length,s=Mr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Er(rl):a=ol;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Gh(i,e,t){const n=this.cache,r=e.length,s=Mr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||sl,s[a])}function zh(i){switch(i){case 5126:return Ah;case 35664:return bh;case 35665:return yh;case 35666:return Th;case 35674:return Rh;case 35675:return Ch;case 35676:return wh;case 5124:case 35670:return Ih;case 35667:case 35671:return Ph;case 35668:case 35672:return Lh;case 35669:case 35673:return Dh;case 5125:return Nh;case 36294:return Uh;case 36295:return Oh;case 36296:return Fh;case 35678:case 36198:case 36298:case 36306:case 35682:return Bh;case 35679:case 36299:case 36307:return Hh;case 35680:case 36300:case 36308:case 36293:return kh;case 36289:case 36303:case 36311:case 36292:return Gh}}class Vh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Eh(t.type)}}class Wh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zh(t.type)}}class Xh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function no(i,e){i.seq.push(e),i.map[e.id]=e}function Qh(i,e,t){const n=i.name,r=n.length;for(Zr.lastIndex=0;;){const s=Zr.exec(n),a=Zr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){no(t,l===void 0?new Vh(o,i,e):new Wh(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Xh(o),no(t,p)),t=p}}}class dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Qh(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function io(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Yh=37297;let Jh=0;function qh(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ro=new Pe;function Zh(i){Ge._getMatrix(ro,Ge.workingColorSpace,i);const e=`mat3( ${ro.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case mr:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function so(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+qh(i.getShaderSource(e),o)}else return s}function jh(i,e){const t=Zh(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Kh={[vo]:"Linear",[So]:"Reinhard",[_o]:"Cineon",[Mo]:"ACESFilmic",[Ao]:"AgX",[bo]:"Neutral",[Eo]:"Custom"};function $h(i,e){const t=Kh[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new z;function ep(){Ge.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Si).join(`
`)}function np(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ip(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Si(i){return i!==""}function ao(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function oo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(i){return i.replace(rp,sp)}function sp(i,e){const t=Oe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hs(t)}const ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lo(i){return i.replace(ap,op)}function op(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function co(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const lp={[rr]:"SHADOWMAP_TYPE_PCF",[vi]:"SHADOWMAP_TYPE_VSM"};function cp(i){return lp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const up={[bi]:"ENVMAP_MODE_REFRACTION"};function dp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":up[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fp={[xo]:"ENVMAP_BLENDING_MULTIPLY",[Ol]:"ENVMAP_BLENDING_MIX",[Fl]:"ENVMAP_BLENDING_ADD"};function hp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fp[i.combine]||"ENVMAP_BLENDING_NONE"}function pp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=cp(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=dp(t),p=hp(t),d=tp(t),m=np(s),S=r.createProgram();let A,h,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Si).join(`
`),A.length>0&&(A+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Si).join(`
`),h.length>0&&(h+=`
`)):(A=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),h=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==dn?$h("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,jh("linearToOutputTexel",t.outputColorSpace),ep(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Si).join(`
`)),a=Hs(a),a=ao(a,t),a=oo(a,t),o=Hs(o),o=ao(o,t),o=oo(o,t),a=lo(a),o=lo(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,A=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,h=["#define varying in",t.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=f+A+a,R=f+h+o,b=io(r,r.VERTEX_SHADER,E),C=io(r,r.FRAGMENT_SHADER,R);r.attachShader(S,b),r.attachShader(S,C),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function y(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(S)||"",H=r.getShaderInfoLog(b)||"",Y=r.getShaderInfoLog(C)||"",I=D.trim(),X=H.trim(),Z=Y.trim();let G=!0,W=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,b,C);else{const B=so(r,b,"vertex"),V=so(r,C,"fragment");Xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+B+`
`+V)}else I!==""?Ce("WebGLProgram: Program Info Log:",I):(X===""||Z==="")&&(W=!1);W&&(P.diagnostics={runnable:G,programLog:I,vertexShader:{log:X,prefix:A},fragmentShader:{log:Z,prefix:h}})}r.deleteShader(b),r.deleteShader(C),g=new dr(r,S),M=ip(r,S)}let g;this.getUniforms=function(){return g===void 0&&y(this),g};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(S,Yh)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jh++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=C,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xp(e),t.set(e,n)),n}}class xp{constructor(e){this.id=mp++,this.code=e,this.usedTimes=0}}function vp(i){return i===Fn||i===fr||i===hr}function Sp(i,e,t,n,r,s){const a=new Go,o=new gp,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function S(g,M,F,P,D,H){const Y=P.fog,I=D.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=e.get(g.envMap||X,Z),W=d[g.type];let B=n.precision;g.precision!==null&&(B=n.getMaxPrecision(g.precision),B!==g.precision&&Ce("WebGLProgram.getParameters:",g.precision,"not supported, using",B,"instead."));const V=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=V!==void 0?V.length:0;let ve=0;I.morphAttributes.position!==void 0&&(ve=1),I.morphAttributes.normal!==void 0&&(ve=2),I.morphAttributes.color!==void 0&&(ve=3);let we,j,pe,Se;if(W){const fe=Zt[W];we=fe.vertexShader,j=fe.fragmentShader}else{we=g.vertexShader,j=g.fragmentShader;const fe=o.getVertexShaderStage(g),Je=o.getFragmentShaderStage(g);o.update(g,fe,Je),pe=fe.id,Se=Je.id}const ye=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,st=D.isBatchedMesh===!0,Re=!!g.map,Ye=!!g.matcap,Ze=!!G,Fe=Ze&&G.isPMREMTexture===!0,gt=!!g.aoMap,lt=!!g.lightMap,Tt=!!g.bumpMap&&g.wireframe===!1,tt=!!g.normalMap,Yt=!!g.displacementMap,ft=!!g.emissiveMap,Dt=!!g.metalnessMap,Nt=!!g.roughnessMap,Ut=g.anisotropy>0,L=g.clearcoat>0,Ot=g.diffuseRoughness>0,$e=g.dispersion>0,et=g.retroreflectivity>0,de=g.iridescence>0,ct=g.sheen>0,Te=g.transmission>0,Ie=Ut&&!!g.anisotropyMap,_=L&&!!g.clearcoatMap,x=L&&!!g.clearcoatNormalMap,U=L&&!!g.clearcoatRoughnessMap,te=Ot&&!!g.diffuseRoughnessMap,$=de&&!!g.iridescenceMap,re=de&&!!g.iridescenceThicknessMap,ce=ct&&!!g.sheenColorMap,J=ct&&!!g.sheenRoughnessMap,q=!!g.specularMap,ae=!!g.specularColorMap,T=!!g.specularIntensityMap,K=Te&&!!g.transmissionMap,Q=Te&&!!g.thicknessMap,oe=!!g.gradientMap,ie=!!g.alphaMap,se=g.alphaTest>0,Ae=!!g.alphaHash,Ue=!!g.extensions;let ne=dn;g.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ne=i.toneMapping);const be=Fe?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ne={shaderID:W,shaderType:g.type,shaderName:g.name,vertexShader:we,fragmentShader:j,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:B,batching:st,batchingColor:st&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Re,matcap:Ye,envMap:Ze,envMapMode:Ze&&G.mapping,envMapPMREM:Fe,envMapMaxLod:Fe?be.length-1:null,envMapSize:Fe?be[0].width:null,aoMap:gt,lightMap:lt,bumpMap:Tt,normalMap:tt,displacementMap:Yt,emissiveMap:ft,normalMapObjectSpace:tt&&g.normalMapType===kl,normalMapTangentSpace:tt&&g.normalMapType===Sa,packedNormalMap:tt&&g.normalMapType===Sa&&vp(g.normalMap.format),metalnessMap:Dt,roughnessMap:Nt,anisotropy:Ut,anisotropyMap:Ie,clearcoat:L,clearcoatMap:_,clearcoatNormalMap:x,clearcoatRoughnessMap:U,diffuseRoughness:Ot,diffuseRoughnessMap:te,dispersion:$e,retroreflection:et,iridescence:de,iridescenceMap:$,iridescenceThicknessMap:re,sheen:ct,sheenColorMap:ce,sheenRoughnessMap:J,specularMap:q,specularColorMap:ae,specularIntensityMap:T,transmission:Te,transmissionMap:K,thicknessMap:Q,gradientMap:oe,opaque:g.transparent===!1&&g.blending===_i&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:se,alphaHash:Ae,combine:g.combine,mapUv:Re&&m(g.map.channel),aoMapUv:gt&&m(g.aoMap.channel),lightMapUv:lt&&m(g.lightMap.channel),bumpMapUv:Tt&&m(g.bumpMap.channel),normalMapUv:tt&&m(g.normalMap.channel),displacementMapUv:Yt&&m(g.displacementMap.channel),emissiveMapUv:ft&&m(g.emissiveMap.channel),metalnessMapUv:Dt&&m(g.metalnessMap.channel),roughnessMapUv:Nt&&m(g.roughnessMap.channel),anisotropyMapUv:Ie&&m(g.anisotropyMap.channel),clearcoatMapUv:_&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:$&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(g.sheenRoughnessMap.channel),specularMapUv:q&&m(g.specularMap.channel),specularColorMapUv:ae&&m(g.specularColorMap.channel),specularIntensityMapUv:T&&m(g.specularIntensityMap.channel),transmissionMapUv:K&&m(g.transmissionMap.channel),thicknessMapUv:Q&&m(g.thicknessMap.channel),alphaMapUv:ie&&m(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(tt||Ut),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Re||ie),fog:!!Y,useFog:g.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&tt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ve,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:H.filter(fe=>fe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Re&&g.map.isVideoTexture===!0&&Ge.getTransfer(g.map.colorSpace)===qe,decodeVideoTextureEmissive:ft&&g.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(g.emissiveMap.colorSpace)===qe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Wt,flipSided:g.side===Ct,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ue&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&g.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function A(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const F in g.defines)M.push(F),M.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(h(M,g),f(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function h(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function f(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function E(g){const M=d[g.type];let F;if(M){const P=Zt[M];F=Hc.clone(P.uniforms)}else F=g.uniforms;return F}function R(g,M){let F=u.get(M);return F!==void 0?++F.usedTimes:(F=new pp(i,M,g,r),l.push(F),u.set(M,F)),F}function b(g){if(--g.usedTimes===0){const M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function C(g){o.remove(g)}function y(){o.dispose()}return{getParameters:S,getProgramCacheKey:A,getUniforms:E,acquireProgram:R,releaseProgram:b,releaseShaderCache:C,programs:l,dispose:y}}function _p(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Mp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function uo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,S,A,h,f){let E=i[e];return E===void 0?(E={id:d.id,object:d,geometry:m,material:S,materialVariant:a(d),groupOrder:A,renderOrder:d.renderOrder,z:h,group:f},i[e]=E):(E.id=d.id,E.object=d,E.geometry=m,E.material=S,E.materialVariant=a(d),E.groupOrder=A,E.renderOrder=d.renderOrder,E.z=h,E.group=f),e++,E}function c(d,m,S,A,h,f,E){E.reversedDepth===!0&&(h=-h);const R=o(d,m,S,A,h,f);S.transmission>0?n.push(R):S.transparent===!0?r.push(R):t.push(R)}function l(d,m,S,A,h,f){const E=o(d,m,S,A,h,f);S.transmission>0?n.unshift(E):S.transparent===!0?r.unshift(E):t.unshift(E)}function u(d,m){t.length>1&&t.sort(d||Mp),n.length>1&&n.sort(m||uo),r.length>1&&r.sort(m||uo)}function p(){for(let d=e,m=i.length;d<m;d++){const S=i[d];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:p,sort:u}}function Ep(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new fo,i.set(n,[a])):r>=s.length?(a=new fo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ap(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ve};break;case"SpotLight":t={position:new z,direction:new z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function bp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yp=0;function Tp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rp(i){const e=new Ap,t=bp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const r=new z,s=new rt,a=new rt;function o(l){let u=0,p=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let m=0,S=0,A=0,h=0,f=0,E=0,R=0,b=0,C=0,y=0,g=0,M=0,F=0,P=0;l.sort(Tp);for(let H=0,Y=l.length;H<Y;H++){const I=l[H],X=I.color,Z=I.intensity,G=I.distance;let W=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fn?W=I.shadow.map.texture:W=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=X.r*Z,p+=X.g*Z,d+=X.b*Z;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],Z);P++}else if(I.isSunLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,ee=t.get(I);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[S]=ee,n.sunShadowMap[S]=W;const ve=V.getViewportCount();for(let we=0;we<ve;we++)n.sunShadowMatrix[A+we]=V.getMatrix(we),n.sunShadowCascade[A+we]=V._cascadeData[we];A+=ve,S++}n.sun[m]=B,m++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,ee=t.get(I);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.directionalShadow[h]=ee,n.directionalShadowMap[h]=W,n.directionalShadowMatrix[h]=I.shadow.matrix,C++}n.directional[h]=B,h++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(X).multiplyScalar(Z),B.distance=G,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[E]=B;const V=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,V.updateMatrices(I),I.castShadow&&F++),n.spotLightMatrix[E]=V.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.spotShadow[E]=ee,n.spotShadowMap[E]=W,g++}E++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(X).multiplyScalar(Z),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=B,R++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const V=I.shadow,ee=t.get(I);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=W,n.pointShadowMatrix[f]=I.shadow.matrix,y++}n.point[f]=B,f++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(Z),B.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[b]=B,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;const D=n.hash;(D.sunLength!==m||D.directionalLength!==h||D.pointLength!==f||D.spotLength!==E||D.rectAreaLength!==R||D.hemiLength!==b||D.numSunShadows!==S||D.numDirectionalShadows!==C||D.numPointShadows!==y||D.numSpotShadows!==g||D.numSpotMaps!==M||D.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=h,n.spot.length=E,n.rectArea.length=R,n.point.length=f,n.hemi.length=b,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-F,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=P,D.sunLength=m,D.directionalLength=h,D.pointLength=f,D.spotLength=E,D.rectAreaLength=R,D.hemiLength=b,D.numSunShadows=S,D.numDirectionalShadows=C,D.numPointShadows=y,D.numSpotShadows=g,D.numSpotMaps=M,D.numLightProbes=P,n.version=yp++)}function c(l,u){let p=0,d=0,m=0,S=0,A=0,h=0;const f=u.matrixWorldInverse;for(let E=0,R=l.length;E<R;E++){const b=l[E];if(b.isSunLight){const C=n.sun[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(f),p++}else if(b.isDirectionalLight){const C=n.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(b.isSpotLight){const C=n.spot[S];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),S++}else if(b.isRectAreaLight){const C=n.rectArea[A];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(f),a.identity(),s.copy(b.matrixWorld),s.premultiply(f),a.extractRotation(s),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),A++}else if(b.isPointLight){const C=n.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){const C=n.hemi[h];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(f),h++}}}return{setup:o,setupView:c,state:n}}function ho(i){const e=new Rp(i),t=[],n=[],r=[];function s(p){u.camera=p,t.length=0,n.length=0,r.length=0}function a(p){p.isLightProbeGrid?r.push(p):t.push(p)}function o(p){n.push(p)}function c(){e.setup(t),r.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function l(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Cp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ho(i),e.set(r,[o])):s>=a.length?(o=new ho(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ip=`uniform sampler2D shadow_pass;
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
}`,Pp=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Lp=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],po=new rt,xi=new z,jr=new z;function Dp(i,e,t){let n=new xr;const r=new Qe,s=new Qe,a=new it,o=new Vc,c=new Wc,l={},u=t.maxTextureSize,p={[On]:Ct,[Ct]:On,[Wt]:Wt},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:wp,fragmentShader:Ip}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const S=new pn;S.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new en(S,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rr;let f=this.type;this.render=function(y,g,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||y.length===0)return;this.type===xl&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rr);const F=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ii),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Y=f!==this.type;Y&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(X=>X.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,X=y.length;I<X;I++){const Z=y[I],G=Z.shadow;if(G===void 0){Ce("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const W=G.getFrameExtents();r.multiply(W),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,G.mapSize.y=s.y));const B=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=B,G.map===null||Y===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===vi){if(Z.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new $t(r.x,r.y,{format:Fn,type:nn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new oi(r.x,r.y,jt),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=Rn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=vt,G.map.depthTexture.magFilter=vt}else Z.isPointLight?(G.map=new $s(r.x),G.map.depthTexture=new Jo(r.x,tn)):(G.map=new $t(r.x,r.y),G.map.depthTexture=new oi(r.x,r.y,tn)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=Rn,this.type===rr?(G.map.depthTexture.compareFunction=B?No:Do,G.map.depthTexture.minFilter=Rt,G.map.depthTexture.magFilter=Rt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=vt,G.map.depthTexture.magFilter=vt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const V=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Z.isPointLight!==!0&&G.updateMatrices(Z,M);const ee=G.camera.layers.mask&4294967294?G.camera.layers:M.layers;for(let ve=0;ve<V;ve++){const we=G.getCamera(ve);if(Z.isPointLight){const j=G.camera,pe=G.matrix,Se=Z.distance||j.far;Se!==j.far&&(j.far=Se,j.updateProjectionMatrix()),xi.setFromMatrixPosition(Z.matrixWorld),j.position.copy(xi),jr.copy(j.position),jr.add(Pp[ve]),j.up.copy(Lp[ve]),j.lookAt(jr),j.updateMatrixWorld(),pe.makeTranslation(-xi.x,-xi.y,-xi.z),po.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(po,j.coordinateSystem,j.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(G.map),i.clear());const j=G.getViewport(ve);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),H.viewport(a)}n=G.getFrustum(ve),b(g,M,we,Z,ee,this.type)}G.isPointLightShadow!==!0&&this.type===vi&&E(G,M),G.needsUpdate=!1}f=this.type,h.needsUpdate=!1,i.setRenderTarget(F,P,D)};function E(y,g){const M=e.update(A);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null?y.mapPass=new $t(r.x,r.y,{format:Fn,type:nn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(g,null,M,d,A,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value.set(y.map.width,y.map.height),m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(g,null,M,m,A,null)}function R(y,g,M,F){let P=null;const D=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)P=D;else if(P=M.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const H=P.uuid,Y=g.uuid;let I=l[H];I===void 0&&(I={},l[H]=I);let X=I[Y];X===void 0&&(X=P.clone(),I[Y]=X,g.addEventListener("dispose",C)),P=X}if(P.visible=g.visible,P.wireframe=g.wireframe,F===vi?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:p[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const H=i.properties.get(P);H.light=M}return P}function b(y,g,M,F,P,D){if(y.visible===!1)return;if(y.layers.test(P)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&D===vi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const I=e.update(y),X=y.material;if(Array.isArray(X)){const Z=I.groups;for(let G=0,W=Z.length;G<W;G++){const B=Z[G],V=X[B.materialIndex];if(V&&V.visible){const ee=R(y,V,F,D);y.onBeforeShadow(i,y,g,M,I,ee,B),i.renderBufferDirect(M,null,I,ee,y,B),y.onAfterShadow(i,y,g,M,I,ee,B)}}}else if(X.visible){const Z=R(y,X,F,D);y.onBeforeShadow(i,y,g,M,I,Z,null),i.renderBufferDirect(M,null,I,Z,y,null),y.onAfterShadow(i,y,g,M,I,Z,null)}}const Y=y.children;for(let I=0,X=Y.length;I<X;I++)b(Y[I],g,M,F,P,D)}function C(y){y.target.removeEventListener("dispose",C);for(const M in l){const F=l[M],P=y.target.uuid;P in F&&(F[P].dispose(),delete F[P])}}}function Np(i,e){function t(){let T=!1;const K=new it;let Q=null;const oe=new it(0,0,0,0);return{setMask:function(ie){Q!==ie&&!T&&(i.colorMask(ie,ie,ie,ie),Q=ie)},setLocked:function(ie){T=ie},setClear:function(ie,se,Ae,Ue,ne){ne===!0&&(ie*=Ue,se*=Ue,Ae*=Ue),K.set(ie,se,Ae,Ue),oe.equals(K)===!1&&(i.clearColor(ie,se,Ae,Ue),oe.copy(K))},reset:function(){T=!1,Q=null,oe.set(-1,0,0,0)}}}function n(){let T=!1,K=!1,Q=null,oe=null,ie=null;return{setReversed:function(se){if(K!==se){const Ae=e.get("EXT_clip_control");se?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),K=se;const Ue=ie;ie=null,this.setClear(Ue)}},getReversed:function(){return K},setTest:function(se){se?me(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(se){Q!==se&&!T&&(i.depthMask(se),Q=se)},setFunc:function(se){if(K&&(se=jl[se]),oe!==se){switch(se){case Kr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case es:i.depthFunc(i.LESS);break;case Ai:i.depthFunc(i.LEQUAL);break;case ts:i.depthFunc(i.EQUAL);break;case ns:i.depthFunc(i.GEQUAL);break;case is:i.depthFunc(i.GREATER);break;case rs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=se}},setLocked:function(se){T=se},setClear:function(se){ie!==se&&(ie=se,K&&(se=1-se),i.clearDepth(se))},reset:function(){T=!1,Q=null,oe=null,ie=null,K=!1}}}function r(){let T=!1,K=null,Q=null,oe=null,ie=null,se=null,Ae=null,Ue=null,ne=null;return{setTest:function(be){T||(be?me(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(be){K!==be&&!T&&(i.stencilMask(be),K=be)},setFunc:function(be,Ne,fe){(Q!==be||oe!==Ne||ie!==fe)&&(i.stencilFunc(be,Ne,fe),Q=be,oe=Ne,ie=fe)},setOp:function(be,Ne,fe){(se!==be||Ae!==Ne||Ue!==fe)&&(i.stencilOp(be,Ne,fe),se=be,Ae=Ne,Ue=fe)},setLocked:function(be){T=be},setClear:function(be){ne!==be&&(i.clearStencil(be),ne=be)},reset:function(){T=!1,K=null,Q=null,oe=null,ie=null,se=null,Ae=null,Ue=null,ne=null}}}const s=new t,a=new n,o=new r;let c={};const l=new WeakMap;let u={},p={},d={},m=new WeakMap,S=[],A=null,h=!1,f=null,E=null,R=null,b=null,C=null,y=null,g=null,M=new Ve(0,0,0),F=0,P=!1,D=null,H=null,Y=null,I=null,X=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=W>=2);let V=null,ee={};const ve=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),j=new it().fromArray(ve),pe=new it().fromArray(we);function Se(T,K,Q,oe){const ie=new Uint8Array(4),se=i.createTexture();i.bindTexture(T,se),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<Q;Ae++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(K+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return se}const ye={};ye[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Ai),Tt(!1),tt(ga),me(i.CULL_FACE),gt(ii);function me(T){u[T]!==!0&&(i.enable(T),u[T]=!0)}function De(T){u[T]!==!1&&(i.disable(T),u[T]=!1)}function st(T,K){return d[T]!==K?(i.bindFramebuffer(T,K),d[T]=K,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Re(T,K){let Q=S,oe=!1;if(T){Q=m.get(K),Q===void 0&&(Q=[],m.set(K,Q));const ie=T.textures;if(Q.length!==ie.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ae=ie.length;se<Ae;se++)Q[se]=i.COLOR_ATTACHMENT0+se;Q.length=ie.length,oe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,oe=!0);oe&&i.drawBuffers(Q)}function Ye(T){return A!==T?(i.useProgram(T),A=T,!0):!1}const Ze={[ei]:i.FUNC_ADD,[Sl]:i.FUNC_SUBTRACT,[_l]:i.FUNC_REVERSE_SUBTRACT};Ze[Ml]=i.MIN,Ze[El]=i.MAX;const Fe={[Al]:i.ZERO,[bl]:i.ONE,[yl]:i.SRC_COLOR,[mo]:i.SRC_ALPHA,[Pl]:i.SRC_ALPHA_SATURATE,[wl]:i.DST_COLOR,[Rl]:i.DST_ALPHA,[Tl]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[Il]:i.ONE_MINUS_DST_COLOR,[Cl]:i.ONE_MINUS_DST_ALPHA,[Ll]:i.CONSTANT_COLOR,[Dl]:i.ONE_MINUS_CONSTANT_COLOR,[Nl]:i.CONSTANT_ALPHA,[Ul]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(T,K,Q,oe,ie,se,Ae,Ue,ne,be){if(T===ii){h===!0&&(De(i.BLEND),h=!1);return}if(h===!1&&(me(i.BLEND),h=!0),T!==vl){if(T!==f||be!==P){if((E!==ei||C!==ei)&&(i.blendEquation(i.FUNC_ADD),E=ei,C=ei),be)switch(T){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFunc(i.ONE,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",T);break}else switch(T){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xa:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case va:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",T);break}R=null,b=null,y=null,g=null,M.set(0,0,0),F=0,f=T,P=be}return}ie=ie||K,se=se||Q,Ae=Ae||oe,(K!==E||ie!==C)&&(i.blendEquationSeparate(Ze[K],Ze[ie]),E=K,C=ie),(Q!==R||oe!==b||se!==y||Ae!==g)&&(i.blendFuncSeparate(Fe[Q],Fe[oe],Fe[se],Fe[Ae]),R=Q,b=oe,y=se,g=Ae),(Ue.equals(M)===!1||ne!==F)&&(i.blendColor(Ue.r,Ue.g,Ue.b,ne),M.copy(Ue),F=ne),f=T,P=!1}function lt(T,K){T.side===Wt?De(i.CULL_FACE):me(i.CULL_FACE);let Q=T.side===Ct;K&&(Q=!Q),Tt(Q),T.blending===_i&&T.transparent===!1?gt(ii):gt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),s.setMask(T.colorWrite);const oe=T.stencilWrite;o.setTest(oe),oe&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ft(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(T){D!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),D=T)}function tt(T){T!==ml?(me(i.CULL_FACE),T!==H&&(T===ga?i.cullFace(i.BACK):T===gl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),H=T}function Yt(T){T!==Y&&(G&&i.lineWidth(T),Y=T)}function ft(T,K,Q){T?(me(i.POLYGON_OFFSET_FILL),(I!==K||X!==Q)&&(I=K,X=Q,a.getReversed()&&(K=-K,Q=-Q),i.polygonOffset(K,Q))):De(i.POLYGON_OFFSET_FILL)}function Dt(T){T?me(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function Nt(T){T===void 0&&(T=i.TEXTURE0+Z-1),V!==T&&(i.activeTexture(T),V=T)}function Ut(T,K,Q){Q===void 0&&(V===null?Q=i.TEXTURE0+Z-1:Q=V);let oe=ee[Q];oe===void 0&&(oe={type:void 0,texture:void 0},ee[Q]=oe),(oe.type!==T||oe.texture!==K)&&(V!==Q&&(i.activeTexture(Q),V=Q),i.bindTexture(T,K||ye[T]),oe.type=T,oe.texture=K)}function L(){const T=ee[V];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Ot(){try{i.compressedTexImage2D(...arguments)}catch(T){Xe("WebGLState:",T)}}function $e(){try{i.compressedTexImage3D(...arguments)}catch(T){Xe("WebGLState:",T)}}function et(){try{i.texSubImage2D(...arguments)}catch(T){Xe("WebGLState:",T)}}function de(){try{i.texSubImage3D(...arguments)}catch(T){Xe("WebGLState:",T)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(T){Xe("WebGLState:",T)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(T){Xe("WebGLState:",T)}}function Ie(){try{i.texStorage2D(...arguments)}catch(T){Xe("WebGLState:",T)}}function _(){try{i.texStorage3D(...arguments)}catch(T){Xe("WebGLState:",T)}}function x(){try{i.texImage2D(...arguments)}catch(T){Xe("WebGLState:",T)}}function U(){try{i.texImage3D(...arguments)}catch(T){Xe("WebGLState:",T)}}function te(T){return p[T]!==void 0?p[T]:i.getParameter(T)}function $(T,K){p[T]!==K&&(i.pixelStorei(T,K),p[T]=K)}function re(T){j.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),j.copy(T))}function ce(T){pe.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),pe.copy(T))}function J(T,K){let Q=l.get(K);Q===void 0&&(Q=new WeakMap,l.set(K,Q));let oe=Q.get(T);oe===void 0&&(oe=i.getUniformBlockIndex(K,T.name),i.uniformBlockBinding(K,oe,oe),Q.set(T,oe))}function q(T,K,Q){const ie=l.get(K).get(T);c[ie]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,Q),c[ie]=Q)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},V=null,ee={},d={},c={},m=new WeakMap,S=[],A=null,h=!1,f=null,E=null,R=null,b=null,C=null,y=null,g=null,M=new Ve(0,0,0),F=0,P=!1,D=null,H=null,Y=null,I=null,X=null,j.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:De,bindFramebuffer:st,drawBuffers:Re,useProgram:Ye,setBlending:gt,setMaterial:lt,setFlipSided:Tt,setCullFace:tt,setLineWidth:Yt,setPolygonOffset:ft,setScissorTest:Dt,activeTexture:Nt,bindTexture:Ut,unbindTexture:L,compressedTexImage2D:Ot,compressedTexImage3D:$e,texImage2D:x,texImage3D:U,pixelStorei:$,getParameter:te,updateUBOMapping:J,uniformBlockBinding:q,texStorage2D:Ie,texStorage3D:_,texSubImage2D:et,texSubImage3D:de,compressedTexSubImage2D:ct,compressedTexSubImage3D:Te,scissor:re,viewport:ce,reset:ae}}function Up(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,u=new WeakMap,p=new Set;let d;const m=new WeakMap,S=new Set,A=new FinalizationRegistry(_=>S.delete(_));let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(_,x){return h?new OffscreenCanvas(_,x):Ti("canvas")}function E(_,x,U){let te=1;const $=Ie(_);if(($.width>U||$.height>U)&&(te=U/Math.max($.width,$.height)),te<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const re=Math.floor(te*$.width),ce=Math.floor(te*$.height);d===void 0&&(d=f(re,ce));const J=x?f(re,ce):d;return J.width=re,J.height=ce,J.getContext("2d").drawImage(_,0,0,re,ce),Ce("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+re+"x"+ce+")."),J}else return"data"in _&&Ce("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),_;return _}function R(_){return _.generateMipmaps}function b(_){i.generateMipmap(_)}function C(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(_,x,U,te,$,re=!1){if(_!==null){if(i[_]!==void 0)return i[_];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(U===i.FLOAT&&(J=i.R32F),U===i.HALF_FLOAT&&(J=i.R16F),U===i.UNSIGNED_BYTE&&(J=i.R8),U===i.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),U===i.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.R8UI),U===i.UNSIGNED_SHORT&&(J=i.R16UI),U===i.UNSIGNED_INT&&(J=i.R32UI),U===i.BYTE&&(J=i.R8I),U===i.SHORT&&(J=i.R16I),U===i.INT&&(J=i.R32I)),x===i.RG&&(U===i.FLOAT&&(J=i.RG32F),U===i.HALF_FLOAT&&(J=i.RG16F),U===i.UNSIGNED_BYTE&&(J=i.RG8),U===i.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),U===i.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RG8UI),U===i.UNSIGNED_SHORT&&(J=i.RG16UI),U===i.UNSIGNED_INT&&(J=i.RG32UI),U===i.BYTE&&(J=i.RG8I),U===i.SHORT&&(J=i.RG16I),U===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RGB8UI),U===i.UNSIGNED_SHORT&&(J=i.RGB16UI),U===i.UNSIGNED_INT&&(J=i.RGB32UI),U===i.BYTE&&(J=i.RGB8I),U===i.SHORT&&(J=i.RGB16I),U===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),U===i.UNSIGNED_INT&&(J=i.RGBA32UI),U===i.BYTE&&(J=i.RGBA8I),U===i.SHORT&&(J=i.RGBA16I),U===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),U===i.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const q=re?mr:Ge.getTransfer($);U===i.FLOAT&&(J=i.RGBA32F),U===i.HALF_FLOAT&&(J=i.RGBA16F),U===i.UNSIGNED_BYTE&&(J=q===qe?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),U===i.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(_,x){let U;return _?x===null||x===tn||x===ai?U=i.DEPTH24_STENCIL8:x===jt?U=i.DEPTH32F_STENCIL8:x===yi&&(U=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===tn||x===ai?U=i.DEPTH_COMPONENT24:x===jt?U=i.DEPTH_COMPONENT32F:x===yi&&(U=i.DEPTH_COMPONENT16),U}function M(_,x){return R(_)===!0||_.isFramebufferTexture&&_.minFilter!==vt&&_.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?x.mipmaps.length:1}function F(_){const x=new WeakRef(_);n.get(_).__ref=x,S.add(x),A.register(_,x,x)}function P(_){const x=n.get(_).__ref;x!==void 0&&(S.delete(x),A.unregister(x))}function D(_){Y(_.target)}function H(_){I(_.target)}function Y(_){_.removeEventListener("dispose",D),P(_),Z(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&p.delete(_)}function I(_){_.removeEventListener("dispose",H),P(_),W(_)}function X(){for(const _ of S){const x=_.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):Y(x))}S.clear(),p.clear()}function Z(_){const x=n.get(_);if(x.__webglInit===void 0)return;const U=_.source,te=m.get(U);if(te){const $=te[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&G(_),Object.keys(te).length===0&&m.delete(U)}n.remove(_)}function G(_){const x=n.get(_);i.deleteTexture(x.__webglTexture);const U=_.source,te=m.get(U);delete te[x.__cacheKey],a.memory.textures--}function W(_){const x=n.get(_);x.__depthDisposeCallback&&x.__depthDisposeCallback();const U=_.depthTexture;if(U&&U.renderTarget===_&&Y(U),_.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let re=0;re<x.__webglFramebuffer[$].length;re++)i.deleteFramebuffer(x.__webglFramebuffer[$][re]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const te=_.textures;for(let $=0,re=te.length;$<re;$++){const ce=n.get(te[$]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(te[$])}n.remove(_)}let B=0;function V(){B=0}function ee(){return B}function ve(_){B=_}function we(){const _=B;return _>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,_}function j(_){const x=[];return x.push(_.wrapS),x.push(_.wrapT),x.push(_.wrapR||0),x.push(_.magFilter),x.push(_.minFilter),x.push(_.anisotropy),x.push(_.internalFormat),x.push(_.format),x.push(_.type),x.push(_.generateMipmaps),x.push(_.mipmapsAutoUpdate),x.push(_.premultiplyAlpha),x.push(_.flipY),x.push(_.unpackAlignment),x.push(_.colorSpace),x.join()}function pe(_,x){const U=n.get(_);if(_.isVideoTexture&&ct(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&U.__version!==_.version){const te=_.image;if(te===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(U,_,x);return}}else _.isExternalTexture&&(U.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function Se(_,x){const U=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&U.__version!==_.version){lt(U,_,x);return}else _.isExternalTexture&&(U.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function ye(_,x){const U=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&U.__version!==_.version){lt(U,_,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function me(_,x){const U=n.get(_);if(_.version>0&&U.__version!==_.version){Tt(U,_,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const De={[ss]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[as]:i.MIRRORED_REPEAT},st={[vt]:i.NEAREST,[Bl]:i.NEAREST_MIPMAP_NEAREST,[Ni]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[bn]:i.LINEAR_MIPMAP_LINEAR},Re={[zl]:i.NEVER,[Uo]:i.ALWAYS,[Vl]:i.LESS,[Do]:i.LEQUAL,[Wl]:i.EQUAL,[No]:i.GEQUAL,[Xl]:i.GREATER,[Ql]:i.NOTEQUAL};function Ye(_,x){if(x.type===jt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Rt||x.magFilter===Rr||x.magFilter===Ni||x.magFilter===bn||x.minFilter===Rt||x.minFilter===Rr||x.minFilter===Ni||x.minFilter===bn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,De[x.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,De[x.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,De[x.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,st[x.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,st[x.minFilter]),x.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vt||x.minFilter!==Ni&&x.minFilter!==bn||x.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(_,x){let U=!1;_.__webglInit===void 0&&(_.__webglInit=!0,x.addEventListener("dispose",D),F(x));const te=x.source;let $=m.get(te);$===void 0&&($={},m.set(te,$));const re=j(x);if(re!==_.__cacheKey){$[re]===void 0&&($[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[re].usedTimes++;const ce=$[_.__cacheKey];ce!==void 0&&($[_.__cacheKey].usedTimes--,ce.usedTimes===0&&G(x)),_.__cacheKey=re,_.__webglTexture=$[re].texture}return U}function Fe(_,x,U){return Math.floor(Math.floor(_/U)/x)}function gt(_,x,U,te){const re=_.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,te,x.data);else{re.sort((T,K)=>T.start-K.start);let ce=0;for(let T=1;T<re.length;T++){const K=re[ce],Q=re[T],oe=K.start+K.count,ie=Fe(Q.start,x.width,4),se=Fe(K.start,x.width,4);Q.start<=oe+1&&ie===se&&Fe(Q.start+Q.count-1,x.width,4)===ie?K.count=Math.max(K.count,Q.start+Q.count-K.start):(++ce,re[ce]=Q)}re.length=ce+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),q=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let T=0,K=re.length;T<K;T++){const Q=re[T],oe=Math.floor(Q.start/4),ie=Math.ceil(Q.count/4),se=oe%x.width,Ae=Math.floor(oe/x.width),Ue=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(i.TEXTURE_2D,0,se,Ae,Ue,ne,U,te,x.data)}_.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function lt(_,x,U){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);const $=Ze(_,x),re=x.source;t.bindTexture(te,_.__webglTexture,i.TEXTURE0+U);const ce=n.get(re);if(re.version!==ce.__version||$===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ne=Ge.getPrimaries(Ge.workingColorSpace),be=x.colorSpace===An?null:Ge.getPrimaries(x.colorSpace),Ne=x.colorSpace===An||ne===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let q=E(x.image,!1,r.maxTextureSize);q=Te(x,q);const ae=s.convert(x.format,x.colorSpace),T=s.convert(x.type);let K=y(x.internalFormat,ae,T,x.normalized,x.colorSpace,x.isVideoTexture);Ye(te,x);let Q;const oe=x.mipmaps,ie=x.isVideoTexture!==!0,se=ce.__version===void 0||$===!0,Ae=re.dataReady,Ue=M(x,q);if(x.isDepthTexture)K=g(x.format===yn,x.type),se&&(ie?t.texStorage2D(i.TEXTURE_2D,1,K,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,K,q.width,q.height,0,ae,T,null));else if(x.isDataTexture)if(oe.length>0){ie&&se&&t.texStorage2D(i.TEXTURE_2D,Ue,K,oe[0].width,oe[0].height);for(let ne=0,be=oe.length;ne<be;ne++)Q=oe[ne],ie?Ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Q.width,Q.height,ae,T,Q.data):t.texImage2D(i.TEXTURE_2D,ne,K,Q.width,Q.height,0,ae,T,Q.data);x.generateMipmaps=!1}else ie?(se&&t.texStorage2D(i.TEXTURE_2D,Ue,K,q.width,q.height),Ae&&gt(x,q,ae,T)):t.texImage2D(i.TEXTURE_2D,0,K,q.width,q.height,0,ae,T,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ie&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,K,oe[0].width,oe[0].height,q.depth);for(let ne=0,be=oe.length;ne<be;ne++)if(Q=oe[ne],x.format!==Kt)if(ae!==null)if(ie){if(Ae)if(x.layerUpdates.size>0){const Ne=Qa(Q.width,Q.height,x.format,x.type);for(const fe of x.layerUpdates){const Je=Q.data.subarray(fe*Ne/Q.data.BYTES_PER_ELEMENT,(fe+1)*Ne/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,fe,Q.width,Q.height,1,ae,Je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Q.width,Q.height,q.depth,ae,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,K,Q.width,Q.height,q.depth,0,Q.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Q.width,Q.height,q.depth,ae,T,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,K,Q.width,Q.height,q.depth,0,ae,T,Q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ie&&se&&t.texStorage2D(i.TEXTURE_2D,Ue,K,oe[0].width,oe[0].height);for(let ne=0,be=oe.length;ne<be;ne++)Q=oe[ne],x.format!==Kt?ae!==null?ie?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Q.width,Q.height,ae,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,K,Q.width,Q.height,0,Q.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Q.width,Q.height,ae,T,Q.data):t.texImage2D(i.TEXTURE_2D,ne,K,Q.width,Q.height,0,ae,T,Q.data)}else if(x.isDataArrayTexture)if(ie){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,K,q.width,q.height,q.depth),Ae)if(x.layerUpdates.size>0){const ne=Qa(q.width,q.height,x.format,x.type);for(const be of x.layerUpdates){const Ne=q.data.subarray(be*ne/q.data.BYTES_PER_ELEMENT,(be+1)*ne/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,q.width,q.height,1,ae,T,Ne)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ae,T,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,q.width,q.height,q.depth,0,ae,T,q.data);else if(x.isData3DTexture)ie?(se&&t.texStorage3D(i.TEXTURE_3D,Ue,K,q.width,q.height,q.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ae,T,q.data)):t.texImage3D(i.TEXTURE_3D,0,K,q.width,q.height,q.depth,0,ae,T,q.data);else if(x.isFramebufferTexture){if(se)if(ie)t.texStorage2D(i.TEXTURE_2D,Ue,K,q.width,q.height);else{let ne=q.width,be=q.height;for(let Ne=0;Ne<Ue;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,K,ne,be,0,ae,T,null),ne>>=1,be>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),q.parentNode!==ne){ne.appendChild(q),p.add(x),ne.onpaint=be=>{const Ne=be.changedElements;for(const fe of p)Ne.includes(fe.image)&&(fe.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{const Ne=i.RGBA,fe=i.RGBA,Je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,fe,Je,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&se){const ne=Ie(oe[0]);t.texStorage2D(i.TEXTURE_2D,Ue,K,ne.width,ne.height)}for(let ne=0,be=oe.length;ne<be;ne++)Q=oe[ne],ie?Ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,T,Q):t.texImage2D(i.TEXTURE_2D,ne,K,ae,T,Q);x.generateMipmaps=!1}else if(ie){if(se){const ne=Ie(q);t.texStorage2D(i.TEXTURE_2D,Ue,K,ne.width,ne.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,T,q)}else t.texImage2D(i.TEXTURE_2D,0,K,ae,T,q);R(x)&&x.mipmapsAutoUpdate===!0&&b(te),ce.__version=re.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function Tt(_,x,U){if(x.image.length!==6)return;const te=Ze(_,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+U);const re=n.get($);if($.version!==re.__version||te===!0){t.activeTexture(i.TEXTURE0+U);const ce=Ge.getPrimaries(Ge.workingColorSpace),J=x.colorSpace===An?null:Ge.getPrimaries(x.colorSpace),q=x.colorSpace===An||ce===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const ae=x.isCompressedTexture||x.image[0].isCompressedTexture,T=x.image[0]&&x.image[0].isDataTexture,K=[];for(let fe=0;fe<6;fe++)!ae&&!T?K[fe]=E(x.image[fe],!0,r.maxCubemapSize):K[fe]=T?x.image[fe].image:x.image[fe],K[fe]=Te(x,K[fe]);const Q=K[0],oe=s.convert(x.format,x.colorSpace),ie=s.convert(x.type);let se=y(x.internalFormat,oe,ie,x.normalized,x.colorSpace);const Ae=x.isVideoTexture!==!0,Ue=re.__version===void 0||te===!0,ne=$.dataReady;let be=M(x,Q);Ye(i.TEXTURE_CUBE_MAP,x);let Ne;if(x.isDepthTexture){if(se=g(x.format===yn,x.type),Ue)if(Ae)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,se,Q.width,Q.height);else for(let fe=0;fe<6;fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,se,Q.width,Q.height,0,oe,ie,null)}else if(ae){Ae&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,se,Q.width,Q.height);for(let fe=0;fe<6;fe++){Ne=K[fe].mipmaps;for(let Je=0;Je<Ne.length;Je++){const ht=Ne[Je];x.format!==Kt?oe!==null?Ae?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je,0,0,ht.width,ht.height,oe,ht.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je,se,ht.width,ht.height,0,ht.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je,0,0,ht.width,ht.height,oe,ie,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je,se,ht.width,ht.height,0,oe,ie,ht.data)}}}else{if(Ne=x.mipmaps,Ae&&Ue){Ne.length>0&&be++;const fe=Ie(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,se,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(T){Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,K[fe].width,K[fe].height,oe,ie,K[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,se,K[fe].width,K[fe].height,0,oe,ie,K[fe].data);for(let Je=0;Je<Ne.length;Je++){const mn=Ne[Je].image[fe].image;Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je+1,0,0,mn.width,mn.height,oe,ie,mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je+1,se,mn.width,mn.height,0,oe,ie,mn.data)}}else{Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,oe,ie,K[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,se,oe,ie,K[fe]);for(let Je=0;Je<Ne.length;Je++){const ht=Ne[Je];Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je+1,0,0,oe,ie,ht.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je+1,se,oe,ie,ht.image[fe])}}}R(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),re.__version=$.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function tt(_,x,U,te,$,re){const ce=s.convert(U.format,U.colorSpace),J=s.convert(U.type),q=y(U.internalFormat,ce,J,U.normalized,U.colorSpace),ae=n.get(x),T=n.get(U);if(T.__renderTarget=x,!ae.__hasExternalTextures){const K=Math.max(1,x.width>>re),Q=Math.max(1,x.height>>re);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,re,q,K,Q,x.depth,0,ce,J,null):t.texImage2D($,re,q,K,Q,0,ce,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,T.__webglTexture,0,et(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,$,T.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(_,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,_),x.depthBuffer){const te=x.depthTexture,$=te&&te.isDepthTexture?te.type:null,re=g(x.stencilBuffer,$),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(x),re,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(x),re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,_)}else{const te=x.textures;for(let $=0;$<te.length;$++){const re=te[$],ce=s.convert(re.format,re.colorSpace),J=s.convert(re.type),q=y(re.internalFormat,ce,J,re.normalized,re.colorSpace);de(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(x),q,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(_,x,U){const te=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(x.depthTexture);$.__renderTarget=x;const re=te?x.depthTexture.image[0]:x.depthTexture.image;(!$.__webglTexture||re.width!==x.width||re.height!==x.height)&&(re.width=x.width,re.height=x.height,x.depthTexture.needsUpdate=!0),te?me(x.depthTexture,0):pe(x.depthTexture,0);const ce=$.__webglTexture,J=et(x),q=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,ae=x.depthTexture.format===yn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Rn)de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,q,ce,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ae,q,ce,0);else if(x.depthTexture.format===yn)de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,q,ce,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ae,q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(_){const x=n.get(_),U=_.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==_.depthTexture){const te=_.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",$)};te.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=te}if(_.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let te=0;te<6;te++)ft(x.__webglFramebuffer[te],_,te);else _.texture.mipmaps.length>0?ft(x.__webglFramebuffer[0],_,0):ft(x.__webglFramebuffer,_,0);else if(U){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),Yt(x.__webglDepthbuffer[te],_,!1);else{const $=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}}else if(_.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Yt(x.__webglDepthbuffer,_,!1);else{const $=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(_,x,U){const te=n.get(_);x!==void 0&&tt(te.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Dt(_)}function Ut(_){const x=_.texture,U=n.get(_),te=n.get(x);_.addEventListener("dispose",H),F(_);const $=_.textures,re=_.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,a.memory.textures++),re){U.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){U.__webglFramebuffer[J]=[];for(let q=0;q<x.mipmaps.length;q++)U.__webglFramebuffer[J][q]=i.createFramebuffer()}else U.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps.length>0){U.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)U.__webglFramebuffer[J]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ce)for(let J=0,q=$.length;J<q;J++){const ae=n.get($[J]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(_.samples>0&&de(_)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const q=$[J];U.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[J]);const ae=s.convert(q.format,q.colorSpace),T=s.convert(q.type),K=y(q.internalFormat,ae,T,q.normalized,q.colorSpace,_.isXRRenderTarget===!0),Q=et(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,U.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(U.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)tt(U.__webglFramebuffer[J][q],_,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,q);else tt(U.__webglFramebuffer[J],_,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);R(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let J=0,q=$.length;J<q;J++){const ae=$[J],T=n.get(ae);let K=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(K=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,T.__webglTexture),Ye(K,ae),tt(U.__webglFramebuffer,_,ae,i.COLOR_ATTACHMENT0+J,K,0),R(ae)&&b(K)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(J=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,te.__webglTexture),Ye(J,x),x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)tt(U.__webglFramebuffer[q],_,x,i.COLOR_ATTACHMENT0,J,q);else tt(U.__webglFramebuffer,_,x,i.COLOR_ATTACHMENT0,J,0);R(x)?b(J):x.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}_.depthBuffer&&Dt(_)}function L(_){const x=_.textures;for(let U=0,te=x.length;U<te;U++){const $=x[U];if(R($)&&$.mipmapsAutoUpdate===!0){const re=C(_),ce=n.get($).__webglTexture;t.bindTexture(re,ce),b(re),t.unbindTexture()}}}const Ot=[];function $e(_){if(_.samples>0){if(de(_)===!1){const x=_.textures,U=_.width,te=_.height;let $=i.COLOR_BUFFER_BIT;const re=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(_),J=x.length>1;if(J)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),_.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(_.resolveDepthBuffer&&(_.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const T=n.get(x[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,T,0)}i.blitFramebuffer(0,0,U,te,0,0,U,te,$,i.NEAREST),c===!0&&(Ot.length=0,Ot.push(i.COLOR_ATTACHMENT0+ae),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&Ot.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const T=n.get(x[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,T,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&c){const x=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function et(_){return Math.min(r.maxSamples,_.samples)}function de(_){const x=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(_){const x=a.render.frame;u.get(_)!==x&&(u.set(_,x),_.update())}function Te(_,x){const U=_.colorSpace,te=_.format,$=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||U!==pr&&U!==An&&(Ge.getTransfer(U)===qe?(te!==Kt||$!==Bt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",U)),x}function Ie(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(l.width=_.naturalWidth||_.width,l.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(l.width=_.displayWidth,l.height=_.displayHeight):(l.width=_.width,l.height=_.height),l}this.allocateTextureUnit=we,this.resetTextureUnits=V,this.getTextureUnits=ee,this.setTextureUnits=ve,this.setTexture2D=pe,this.setTexture2DArray=Se,this.setTexture3D=ye,this.setTextureCube=me,this.rebindTextures=Nt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=de,this.dispose=X}function Op(i,e){function t(n,r=An){let s;const a=Ge.getTransfer(r);if(n===Bt)return i.UNSIGNED_BYTE;if(n===zs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Co)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===To)return i.BYTE;if(n===Ro)return i.SHORT;if(n===yi)return i.UNSIGNED_SHORT;if(n===Gs)return i.INT;if(n===tn)return i.UNSIGNED_INT;if(n===jt)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===Io)return i.ALPHA;if(n===Po)return i.RGB;if(n===Kt)return i.RGBA;if(n===Rn)return i.DEPTH_COMPONENT;if(n===yn)return i.DEPTH_STENCIL;if(n===Lo)return i.RED;if(n===Ws)return i.RED_INTEGER;if(n===Fn)return i.RG;if(n===Xs)return i.RG_INTEGER;if(n===Qs)return i.RGBA_INTEGER;if(n===sr||n===ar||n===or||n===lr)if(a===qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===os||n===ls||n===cs||n===us)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===os)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ls)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===us)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ds||n===fs||n===hs||n===ps||n===ms||n===fr||n===gs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ds||n===fs)return a===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===hs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ps)return s.COMPRESSED_R11_EAC;if(n===ms)return s.COMPRESSED_SIGNED_R11_EAC;if(n===fr)return s.COMPRESSED_RG11_EAC;if(n===gs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xs||n===vs||n===Ss||n===_s||n===Ms||n===Es||n===As||n===bs||n===ys||n===Ts||n===Rs||n===Cs||n===ws||n===Is)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ss)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_s)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ms)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Es)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===As)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ys)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ts)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ws)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Is)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===Ls||n===Ds)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ps)return a===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ls)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ds)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ns||n===Us||n===hr||n===Os)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ns)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Us)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Os)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bp=`
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

}`;class Hp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hn({vertexShader:Fp,fragmentShader:Bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kp extends kn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,d=null,m=null,S=null;const A=typeof XRWebGLBinding<"u",h=new Hp,f={},E=t.getContextAttributes();let R=null,b=null;const C=[],y=[],g=new Qe;let M=null,F=null;const P=new Vt;P.viewport=new it;const D=new Vt;D.viewport=new it;const H=[P,D],Y=new Zc;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pe=C[j];return pe===void 0&&(pe=new Nr,C[j]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(j){let pe=C[j];return pe===void 0&&(pe=new Nr,C[j]=pe),pe.getGripSpace()},this.getHand=function(j){let pe=C[j];return pe===void 0&&(pe=new Nr,C[j]=pe),pe.getHandSpace()};function Z(j){const pe=y.indexOf(j.inputSource);if(pe===-1)return;const Se=C[pe];Se!==void 0&&(Se.update(j.inputSource,j.frame,l||a),Se.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",W);for(let j=0;j<C.length;j++){const pe=y[j];pe!==null&&(y[j]=null,C[j].disconnect(pe))}I=null,X=null,h.reset();for(const j in f)delete f[j];if(e.setRenderTarget(R),m=null,d=null,p=null,r=null,b=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(g.width,g.height,!1),F!==null){const j=F.camera;j.fov=F.fov,j.zoom=F.zoom,j.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",G),r.addEventListener("inputsourceschange",W),E.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(g),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ye=null,me=null;E.depth&&(me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=E.stencil?yn:Rn,ye=E.stencil?ai:tn);const De={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new $t(d.textureWidth,d.textureHeight,{format:Kt,type:Bt,depthTexture:new oi(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new $t(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function W(j){for(let pe=0;pe<j.removed.length;pe++){const Se=j.removed[pe],ye=y.indexOf(Se);ye>=0&&(y[ye]=null,C[ye].disconnect(Se))}for(let pe=0;pe<j.added.length;pe++){const Se=j.added[pe];let ye=y.indexOf(Se);if(ye===-1){for(let De=0;De<C.length;De++)if(De>=y.length){y.push(Se),ye=De;break}else if(y[De]===null){y[De]=Se,ye=De;break}if(ye===-1)break}const me=C[ye];me&&me.connect(Se)}}function B(j,pe){pe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let pe=j.near,Se=j.far;h.texture!==null&&(h.depthNear>0&&(pe=h.depthNear),h.depthFar>0&&(Se=h.depthFar)),Y.near=D.near=P.near=pe,Y.far=D.far=P.far=Se,(I!==Y.near||X!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),I=Y.near,X=Y.far),Y.layers.mask=j.layers.mask|6,P.layers.mask=Y.layers.mask&-5,D.layers.mask=Y.layers.mask&-3;const ye=j.parent,me=Y.cameras;B(Y,ye);for(let De=0;De<me.length;De++)B(me[De],ye);Y.projectionMatrix.copy(P.projectionMatrix),Y.projectionMatrixInverse.copy(P.projectionMatrixInverse),F===null&&j.isPerspectiveCamera&&(F={camera:j,fov:j.fov,zoom:j.zoom}),V(j,Y,ye)};function V(j,pe,Se){Se===null?j.matrix.copy(pe.matrixWorld):(j.matrix.copy(Se.matrixWorld),j.matrix.invert(),j.matrix.multiply(pe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pe.projectionMatrix),j.projectionMatrixInverse.copy(pe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ri*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(Y)},this.getCameraTexture=function(j){return f[j]};let ee=null;function ve(j,pe){if(u=pe.getViewerPose(l||a),S=pe,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ye=!1;Se.length!==Y.cameras.length&&(Y.cameras.length=0,ye=!0);for(let Re=0;Re<Se.length;Re++){const Ye=Se[Re];let Ze=null;if(m!==null)Ze=m.getViewport(Ye);else{const gt=p.getViewSubImage(d,Ye);Ze=gt.viewport,Re===0&&(e.setRenderTargetTextures(b,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(b))}let Fe=H[Re];Fe===void 0&&(Fe=new Vt,Fe.layers.enable(Re),Fe.viewport=new it,H[Re]=Fe),Fe.matrix.fromArray(Ye.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ye.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Re===0&&(Y.matrix.copy(Fe.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ye===!0&&Y.cameras.push(Fe)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){p=n.getBinding();const Re=p.getDepthInformation(Se[0]);Re&&Re.isValid&&Re.texture&&h.init(Re,r.renderState)}if(me&&me.includes("camera-access")&&A){e.state.unbindTexture(),p=n.getBinding();for(let Re=0;Re<Se.length;Re++){const Ye=Se[Re].camera;if(Ye){let Ze=f[Ye];Ze||(Ze=new qo,f[Ye]=Ze);const Fe=p.getCameraImage(Ye);Ze.sourceTexture=Fe}}}}for(let Se=0;Se<C.length;Se++){const ye=y[Se],me=C[Se];ye!==null&&me!==void 0&&me.update(ye,pe,l||a)}ee&&ee(j,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),S=null}const we=new Ko;we.setAnimationLoop(ve),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}}const Gp=new rt,ll=new Pe;ll.set(-1,0,0,0,1,0,0,0,1);function zp(i,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function n(h,f){f.color.getRGB(h.fogColor.value,Zo(i)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,E,R,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(h,f):f.isMeshLambertMaterial?(s(h,f),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(h,f),p(h,f)):f.isMeshPhongMaterial?(s(h,f),u(h,f),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(h,f),d(h,f),f.isMeshPhysicalMaterial&&m(h,f,b)):f.isMeshMatcapMaterial?(s(h,f),S(h,f)):f.isMeshDepthMaterial?s(h,f):f.isMeshDistanceMaterial?(s(h,f),A(h,f)):f.isMeshNormalMaterial?s(h,f):f.isLineBasicMaterial?(a(h,f),f.isLineDashedMaterial&&o(h,f)):f.isPointsMaterial?c(h,f,E,R):f.isSpriteMaterial?l(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Ct&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Ct&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const E=e.get(f),R=E.envMap,b=E.envMapRotation;R&&(h.envMap.value=R,h.envMapRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(ll),h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function a(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function o(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function c(h,f,E,R){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*E,h.scale.value=R*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function l(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function p(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function d(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function m(h,f,E){h.ior.value=f.ior,f.diffuseRoughness>0&&(h.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.retroreflectivity>0&&(h.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function S(h,f){f.matcap&&(h.matcap.value=f.matcap)}function A(h,f){const E=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Vp(i,e,t,n){let r={},s={};function a(E,R){const b=R.program;n.uniformBlockBinding(E,b,r[E.id])}function o(E,R){let b=r[E.id];b===void 0&&(S(E),b=c(E),r[E.id]=b,E.addEventListener("dispose",h));const C=R.program;n.updateUBOMapping(E,C);const y=e.render.frame;s[E.id]!==y&&(l(E),s[E.id]=y)}function c(E){const R=i.createBuffer(),b=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,b,C),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function l(E){const R=r[E.id],b=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let y=0,g=b.length;y<g;y++){const M=b[y];if(Array.isArray(M))for(let F=0,P=M.length;F<P;F++)u(M[F],y,F,C);else u(M,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(E,R,b,C){if(d(E,R,b,C)===!0){const y=E.__offset,g=E.value;if(Array.isArray(g)){let M=0;for(let F=0;F<g.length;F++){const P=g[F],D=A(P,!0);p(P,E.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,E.__data)}}function p(E,R,b){typeof E=="number"||typeof E=="boolean"?R[b]=E:E.isMatrix3?(R[b]=E.elements[0],R[b+1]=E.elements[1],R[b+2]=E.elements[2],R[b+3]=0,R[b+4]=E.elements[3],R[b+5]=E.elements[4],R[b+6]=E.elements[5],R[b+7]=0,R[b+8]=E.elements[6],R[b+9]=E.elements[7],R[b+10]=E.elements[8],R[b+11]=0):ArrayBuffer.isView(E)?R.set(E.subarray(0,R.length-b),b):E.toArray(R,b)}function d(E,R,b,C){const y=E.value,g=R+"_"+b;if(Array.isArray(y)){C[g]===void 0&&(C[g]=[]);const M=C[g];let F=!1;for(let P=0;P<y.length;P++)m(y[P],M,P)===!0&&(F=!0);return F}return m(y,C,g)}function m(E,R,b){if(R[b]===void 0)return typeof E=="number"||typeof E=="boolean"?R[b]=E:ArrayBuffer.isView(E)?R[b]=E.slice():R[b]=E.clone(),!0;{const C=R[b];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[b]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(C.equals(E)===!1)return C.copy(E),!0}}return!1}function S(E){const R=E.uniforms;let b=0;const C=16;for(let g=0,M=R.length;g<M;g++){const F=Array.isArray(R[g])?R[g]:[R[g]];for(let P=0,D=F.length;P<D;P++){const H=F[P],Y=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(R[g])||Array.isArray(H.value);let X=b;for(let G=0,W=Y.length;G<W;G++){const B=Y[G],V=A(B,I),ee=b%C,ve=ee%V.boundary,we=ee+ve;b+=ve,we!==0&&C-we<V.storage&&(b+=C-we),G===0&&(X=b),b+=V.storage}const Z=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new Z((b-X)/Float32Array.BYTES_PER_ELEMENT),H.__offset=X}}const y=b%C;return y>0&&(b+=C-y),E.__size=b,E.__cache={},this}function A(E,R){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=16,b.storage=48):E.isMatrix4?(b.boundary=16,b.storage=64):E.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(b.boundary=16,b.storage=E.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",E),R===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function h(E){const R=E.target;R.removeEventListener("dispose",h),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function f(){for(const E in r)i.deleteBuffer(r[E]);r={},s={}}return{bind:a,update:o,dispose:f}}const Wp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qt=null;function Xp(){return qt===null&&(qt=new Uc(Wp,16,16,Fn,nn),qt.name="DFG_LUT",qt.minFilter=Rt,qt.magFilter=Rt,qt.wrapS=un,qt.wrapT=un,qt.generateMipmaps=!1,qt.needsUpdate=!0),qt}class Qp{constructor(e={}){const{canvas:t=ql(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Bt}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;const A=m,h=new Set([Qs,Xs,Ws]),f=new Set([Bt,tn,yi,ai,zs,Vs]),E=new Uint32Array(4),R=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let C=null,y=null;const g=[],M=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,H=null,Y=null,I=null,X=null;this._outputColorSpace=Lt;let Z=0,G=0,W=null,B=-1,V=null;const ee=new it,ve=new it;let we=null;const j=new Ve(0);let pe=0,Se=t.width,ye=t.height,me=1,De=null,st=null;const Re=new it(0,0,Se,ye),Ye=new it(0,0,Se,ye);let Ze=!1;const Fe=new xr,gt=new js;let lt=!1,Tt=!1;const tt=new rt,Yt=new z,ft=new it,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Ut(){return W===null?me:1}let L=n;function Ot(v,w){return t.getContext(v,w)}let $e,et,de,ct,Te,Ie,_,x,U,te,$,re,ce,J,q,ae,T,K,Q,oe,ie,se,Ae;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ks}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const w="webgl2";if(L=Ot(w,v),L===null)throw Ot(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(v){throw t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Xe("WebGLRenderer: "+v.message),v}function Ue(){$e=new qf(L),$e.init(),ie=new Op(L,$e),et=new Bf(L,$e,e,ie),de=new Np(L,$e),et.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),Y=L.createFramebuffer(),I=L.createFramebuffer(),X=L.createFramebuffer(),ct=new Kf(L),Te=new _p,Ie=new Up(L,$e,de,Te,et,ie,ct),_=new Jf(P),x=new $c(L),se=new Of(L,x),U=new Zf(L,x,ct,se),te=new eh(L,U,x,se,ct),K=new $f(L,et,Ie),q=new Hf(Te),$=new Sp(P,_,$e,et,se,q),re=new zp(P,Te),ce=new Ep,J=new Cp($e),T=new Uf(P,_,de,te,S,c),ae=new Dp(P,te,et),Ae=new Vp(L,ct,et,de),Q=new Ff(L,$e,ct),oe=new jf(L,$e,ct),ct.programs=$.programs,P.capabilities=et,P.extensions=$e,P.properties=Te,P.renderLists=ce,P.shadowMap=ae,P.state=de,P.info=ct}A!==Bt&&(F=new nh(A,t.width,t.height,o,r,s));const ne=new kp(P,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=$e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=$e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(v){v!==void 0&&(me=v,this.setSize(Se,ye,!1))},this.getSize=function(v){return v.set(Se,ye)},this.setSize=function(v,w,k=!0){if(ne.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=v,ye=w,t.width=Math.floor(v*me),t.height=Math.floor(w*me),k===!0&&(t.style.width=v+"px",t.style.height=w+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,v,w)},this.getDrawingBufferSize=function(v){return v.set(Se*me,ye*me).floor()},this.setDrawingBufferSize=function(v,w,k){Se=v,ye=w,me=k,t.width=Math.floor(v*k),t.height=Math.floor(w*k),this.setViewport(0,0,v,w)},this.setEffects=function(v){if(A===Bt){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let w=0;w<v.length;w++)if(v[w].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(Re)},this.setViewport=function(v,w,k,N){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,w,k,N),de.viewport(ee.copy(Re).multiplyScalar(Ut()).round())},this.getScissor=function(v){return v.copy(Ye)},this.setScissor=function(v,w,k,N){v.isVector4?Ye.set(v.x,v.y,v.z,v.w):Ye.set(v,w,k,N),de.scissor(ve.copy(Ye).multiplyScalar(Ut()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(v){de.setScissorTest(Ze=v)},this.setOpaqueSort=function(v){De=v},this.setTransparentSort=function(v){st=v},this.getClearColor=function(v){return v.copy(T.getClearColor())},this.setClearColor=function(){T.setClearColor(...arguments)},this.getClearAlpha=function(){return T.getClearAlpha()},this.setClearAlpha=function(){T.setClearAlpha(...arguments)},this.clear=function(v=!0,w=!0,k=!0){let N=0;if(v){let O=!1;if(W!==null){const ue=W.texture.format;O=h.has(ue)}if(O){const ue=W.texture.type,xe=f.has(ue),le=T.getClearColor(),ge=T.getClearAlpha(),Ee=le.r,Le=le.g,Be=le.b;xe?(E[0]=Ee,E[1]=Le,E[2]=Be,E[3]=ge,L.clearBufferuiv(L.COLOR,0,E)):(R[0]=Ee,R[1]=Le,R[2]=Be,R[3]=ge,L.clearBufferiv(L.COLOR,0,R))}else N|=L.COLOR_BUFFER_BIT}w&&(N|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(N|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&L.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),H=v},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),T.dispose(),ce.dispose(),J.dispose(),Ie.dispose(),Te.dispose(),_.dispose(),te.dispose(),U.dispose(),se.dispose(),Ae.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",sa),ne.removeEventListener("sessionend",aa),Cn.stop()};function be(v){v.preventDefault(),Ea("WebGLRenderer: Context Lost."),D=!0}function Ne(){Ea("WebGLRenderer: Context Restored."),D=!1;const v=ct.autoReset,w=ae.enabled,k=ae.autoUpdate,N=ae.needsUpdate,O=ae.type;Ue(),ct.autoReset=v,ae.enabled=w,ae.autoUpdate=k,ae.needsUpdate=N,ae.type=O}function fe(v){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Je(v){const w=v.target;w.removeEventListener("dispose",Je),ht(w)}function ht(v){mn(v),Te.remove(v)}function mn(v){const w=Te.get(v).programs;w!==void 0&&(w.forEach(function(k){$.releaseProgram(k)}),v.isShaderMaterial&&$.releaseShaderCache(v))}this.renderBufferDirect=function(v,w,k,N,O,ue){w===null&&(w=Dt);const xe=O.isMesh&&O.matrixWorld.determinantAffine()<0,le=dl(v,w,k,N,O);de.setMaterial(N,xe);let ge=k.index,Ee=1;if(N.wireframe===!0){if(ge=U.getWireframeAttribute(k),ge===void 0)return;Ee=2}const Le=k.drawRange,Be=k.attributes.position;let _e=Le.start*Ee,He=(Le.start+Le.count)*Ee;ue!==null&&(_e=Math.max(_e,ue.start*Ee),He=Math.min(He,(ue.start+ue.count)*Ee)),ge!==null?(_e=Math.max(_e,0),He=Math.min(He,ge.count)):Be!=null&&(_e=Math.max(_e,0),He=Math.min(He,Be.count));const at=He-_e;if(at<0||at===1/0)return;se.setup(O,N,le,k,ge);let Ke,je=Q;if(ge!==null&&(Ke=x.get(ge),je=oe,je.setIndex(Ke)),O.isMesh)N.wireframe===!0?(de.setLineWidth(N.wireframeLinewidth*Ut()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(O.isLine){let _t=N.linewidth;_t===void 0&&(_t=1),de.setLineWidth(_t*Ut()),O.isLineSegments?je.setMode(L.LINES):O.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else O.isPoints?je.setMode(L.POINTS):O.isSprite&&je.setMode(L.TRIANGLES);if(O.isBatchedMesh)if($e.get("WEBGL_multi_draw"))je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const _t=O._multiDrawStarts,Me=O._multiDrawCounts,bt=O._multiDrawCount,We=ge?x.get(ge).bytesPerElement:1,wn=Te.get(N).currentProgram.getUniforms();for(let Mt=0;Mt<bt;Mt++)wn.setValue(L,"_gl_DrawID",Mt),je.render(_t[Mt]/We,Me[Mt])}else if(O.isInstancedMesh)je.renderInstances(_e,at,O.count);else if(k.isInstancedBufferGeometry){const _t=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,_t);je.renderInstances(_e,at,Me)}else je.render(_e,at)};function ra(v,w,k,N){H!==null&&v.isNodeMaterial&&H.setObject(N,v),lt===!0&&q.setState(v,k,!1),v.transparent===!0&&v.side===Wt&&v.forceSinglePass===!1?(v.side=Ct,v.needsUpdate=!0,fi(v,w,N),v.side=On,v.needsUpdate=!0,fi(v,w,N),v.side=Wt):fi(v,w,N)}this.compile=function(v,w,k=null){k===null&&(k=v),H!==null&&H.renderStart(v,w,k),y=J.get(k),y.init(w),M.push(y),k.traverseVisible(function(O){O.isLight&&O.layers.test(w.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),v!==k&&v.traverseVisible(function(O){O.isLight&&O.layers.test(w.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),y.setupLights(),H!==null&&H.updateLights(y.state.lightsArray),Tt=this.localClippingEnabled,lt=q.init(this.clippingPlanes,Tt),lt===!0&&q.setGlobalState(this.clippingPlanes,w),H!==null&&ae.render(y.state.shadowsArray,k,w);const N=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const le=ue[xe];ra(le,k,w,O),N.add(le)}else ra(ue,k,w,O),N.add(ue)}),y=M.pop(),H!==null&&H.renderEnd(),N},this.compileAsync=function(v,w,k=null){const N=this.compile(v,w,k);return new Promise(O=>{function ue(){if(N.forEach(function(xe){const ge=Te.get(xe).currentProgram;(ge===void 0||ge.isReady())&&N.delete(xe)}),N.size===0){O(v);return}setTimeout(ue,10)}$e.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ar=null;function cl(v){Ar&&Ar(v)}function sa(){Cn.stop()}function aa(){Cn.start()}const Cn=new Ko;Cn.setAnimationLoop(cl),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(v){Ar=v,ne.setAnimationLoop(v),v===null?Cn.stop():Cn.start()},ne.addEventListener("sessionstart",sa),ne.addEventListener("sessionend",aa),this.render=function(v,w){if(w!==void 0&&w.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(v,w);const k=ne.enabled===!0&&ne.isPresenting===!0,N=F!==null&&(W===null||k)&&F.begin(P,W);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(w),w=ne.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,w,W),y=J.get(v,M.length),y.init(w),y.state.textureUnits=Ie.getTextureUnits(),M.push(y),tt.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.isArrayCamera?gt.setFromArrayCamera(w):Fe.setFromProjectionMatrix(tt,Qt,w.reversedDepth),Tt=this.localClippingEnabled,lt=q.init(this.clippingPlanes,Tt),C=ce.get(v,g.length),C.init(),g.push(C),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const xe=P.xr.getDepthSensingMesh();xe!==null&&br(xe,w,-1/0,P.sortObjects)}br(v,w,0,P.sortObjects),C.finish(),H!==null&&H.updateLights(y.state.lightsArray),P.sortObjects===!0&&C.sort(De,st),Nt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Nt&&T.addToRenderList(C,v),this.info.autoReset===!0&&this.info.reset(),lt===!0&&q.beginShadows();const O=y.state.shadowsArray;if(ae.render(O,v,w),lt===!0&&q.endShadows(),(N&&F.hasRenderPass())===!1){const xe=C.opaque,le=C.transmissive;if(y.setupLights(),w.isArrayCamera){const ge=w.cameras;if(le.length>0)for(let Ee=0,Le=ge.length;Ee<Le;Ee++){const Be=ge[Ee];la(xe,le,v,Be)}Nt&&T.render(v);for(let Ee=0,Le=ge.length;Ee<Le;Ee++){const Be=ge[Ee];oa(C,v,Be,Be.viewport)}}else le.length>0&&la(xe,le,v,w),Nt&&T.render(v),oa(C,v,w)}W!==null&&G===0&&(Ie.updateMultisampleRenderTarget(W),Ie.updateRenderTargetMipmap(W)),N&&F.end(P),v.isScene===!0&&v.onAfterRender(P,v,w),se.resetDefaultState(),B=-1,V=null,M.pop(),M.length>0?(y=M[M.length-1],Ie.setTextureUnits(y.state.textureUnits),lt===!0&&q.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,g.pop(),g.length>0?C=g[g.length-1]:C=null,H!==null&&H.renderEnd()};function br(v,w,k,N){if(v.visible===!1)return;if(v.layers.test(w.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(w);else if(v.isLight)y.pushLight(v),v.castShadow&&y.pushShadow(v);else if(v.isSprite){const xe=w.isArrayCamera?gt:Fe;if(!v.frustumCulled||v.intersectsFrustum(xe)){N&&ft.setFromMatrixPosition(v.matrixWorld).applyMatrix4(tt);const le=te.update(v),ge=v.material;ge.visible&&C.push(v,le,ge,k,ft.z,null,w)}}else if(v.isMesh||v.isLine||v.isPoints){const xe=w.isArrayCamera?gt:Fe;if(!v.frustumCulled||v.intersectsFrustum(xe)){const le=te.update(v),ge=v.material;if(N&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ft.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ft.copy(le.boundingSphere.center)),ft.applyMatrix4(v.matrixWorld).applyMatrix4(tt)),Array.isArray(ge)){const Ee=le.groups;for(let Le=0,Be=Ee.length;Le<Be;Le++){const _e=Ee[Le],He=ge[_e.materialIndex];He&&He.visible&&C.push(v,le,He,k,ft.z,_e,w)}}else ge.visible&&C.push(v,le,ge,k,ft.z,null,w)}}}const ue=v.children;for(let xe=0,le=ue.length;xe<le;xe++)br(ue[xe],w,k,N)}function oa(v,w,k,N){const{opaque:O,transmissive:ue,transparent:xe}=v;y.setupLightsView(k),lt===!0&&q.setGlobalState(P.clippingPlanes,k),N&&de.viewport(ee.copy(N)),O.length>0&&Li(O,w,k),ue.length>0&&Li(ue,w,k),xe.length>0&&Li(xe,w,k),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function la(v,w,k,N){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[N.id]===void 0){const _e=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[N.id]=new $t(1,1,{generateMipmaps:!0,type:_e?nn:Bt,minFilter:bn,samples:Math.max(4,et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const ue=y.state.transmissionRenderTarget[N.id],xe=N.viewport||ee;ue.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);const le=P.getRenderTarget(),ge=P.getActiveCubeFace(),Ee=P.getActiveMipmapLevel();P.setRenderTarget(ue),P.getClearColor(j),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Nt&&T.render(k);const Le=P.toneMapping;P.toneMapping=dn;const Be=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),y.setupLightsView(N),lt===!0&&q.setGlobalState(P.clippingPlanes,N),Li(v,k,N),Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue),$e.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let He=0,at=w.length;He<at;He++){const Ke=w[He],{object:je,geometry:_t,material:Me,group:bt}=Ke;if(Me.side===Wt&&je.layers.test(N.layers)){const We=Me.side;Me.side=Ct,Me.needsUpdate=!0,ca(je,k,N,_t,Me,bt),Me.side=We,Me.needsUpdate=!0,_e=!0}}_e===!0&&(Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue))}P.setRenderTarget(le,ge,Ee),P.setClearColor(j,pe),Be!==void 0&&(N.viewport=Be),P.toneMapping=Le}function Li(v,w,k){const N=w.isScene===!0?w.overrideMaterial:null;for(let O=0,ue=v.length;O<ue;O++){const xe=v[O],{object:le,geometry:ge,group:Ee}=xe;let Le=xe.material;Le.allowOverride===!0&&N!==null&&(Le=N),le.layers.test(k.layers)&&ca(le,w,k,ge,Le,Ee)}}function ca(v,w,k,N,O,ue){H!==null&&O.isNodeMaterial&&H.setObject(v,O),v.onBeforeRender(P,w,k,N,O,ue),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(P,w,k,N,v,ue),O.transparent===!0&&O.side===Wt&&O.forceSinglePass===!1?(O.side=Ct,O.needsUpdate=!0,P.renderBufferDirect(k,w,N,O,v,ue),O.side=On,O.needsUpdate=!0,P.renderBufferDirect(k,w,N,O,v,ue),O.side=Wt):P.renderBufferDirect(k,w,N,O,v,ue),v.onAfterRender(P,w,k,N,O,ue)}function ua(v){let w=0;for(const k of v)k.texture!==null&&w++;return w}function fi(v,w,k){w.isScene!==!0&&(w=Dt);const N=Te.get(v),O=y.state.lights,ue=y.state.shadowsArray,xe=O.state.version,le=$.getParameters(v,O.state,ue,w,k,y.state.lightProbeGridArray),ge=$.getProgramCacheKey(le);let Ee=N.programs;N.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,N.fog=w.fog;const Le=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;N.envMap=_.get(v.envMap||N.environment,Le),N.envMapRotation=N.environment!==null&&v.envMap===null?w.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",Je),Ee=new Map,N.programs=Ee,N.programVariants=new Map);let Be=Ee.get(ge);if(Be!==void 0){if(N.currentProgram===Be&&N.lightsStateVersion===xe)return fa(v,le),Be}else le.uniforms=$.getUniforms(v),H!==null&&v.isNodeMaterial&&H.build(v,k,le),v.onBeforeCompile(le,P),Be=$.acquireProgram(le,ge),Ee.set(ge,Be),N.uniforms=le.uniforms;const _e=N.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(_e.clippingPlanes=q.uniform),fa(v,le),N.needsLights=hl(v),N.lightsStateVersion=xe,N.needsLights&&(_e.ambientLightColor.value=O.state.ambient,_e.lightProbe.value=O.state.probe,_e.sunLights.value=O.state.sun,_e.sunLightShadows.value=O.state.sunShadow,_e.directionalLights.value=O.state.directional,_e.directionalLightShadows.value=O.state.directionalShadow,_e.spotLights.value=O.state.spot,_e.spotLightShadows.value=O.state.spotShadow,_e.rectAreaLights.value=O.state.rectArea,_e.ltc_1.value=O.state.rectAreaLTC1,_e.ltc_2.value=O.state.rectAreaLTC2,_e.pointLights.value=O.state.point,_e.pointLightShadows.value=O.state.pointShadow,_e.hemisphereLights.value=O.state.hemi,_e.sunShadowMatrix.value=O.state.sunShadowMatrix,_e.sunShadowCascade.value=O.state.sunShadowCascade,_e.directionalShadowMatrix.value=O.state.directionalShadowMatrix,_e.spotLightMatrix.value=O.state.spotLightMatrix,_e.spotLightMap.value=O.state.spotLightMap,_e.pointShadowMatrix.value=O.state.pointShadowMatrix),N.numLightProbeGrids=ua(y.state.lightProbeGridArray),N.currentProgram=Be,N.uniformsList=null,Be}function ul(v,w,k,N,O){const ue=Te.get(v),xe=ue.currentProgram.id+","+N+","+O;let le=ue.programVariants.get(xe);return le===void 0?(le=fi(v,w,k),ue.programVariants.set(xe,le)):(ue.currentProgram=le,ue.uniformsList=null,ue.outputColorSpace=N,ue.toneMapping=O),le}function da(v){if(v.uniformsList===null){const w=v.currentProgram.getUniforms();v.uniformsList=dr.seqWithValue(w.seq,v.uniforms)}return v.uniformsList}function fa(v,w){const k=Te.get(v);k.outputColorSpace=w.outputColorSpace,k.batching=w.batching,k.batchingColor=w.batchingColor,k.instancing=w.instancing,k.instancingColor=w.instancingColor,k.instancingMorph=w.instancingMorph,k.skinning=w.skinning,k.morphTargets=w.morphTargets,k.morphNormals=w.morphNormals,k.morphColors=w.morphColors,k.morphTargetsCount=w.morphTargetsCount,k.numClippingPlanes=w.numClippingPlanes,k.numIntersection=w.numClipIntersection,k.vertexAlphas=w.vertexAlphas,k.vertexTangents=w.vertexTangents,k.toneMapping=w.toneMapping}function dl(v,w,k,N,O){w.isScene!==!0&&(w=Dt),Ie.resetTextureUnits();const ue=w.fog,xe=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?w.environment:null,le=W===null?P.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ge.workingColorSpace,ge=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Ee=_.get(N.envMap||xe,ge),Le=N.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),_e=!!k.morphAttributes.position,He=!!k.morphAttributes.normal,at=!!k.morphAttributes.color;let Ke=dn;N.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ke=P.toneMapping);const je=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_t=je!==void 0?je.length:0,Me=Te.get(N),bt=y.state.lights;if(lt===!0&&(Tt===!0||v!==V)){const nt=v===V&&N.id===B;q.setState(N,v,nt)}let We=!1,wn=!1;N.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==bt.state.version||O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null||Me.envMap!==Ee||N.fog===!0&&Me.fog!==ue||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==q.numPlanes||Me.numIntersection!==q.numIntersection)||Me.vertexAlphas!==Le||Me.vertexTangents!==Be||Me.morphTargets!==_e||Me.morphNormals!==He||Me.morphColors!==at||Me.morphTargetsCount!==_t||Me.numLightProbeGrids!==ua(y.state.lightProbeGridArray)?We=!0:(Me.outputColorSpace!==le||Me.toneMapping!==Ke)&&(wn=!0):(We=!0,Me.__version=N.version);let Mt=Me.currentProgram;(We===!0||wn===!0)&&(Mt=wn===!0?ul(N,w,O,le,Ke):fi(N,w,O),H&&N.isNodeMaterial&&H.onUpdateProgram(N,Mt,Me));let Di=!1,gn=!1,In=!1;const ze=Mt.getUniforms(),xt=Me.uniforms;if(de.useProgram(Mt.program)&&(Di=!0,gn=!0,In=!0),N.id!==B&&(B=N.id,gn=!0),Di||V!==v){de.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ze.setValue(L,"projectionMatrix",v.projectionMatrix),ze.setValue(L,"viewMatrix",v.matrixWorldInverse);const pt=ze.map.cameraPosition;pt!==void 0&&pt.setValue(L,Yt.setFromMatrixPosition(v.matrixWorld)),et.logarithmicDepthBuffer&&ze.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ze.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),V!==v&&(V=v,gn=!0,In=!0)}if(Me.needsLights&&(bt.state.sunShadowMap.length>0&&ze.setValue(L,"sunShadowMap",bt.state.sunShadowMap,Ie),bt.state.directionalShadowMap.length>0&&ze.setValue(L,"directionalShadowMap",bt.state.directionalShadowMap,Ie),bt.state.spotShadowMap.length>0&&ze.setValue(L,"spotShadowMap",bt.state.spotShadowMap,Ie),bt.state.pointShadowMap.length>0&&ze.setValue(L,"pointShadowMap",bt.state.pointShadowMap,Ie)),O.isSkinnedMesh){ze.setOptional(L,O,"bindMatrix"),ze.setOptional(L,O,"bindMatrixInverse");const nt=O.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),ze.setValue(L,"boneTexture",nt.boneTexture,Ie))}O.isBatchedMesh&&(ze.setOptional(L,O,"batchingTexture"),ze.setValue(L,"batchingTexture",O._matricesTexture,Ie),ze.setOptional(L,O,"batchingIdTexture"),ze.setValue(L,"batchingIdTexture",O._indirectTexture,Ie),ze.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ze.setValue(L,"batchingColorTexture",O._colorsTexture,Ie));const Ht=k.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&K.update(O,k,Mt),(gn||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,ze.setValue(L,"receiveShadow",O.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&w.environment!==null&&(xt.envMapIntensity.value=w.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Xp()),gn){if(ze.setValue(L,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&fl(xt,In),ue&&N.fog===!0&&re.refreshFogUniforms(xt,ue),re.refreshMaterialUniforms(xt,N,me,ye,y.state.transmissionRenderTarget[v.id]),Me.needsLights&&Me.numLightProbeGrids>0){const nt=b;let pt=0;for(const rn of y.state.lightProbeGridArray)rn.texture!==null&&(nt.textures[pt]=rn.texture,nt.min[pt]=rn.boundingBox.min,nt.max[pt]=rn.boundingBox.max,nt.resolution[pt]=rn.resolution,pt++);for(const rn in nt)nt[rn].length=pt;xt.probesSH.value=nt.textures,xt.probesMin.value=nt.min,xt.probesMax.value=nt.max,xt.probesResolution.value=nt.resolution}dr.upload(L,da(Me),xt,Ie)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(dr.upload(L,da(Me),xt,Ie),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ze.setValue(L,"center",O.center),ze.setValue(L,"modelViewMatrix",O.modelViewMatrix),ze.setValue(L,"normalMatrix",O.normalMatrix),ze.setValue(L,"modelMatrix",O.matrixWorld),N.uniformsGroups!==void 0){const nt=N.uniformsGroups;for(let pt=0,rn=nt.length;pt<rn;pt++){const pa=nt[pt];Ae.update(pa,Mt),Ae.bind(pa,Mt)}}return Mt}function fl(v,w){v.ambientLightColor.needsUpdate=w,v.lightProbe.needsUpdate=w,v.sunLights.needsUpdate=w,v.sunLightShadows.needsUpdate=w,v.directionalLights.needsUpdate=w,v.directionalLightShadows.needsUpdate=w,v.pointLights.needsUpdate=w,v.pointLightShadows.needsUpdate=w,v.spotLights.needsUpdate=w,v.spotLightShadows.needsUpdate=w,v.rectAreaLights.needsUpdate=w,v.hemisphereLights.needsUpdate=w}function hl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(v,w,k){const N=Te.get(v);N.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Te.get(v.texture).__webglTexture=w,Te.get(v.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:k,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,w){const k=Te.get(v);k.__webglFramebuffer=w,k.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(v,w=0,k=0){W=v,Z=w,G=k;let N=null,O=!1,ue=!1;if(v){const le=Te.get(v);if(le.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(L.FRAMEBUFFER,le.__webglFramebuffer),ee.copy(v.viewport),ve.copy(v.scissor),we=v.scissorTest,de.viewport(ee),de.scissor(ve),de.setScissorTest(we),B=-1;return}else if(le.__webglFramebuffer===void 0)Ie.setupRenderTarget(v);else if(le.__hasExternalTextures)Ie.rebindTextures(v,Te.get(v.texture).__webglTexture,Te.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Le=v.depthTexture;if(le.__boundDepthTexture!==Le){if(Le!==null&&Te.has(Le)&&(v.width!==Le.image.width||v.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(v)}}const ge=v.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ue=!0);const Ee=Te.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ee[w])?N=Ee[w][k]:N=Ee[w],O=!0):v.samples>0&&Ie.useMultisampledRTT(v)===!1?N=Te.get(v).__webglMultisampledFramebuffer:Array.isArray(Ee)?N=Ee[k]:N=Ee,ee.copy(v.viewport),ve.copy(v.scissor),we=v.scissorTest}else ee.copy(Re).multiplyScalar(me).floor(),ve.copy(Ye).multiplyScalar(me).floor(),we=Ze;if(k!==0&&(N=Y),de.bindFramebuffer(L.FRAMEBUFFER,N)&&de.drawBuffers(v,N),de.viewport(ee),de.scissor(ve),de.setScissorTest(we),O){const le=Te.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+w,le.__webglTexture,k)}else if(ue){const le=w;for(let ge=0;ge<v.textures.length;ge++){const Ee=Te.get(v.textures[ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ge,Ee.__webglTexture,k,le)}}else if(v!==null&&k!==0){const le=Te.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,le.__webglTexture,k)}B=-1};function ha(v){const w=Te.get(v);return(w.__readFormat!==v.format||w.__readType!==v.type)&&(w.__readFormat=v.format,w.__readType=v.type,w.__formatReadable=et.textureFormatReadable(v.format),w.__typeReadable=et.textureTypeReadable(v.type)),w}this.readRenderTargetPixels=function(v,w,k,N,O,ue,xe,le=0){if(!(v&&v.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge){de.bindFramebuffer(L.FRAMEBUFFER,ge);try{const Ee=v.textures[le],Le=Ee.format,Be=Ee.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);const _e=ha(Ee);if(_e.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_e.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=v.width-N&&k>=0&&k<=v.height-O&&L.readPixels(w,k,N,O,ie.convert(Le),ie.convert(Be),ue)}finally{const Ee=W!==null?Te.get(W).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,w,k,N,O,ue,xe,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge)if(w>=0&&w<=v.width-N&&k>=0&&k<=v.height-O){de.bindFramebuffer(L.FRAMEBUFFER,ge);const Ee=v.textures[le],Le=Ee.format,Be=Ee.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);const _e=ha(Ee);if(_e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(w,k,N,O,ie.convert(Le),ie.convert(Be),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const at=W!==null?Te.get(W).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,at);const Ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zl(L,Ke,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(He),L.deleteSync(Ke),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,w=null,k=0){const N=Math.pow(2,-k),O=Math.floor(v.image.width*N),ue=Math.floor(v.image.height*N),xe=w!==null?w.x:0,le=w!==null?w.y:0;Ie.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,xe,le,O,ue),de.unbindTexture()},this.copyTextureToTexture=function(v,w,k=null,N=null,O=0,ue=0){let xe,le,ge,Ee,Le,Be,_e,He,at;const Ke=v.isCompressedTexture?v.mipmaps[ue]:v.image;if(k!==null)xe=k.max.x-k.min.x,le=k.max.y-k.min.y,ge=k.isBox3?k.max.z-k.min.z:1,Ee=k.min.x,Le=k.min.y,Be=k.isBox3?k.min.z:0;else{const ze=Math.pow(2,-O);xe=Math.floor(Ke.width*ze),le=Math.floor(Ke.height*ze),v.isDataArrayTexture?ge=Ke.depth:v.isData3DTexture?ge=Math.floor(Ke.depth*ze):ge=1,Ee=0,Le=0,Be=0}N!==null?(_e=N.x,He=N.y,at=N.z):(_e=0,He=0,at=0);const je=ie.convert(w.format),_t=ie.convert(w.type);let Me;w.isData3DTexture?(Ie.setTexture3D(w,0),Me=L.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(Ie.setTexture2DArray(w,0),Me=L.TEXTURE_2D_ARRAY):(Ie.setTexture2D(w,0),Me=L.TEXTURE_2D),de.activeTexture(L.TEXTURE0),de.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,w.flipY),de.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),de.pixelStorei(L.UNPACK_ALIGNMENT,w.unpackAlignment);const bt=de.getParameter(L.UNPACK_ROW_LENGTH),We=de.getParameter(L.UNPACK_IMAGE_HEIGHT),wn=de.getParameter(L.UNPACK_SKIP_PIXELS),Mt=de.getParameter(L.UNPACK_SKIP_ROWS),Di=de.getParameter(L.UNPACK_SKIP_IMAGES);de.pixelStorei(L.UNPACK_ROW_LENGTH,Ke.width),de.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke.height),de.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),de.pixelStorei(L.UNPACK_SKIP_ROWS,Le),de.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const gn=v.isDataArrayTexture||v.isData3DTexture,In=w.isDataArrayTexture||w.isData3DTexture;if(v.isDepthTexture){const ze=Te.get(v),xt=Te.get(w),Ht=Te.get(ze.__renderTarget),nt=Te.get(xt.__renderTarget);de.bindFramebuffer(L.READ_FRAMEBUFFER,Ht.__webglFramebuffer),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let pt=0;pt<ge;pt++)gn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(v).__webglTexture,O,Be+pt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(w).__webglTexture,ue,at+pt)),L.blitFramebuffer(Ee,Le,Ee+xe,Le+le,_e,He,_e+xe,He+le,L.DEPTH_BUFFER_BIT,L.NEAREST);de.bindFramebuffer(L.READ_FRAMEBUFFER,null),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Te.has(v)){const ze=Te.get(v),xt=Te.get(w);de.bindFramebuffer(L.READ_FRAMEBUFFER,I),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,X);for(let Ht=0;Ht<ge;Ht++)gn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,O,Be+Ht):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ze.__webglTexture,O),In?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.__webglTexture,ue,at+Ht):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xt.__webglTexture,ue),O!==0?L.blitFramebuffer(Ee,Le,Ee+xe,Le+le,_e,He,_e+xe,He+le,L.COLOR_BUFFER_BIT,L.NEAREST):In?L.copyTexSubImage3D(Me,ue,_e,He,at+Ht,Ee,Le,xe,le):L.copyTexSubImage2D(Me,ue,_e,He,Ee,Le,xe,le);de.bindFramebuffer(L.READ_FRAMEBUFFER,null),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else In?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Me,ue,_e,He,at,xe,le,ge,je,_t,Ke.data):w.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,ue,_e,He,at,xe,le,ge,je,Ke.data):L.texSubImage3D(Me,ue,_e,He,at,xe,le,ge,je,_t,Ke):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,_e,He,xe,le,je,_t,Ke.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,_e,He,Ke.width,Ke.height,je,Ke.data):L.texSubImage2D(L.TEXTURE_2D,ue,_e,He,xe,le,je,_t,Ke);de.pixelStorei(L.UNPACK_ROW_LENGTH,bt),de.pixelStorei(L.UNPACK_IMAGE_HEIGHT,We),de.pixelStorei(L.UNPACK_SKIP_PIXELS,wn),de.pixelStorei(L.UNPACK_SKIP_ROWS,Mt),de.pixelStorei(L.UNPACK_SKIP_IMAGES,Di),ue===0&&w.generateMipmaps===!0&&w.mipmapsAutoUpdate===!0&&L.generateMipmap(Me),de.unbindTexture()},this.initRenderTarget=function(v){Te.get(v).__webglFramebuffer===void 0&&Ie.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ie.setTextureCube(v,0):v.isData3DTexture?Ie.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ie.setTexture2DArray(v,0):Ie.setTexture2D(v,0),de.unbindTexture()},this.resetState=function(){Z=0,G=0,W=null,de.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const Yp="data:image/jpeg;base64,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";function qp(){const i=ma.useRef(null);return ma.useEffect(()=>{const e=i.current;if(!e)return;const t=e.parentElement;if(!t)return;let n;try{n=new Qp({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}const r=window.innerWidth<768,s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;n.setPixelRatio(Math.min(window.devicePixelRatio||1,r?1.5:2));const a=new Rc;a.fog=new Zs(329735,.045);const o=new Vt(58,t.clientWidth/Math.max(t.clientHeight,1),.1,100);o.position.set(0,0,9);const c=new ni;a.add(c);const l=new ni,u=r?{x:0,y:.55,z:-.5,s:.78}:{x:2.1,y:.1,z:0,s:1};l.position.set(u.x,u.y,u.z),l.scale.setScalar(u.s),c.add(l);const p=document.createElement("canvas");p.width=256,p.height=256;const d=p.getContext("2d"),m=d.createRadialGradient(128,128,8,128,128,128);m.addColorStop(0,"rgba(0, 255, 136, 0.55)"),m.addColorStop(.5,"rgba(0, 255, 136, 0.14)"),m.addColorStop(1,"rgba(0, 255, 136, 0)"),d.fillStyle=m,d.fillRect(0,0,256,256);const S=new Ga(p),A=new en(new Un(6.4,6.4),new ur({map:S,transparent:!0,opacity:.5,blending:ti,depthWrite:!1}));A.position.z=-.7,l.add(A);const h=new Jc().load(Yp);h.colorSpace=Lt,h.anisotropy=4;const f=new en(new Un(3.7,3.7),new ur({map:h,transparent:!0,opacity:.96,blending:ti,depthWrite:!1,side:Wt}));l.add(f);const E=r?700:1400,R=new Float32Array(E*3);for(let W=0;W<E;W++)if(Math.random()<.7){const B=3.2+Math.random()*5.5,V=Math.random()*Math.PI*2,ee=Math.acos(2*Math.random()-1);R[W*3]=B*Math.sin(ee)*Math.cos(V),R[W*3+1]=B*Math.sin(ee)*Math.sin(V)*.7,R[W*3+2]=B*Math.cos(ee)}else{const B=2+Math.random()*6,V=Math.random()*Math.PI*2;R[W*3]=Math.cos(V)*B,R[W*3+1]=(Math.random()-.5)*.9,R[W*3+2]=Math.sin(V)*B}const b=new pn;b.setAttribute("position",new Tn(R,3));const C=new Fc(b,new Qo({color:65416,size:.04,transparent:!0,opacity:.55,blending:ti,depthWrite:!1,sizeAttenuation:!0}));c.add(C);const y=W=>{const B=document.createElement("canvas");B.width=1024,B.height=256;const V=B.getContext("2d");V.clearRect(0,0,1024,256),V.font='700 150px "JetBrains Mono", monospace',V.textAlign="center",V.textBaseline="middle",V.shadowColor="#00ff88",V.shadowBlur=34,V.fillStyle="rgba(0, 255, 136, 0.95)",V.fillText(W,512,128),V.font='500 44px "JetBrains Mono", monospace',V.shadowBlur=14,V.fillStyle="rgba(125, 255, 196, 0.8)",V.fillText("· · · 01000111 01001000 01001111 01010011 · · ·",512,224);const ee=new Ga(B);return ee.anisotropy=4,ee},g=[];for(const W of[{text:"GHOST",x:0,y:3.3,z:-2.5,s:.9},{text:"0777",x:0,y:-3.3,z:-3,s:.5}]){const B=new en(new Un(4.4*W.s,1.1*W.s),new ur({map:y(W.text),transparent:!0,opacity:.7,blending:ti,depthWrite:!1,side:Wt}));B.position.set(W.x,W.y,W.z),c.add(B),g.push(B)}const M=()=>{const W=t.clientWidth,B=t.clientHeight;n.setSize(W,B,!1),o.aspect=W/Math.max(B,1),o.updateProjectionMatrix()};M();const F=new ResizeObserver(M);F.observe(t);const P={x:0,y:0,tx:0,ty:0},D=W=>{P.tx=W.clientX/window.innerWidth*2-1,P.ty=W.clientY/window.innerHeight*2-1};window.addEventListener("pointermove",D,{passive:!0});let H=!0;const Y=new IntersectionObserver(([W])=>H=W.isIntersecting,{threshold:0});Y.observe(e);const I=new jc;let X=0;const Z=9,G=()=>{if(X=requestAnimationFrame(G),!H||document.hidden)return;const W=I.getElapsedTime(),B=t.getBoundingClientRect(),V=hc.clamp(-B.top/Math.max(B.height*.9,1),0,1);P.x+=(P.tx-P.x)*.04,P.y+=(P.ty-P.y)*.04,o.position.z=Z-V*3.6,o.position.x=P.x*.55,o.position.y=-P.y*.35+V*.4,o.lookAt(0,0,0),c.rotation.y=V*1.9+W*.02,c.rotation.x=V*.35;const ee=s?0:1;l.rotation.y=Math.sin(W*.25)*.06+V*.7+P.x*.3,l.rotation.x=P.y*.08+Math.sin(W*.4)*.02,l.position.y=u.y+Math.sin(W*.8)*.06,l.scale.setScalar(u.s*(1+Math.sin(W*.8)*.012)),A.material.opacity=.42+Math.sin(W*1.3)*.1,C.rotation.y=W*.018*ee,C.rotation.x=Math.sin(W*.05)*.08,g.forEach((ve,we)=>{ve.position.y+=Math.sin(W*.9+we*2.1)*.0012,ve.lookAt(o.position)}),n.render(a,o)};return X=requestAnimationFrame(G),()=>{cancelAnimationFrame(X),F.disconnect(),Y.disconnect(),window.removeEventListener("pointermove",D),h.dispose(),S.dispose(),a.traverse(W=>{W.geometry&&W.geometry.dispose(),W.material&&(Array.isArray(W.material)?W.material:[W.material]).forEach(V=>{V.map&&V.map!==h&&V.map!==S&&V.map.dispose(),V.dispose()})}),n.dispose()}},[]),pl.jsx("canvas",{ref:i,className:"hero-canvas","aria-hidden":"true"})}export{qp as default};
